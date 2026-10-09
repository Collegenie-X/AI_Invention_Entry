# 🎬 Gamma 프롬프트 — 3일차 0차시 · v0 + Vercel "가짜로 돌아가는" AI 앱 3종 아키텍처 분석

> **원본** — `3일차_0차시-(분석)-v0_Vercel_가짜동작앱_3종_분석.md`
> **대상** — 강사 연수 · 심화반 · 학부모/교사 설명회 (기술 용어를 그대로 쓰는 버전)
> **분량** — 42장 (50장 이내) · 16:9

---

## 📌 사용법 (이 박스는 Gamma에 붙여넣지 않습니다)

| 순서 | 할 일 |
|:---:|---|
| 1 | Gamma → **새로 만들기** → **텍스트 붙여넣기 (Paste in text)** |
| 2 | 아래 **`▼ 여기부터 붙여넣기`** 부터 파일 끝까지 복사해서 붙여넣기 |
| 3 | 카드 나누기: **`---` 기준 (Card-by-card)** · 텍스트: **보존 (Preserve)** · 이미지: **AI 이미지** · 언어: **한국어** · 크기: **16:9** |
| 4 | **추가 지시 (Additional instructions)** 칸에 아래 「전역 디자인 지시」를 붙여넣기 |
| 5 | 생성 후 카드마다 `🎨 IMAGE PROMPT` 를 **이미지 → AI 생성 → 프롬프트**에 넣고, `🗣️ 노트` 는 **발표자 노트**로 옮긴 뒤 본문에서 지우기 |

### 전역 디자인 지시 (Additional instructions에 붙여넣기)

```text
- 이 덱은 소프트웨어 아키텍처를 설명하는 기술 강의 자료입니다. 단계도·레이어도·흐름도를 최우선으로 시각화하세요.
- "단계도:" 로 시작하는 목록은 화살표가 있는 가로 프로세스(Smart Layout: 프로세스/타임라인)로 만드세요.
- "레이어도:" 로 시작하는 목록은 위에서 아래로 쌓인 스택(Smart Layout: 피라미드/스택)으로 만드세요.
- "비교:" 로 시작하는 표는 2~3열 비교 카드로 만드세요.
- "순환:" 으로 시작하는 목록은 원형 사이클 다이어그램으로 만드세요.
- 코드 블록은 고정폭 글꼴, 어두운 배경 코드 카드로 보여 주세요.
- 각 카드의 "🎨 IMAGE PROMPT" 문단은 화면에 글로 표시하지 말고 그 카드의 AI 이미지 생성 프롬프트로만 사용하세요.
- 각 카드의 "🗣️ 노트" 문단은 발표자 노트로 옮기고 화면에는 표시하지 마세요.
- 색: 네이비 #1B2A4A (기본), 틸 #12A4A0 (PHASE 1 · 프론트), 코랄 #FF6B5B (경고 · 강조), 머스터드 #F2B705 (핵심 포인트), 배경 오프화이트 #F8F7F3
- 글꼴: Pretendard (제목 Bold, 본문 Regular), 코드: JetBrains Mono
- 한 카드에 글은 최대 6줄. 나머지는 도식으로.
```

### 이미지 공통 스타일 (모든 프롬프트 끝에 이미 포함됨)

```text
clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9
```

---

▼ 여기부터 붙여넣기

---

# P01 · v0 + Vercel로 "가짜로 돌아가는" AI 앱 만들기
### 배포된 예시 앱 3개를 아키텍처 관점에서 뜯어보기

서버 0대 · 로그인 0개 · 실제 AI 호출 0번
그런데 **진짜 AI 앱처럼 돌아갑니다.**

`표지 · 큰 제목 + 오른쪽 일러스트`

🎨 IMAGE PROMPT — An isometric cutaway of a sleek web application floating above a desk: on the top level a glowing smartphone and laptop screen showing chat bubbles and cards, below them a thin translucent layer of neatly stacked JSON document sheets, and a small wooden drawer labeled only by an icon of a browser, with an empty server rack faded out and crossed by a soft coral outline to show "no server". Small sparkles suggest the app looks alive like AI. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 볼 세 앱은 모두 실제 AI를 부르지 않습니다. 그런데 써 보면 AI처럼 느껴집니다. 그 비밀은 아키텍처, 즉 "어디에 무엇을 두었는가"에 있습니다.

---

# P02 · 분석 대상 — 이미 배포된 앱 3개

비교:
| | 🔥 틴스파크AI | 🎭 TeenDramaro · 마음무대 | 🅠 DeepQ · 딥큐 |
|---|---|---|---|
| 한 줄 | 질문하는 법을 코칭하는 AI 기획 코치 | 타로 카드 × 사이코드라마 × AI 디렉터 | 객관식 사진 → 서술형 문제 + 루브릭 채점 |
| 주소 | askback-omega.vercel.app | teen-dramaro.vercel.app | deepq-omega.vercel.app |
| 핵심 경험 | 묻고 답하며 쌓인다 | 장면이 막(Act)처럼 넘어간다 | 정해진 단계를 지나 결과 한 장 |

참조 아키텍처: AI Maker Lab 「바이브 코딩」 (05 실무 워크플로우 · 07 서버 없이 테스트 · 08 Django 백엔드)

`3열 카드 · 각 카드 상단에 아이콘`

🎨 IMAGE PROMPT — Three floating isometric smartphone screens side by side on a blueprint grid, each with a distinct glowing accent: the left one shows a flame icon and a stack of speech bubbles in a loop, the middle one shows a small theater stage with red curtains and a single tarot card, the right one shows a document turning into a checklist with a progress bar of six steps. Thin teal connector lines link all three to a shared foundation block underneath. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 라우트·기능·데이터 방식은 공개 페이지에서 확인한 사실입니다. 폴더 구조·localStorage 키·JSON 스키마는 그 기능을 재현하기 위한 설계안(추정)이라는 점을 먼저 밝혀 둡니다.

---

# P03 · 한 장 요약

| 질문 | 답 |
|---|---|
| 공통 기술 | Next.js + Vercel · **서버 0 · 로그인 0 · AI 호출 0** |
| AI처럼 보이는 원리 | **JSON 시나리오 + 규칙 함수 + 로딩 딜레이** |
| 사용자 데이터 | 브라우저 **localStorage** (이 기기에만, 약 5MB) |
| 핵심 설계 원칙 | 화면은 **`repo.ts`(데이터 출입구)** 와 **`engine.ts`(AI 출입구)** 만 부른다 |
| 수업 범위 | PHASE 1 · 프론트 퍼스트 |
| 다음 단계 | PHASE 2 · JSON → Django · 규칙 → Claude API |

`표 1개 + 오른쪽 "두 개의 문" 강조 박스`

🎨 IMAGE PROMPT — A minimal isometric diagram of a single web page panel standing upright, with exactly two glowing doorways at its base: one teal door leading down to a shelf of neatly stacked data sheets, and one mustard door leading down to a small gear-and-lightbulb engine. Everything else around the page is clean and empty to emphasize the two doors as the only entry points. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 하나만 기억한다면 "문 두 개"입니다. 데이터의 문(repo)과 AI의 문(engine). 화면은 이 두 문만 두드립니다.

---

# P04 · "가짜로 돌아간다"는 무슨 뜻인가

단계도: 사용자 입력 → 🔎 규칙 함수(키워드 · 버튼 선택) → 📄 JSON 시나리오에서 답 고르기 → ⏳ "생각 중…" 1.2초 → 💬 답 카드

- 답은 **미리 써 둔 것**이다 (생성이 아니라 **선택**)
- 입력의 경우의 수를 **칩·버튼으로 줄이면** 미리 써 둔 답으로 충분하다
- 사용자가 느끼는 "AI다움"의 절반은 **연출(딜레이·되묻기·되돌려주기)** 이다

