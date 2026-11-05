"use client";

import { useCallback, useSyncExternalStore } from "react";
import { SEED_PROJECTS, type Project } from "./data";

const KEY = "teenspark:v1";

export interface AppState {
  name: string;
  projects: Project[];
}

const DEFAULT_STATE: AppState = { name: "", projects: SEED_PROJECTS };

let cache: AppState | null = null;
const listeners = new Set<() => void>();

function read(): AppState {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    cache = raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : DEFAULT_STATE;
  } catch {
    cache = DEFAULT_STATE;
  }
  return cache!;
}

function write(next: AppState) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable – keep in memory */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

/** null on the server / first paint, the persisted state after hydration */
export function useAppState(): AppState | null {
  return useSyncExternalStore(subscribe, read, () => null);
}

export function useActions() {
  const update = useCallback((fn: (s: AppState) => AppState) => write(fn(read())), []);

  const setName = useCallback((name: string) => update((s) => ({ ...s, name })), [update]);

  const saveProject = useCallback(
    (p: Project) =>
      update((s) => {
        const exists = s.projects.some((x) => x.id === p.id);
        const next = { ...p, updatedAt: Date.now() };
        return {
          ...s,
          projects: exists ? s.projects.map((x) => (x.id === p.id ? next : x)) : [next, ...s.projects],
        };
      }),
    [update],
  );

  const deleteProject = useCallback(
    (id: string) => update((s) => ({ ...s, projects: s.projects.filter((p) => p.id !== id) })),
    [update],
  );

  const reset = useCallback(() => write(DEFAULT_STATE), []);

  return { setName, saveProject, deleteProject, reset };
}

export function newId() {
  return "prj-" + Math.random().toString(36).slice(2, 9);
}
