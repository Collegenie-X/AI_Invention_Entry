/** Hero planet: CSS-only gradient sphere with a tilted ring and orbiting dots */
export function HeroPlanet() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden>
      {/* orbits */}
      <div className="absolute inset-[4%] rounded-full border border-white/[0.06] animate-spin-slow">
        <span className="absolute left-[12%] top-[10%] size-2.5 rounded-full bg-violet-300 shadow-[0_0_14px_#c4b5fd]" />
      </div>
      <div className="absolute inset-[16%] -rotate-12 rounded-full border border-white/[0.05]" />
      {/* stars */}
      {[
        [8, 30, 0], [92, 22, 0.8], [86, 60, 1.6], [14, 78, 2.2], [60, 6, 1.1], [70, 92, 0.4],
      ].map(([x, y, d], i) => (
        <span
          key={i}
          className="absolute size-1 rounded-full bg-white animate-twinkle"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d}s` }}
        />
      ))}
      {/* planet */}
      <div className="absolute inset-[24%] animate-float">
        <div className="absolute -inset-[30%] rounded-full bg-spark/20 blur-3xl" />
        <div
          className="relative size-full overflow-hidden rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #ffd2b8 0%, #f59a86 22%, #c56a8f 48%, #6b3f8f 72%, #2b1d4a 100%)",
            boxShadow: "inset -24px -30px 60px rgb(20 10 40 / 0.65), 0 0 80px rgb(255 120 90 / 0.25)",
          }}
        >
          <span className="absolute left-[18%] top-[16%] size-[18%] rounded-full bg-[#ffc6a8]/80 blur-[1px]" />
          <span className="absolute left-[52%] top-[40%] size-[16%] rounded-full bg-[#5c2f73]/70" />
          <span className="absolute left-[24%] top-[58%] size-[26%] rounded-full bg-[#4a2a6e]/70" />
          <span className="absolute inset-x-0 top-[30%] h-[6%] bg-white/10 blur-sm" />
          <span className="absolute inset-x-0 top-[64%] h-[5%] bg-white/5 blur-sm" />
        </div>
        {/* ring */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[26%] w-[150%] -translate-x-1/2 -translate-y-1/2 -rotate-[14deg] rounded-[50%]"
          style={{
            border: "6px solid transparent",
            borderTopColor: "rgb(255 200 170 / 0.15)",
            borderBottomColor: "rgb(255 190 160 / 0.85)",
            boxShadow: "0 6px 20px rgb(255 140 100 / 0.35)",
          }}
        />
      </div>
    </div>
  );
}

/** Small "idea planet" that gets clearer as the project progresses */
export function IdeaPlanet({ progress }: { progress: number }) {
  const clarity = 0.35 + (progress / 100) * 0.65;
  const blur = Math.max(0, 6 - progress / 16);
  return (
    <div className="relative mx-auto size-28" aria-hidden>
      <div className="absolute -inset-6 rounded-full bg-planet/20 blur-2xl" style={{ opacity: clarity }} />
      <div
        className="relative size-full rounded-full transition-all duration-700"
        style={{
          opacity: clarity,
          filter: `blur(${blur}px)`,
          background: "radial-gradient(circle at 30% 28%, #e9f2ff 0%, #9cc3ff 25%, #5a7bd6 55%, #2a2460 85%)",
          boxShadow: "inset -14px -18px 34px rgb(10 10 40 / 0.6)",
        }}
      />
    </div>
  );
}

export function PlanetDot({ seed }: { seed: string }) {
  const hues = [
    "radial-gradient(circle at 30% 30%, #ffd2b8, #e0708e 55%, #5a2f7a)",
    "radial-gradient(circle at 30% 30%, #e9f2ff, #7fb0ff 55%, #2a2f7a)",
    "radial-gradient(circle at 30% 30%, #e7ffe0, #6fd6a0 55%, #1f5a52)",
    "radial-gradient(circle at 30% 30%, #fff3c4, #f6b44f 55%, #7a3d1f)",
  ];
  const h = [...seed].reduce((a, c) => a + c.charCodeAt(0), 0) % hues.length;
  return <span className="inline-block size-3.5 shrink-0 rounded-full" style={{ background: hues[h] }} aria-hidden />;
}