`가로 5단 프로세스 + 아래 3줄 요점`

🎨 IMAGE PROMPT — A horizontal isometric conveyor belt process: on the left a hand tapping a chip-shaped button, then a small sorting machine with keyword funnels, then a filing cabinet with pre-written answer cards being picked by a robotic arm, then a small hourglass glowing mustard, and at the right end a chat bubble card arriving on a phone screen. The robotic arm is clearly selecting, not writing. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 핵심 단어는 "생성"이 아니라 "선택"입니다. 엔진은 새 문장을 만들지 않고, 준비된 문장 중 하나를 골라 변수만 채웁니다.

---

# P05 · 큰 그림 — 2단계 파이프라인

단계도 (PHASE 1 · 프론트 퍼스트 · 우리 수업 범위):
① AI 스튜디오 (v0 · AI Studio) → ② Next.js 정리 (Cursor · Claude Code) → ③ 가짜 데이터 (JSON · localStorage) → ④ Vercel 프리뷰 (URL 공유 · 피드백) → ↺ ①로 하루 N회

🧊 **Freeze** — 화면 · 흐름 확정 → "다듬어진 JSON 구조 = 모델 설계도"

단계도 (PHASE 2 · 백엔드 · 심화):
⑤ JSON → models.py → ⑥ Django Admin → ⑦ DRF API (DATA_SOURCE=api) → ⑧ 운영 배포 (Vercel + Railway)

`위아래 2줄 파이프라인 · 가운데 Freeze 다이아몬드`

🎨 IMAGE PROMPT — Two parallel isometric pipelines stacked vertically on a blueprint grid. The upper pipeline is a teal circular loop of four stations: a design studio easel with sparkles, a code workbench with tidy folders, a shelf of paper data sheets with a small drawer, and a preview monitor broadcasting a link to phones; a curved arrow loops back to the start. In the middle, a crystal ice diamond freezes the loop's output into a blueprint scroll. The lower navy pipeline is linear: the blueprint becomes database cylinders, an admin control panel, an API gateway, and a cloud deployment tower. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 위쪽은 빠르게 도는 루프, 아래쪽은 한 번 쭉 가는 직선입니다. 루프가 충분히 돌아 화면이 확정되면(Freeze) 그때 비로소 백엔드를 짓습니다.

---

# P06 · PHASE 1 루프 — 바이브 코딩의 4박자

순환:
1. 🎨 **말로 만든다** — v0에 프롬프트, 화면 생성
2. 🧹 **정리한다** — Next.js 폴더 구조, 출입구 파일 분리
3. 📄 **가짜로 채운다** — JSON 시드 + localStorage
4. 🔗 **보여준다** — Vercel 프리뷰 URL → 친구·선생님 피드백 → 다시 1번

> 하루에 이 원을 **여러 번** 돈다. 한 바퀴가 짧을수록 좋은 앱이 된다.

`원형 사이클 4칸 · 가운데 "하루 N회"`

🎨 IMAGE PROMPT — A circular isometric racetrack loop with four pit stops evenly spaced: a glowing easel where a speech bubble turns into a UI layout, a tidy toolbox organizing folders into labeled drawers, a pantry shelf filled with document sheets and a small wooden drawer, and a broadcast tower sending a link signal to three smartphones held by small hands. A small teal car circles the track leaving a motion trail, suggesting many fast laps. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 바이브 코딩은 "한 번에 완성"이 아니라 "짧은 원을 여러 번"입니다. 이 원을 돌리는 사람이 지휘자입니다.

---

# P07 · Freeze — 언제 백엔드로 넘어가는가

단계도: 프리뷰 공유 → 피드백 반영 → 같은 피드백이 더 안 나옴 → 🧊 **화면 · 흐름 확정** → JSON 구조를 DB 설계도로 승격

- 테스트하며 **필드가 추가·삭제된 JSON** = 이미 검증된 데이터 모델
- 그래서 백엔드는 **"상상"이 아니라 "옮겨 적기"** 가 된다
- Freeze 전에 백엔드를 지으면 → **버릴 테이블**을 만든다

`왼쪽 단계도 · 오른쪽 JSON → 테이블 변환 그림`

🎨 IMAGE PROMPT — An isometric scene where a flexible, wobbly translucent JSON document sheet on the left is being placed into a crystal freezing chamber in the center, emerging on the right as a solid navy database table block with clear columns and rows. Small discarded draft sheets lie crumpled behind the chamber to suggest iterations before freezing. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "다듬어진 JSON = 모델 설계도". 이 문장이 PHASE 1과 PHASE 2를 잇는 다리입니다.

---

# P08 · PHASE 1 vs PHASE 2

비교:
| 구분 | 🟢 PHASE 1 · 프론트 퍼스트 | 🔵 PHASE 2 · 백엔드 |
|---|---|---|
| 기간 | 1~2주, 하루 수 회 반복 | 3~5일, 확정 화면 기준 |
| 데이터 | `/data/*.json` + `localStorage` | PostgreSQL + Django 모델 |
| AI | 규칙 엔진 (가짜) | Claude API (서버에서 호출) |
| 배포 | Vercel 프리뷰 URL | Vercel(프론트) + Railway(백엔드) |
| 바뀌는 코드 | — | `repo.ts`, `engine.ts` 내부만 · **화면 코드 0줄** |
| 세 앱의 위치 | ✅ 지금 여기 | DeepQ STAGE 10이 예고 |

`2열 비교 카드 · 마지막 줄 강조`

🎨 IMAGE PROMPT — A split isometric composition: on the left a lightweight teal pop-up market stall made of cardboard and fabric with display shelves of paper data sheets and a single small drawer; on the right a solid navy brick building with a server room, database cylinders and a guarded vault. Both share the exact same storefront window design on the front facade, emphasizing that the visible front stays identical. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 마지막 줄이 핵심입니다. 백엔드로 갈 때 화면 코드는 한 줄도 안 바뀝니다. 그게 가능하도록 처음부터 문 두 개를 만든 겁니다.

---

# P09 · 왜 프론트를 먼저 만드는가

단계도: 사용자는 **API가 아니라 화면**을 본다 → 화면으로 먼저 검증 → 버릴 백엔드를 안 만든다 → 검증된 JSON이 그대로 DB 설계도

| 이유 | 효과 |
|---|---|
| 💸 비용 | 서버 0원, 배포 무료 |
| ⚡ 속도 | 하루 여러 번 수정·재배포 |
| 🎯 검증 | "사람들이 정말 쓰나?"를 먼저 확인 |
| 📐 설계 | 데이터 모양이 테스트로 다듬어짐 |

`왼쪽 단계도 · 오른쪽 아이콘 4칸 그리드`

🎨 IMAGE PROMPT — An isometric illustration of a user's hand holding a smartphone in the foreground, with a beautifully lit app screen; behind the phone, a large unbuilt construction site with only foundation stakes and a "later" hourglass, showing that the backend is intentionally not built yet. Four small floating icons around the phone: a coin with zero, a lightning bolt, a target, and a ruler with blueprint. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 백엔드는 비싸고 느립니다. 화면은 싸고 빠릅니다. 싸고 빠른 쪽으로 먼저 틀린 것을 찾아냅니다.

---

# P10 · 공통 레퍼런스 아키텍처 — 5개 레이어

레이어도 (위 → 아래):
1. 🖥 **UI 레이어** · `app/` — 랜딩 · 체험(/play) · 기록(/drawer) · 소개(/about) — *v0가 만드는 부분*
2. 🔁 **상태 레이어** · `hooks/` — 단계 상태머신 (step · turn · act)
3. 🧠 **도메인 레이어** · `lib/` — `engine.ts` 가짜 AI · `safety.ts` 위험 키워드 · `export.ts` 내보내기
4. 🚪 **어댑터 레이어** · `lib/repo.ts` — `getX() · saveX() · listX()` · SOURCE = json | api
5. 💾 **데이터 소스** — `/data/*.json` (읽기) · `localStorage` (쓰기) · ┈ PHASE 2 API

`5단 스택 다이어그램 · 4·5단 사이 점선 "스위치 전환"`

🎨 IMAGE PROMPT — A tall isometric layered tower of five stacked translucent glass slabs, each a different tone: the top slab shows miniature UI cards and buttons, the second shows a small flowchart of connected circles like a state machine, the third holds a glowing gear brain with a shield and a document export icon, the fourth is a single narrow doorway gate that everything must pass through, and the bottom slab holds a bookshelf of paper sheets and a wooden drawer, with a faded dotted bridge leading off to a distant cloud server. Thin light beams flow vertically between slabs. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 위에서 아래로만 흐릅니다. UI가 데이터 소스를 직접 만지는 일은 없습니다. 반드시 4번 문(repo)을 지납니다.

---

# P11 · 레이어별 책임 — 누가 만들고, 무엇이 바뀌나

| 레이어 | 위치 | 책임 | 누가 만드나 | PHASE 2에서 |
|---|---|---|---|---|
| UI | `app/**/page.tsx`, `components/` | 화면·버튼·애니메이션 | v0 (말로 생성) | 그대로 |
| 상태 | `hooks/useFlow.ts` | 지금 몇 단계? 다음으로 이동 | v0 / Cursor | 그대로 |
| 도메인 | `lib/engine.ts` | 입력 → 규칙 → JSON에서 답 | **학생 설계** + AI | **Claude API로 교체** |
| 어댑터 | `lib/repo.ts` | 데이터 읽기/쓰기 단일 출입구 | AI (패턴 고정) | **fetch(API)로 교체** |
| 시드 | `data/*.json` | 샘플·답 템플릿·카드·루브릭 | **학생이 직접** | Django fixture |
| 사용자 데이터 | `localStorage` | 기록·진행도·결과물 | 자동 | DB 테이블 |

> 🎯 **학생의 진짜 일** = 시드 JSON 쓰기 + 엔진 규칙 설계. 나머지는 AI가 짠다.

`표 + 하단 강조 배너`

🎨 IMAGE PROMPT — An isometric construction site of the layered tower from before, with small worker figures at each level: friendly robot workers painting the top UI layer and wiring the state layer, while a single child-sized human architect at the bottom levels carefully writes on paper data sheets and draws rule diagrams on a small chalkboard. Arrows of light show the robots following the architect's blueprint. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — AI가 위층을 짓고, 사람이 아래층(데이터와 규칙)을 설계합니다. 앱의 정체성은 아래층에 있습니다.

---

# P12 · 표준 폴더 구조

```text
my-app/
├─ app/                 # 🖥 UI
│  ├─ page.tsx          #   / 랜딩
│  ├─ play/page.tsx     #   체험 (상태머신)
│  ├─ drawer/page.tsx   #   기록 (localStorage 목록)
│  └─ about/page.tsx    #   소개 (STAGE 스토리텔링)
├─ components/          # v0가 만든 카드·버튼·진행바
├─ hooks/useFlow.ts     # 🔁 단계 상태머신
├─ lib/
│  ├─ repo.ts           # 🚪 데이터 출입구 (json | api)
│  ├─ engine.ts         # 🧠 가짜 AI 출입구 (rule | llm)
│  ├─ safety.ts         # 🚨 위험 키워드
│  └─ export.ts         # 📄 .md 내보내기
├─ data/                # 📄 samples · responses · ...
└─ types/index.ts       # JSON 스키마 = 타입 = 미래의 DB 모델
```

`왼쪽 코드 카드 · 오른쪽 폴더 아이콘 일러스트`

🎨 IMAGE PROMPT — An isometric open filing cabinet with six labeled-by-color drawers pulled out at different lengths: a teal drawer containing tiny screen thumbnails, a light drawer with reusable furniture-like UI pieces, a drawer with a small looping flowchart, a mustard drawer with two glowing doors and a gear, a drawer filled with neatly stacked paper sheets, and a thin drawer with a blueprint scroll. Clean organized aesthetic like a well-labeled workshop. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — v0에게 "이 폴더 구조로 만들어 줘"라고 처음부터 지정하면 나중에 정리할 일이 사라집니다. `types/index.ts`가 미래의 DB 모델이라는 점을 강조하세요.

---

# P13 · 데이터 2분류 원칙

비교:
| | 📄 읽기 데이터 (시드) | 🗄 쓰기 데이터 (사용자) |
|---|---|---|
| 저장소 | `/data/*.json` | `localStorage` |
| 성격 | 모두에게 같은 내용, 앱과 함께 배포 | 사용자마다 다름, 이 브라우저에만 |
| 예시 | 샘플 문제 · 타로 카드 · 답 템플릿 · 루브릭 | 대화 기록 · 진행도 · 커튼콜 · 즐겨찾기 |
| 주의 | **학생이 직접 써야 "내 앱"** | 비밀번호·실명·개인정보 금지 · 약 5MB |
| PHASE 2 | fixture (초기 데이터) | 사용자별 DB 테이블 |

`2열 비교 · 가운데 세로 구분선`

🎨 IMAGE PROMPT — An isometric split scene: on the left a large public library bookshelf with identical copies of the same printed sheets being handed to many small identical visitors; on the right a single personal wooden desk drawer belonging to one person, containing a few personal sticky notes and a small star bookmark, with a tiny padlock icon crossed out in coral to warn it has no real lock. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 모두가 같은 것을 보는 데이터는 JSON, 나만 보는 데이터는 localStorage. 이 질문 하나로 데이터 위치가 결정됩니다.

---

# P14 · 한 번의 요청이 흐르는 순서

단계도 (시퀀스):
1. 🙋 사용자 — 입력 / 버튼 클릭
2. 🖥 `page.tsx` → `useFlow` 에 dispatch
3. 🔁 `useFlow` → `engine.respond(step, 입력)`
4. 🧠 `engine` → `repo.getResponses()` → 📄 JSON 템플릿 목록
5. 🧠 키워드 매칭 → 템플릿 선택 → `{변수}` 치환
6. 🔁 "생각 중…" 1.5초 표시 → `repo.saveLog()` → 🗄 localStorage
7. 🖥 답 카드 표시

`세로 시퀀스 다이어그램 (참여자 6열: 사용자 · page · useFlow · engine · repo · data)`

🎨 IMAGE PROMPT — An isometric relay race diagram: six vertical glass pillars standing in a row (a user figure, a screen panel, a looping state ring, a gear brain, a single doorway, and a split shelf with paper sheets and a drawer). A glowing mustard baton travels in zigzag arcs between the pillars from left to right and then returns back to the user, with a small hourglass pausing it midway. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 화면은 데이터를 직접 만지지 않습니다. 모든 길은 engine과 repo를 거칩니다. 이 순서를 학생이 손으로 따라 그려 보게 하세요.

---

# P15 · 핵심 출입구 ① — 데이터의 문 `lib/repo.ts`

```ts
// 화면은 이 파일의 함수만 부른다. SOURCE만 "api"로 바꾸면 끝.
const SOURCE = process.env.NEXT_PUBLIC_DATA_SOURCE ?? "json";

export async function getSamples() {
  if (SOURCE === "api") return fetch(`${API}/api/samples/`).then(r => r.json());
  return (await import("@/data/samples.json")).default;
}

const read  = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) ?? ""); } catch { return fallback; } };
const write = (key, value)    => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };

export const listProjects = () => read("app:projects", []);
```

단계도: 화면 → `getSamples()` → SOURCE? → json: 파일 import / api: fetch

`왼쪽 코드 카드 · 오른쪽 분기 스위치 그림`

🎨 IMAGE PROMPT — A close-up isometric of a single ornate doorway set into a wall, with a large railway track switch lever beside it. Behind the door, the track splits into two paths: one teal path leading to a cozy shelf of paper data sheets, and one navy dotted path leading to a distant server building in the clouds. The lever is currently pointing to the teal path. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — try/catch는 시크릿 창이나 저장 공간 꽉 참 상황에서도 앱이 깨지지 않게 합니다. 점검표에도 들어가는 항목입니다.

---

# P16 · 핵심 출입구 ② — AI의 문 `lib/engine.ts`

```ts
const ENGINE = process.env.NEXT_PUBLIC_ENGINE ?? "rule";

export async function respond(input: string, ctx: Context): Promise<Reply> {
  if (ENGINE === "llm") {
    return fetch("/api/respond", { method: "POST", body: JSON.stringify({ input, ctx }) })
      .then(r => r.json());                    // API 키는 서버에만
  }
  await new Promise(r => setTimeout(r, 1200)); // "생각 중…" 연출
  const rules = (await import("@/data/responses.json")).default;
  const hit = rules.find(r => r.keywords.some(k => input.includes(k)))
           ?? rules.find(r => r.id === "default")!;
  return { text: fill(hit.text, ctx), followUp: hit.followUp, next: hit.next };
}
```

단계도: 입력 → (rule) 딜레이 → 키워드 매칭 → 없으면 default → 변수 치환 → `{ text, followUp, next }`

`왼쪽 코드 · 오른쪽 5단계 미니 플로우`

🎨 IMAGE PROMPT — An isometric machine shaped like a friendly vending machine with a glass front: an input slot on top receives a speech bubble, inside a sorting wheel with keyword-shaped slots spins, a row of pre-made answer cards sits on spiral holders, one card drops into the output tray, and a small mustard hourglass sits on the side. A separate dotted cable from the back of the machine leads to a distant cloud brain, currently unplugged. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — default 응답이 반드시 있어야 합니다. 매칭이 안 될 때 빈 화면이 나오면 "가짜"가 들통납니다.

---

# P17 · 교체의 열쇠 — 반환 모양(Reply 타입)을 처음부터 고정

```ts
type Reply = { text: string; followUp?: string; next?: string };
```

단계도: 지금 `규칙 엔진 → Reply` ═ 나중 `Claude API → Reply` → 화면은 **차이를 모른다**

- 입력·출력 모양만 같으면 **안쪽은 무엇이든** 된다
- = 콘센트 규격 · USB 포트와 같다
- 그래서 "가짜 → 진짜" 교체가 **스위치 하나**

`가운데 큰 Reply 박스 · 왼쪽 규칙 엔진 · 오른쪽 LLM · 둘 다 같은 플러그`

🎨 IMAGE PROMPT — An isometric illustration of a single standardized wall socket in the center glowing mustard. On the left, a simple hand-cranked mechanical gear box with a plug; on the right, a sleek glowing cloud brain with an identical plug. Both plugs have exactly the same shape and fit the same socket, and behind the wall a lamp shaped like an app screen lights up the same way for either. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 장이 0차시의 핵심 개념입니다. "인터페이스를 먼저 정하면 구현은 나중에 바꿀 수 있다." 초등에게는 "콘센트 모양을 먼저 정한다"로 설명합니다.

---

# P18 · "진짜처럼" 보이게 하는 연출 레이어 6가지

| # | 기법 | 아키텍처 위치 | 예시 앱 |
|:---:|---|---|---|
| 1 | 샘플로 바로 시작 (빈 화면 금지) | `data/samples.json` | DeepQ "🧪 샘플 문제로 바로 시작" |
| 2 | 자유입력 대신 칩·버튼 | UI → 경우의 수 축소 | TeenDramaro 4갈래 · 틴스파크 여섯 축 |
| 3 | 생각하는 척 딜레이 | `engine.ts` setTimeout | DeepQ "⏱ 20초" |
| 4 | 고정 패턴 되묻기 | `responses.json` followUp | 틴스파크 "그 400은 어디서 왔어?" |
| 5 | 사용자 말 되돌려주기 | engine이 기록에서 문장만 추출 | TeenDramaro 4막 거울 |
| 6 | 정직한 데모 고지 | `layout.tsx` footer | DeepQ "규칙 기반 시뮬레이션" |

`6칸 아이콘 그리드 (3×2)`

🎨 IMAGE PROMPT — A 3 by 2 isometric grid of six small vignettes on floating tiles: a phone opening directly to filled sample cards, a row of large chunky chip buttons replacing a keyboard, an hourglass with a thinking cloud, a speech bubble with a curved question-mark arrow bouncing back, a mirror reflecting the user's own speech bubble, and a small honest signboard at the bottom of a screen with a check mark. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 6번이 가장 중요합니다. 가짜를 진짜인 척 속이는 게 아니라, "데모입니다"라고 정직하게 밝힌 뒤 경험을 보여 주는 것입니다.

---

# P19 · PART 2 — 앱별 아키텍처 3패턴

단계도:
🅰 **대화 루프 + 턴 카운터** (틴스파크) → 🅱 **시나리오 막 머신 + 안전 가드** (TeenDramaro) → 🅲 **위자드 파이프라인 + 버전 + 채점** (DeepQ)

> 같은 5레이어 위에, **상태 레이어의 모양**만 다르다.

`섹션 구분 카드 · 3개의 큰 아이콘`

🎨 IMAGE PROMPT — Three isometric mechanical models on pedestals in a museum-like space: on the left a circular carousel loop with a counter dial, in the center a miniature theater stage with five curtain panels that open in sequence and a shield guard at the entrance, on the right a straight assembly line with six stations ending in a scorecard. All three stand on identical five-layer bases. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 세 앱은 바닥(레이어)은 같고, 2층(상태머신)의 모양만 다릅니다. 이 관점으로 세 앱을 봅니다.

---

# P20 · 🔥 틴스파크AI — 패턴 A: 대화 루프 + 턴 카운터

**한 줄** — 코드는 AI가 짜고, 그 앞의 "설계"는 학생이 하도록 질문을 코칭
**확인된 사실** — 라우트 `/` · `/demo` · `/about` · 가입·비밀번호 없음 · 기획서.md / 전체 기록.md 내보내기

| 라우트 | 역할 | 데이터 |
|---|---|---|
| `/` | 프로젝트 목록 + 대화 | localStorage |
| `/demo` | 예시 프로젝트 통으로 읽기 | `examples.json` |
| `/about` | STAGE 01~11 소개 | 정적 |

`왼쪽 앱 소개 · 오른쪽 라우트 표`

🎨 IMAGE PROMPT — An isometric scene of a teenage student at a desk facing a laptop, with a sequence of alternating speech bubbles spiraling upward from the screen like a helix; every other bubble has a question-mark hook pointing back to the student. A small flame spark hovers above the top of the spiral, and a neat stack of two document files sits ready to download beside the laptop. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 앱은 답을 주는 AI가 아니라 "되묻는 AI"를 흉내 냅니다. 그 되묻기가 JSON의 followUp 필드에 미리 적혀 있습니다.

---

# P21 · 틴스파크 상태머신 — 턴이 단계를 결정한다

단계도:
＋ 새 프로젝트 → **형식 선택** (논문·리서치·캠페인·서비스·제품) → **질문 입력** → **답 + 되묻기** (O1~O5 판정)

분기 규칙:
- turn이 홀수 → 다시 **질문 입력**
- turn이 짝수 → **역질문 2문 1역** → 🧩 n/4 도장 → 질문 입력
- turn = 10 → **리포트** (8칸) → 다음 미션
- 언제든 → **.md 내보내기**

`원형 루프 + 바깥으로 3개 분기 화살표`

🎨 IMAGE PROMPT — An isometric circular track with a turn counter dial at its center. Small tokens travel around the loop between a question station and an answer station. At every second lap, a side gate opens to a small quiz booth that stamps a puzzle piece onto a four-slot card; at the tenth lap, a larger gate opens to a report podium displaying an eight-panel board. A side exit leads to a printer producing two documents. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 다음 단계를 사용자가 고르지 않고 "턴 수"가 자동으로 결정합니다. 이것이 패턴 A의 특징입니다.

---

# P22 · 틴스파크 모듈 & 데이터 설계

| 모듈 | 역할 | 가짜 AI 규칙 |
|---|---|---|
| `classifyOpenness()` | 질문 O1~O5 분류 | "짜줘"=O1 · 조건어 의문문=O3 · "다른 방법"=O4 |
| `respond()` | 답 + 되묻기 | 형식 × 키워드 → 템플릿 + followUp |
| `widenAxis()` | 여섯 축 버튼 | 왜·맥락·제약·기준·검증·버릴 것 |
| `pickQuiz()` | 2문 1역 | 4관문 순서대로 |
| `buildReport()` | 10턴 리포트 | 기록 집계 |

```jsonc
{ "id": "sensor-threshold", "format": "product", "keywords": ["400","센서"],
  "card": "흙 센서 < {threshold} → 펌프 3초",
  "followUp": "그 {threshold}은 어디서 왔어? 직접 재 본 적 있어?" }
```
localStorage: `ts:projects` · `ts:log:{id}` · `ts:stamps:{id}`

`위 표 · 아래 코드 카드`

🎨 IMAGE PROMPT — An isometric toolbox opened to reveal five labeled-by-shape compartments: a sorting gauge with five levels, a speech bubble stamping machine, a hexagonal six-spoke dial, a small quiz card dispenser, and a report clipboard. Beside the toolbox, a single index card shows a sensor icon, a water pump icon and a curved question arrow. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — JSON 한 줄을 보면 답(card)과 되묻기(followUp)가 같이 들어 있습니다. "되묻기를 데이터로 저장한다"가 이 앱의 설계 포인트입니다.

---

# P23 · 틴스파크 기능 정의서 — 가짜 → 진짜 교체 지도

| ID | 기능 | PHASE 1 처리 (가짜) | 저장 | PHASE 2 교체 |
|---|---|---|---|---|
| T-01 | 형식 선택 | `formats.json` 로드 | `ts:projects` | Project 모델 |
| T-02 | 질문 수준 진단 | 키워드 규칙 | `ts:log` | LLM 분류 |
| T-03 | 답 + 되묻기 | 템플릿 + followUp | `ts:log` | Claude API |
| T-04 | 2문 1역 | `quiz.json` 순차 | `ts:stamps` | LLM 출제 |
| T-05 | 여섯 축 | 문장 템플릿 | — | 그대로 |
| T-06 | 10문 리포트 | 기록 집계 | `ts:log` | 서버 집계 |
| T-07 | .md 내보내기 | 문자열 → Blob | 파일 | 그대로 |

> 💡 기능 정의서에 **"PHASE 2 교체"** 열을 처음부터 두면, 교체할 곳이 미리 보인다.

`표 · 마지막 열 강조색`

🎨 IMAGE PROMPT — An isometric wall chart board with seven horizontal rows of colored blocks; each row starts with a small paper-and-gear block on the left and ends with an arrow pointing to either a glowing cloud brain, a database cylinder, or a green check mark on the right, showing which parts will be swapped later. A child engineer points at the right column with a pointer stick. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "그대로"인 기능도 있다는 점이 중요합니다. 모든 걸 AI로 바꿀 필요는 없습니다.

---

# P24 · 🎭 TeenDramaro — 패턴 B: 시나리오 막 머신 + 안전 가드

**한 줄** — 내가 만든 캐릭터를 무대에 올려, 늘 하던 선택을 찾고 다른 선택을 해 본다
**확인된 사실** — 서버에 안 쌓고 이 기기에만 · 한 판 25분 · 하루 3번 · 위험 신호 시 109 · 1388 · 1577-0199 안내

| 라우트 | 역할 | 데이터 |
|---|---|---|
| `/` | 랜딩 | 정적 |
| `/play` | 무대 (막 진행) | `acts.json` · `cards.json` + localStorage |
| `/drawer` | 카드 서랍장 (커튼콜) | localStorage |
| `/examples` | 예시 무대 | `examples.json` |

`왼쪽 소개 · 오른쪽 라우트 표`

🎨 IMAGE PROMPT — An isometric miniature theater with deep red velvet curtains half-open, a single spotlight on a small stylized character figure standing center stage, a large tarot card floating above like a prop, and a director's chair with a megaphone in the foreground. To the side, a small wooden chest of drawers holds collected cards. A soft shield glow surrounds the entire stage. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 타로는 점이 아니라 "말문을 여는 소품"입니다. 마음을 다루는 앱이기 때문에 안전 가드가 설계의 맨 위에 있습니다.

---

# P25 · TeenDramaro 막(Act) 머신 — 사용자가 다음 장면을 연다

단계도:
접수 (주제 칩) → 무대 입장 (캐릭터 이름 + 약점·강점) → 카드 뽑기 → **1막 펼치기** → **2막 안쪽** → **3막 마주침** → **4막 거울** → **5막 리플레이** (출구 4개) → **커튼콜** → /drawer 저장

- 막(act) = **상태** · 턴 = **막 안의 루프** (횟수 제한 없음)
- 다음 막으로 넘기는 건 **항상 사용자 버튼 ▶**

`가로 9단 타임라인 · 각 막에 작은 루프 표시`

🎨 IMAGE PROMPT — An isometric long theater corridor with five consecutive stage rooms connected by curtained doorways, each room lit with a slightly different mood color; inside each room a small circular arrow loop floats to show repeated dialogue. A play button pedestal stands before each curtain. The corridor begins at a reception desk with topic chips and a card deck, and ends at a bow-taking stage with falling confetti and a drawer cabinet. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 패턴 A는 턴 수가 단계를 정하고, 패턴 B는 사용자가 단계를 정합니다. 막 순서가 고정이라 가짜로 만들기가 더 쉽습니다.

---

# P26 · 안전 가드는 아키텍처의 최상단에

단계도: 모든 입력 → 🚨 `safety.check()` → (위험 키워드) **안전 멈춤** → 109 · 1388 안내 / (통과) → 🧠 `engine` → 디렉터 대사

- 엔진보다 **먼저** 실행된다 (순서가 곧 설계)
- 키워드 목록 `safety.json` 은 **교사·전문가 검토 필수**
- PHASE 2에서도 사라지지 않는다 → **키워드 + LLM 이중 감지**

> ⚠️ 마음 · 고민을 다루는 앱은 **데모라도** 안전 가드부터 만든다.

`세로 흐름 · 맨 위 코랄 방패`

🎨 IMAGE PROMPT — An isometric gatehouse with a large coral shield emblem standing at the very entrance of a pathway; every incoming speech bubble must pass through a scanning arch. Most bubbles continue down the path to a theater stage, but one bubble is gently redirected by a soft barrier to a calm side room with a warm telephone and a caring helper figure. The mood is protective and gentle, not alarming. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 학생 아이디어 중 감정·고민형이 많습니다. 그 팀에는 반드시 이 장을 다시 보여 주세요.

---

# P27 · TeenDramaro 모듈 & 데이터 설계

| 모듈 | 역할 | 가짜 AI 규칙 |
|---|---|---|
| `directorLine()` | 디렉터 질문 | `acts.json` 막별 질문 순서대로 · `{name}` 치환 |
| `branch()` | 조종간 4갈래 | 장면/마음/딴 데로/패스 → 템플릿을 **입력창에 채움** |
| `drawCard()` | 카드 뽑기 | `cards.json` 랜덤 1장 |
| `mirror()` | 4막 거울 | **사용자 문장만** 추출 (생성 없음) |
| `replay()` | 5막 리플레이 | 출구 × 주제 → 반응 템플릿 |
| `limits()` | 이용 제한 | 날짜별 판 수 · 25분 타이머 |

```jsonc
{ "act": 1, "title": "펼치기",
  "lines": ["딱 한 장면만. 어디, 몇 시였어?", "거기서 {name}은(는) 뭐라고 쳤어?"] }
```
localStorage: `td:session` · `td:drawer` · `td:usage`

`위 표 · 아래 코드 카드`

🎨 IMAGE PROMPT — An isometric director's backstage workbench: a script holder with five stacked script sheets, a four-way joystick control lever, a shuffled card deck with one card flipping, a standing mirror reflecting a speech bubble back unchanged, a small replay reel, and a wall clock with a 25-minute arc highlighted. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — mirror()는 AI 생성이 아니라 "사용자가 쓴 문장을 그대로 돌려주는" 기능입니다. 가짜 AI의 가장 정직하고 강력한 기법입니다.

---

# P28 · 🅠 DeepQ — 패턴 C: 위자드 파이프라인 + 버전 + 채점

**한 줄** — 객관식 사진 한 장 → 서술형 문제 + 루브릭 채점 + 공유
**확인된 사실** — `/`는 6단계 위자드 · 생성·채점은 규칙 기반 시뮬레이션 · OCR은 샘플 텍스트로 대체 · 페이지 로딩 시 외부 API 요청 없음

| 라우트 | 역할 | 데이터 |
|---|---|---|
| `/` | 6단계 위자드 | `samples.json` · `templates.json` |
| `/problems` | 내가 만든 문제 | localStorage |
| `/library` | 공유 · Fork | `library.json` + localStorage |
| `/about` | STAGE 01~10 | 정적 |

`왼쪽 소개 · 오른쪽 라우트 표`

🎨 IMAGE PROMPT — An isometric scene of a smartphone photographing a printed multiple-choice test sheet; a beam of light carries the sheet into a machine that outputs a longer open-ended question card, a rubric scorecard with four bars, and a sharing node with branching fork lines. A teacher figure stands beside it holding a red pen. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 네트워크 탭을 열어 보면 폰트·이미지만 오가고 AI 요청은 없습니다. 수업에서 개발자도구로 직접 확인시키면 효과가 큽니다.

---

# P29 · DeepQ 위자드 파이프라인 — 6단계 직선

단계도:
1 **업로드** (사진 · 직접입력 · 샘플) → 2 **OCR** (샘플 텍스트 대체) → 3 **변환** (서술형 4유형) → 4 **다듬기** (v1 → v2 → v3) → 5 **확정** (모범답안 + 루브릭) → 6 **채점** (2회 · 편차)

분기:
- 6 채점 → 📈 **성장** (재제출 6 → 8 → 9)
- 5 확정 → 🍴 **라이브러리** (공유 · Fork · QR)

`가로 6단 화살표 · 끝에서 2갈래`

🎨 IMAGE PROMPT — An isometric factory assembly line with six sequential stations on a conveyor: a photo upload tray, a scanner, a transformer press that turns a small card into four varied cards, a polishing station showing three versions stacking, a sealing station stamping a rubric seal, and a scoring booth with two judges. After the line, one branch rises as an upward bar chart staircase, and another branch splits into a tree of forked copies. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 처음 만드는 학생에게 가장 추천하는 패턴입니다. 샘플 3개만 있으면 처음부터 끝까지 시연이 됩니다.

---

# P30 · 공개된 가짜 ↔ 진짜 대응표 (DeepQ STAGE 10)

비교:
| 역할 | 🟢 데모 (지금) | 🔵 실제 서비스 |
|---|---|---|
| 생성 | JSON 템플릿 | Claude API |
| 채점 | 키워드 규칙 | 루브릭 LLM 채점 |
| 저장 | localStorage | Supabase |
| OCR | 샘플 텍스트 | Vision API |

> 앱이 **스스로** "지금은 가짜, 나중엔 이것"이라고 밝힌다 = 설계를 이해하고 있다는 증거

`2열 비교 4행 · 화살표로 연결`

🎨 IMAGE PROMPT — An isometric two-column workshop: on the left four simple handmade objects on wooden pedestals (a stack of template cards, a keyword sieve, a small wooden drawer, a printed sample page); on the right four corresponding high-tech versions on glowing pedestals (a cloud brain, a robotic grader with a rubric screen, a database cylinder cluster, a camera eye lens). Dotted arrows connect each left object to its right counterpart. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 학생 발표에도 이 표를 그대로 쓰게 하세요. 심사위원이 "AI는 어디 있어요?"라고 물을 때 가장 좋은 답입니다.

---

# P31 · DeepQ 채점 엔진 — 키워드 루브릭 + 2회 채점

```jsonc
"rubric": [
  { "name": "핵심 개념 이해", "max": 3, "keywords": ["광합성","양분","포도당"] },
  { "name": "논리적 풀이",   "max": 3, "keywords": ["때문에","그래서","따라서"] },
  { "name": "근거 제시",     "max": 2, "keywords": ["빛","에너지"] },
  { "name": "표현·완성도",   "max": 2, "minLength": 30 } ]
```

단계도: 답안 → `grade()` 항목별 키워드 → 점수 → `gradeTwice()` (엄격 / 관대 규칙 2벌) → 차이 ≥ 2 → 🟡 교사 확인 / 아니면 🟢 → `hint()` 0점 항목 → "근거 하나 더 쓰면 +2점"

`왼쪽 코드 · 오른쪽 분기 흐름`

🎨 IMAGE PROMPT — An isometric scoring station with two robot judges side by side, one with a stern expression holding a fine sieve and one with a relaxed expression holding a wide sieve; a student's answer sheet passes under both, producing two score bars. A balance scale compares the two bars: if balanced a green light glows, if unbalanced a mustard caution light glows and a small teacher figure is called over. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 규칙 두 벌로 "AI도 틀릴 수 있다"를 흉내 냅니다. 사람이 최종 판단한다는 책임 구조까지 아키텍처에 넣은 사례입니다.

---

# P32 · localStorage의 한계 → PHASE 2가 필요한 이유

단계도: 🍴 "공유" 버튼 → localStorage에 저장 → **내 기기에만** 남음 → 다른 선생님은 못 봄 ❌

데모의 해법: `library.json` 에 "다른 선생님 문제"를 **미리 넣어 두고** 흉내

진짜 해법: DB 서버 → 모든 사용자가 같은 데이터 → **PHASE 2**

| 질문 | 답이 "네"면 |
|---|---|
| 내 데이터가 **다른 기기**에도 보여야 하나? | DB 필요 |
| **로그인**한 사람만 봐야 하나? | 인증 필요 |
| 답이 **매번 새로워야** 하나? | LLM 필요 |

`위 단계도 · 아래 판별 표`

🎨 IMAGE PROMPT — An isometric scene of two separate houses on two islands; in the first house a person places a document into a small personal drawer, while in the second house another person looks at an empty drawer, puzzled. A faded dotted bridge between the islands leads to a central cloud building with a shared database, suggesting the future solution. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 가짜의 한계를 정확히 아는 것도 설계 능력입니다. 이 표의 세 질문이 "언제 백엔드를 지을까"의 기준입니다.

---

# P33 · 세 앱 아키텍처 비교

| 항목 | 🅰 틴스파크AI | 🅱 TeenDramaro | 🅲 DeepQ |
|---|---|---|---|
| 패턴 | 대화 루프 + 턴 카운터 | 막 머신 + 안전 가드 | 위자드 + 버전 + 채점 |
| 상태 단위 | turn | act | step |
| 다음 단계 결정 | **턴 수 자동** | **사용자 버튼** | **사용자 버튼** |
| 가짜 AI 핵심 | 분류 + 템플릿 + 되묻기 | 막별 질문 + 되돌려주기 | 템플릿 변환 + 키워드 채점 |
| 시드 JSON | formats · responses · quiz | cards · acts · safety | samples · templates · library |
| 특수 모듈 | export | safety · limits | gradeTwice · fork |
| 가짜 만들기 난이도 | ★★★ | ★★ | ★ |
| PHASE 2 필요성 | LLM 답변 품질 | LLM + 안전 이중화 | DB 공유 + LLM 채점 |

`3열 비교 표 · 난이도 행 별 아이콘`

🎨 IMAGE PROMPT — Three isometric pedestals of different heights arranged like a podium, each holding one of the three mechanical models (a circular loop carousel, a five-curtain theater, a six-station assembly line). The loop carousel stands on the tallest pedestal with three stars, the theater on medium with two stars, the assembly line on the lowest with one star, representing difficulty to fake. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 자유 대화(A)는 가짜로 만들기 가장 어렵고, 위자드(C)는 가장 쉽습니다. 학생에게 난이도를 솔직하게 알려 주세요.

---

# P34 · 학생 아이디어 → 어떤 패턴으로?

단계도 (판별):
❓ "내 앱의 핵심 경험은?"
- "정해진 순서로 입력 → 결과 한 장" → 🅲 **위자드** (DeepQ형) · 예: 분리수거 도우미, 급식 추천
- "이야기 · 역할극 · 게임처럼 장면이 넘어감" → 🅱 **막 머신** (TeenDramaro형) · 예: 감정 방탈출, 역할극 연습
- "계속 묻고 답하며 쌓임" → 🅰 **대화 루프** (틴스파크형) · 예: 질문 코치, 공부 튜터

> 👉 **처음 만드는 학생은 🅲부터** — 샘플 3개로 끝까지 시연 가능

`위에서 3갈래로 갈라지는 결정 트리`

🎨 IMAGE PROMPT — An isometric signpost at a crossroads in a small park, with three paths branching out: one straight path leading to a tidy assembly line (highlighted with a glowing mustard welcome mat), one winding path leading to a small theater, and one circular path leading to a carousel. A group of three young students with backpacks stands at the signpost looking at a map together. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 2일차 워크시트를 꺼내 "우리 팀은 A/B/C 중 무엇?"을 30초 안에 고르게 하세요.

---

# P35 · PHASE 2 확장 경로 — 무엇이 무엇으로 바뀌나

| PHASE 1 | → | PHASE 2 | 바꾸는 파일 |
|---|:---:|---|---|
| `data/samples.json` **구조** | → | `class Sample(models.Model)` | `models.py` |
| `data/samples.json` **내용** | → | 초기 데이터 (loaddata) | fixture |
| JSON 직접 편집 | → | Django Admin에서 선생님이 수정 | `admin.py` 10줄 |
| `localStorage` 키 | → | 사용자별 테이블 + 로그인 | `models.py` · 인증 |
| `repo.ts` import(json) | → | fetch(API) | `.env` DATA_SOURCE=api |
| `engine.ts` 규칙 | → | route handler → Claude API | `.env` ENGINE=llm |
| **화면 코드** | → | **변경 없음** | — |

`매핑 표 · 마지막 행 강조`

🎨 IMAGE PROMPT — An isometric moving day scene: boxes labeled only by icons (paper sheets, a drawer, a gear) are carried by small robot movers across a bridge from a lightweight teal pop-up stall to a solid navy building with a database basement, an admin control desk and a guarded API gate. The storefront window of both buildings is identical and untouched, with a mustard ribbon on it. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "이 JSON 구조로 Django 모델 만들어 줘" — PHASE 2의 첫 프롬프트는 이 한 문장입니다.

---

# P36 · PHASE 2 최우선 규칙 — API 키는 브라우저에 두지 않는다

단계도:
❌ 브라우저 코드 → (API 키 포함) → Claude API — 누구나 개발자도구로 키를 훔침 → 요금 폭탄
✅ 브라우저 → `/api/respond` (서버 route handler) → 🔐 서버 환경변수의 키 → Claude API

- `NEXT_PUBLIC_` 접두어가 붙은 값은 **브라우저에 공개**된다
- 키는 Vercel 환경변수(서버 전용) 또는 Django 서버에만
- `engine.ts` 의 `ENGINE=llm` 분기가 **fetch("/api/respond")** 인 이유

`위 ❌ 경로 코랄 · 아래 ✅ 경로 틸 · 2줄 비교`

🎨 IMAGE PROMPT — An isometric split illustration: in the upper half, a golden key is left on a public shop counter in front of a browser window, and a shadowy hand reaches for it while coins fly away from a wallet, tinted coral as a warning; in the lower half, the same golden key is locked inside a heavy steel vault in a back-office server room, and a small messenger carries requests from the shop counter to the vault door, tinted teal as safe. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 보안 사고의 대부분이 여기서 납니다. PHASE 1에서 아예 AI를 안 부르는 것도 이 위험을 피하는 설계입니다.

---

# P37 · 제작 6단계 (PHASE 1 · 수업용) × 4역할

단계도:
0 **기능 정의서** (패턴 A/B/C · 기능 3~5개) 🧭 → 1 **데이터 설계** (시드 JSON + 저장 키 표) 🧭 → 2 **v0 프롬프트** (아키텍처 지정) 🛠 → 3 **미리보기 테스트** (샘플 3개로 끝까지) 🔍 ↺ 2 → 4 **/about 소개 페이지** 🛠 → 5 **Vercel 배포** 🛠 → 6 **공유 · 피드백 · 회고** 🪞 ↺ 2

| 역할 | 하는 일 |
|---|---|
| 🧭 기획자 | 문제·패턴·기능·데이터 설계 |
| 🛠 실행자 | v0 프롬프트·배포 |
| 🔍 디버거 | 흐름 테스트 · 개발자도구 Local Storage 확인 |
| 🪞 성찰자 | 피드백 · 회고 |

`가로 7단 프로세스 · 3번과 6번에서 되돌아가는 화살표`

🎨 IMAGE PROMPT — An isometric staircase of seven steps winding upward, each step a different small workstation (a planning desk with a compass, a data shelf, a speaking podium with a laptop, a magnifying glass inspection bench, a storytelling scroll board, a launch pad with a rocket-shaped link, and a reflection mirror). Two curved return ramps loop from the inspection bench and from the mirror back to the podium. Four tiny figures wearing different hats occupy different steps. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 0단계와 1단계가 종이 작업이라는 점이 중요합니다. 키보드를 잡기 전에 설계가 끝나 있어야 합니다.

---

# P38 · v0 프롬프트 템플릿 — 아키텍처까지 지정하기

```text
[앱 이름] ○○○
[한 줄 정의] ○○○가 ○○○ 할 때, ○○○ 하도록 돕는 앱
[아키텍처 패턴] C. 위자드 (1단계 → 2단계 → 3단계 → 결과)
[라우트] / 랜딩 · /play 단계형+진행바 · /drawer 결과 목록 · /about 소개

[아키텍처 규칙]
1. 서버 · 로그인 · 실제 AI API 금지
2. 모든 데이터 읽기/쓰기는 lib/repo.ts 한 파일로만 (json | api 분기)
3. "AI 응답"은 lib/engine.ts 의 respond(input, ctx) 하나로
   - keywords 매칭, 없으면 id "default" · 1.2초 로딩 · 반환 { text, followUp, next }
4. 화면은 repo.ts 와 engine.ts 만 import
5. localStorage 접근은 try/catch
6. 하단에 "데모: 규칙 기반 시뮬레이션 · 데이터는 이 브라우저에만" 표시

[시드 데이터] (JSON 붙여넣기)   [기능 목록] (기능 정의서 붙여넣기)
[디자인] 모바일 우선 · Pretendard · 이모지 · 큰 버튼
```

`전체 코드 카드 · 규칙 1~6에 번호 배지`

🎨 IMAGE PROMPT — An isometric architect's drafting table with a large blueprint sheet pinned down; on the blueprint, a clear layered building plan with two doors highlighted in mustard. A child architect hands the rolled blueprint to a friendly robot builder who is already holding tools, ready to build exactly as drawn. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 보통 프롬프트는 "화면"만 말합니다. 이 템플릿은 "구조"까지 말합니다. 그래서 v0가 만든 코드를 나중에 고치기 쉽습니다.

---

# P39 · 반복 단계 — 증상별 수정 프롬프트

| 증상 | 수정 프롬프트 | 고치는 레이어 |
|---|---|---|
| 답이 항상 똑같음 | "responses.json 에 '{키워드}' 항목을 추가하고 engine.ts 매칭을 확인해 줘" | 🧠 도메인 |
| 새로고침하면 사라짐 | "결과 저장을 repo.ts 의 saveResult 로 바꾸고 /drawer 에서 listResults 로 읽게 해 줘" | 🚪 어댑터 |
| 화면이 데이터를 직접 읽음 | "page.tsx 에서 json 을 직접 import 하지 말고 repo.ts 를 거치게 고쳐 줘" | 🖥 UI → 🚪 |
| 빈 화면에서 막힘 | "첫 화면에 samples.json 샘플 3개를 카드로 보여 주고 누르면 바로 2단계로" | 📄 시드 |

> 🔑 증상을 보면 **어느 레이어가 아픈지** 먼저 말할 수 있어야 한다.

`표 · 마지막 열에 레이어 색 배지`

🎨 IMAGE PROMPT — An isometric doctor's clinic for software: the five-layer glass tower lies on an examination table, and a child doctor with a stethoscope listens to one specific glowing layer while a clipboard shows four symptom icons (a repeating echo, a disappearing note, a tangled shortcut wire, an empty white screen). Small bandage patches are being applied precisely to individual layers. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 디버깅도 아키텍처 이해에서 출발합니다. "어디가 아픈가"를 레이어 이름으로 말하게 하세요.

---

# P40 · 학생용 설계 양식 — 키보드 전에 종이 4장

단계도:
① **기획 한 장** (이름 · 한 줄 정의 · 페르소나 · Before/After · 패턴 A/B/C · 안 만들 기능 1개) → ② **상태 설계** ([상태1] —무엇을 하면→ [상태2] → [결과]) → ③ **기능 정의서** (ID · 입력 · 처리(가짜) · 출력 · 저장 키 · 나중에 진짜로) → ④ **응답 규칙표** (입력 · 키워드 · 답 · 되묻기 · 다음 상태 · default 필수)

| 응답 규칙표 예시 | 입력 | 키워드 | 답 | 다음 |
|---|---|---|---|---|
| 1 | "페트병 어디 버려?" | 페트 | 🟦 플라스틱 · 라벨 떼기 | 결과 |
| default | 그 외 | — | "조금 더 자세히 말해 줄래?" | 그대로 |

`가로 4장 카드 · 아래 예시 표`

🎨 IMAGE PROMPT — Four isometric paper worksheets laid out in a neat row on a classroom table, each with simple pictogram content: a one-page plan with a persona face and before/after arrows, a state diagram of three circles connected by arrows, a grid-like function table, and a rule table with keyword tags and speech bubbles. Colored pencils and an eraser sit beside them; no laptop on the table. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 응답 규칙표의 default 줄이 빠지는 팀이 많습니다. 반드시 채우게 하세요.

---

# P41 · 아키텍처 점검표 — 데모 완성 기준 10가지

| ✅ | 점검 항목 | 레이어 |
|:---:|---|---|
| ☐ | 화면 코드가 JSON · localStorage를 직접 만지지 않고 `repo.ts`만 부른다 | 🚪 어댑터 |
| ☐ | "AI 응답"이 `engine.ts` 함수 하나 · 반환 모양 고정 | 🧠 도메인 |
| ☐ | 샘플 3개로 처음부터 끝까지 시연된다 | 📄 시드 |
| ☐ | 매칭 안 되는 입력에도 `default` 답이 나온다 | 🧠 도메인 |
| ☐ | 새로고침해도 기록이 남는다 (개발자도구 → Application → Local Storage) | 🗄 데이터 |
| ☐ | localStorage 접근이 try/catch (시크릿 창에서도 안 깨짐) | 🚪 어댑터 |
| ☐ | 비밀번호 · 실명 · 개인정보 미저장 | 🗄 데이터 |
| ☐ | 데모 고지 문구 | 🖥 UI |
| ☐ | 마음 · 고민형이면 `safety.check()`가 엔진보다 먼저 | 🧠 도메인 |
| ☐ | Vercel URL이 친구 휴대폰에서 열린다 | 🌐 배포 |

`체크리스트 카드 · 레이어 색 배지`

🎨 IMAGE PROMPT — An isometric pre-flight inspection scene: the five-layer glass tower stands on a launch platform while a child inspector with a clipboard walks around it; ten small checkpoint lights are arranged along the tower's side, most glowing teal, ready for takeoff. A smartphone on a nearby stand displays a green go signal. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 표는 그대로 인쇄해 팀마다 나눠 주세요. 배포 버튼은 10개 체크 후에 누릅니다.

---

# P42 · 데모 → 서비스: 끝까지 물어야 할 질문

| 영역 | 질문 |
|---|---|
| 예외 처리 | 데이터가 0개일 때 화면은? 500자 · 이모지를 넣으면? |
| 보안 | API 키가 프론트에 노출되지 않았나? 남의 기록을 볼 구멍은? |
| 저장 | 5MB를 넘으면? 브라우저 데이터를 지우면 사라진다는 걸 사용자가 아나? |
| 사용성 | 모바일 버튼 크기는? 처음 보는 친구 5명이 설명 없이 쓰나? |
| 책임 | 이 코드가 **왜 이렇게 동작하는지 내가 설명할 수 있나?** |

> 🎯 **핵심 메시지** — 진짜 AI를 붙이는 건 나중 일이다. 지금은 **화면 · 상태 · 데이터 모양 · 출입구(repo / engine)** 를 설계하는 것이 발명이다.
> **잘 설계된 가짜는 스위치 하나로 진짜가 된다.**

`위 표 · 아래 큰 인용 배너 (머스터드 배경)`

🎨 IMAGE PROMPT — A hopeful isometric closing scene: the lightweight teal pop-up stall from earlier stands at the center with a single large mustard light switch on its side wall; a child's hand is about to flip the switch, and a soft glowing path of light already extends from the stall to a solid navy building and a cloud brain on the horizon at sunrise. clean isometric 3D technical illustration, soft blueprint grid background, navy #1B2A4A, teal #12A4A0, coral #FF6B5B, mustard #F2B705 accents on off-white, soft ambient shadows, rounded geometric shapes, minimal, high detail, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 마지막 문장을 학생들과 함께 소리 내어 읽고 마무리합니다. "잘 설계된 가짜는 스위치 하나로 진짜가 된다."
