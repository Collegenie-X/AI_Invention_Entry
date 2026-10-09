# 🎬 Gamma 프롬프트 — 3일차 · 클론 코딩으로 오늘 MVP까지 (90분 · 쉬는 시간 없음)

> **흐름** — 🟡 **0단계 기획** (앱 1개 선택 · 역기획) → 🔵 **1단계 개발 프로세스** (바이브 코딩: v0 → 코딩 에이전트 → GitHub → Vercel → CI/CD) → 🔴 **2단계 실습** (v0 클론 → MVP 배포 → 토론)
> **주제** — 강사가 직접 만든 앱 3개 (🔥 틴스파크AI · 🎭 TeenDramaro · 🅠 DeepQ) 중 **하나를 골라 클론**
> **원본 자료** — `3일차_0차시-(분석)-v0_Vercel_가짜동작앱_3종_분석.md` · `3일차_1차시_바이브코딩_이론.md` · `3일차_2차시_v0_프론트_실습.md`
> **분량** — 86장 (100장 미만) · 16:9 · 3인 1팀

---

## 📌 사용법 (이 박스는 Gamma에 붙여넣지 않습니다)

| 순서 | 할 일 |
|:---:|---|
| 1 | Gamma → **새로 만들기** → **텍스트 붙여넣기 (Paste in text)** |
| 2 | 아래 **`▼ 여기부터 붙여넣기`** 부터 파일 끝까지 복사 |
| 3 | 카드 나누기 **`---` 기준** · 텍스트 **보존 (Preserve)** · 이미지 **AI 이미지** · 언어 **한국어** · **16:9** |
| 4 | **추가 지시 (Additional instructions)** 칸에 아래 「전역 디자인 지시」 붙여넣기 |
| 5 | 생성 후 `🎨 IMAGE PROMPT` → 카드 이미지 AI 생성 프롬프트로, `🗣️ 노트` → 발표자 노트로 옮기고 본문에서 삭제 |
| 6 | Gamma 한 번 생성 카드 수 제한에 걸리면 **0단계 / 1단계 / 2단계 세 번에 나눠** 생성한 뒤 합치기 |

### ⏱ 90분 운영표 (쉬는 시간 없음 · 한 줄로 이어짐)

| 구간 | 시간 | 단계 | 카드 | 넘겨주는 바통 |
|---|:---:|---|:---:|---|
| 🟡 0단계 | 00:00 – 25:00 | 기획 · **앱 1개 선택** · 역기획 | P01 – P31 | 📋 **클론 기획 캔버스** |
| 🔵 1단계 | 25:00 – 50:00 | 바이브 코딩 개발 프로세스 | P32 – P58 | 🧾 **v0 마스터 프롬프트 + 파이프라인 지도** |
| 🔴 2단계 | 50:00 – 90:00 | v0 클론 실습 → MVP → CI/CD 시연 → 토론 | P59 – P86 | 🌐 **MVP 주소 + 다음 버전 백로그** |

### 전역 디자인 지시 (Additional instructions에 붙여넣기)

```text
- 90분 연속 수업 슬라이드입니다. 반복 설명 없이 0단계 → 1단계 → 2단계가 한 줄로 이어집니다.
- 모든 카드 맨 위에 진행 바를 넣으세요: [🟡 0 기획 · 선택] → [🔵 1 개발 프로세스] → [🔴 2 클론 실습 · MVP] 중 현재 단계를 진하게, 카드의 "⏱" 시간 표시를 오른쪽 위에 작게.
- 단계 색: 0단계 머스터드 #F2B705, 1단계 틸 #12A4A0, 2단계 코랄 #FF6B5B, 완성·배포 초록 #2F9E44, 기본 네이비 #1B2A4A, 배경 크림 #FFFBF2.
- "단계도:" 목록 → 화살표가 있는 가로 프로세스 다이어그램
- "구조도:" 목록 → 상자와 연결선 구조 다이어그램
- "레이어도:" 목록 → 위에서 아래로 쌓인 스택
- "순환:" 목록 → 원형 사이클 다이어그램
- "비교:" 표 → 2~3열 비교 카드
- "바통:" 문장 → 카드 아래쪽 가로 띠 (받은 것 → 만든 것 → 넘길 것)
- 코드 블록은 고정폭 글꼴의 큰 코드 카드. 빈칸 ____ 은 머스터드 밑줄.
- "🎨 IMAGE PROMPT" 문단은 화면에 표시하지 말고 그 카드의 AI 이미지 프롬프트로만 사용.
- "🗣️ 노트" 문단은 발표자 노트로 옮기고 화면에 표시하지 않기.
- 글꼴 Pretendard (제목 ExtraBold, 본문 SemiBold), 코드 JetBrains Mono. 한 카드 글은 최대 6줄, 나머지는 도식.
```

### 이미지 공통 스타일 (모든 프롬프트 끝에 이미 포함됨)

```text
friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9
```

---

▼ 여기부터 붙여넣기

---

# P01 · 클론 코딩으로 오늘 MVP까지
### 강사가 만든 앱 하나를 골라 → 거꾸로 기획하고 → 바이브 코딩으로 → 배포까지

🟡 0 기획 · 선택 → 🔵 1 개발 프로세스 → 🔴 2 클론 실습 · MVP

`⏱ 00:00` `표지 · 왼쪽 제목 · 오른쪽 일러스트`

🎨 IMAGE PROMPT — Three small glowing app models (a looping chat carousel, a tiny theater stage with curtains, and a six-station assembly line) sit on a display shelf; a team of three students picks one model up and places it on a workbench beside a laptop, where a matching new copy is being assembled by a friendly robot from building blocks. A long road with three colored milestones runs from the shelf to a launch pad at the far right. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘은 90분 동안 쉬지 않고 한 줄로 갑니다. 앱 하나를 고르고, 그 앱이 어떻게 기획됐는지 거꾸로 뽑아내고, 똑같이 돌아가는 MVP를 만들어 인터넷에 올립니다.

---

# P02 · 클론 코딩이란? — 명화 따라 그리기

단계도: 👀 **잘 만든 것을 관찰** → 🔍 **구조를 뜯어보기** → ✍️ **설계도로 옮겨 적기** → 🛠 **따라 만들기** → ✨ **나만의 한 끗 더하기**

비교:
| 🙅 그냥 복사 | 🙆 클론 코딩 |
|---|---|
| 코드를 통째로 붙여넣기 | **왜 이렇게 만들었는지** 뜯어보고 다시 짓기 |
| 남는 것: 파일 | 남는 것: **설계하는 눈** |
| 원본 이름 · 로고 그대로 | "○○를 따라 만든 **학습용 클론**" 이라고 밝히기 |

`위 가로 5단 · 아래 2열 비교`

🎨 IMAGE PROMPT — An art class scene: a famous-looking framed painting hangs on an easel, a student studies it with a magnifying glass, sketches its structure as grid lines on paper, then paints a new version on a second canvas while adding one small personal detail with a bright brush stroke. Next to it, a laptop shows the same idea with an app screen being rebuilt from a blueprint. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 화가들도 명화를 따라 그리며 배웁니다. 오늘 따라 만들 원본은 강사가 직접 만든 앱이라 마음껏 뜯어봐도 됩니다. 단, 배포할 때는 "학습용 클론"이라고 밝힙니다.

---

# P03 · 오늘의 90분 — 바통 릴레이 🏃

단계도:
🟡 **0단계 · 기획** — 앱 1개 선택 · 역기획 → 📋 **클론 기획 캔버스**
→ 🔵 **1단계 · 개발 프로세스** — 캔버스를 프롬프트와 파이프라인으로 → 🧾 **v0 마스터 프롬프트 + 파이프라인 지도**
→ 🔴 **2단계 · 실습** — v0 클론 → 배포 → CI/CD → 토론 → 🌐 **MVP 주소 + 다음 버전 백로그**

> 앞 단계의 결과물이 **다음 단계의 재료**예요. 빠뜨리면 다음 주자가 못 뛰어요.

`가로 3구간 릴레이 트랙 · 구간 사이에 바통 아이콘`

🎨 IMAGE PROMPT — A three-lane relay race track seen from above at an angle: the first runner in mustard hands a glowing clipboard baton to the second runner in teal, who hands a glowing scroll baton to the third runner in coral, who crosses a finish line where a smartphone shows a live app and a small crowd cheers. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 수업은 세 번 바통을 넘깁니다. 각 단계 끝에 "바통" 카드가 나오면 결과물을 확인하고 넘어갑니다.

---

# P04 · ⏱ 90분 타임라인 (쉬는 시간 없음)

단계도:
🟡 **00 – 25분** 0단계 기획 — 3앱 체험 · 1개 선택 · 역기획 7단계 · 캔버스
→ 🔵 **25 – 50분** 1단계 개발 프로세스 — 바이브 코딩 · v0 · GitHub · 코딩 에이전트 · Vercel · CI/CD
→ 🔴 **50 – 72분** 2단계 v0 클론 실습 — 뼈대 · 데이터 · 엔진 · 탐정 · 배포
→ 🔴 **72 – 80분** CI/CD 연결 시연 — GitHub · 에이전트 · Preview · Production
→ 🟢 **80 – 90분** MVP 갤러리 · 토론 · 다음 버전

`가로 타임라인 · 시간 비율대로 폭 · 마지막 초록`

🎨 IMAGE PROMPT — A long horizontal clock-ribbon timeline floating over a classroom: the ribbon is divided into five colored segments of different widths (mustard, teal, coral, coral, green), each segment topped with a small icon scene — a magnifying glass over an app, a pipeline of connected machines, a laptop with a painting robot, a conveyor belt with check marks, and a circle of students talking. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 타임라인을 칠판 옆에 계속 띄워 둡니다. 밀리면 72~80분의 CI/CD 시연을 강사 시연 3분으로 줄입니다. 토론 10분은 지킵니다.

---

# P05 · 오늘 끝에 보게 될 그림 — 먼저 보여 주기

구조도 (오늘 만들 MVP):
📱 손님 → 🏠 `우리팀-클론.vercel.app` → 🖥 화면 (v0) → 🚪 `repo.ts` · 🧠 `engine.ts` → 📄 시드 JSON · 🗄 localStorage

단계도 (오늘 연결할 파이프라인):
📋 기획 캔버스 → 🎨 v0 → 🐙 GitHub → 🤖 코딩 에이전트 → ✅ CI 검사 → 🚀 Vercel 자동 배포 → 🔗 URL → 🙋 피드백 → 다시 📋

`위 구조도 · 아래 파이프라인 · 둘 다 완성 상태 (초록)`

🎨 IMAGE PROMPT — A finished-state overview poster: the top half shows a compact app building with a screen facade, two small doors at its base (one to a shelf of paper data sheets, one to a small gear engine) and a little drawer; the bottom half shows a factory pipeline of connected stations — a planning desk, a painting studio, an octopus-like storage vault, a robot workbench, a checkpoint gate with green lights, a launch tower, and phones receiving a link — with a curved arrow looping back to the desk. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 목적지를 먼저 보여 주면 90분 동안 길을 잃지 않습니다. 위는 "무엇을 짓나", 아래는 "어떻게 짓나"입니다.

---

# P06 · 🟡 0단계 · 기획 — 하나를 고르고, 거꾸로 기획한다

단계도: 🔎 **3앱 체험** → 🧭 **강사의 기획 보기** → ✋ **1개 선택** → 🔁 **역기획 7단계** → 📋 **클론 기획 캔버스**

> 이 단계에서는 **키보드를 잡지 않습니다.** 눈 · 손가락 · 종이만.

`⏱ 00:00 – 25:00` `섹션 표지 · 머스터드`

🎨 IMAGE PROMPT — A section title scene in mustard tones: three students sit at a table with phones open to three different apps, paper sheets and colored pencils spread out, a closed laptop pushed to the side on purpose; above them a large thought bubble contains a blueprint being drawn backward from a finished building. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 0단계 25분은 전부 기획입니다. 노트북은 닫아 두게 하세요.

---

# P07 · 강사가 직접 만든 앱 3개 — 지금 열어 보세요 📱

비교:
| 🔥 **틴스파크AI** | 🎭 **TeenDramaro · 마음무대** | 🅠 **DeepQ · 딥큐** |
|---|---|---|
| 답은 끝까지, 질문은 넓게 — **질문 코칭** | 타로 × 사이코드라마 × AI 디렉터 — **내 이야기 연출** | 객관식 사진 → 서술형 + 루브릭 채점 — **문제 변환** |
| askback-omega.vercel.app | teen-dramaro.vercel.app | deepq-omega.vercel.app |

단계도: QR 찍기 → `/about` 1분 읽기 → 체험 2분 → "무엇을 하는 앱?" 한 문장 말하기

`3열 카드 · 각 카드 아래 QR 자리`

🎨 IMAGE PROMPT — Three large smartphone mockups standing upright on a stage, each glowing with a different themed screen: one with spiraling chat bubbles and a small flame, one with a tiny theater curtain and a tarot card, one with a test paper turning into a scorecard. Students in front of each phone scan it with their own phones, light beams connecting them. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 팀원 3명이 각자 다른 앱을 하나씩 맡아 3분 체험한 뒤 서로 한 문장으로 소개하게 하면 시간이 절약됩니다.

---

# P08 · 세 앱의 공통 비밀 — 서버 0 · 로그인 0 · AI 호출 0

단계도: 사용자 입력 → 🔎 **규칙** (키워드 · 버튼) → 📄 **미리 써 둔 답 JSON** 에서 고르기 → ⏳ "생각 중…" → 💬 답

| 질문 | 답 |
|---|---|
| 기술 | Next.js + Vercel |
| AI처럼 보이는 원리 | JSON 시나리오 + 규칙 + 로딩 딜레이 |
| 사용자 기록 | 브라우저 localStorage (이 기기에만) |
| 그럼 핵심은? | **코드가 아니라 기획 — 무엇을, 어떤 순서로, 어떤 답을 준비했나** |

`위 가로 단계도 · 아래 표 · 마지막 줄 머스터드`

🎨 IMAGE PROMPT — A magician's stage reveal: from the front a glowing app seems to think and talk like magic; from a cutaway side view, behind the curtain there is simply a neat filing cabinet of pre-written answer cards, a sorting funnel, and a small hourglass operated by a cheerful helper. No server racks anywhere. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 개발자도구 네트워크 탭을 열면 AI 요청이 없습니다. 그런데도 AI처럼 느껴지는 건 기획이 좋았기 때문입니다. 그래서 0단계가 기획입니다.

---

# P09 · MVP란? — 오늘 만드는 "가장 작은 진짜"

비교:
| 🙅 케이크를 층별로 | 🙆 바퀴 → 킥보드 → 자전거 |
|---|---|
| 1층(빵)만 만들면 **먹을 수 없음** | 킥보드도 **탈 수 있음** |
| 다 만들어야 쓸 수 있음 | **매 단계 쓸 수 있음** |

> **MVP (Minimum Viable Product)** = 핵심 경험 **하나**가 **처음부터 끝까지** 되는 가장 작은 제품
> 클론 MVP = 원본의 **핵심 흐름 1개**만 똑같이 돌아가게

`2열 비교 · 아래 정의 배너`

🎨 IMAGE PROMPT — Two rows of evolution: the upper row shows a cake being built layer by layer where a sad kid cannot eat the half-built base; the lower row shows a kid happily riding a scooter, then a bicycle, then a small motorbike, each stage usable and fun. A big check mark glows over the lower row. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 원본 앱의 기능을 전부 따라 하면 90분 안에 못 끝납니다. 핵심 흐름 하나만 끝까지 되게 하는 것이 오늘의 MVP입니다.

---

# P10 · 강사는 이렇게 기획했다 — 기획 8단계

단계도:
① **문제** → ② **페르소나** → ③ **한 줄 정의** → ④ **패턴** (대화 루프 · 막 · 위자드) → ⑤ **화면 흐름** → ⑥ **기능 정의** → ⑦ **데이터 · 가짜 AI 규칙** → ⑧ **안 만들 것** → (그다음에야) v0

> 키보드를 잡기 전에 **⑧까지 종이 위에서** 끝났다.

`가로 8단 (2줄 지그재그) · 마지막에 노트북 아이콘`

🎨 IMAGE PROMPT — An eight-step winding paper trail across a large desk, each step a small paper card with a pictogram: a question mark with a frown, a person silhouette, a single speech line, three branching shapes, connected screen boxes, a checklist, a data sheet with a gear, and a pair of scissors cutting a card. At the end of the trail a laptop finally opens with a glow. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 세 앱 모두 이 순서로 기획했습니다. 우리는 이걸 거꾸로 거슬러 올라갑니다. 그게 역기획입니다.

---

# P11 · 기획 vs 역기획 — 클론 코딩의 기획은 거꾸로

비교:
| ➡️ 기획 (강사) | ⬅️ 역기획 (우리) |
|---|---|
| 문제 → … → 화면 | 화면 → … → 문제 |
| 상상해서 설계 | **써 보고 관찰해서** 설계 |
| 빈 종이에서 시작 | **완성품에서 시작** |

단계도 (역기획 7단계):
🖐 써 보기 → 🗺 화면 지도 → 🔁 상태 흐름 → 🧩 기능 뽑기 · MVP 자르기 → 📄 데이터 뽑기 → 🧠 가짜 AI 규칙 뽑기 → ✨ 한 끗 · 안 만들 것

`위 2열 비교 · 아래 화살표가 왼쪽으로 가는 7단`

🎨 IMAGE PROMPT — A finished toy building on the right side of a table being carefully taken apart by three students, its pieces sorted left into labeled-by-color trays and finally flattened into a blueprint sheet at the far left; a dotted arrow runs from right to left across the table to show the reverse direction. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 역기획은 처음 기획보다 쉽습니다. 이미 정답(완성품)이 눈앞에 있으니까요. 그래서 첫 프로젝트로 클론 코딩이 좋습니다.

---

# P12 · 🔥 앱 ① 틴스파크AI — 기획 카드

| 기획 칸 | 내용 |
|---|---|
| 😣 문제 | 학생들이 AI에게 "짜줘"만 하고, **무엇을 왜 만드는지 설계를 안 한다** |
| 👤 페르소나 | 프로젝트를 시작하는 청소년 |
| 💬 한 줄 정의 | 답은 끝까지, **질문은 넓게** — 질문하는 법을 코칭하는 AI 기획 코치 |
| 🔁 Before → After | "앱 만들어 줘" → "센서값 400은 어디서 왔지?"까지 스스로 묻기 |
| 🧭 패턴 | 🅰 **대화 루프 + 턴 카운터** |
| 🚫 안 만든 것 | 가입 · 비밀번호 · 서버 저장 (기록은 이 기기에만) |

`왼쪽 표 · 오른쪽 일러스트`

🎨 IMAGE PROMPT — A teenage student at a desk talking with a friendly glowing coach character on a laptop screen; their speech bubbles form a widening spiral, each new bubble slightly bigger and branching into six small directions like a compass rose. A flame spark sits at the top of the spiral and two neat documents wait beside the laptop. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 앱의 핵심은 "되묻기"입니다. AI가 답만 주지 않고 질문을 넓히게 만듭니다.

---

# P13 · 🔥 틴스파크 — 화면 흐름 · 핵심 기능

단계도 (대화 루프):
＋ 새 프로젝트 → **형식 선택** (논문 · 리서치 · 캠페인 · 서비스 · 제품) → **질문** → **답 + 되묻기** (O1~O5) → 2턴마다 **역질문 🧩** → 10턴 **리포트** → **.md 내보내기**

| 핵심 기능 | 가짜 AI 규칙 | 클론 난이도 |
|---|---|:---:|
| 질문 수준 O1~O5 | "짜줘" = O1 · 조건어 의문문 = O3 | ★★ |
| 답 + 되묻기 | 키워드 → 답 템플릿 + followUp | ★★★ |
| 여섯 축 버튼 | 왜 · 맥락 · 제약 · 기준 · 검증 · 버릴 것 | ★ |

`위 원형 루프 + 바깥 분기 · 아래 표`

🎨 IMAGE PROMPT — A circular carousel track with a counter dial in the center: small tokens move between a question booth and an answer booth; every second lap a side gate opens to a puzzle-stamp booth, and on the tenth lap a larger gate opens to a report podium; an exit leads to a printer producing two documents. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 자유 질문에 답해야 해서 가짜로 만들기 가장 어렵습니다. 고르는 팀에는 "여섯 축 버튼"부터 클론하라고 안내하세요.

---

# P14 · 🎭 앱 ② TeenDramaro · 마음무대 — 기획 카드

| 기획 칸 | 내용 |
|---|---|
| 😣 문제 | 고민을 말로 꺼내기 어렵고, **늘 같은 선택을 반복**한다 |
| 👤 페르소나 | 관계 · 마음 고민이 있는 청소년 |
| 💬 한 줄 정의 | 내가 만든 캐릭터를 무대에 올려, **늘 하던 선택을 찾고 다른 선택을 해 본다** |
| 🔁 Before → After | "몰라, 그냥 그래" → "다음엔 이렇게 말해 볼래" 한 문장 |
| 🧭 패턴 | 🅱 **시나리오 막 머신 + 안전 가드** |
| 🚫 안 만든 것 | 서버 저장 · 진단 · 점술 (타로는 **말문 여는 소품**) |
| 🛡 기획 단계의 약속 | 한 판 25분 · 하루 3번 · 위험 신호 시 109 · 1388 안내 |

`왼쪽 표 · 오른쪽 일러스트`

🎨 IMAGE PROMPT — A miniature theater with red velvet curtains half open; a small clay character figure stands in a spotlight on stage, a large tarot card floats above as a prop, a director's chair with a megaphone sits in front, and a soft protective shield glow surrounds the whole stage. A small chest of drawers on the side holds collected cards. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 마음을 다루는 앱은 기획 단계에서 안전 약속부터 정합니다. 기능보다 먼저입니다.

---

# P15 · 🎭 TeenDramaro — 화면 흐름 · 안전 설계

단계도 (막 머신):
접수 (주제 칩) → 캐릭터 (이름 · 약점 · 강점) → 카드 뽑기 → **1막** 펼치기 → **2막** 안쪽 → **3막** 마주침 → **4막** 거울 → **5막** 리플레이 → **커튼콜** → 서랍장 저장

구조도 (안전이 맨 앞):
모든 입력 → 🛡 **safety 검사** → (위험) 안전 멈춤 · 상담전화 / (통과) → 🎬 디렉터 질문

| 핵심 기능 | 가짜 AI 규칙 | 클론 난이도 |
|---|---|:---:|
| 막별 디렉터 질문 | 막마다 준비한 질문을 순서대로 · `{이름}` 치환 | ★★ |
| 4막 거울 | **사용자가 쓴 문장만** 다시 보여 주기 | ★ |

`위 가로 타임라인 · 가운데 방패 구조도 · 아래 표`

🎨 IMAGE PROMPT — A long theater corridor of five connected stage rooms with curtained doorways and a play-button pedestal before each curtain; at the very entrance stands a gentle gatehouse with a coral shield scanning every incoming speech bubble, redirecting one bubble kindly to a calm side room with a warm telephone and a caring helper. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 다음 막으로 넘기는 건 항상 사용자 버튼입니다. 순서가 고정이라 클론하기 쉽습니다. 이 앱을 고른 팀은 safety 검사를 반드시 넣어야 합니다.

---

# P16 · 🅠 앱 ③ DeepQ · 딥큐 — 기획 카드

| 기획 칸 | 내용 |
|---|---|
| 😣 문제 | 객관식만으로는 생각하는 힘을 보기 어렵고, **서술형은 만들기 · 채점이 힘들다** |
| 👤 페르소나 | 서술형 평가를 준비하는 선생님 |
| 💬 한 줄 정의 | 객관식 **사진 한 장** → 서술형 문제 + 루브릭 채점 + 공유 |
| 🔁 Before → After | 문제 하나에 30분 → 샘플 하나로 1분 만에 서술형 + 채점 기준 |
| 🧭 패턴 | 🅲 **위자드 파이프라인 + 버전 + 채점** |
| 🚫 안 만든 것 | 실제 OCR · 실제 AI 채점 · 다른 기기 공유 (→ 샘플 텍스트 · 키워드 규칙으로 대체) |

`왼쪽 표 · 오른쪽 일러스트`

🎨 IMAGE PROMPT — A smartphone photographs a printed multiple-choice test sheet; a beam carries the sheet into a friendly machine that outputs a longer open-ended question card and a rubric scorecard with four colored bars, while a teacher figure stands beside it holding a red pen and smiling with relief. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — DeepQ는 앱 스스로 "생성은 JSON 템플릿, 채점은 키워드 규칙"이라고 밝힙니다. 기획부터 가짜와 진짜를 구분해 둔 모범 사례입니다.

---

# P17 · 🅠 DeepQ — 화면 흐름 · 핵심 기능

단계도 (위자드 6단계):
1 **업로드** (사진 · 직접 입력 · 🧪 샘플) → 2 **OCR** (샘플 텍스트) → 3 **변환** (서술형 4유형) → 4 **다듬기** (v1 → v2 → v3) → 5 **확정** (모범답안 + 루브릭) → 6 **채점** (2회 · 편차) → 📈 성장

| 핵심 기능 | 가짜 AI 규칙 | 클론 난이도 |
|---|---|:---:|
| 샘플로 바로 시작 | `samples.json` 3개 | ★ |
| 변환 | 샘플 id → 미리 써 둔 서술형 | ★ |
| 루브릭 채점 | 항목별 키워드 포함 → 점수 | ★★ |

`위 가로 6단 화살표 · 아래 표`

🎨 IMAGE PROMPT — A tidy factory assembly line with six sequential stations: an upload tray, a scanner, a press turning one card into four varied cards, a polishing station stacking three versions, a sealing station stamping a rubric seal, and a scoring booth with two judges; after the line, a small staircase-shaped bar chart rises. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 샘플 3개만 있으면 처음부터 끝까지 시연됩니다. 그래서 첫 클론으로 가장 추천합니다.

---

# P18 · 세 앱 한눈에 — 무엇이 다르고, 무엇이 어렵나

비교:
| | 🔥 틴스파크 | 🎭 TeenDramaro | 🅠 DeepQ |
|---|---|---|---|
| 패턴 | 🅰 대화 루프 | 🅱 막 머신 | 🅲 위자드 |
| 다음 단계는 누가? | **턴 수가 자동** | **사용자 버튼** | **사용자 버튼** |
| 가짜 AI 핵심 | 분류 + 답 + 되묻기 | 막별 질문 + 되돌려주기 | 템플릿 변환 + 키워드 채점 |
| 시드 JSON | formats · responses · quiz | cards · acts · safety | samples · templates |
| 특별 모듈 | 내보내기 | 🛡 안전 · 이용 제한 | 2회 채점 |
| 90분 클론 난이도 | ★★★ | ★★ | ★ |

`3열 비교 · 난이도 행 별 아이콘 크게`

🎨 IMAGE PROMPT — Three pedestals of different heights like a podium, each holding one mechanical model: a circular carousel on the tallest pedestal with three stars, a five-curtain theater on the middle one with two stars, and a six-station assembly line on the lowest with one star and a welcoming mustard mat in front of it. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 별이 많을수록 가짜로 만들기 어렵습니다. 선택은 다음 장에서 합니다.

---

# P19 · ✋ 하나를 고른다 — 선택 사다리

단계도 (판별):
❓ **처음 만들어 보나요?** → 네 → 🅠 **DeepQ** (추천)
→ 아니요 → ❓ **이야기 · 역할극이 좋아요?** → 네 → 🎭 **TeenDramaro** (🛡 안전 검사 필수)
→ 아니요 → ❓ **대화 · 질문 코칭이 좋아요?** → 네 → 🔥 **틴스파크** (여섯 축부터)

> 🗳 팀원 3명이 **손가락으로 동시에** 가리키기 → 다르면 **난이도 낮은 쪽**으로

`위에서 아래로 내려가는 결정 트리 · DeepQ 머스터드`

🎨 IMAGE PROMPT — A crossroads signpost in a small park with three paths: a straight path leading to the assembly line model (lit with a mustard welcome glow), a winding path to the theater, and a circular path to the carousel. A team of three students stands at the signpost pointing together at the same time, one holding a map. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 고르는 데 1분 이상 쓰지 않게 합니다. 반 전체가 하나로 통일하면 강사 시연과 실습이 맞물려 더 매끄럽습니다.

---

# P20 · 선택했다면 — 오늘의 클론 목표를 한 줄로

단계도: ✋ 선택한 앱 → ✂️ **핵심 흐름 1개** 고르기 → 🎯 **클론 목표 한 줄** 쓰기

| 선택 | 오늘 클론할 핵심 흐름 (MVP) | 다음 버전으로 미룰 것 |
|---|---|---|
| 🅠 DeepQ | 🧪 샘플 선택 → 서술형 변환 → 답안 입력 → **루브릭 채점** | 다듬기 버전 · 2회 채점 · 라이브러리 · Fork |
| 🎭 TeenDramaro | 주제 칩 → 캐릭터 → **1~3막 질문** → 거울 → 커튼콜 저장 | 4·5막 리플레이 · 이용 제한 · 예시 무대 |
| 🔥 틴스파크 | 형식 선택 → 질문 → **답 + 되묻기** (키워드 5개) | O단계 진단 · 2문 1역 · 10문 리포트 |

> 🎯 "우리는 ____ 의 ____ 흐름을, ____ 까지 되게 클론한다."

`위 3단 · 가운데 표 · 아래 빈칸 문장 (머스터드)`

🎨 IMAGE PROMPT — A student holding large scissors carefully cuts one glowing path out of a big complex app map spread on the table, leaving the rest of the map for later in a labeled-by-color folder; the cut-out path is pinned on a board above the table as today's goal. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 한 줄이 오늘의 MVP 정의입니다. 클론 기획 캔버스 맨 위에 그대로 적습니다.

---

# P21 · 역기획 ① 써 보기 — 사용자가 되어 3분 관찰

단계도: 🙋 페르소나가 된다 → 📱 처음부터 끝까지 써 본다 → 👆 누른 것 · 📝 입력한 것 · 👀 나온 것을 **순서대로** 적는다

| # | 내가 한 행동 | 앱이 보여 준 것 | 그때 화면 주소 |
|:---:|---|---|---|
| 1 | 🧪 샘플 문제 클릭 | 문제 텍스트 | `/` |
| 2 | 다음 → | 서술형 4유형 | `/` (2단계) |
| 3 | 답안 입력 · 채점 | 항목별 점수 + 힌트 | `/` (6단계) |

> 🔍 관찰 팁 — **주소창**이 바뀌는지, **새로고침**해도 남는지 꼭 보기

`위 가로 3단 · 아래 관찰 기록 표 (DeepQ 예시)`

🎨 IMAGE PROMPT — A student detective in a cozy hoodie uses a smartphone app while a teammate takes notes on a clipboard in three columns and a third teammate watches the browser address bar with a magnifying glass; small footprints on the table show the order of taps. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 역할을 나눕니다: 한 명은 사용, 한 명은 기록, 한 명은 주소창과 새로고침 담당입니다.

---

# P22 · 역기획 ② 화면 지도 — 라우트 맵 그리기

구조도 (DeepQ 클론 예시):
🏠 `/` **Play** (위자드) ↔ 📚 `/problems` 내가 만든 문제 ↔ 🔖 `/about` 소개
⏭ `/library` 공유 라이브러리 → **다음 버전**

| 라우트 | 역할 | 데이터 | 오늘? |
|---|---|---|:---:|
| `/` | 위자드 (샘플 → 변환 → 채점) | samples · templates | ✅ |
| `/problems` | 내가 만든 문제 목록 | localStorage | ✅ |
| `/about` | 소개 스토리 | 정적 | ✅ |
| `/library` | 공유 · Fork | library.json | ⏭ |

`왼쪽 화면 상자 지도 · 오른쪽 표`

🎨 IMAGE PROMPT — A hand-drawn style floor plan of a small house viewed from above: a large main room with a staircase of six small steps inside, a side room with shelves of saved cards, a front porch with a storytelling board, and a fourth room drawn in dotted lines as a future extension. Students trace hallways between rooms with colored markers. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 화면 지도는 v0 프롬프트의 [라우트] 칸이 됩니다. 점선 방은 오늘 안 짓습니다.

---

# P23 · 역기획 ③ 상태 흐름 — "지금 몇 단계?"를 그린다

구조도 (상태머신 · DeepQ 클론):
[샘플 선택] —샘플 클릭→ [문제 보기] —다음→ [서술형 변환] —답안 쓰기→ [답안 입력] —채점→ [결과 · 힌트] —저장→ [내 문제]

| 패턴 | 상태 단위 | 다음으로 넘기는 것 |
|---|---|---|
| 🅰 틴스파크 | turn | 턴 수 (자동) |
| 🅱 TeenDramaro | act | ▶ 다음 장면 버튼 |
| 🅲 DeepQ | step | 다음 → 버튼 |

> 상태 이름 = 화면 위 **진행 바**의 칸 이름

`위 상자-화살표 상태도 · 아래 표`

🎨 IMAGE PROMPT — A board game path with six round stations connected by arrows, a game piece moving from station to station; above the board a matching progress bar with six segments lights up one segment at a time, in sync with the game piece. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 화살표 위에 "무엇을 하면 넘어가는지"를 꼭 적게 하세요. 그게 버튼이 됩니다.

---

# P24 · 역기획 ④ 기능 뽑기 → MVP로 자르기 ✂️

단계도: 🧩 보이는 기능 **전부** 포스트잇에 → 🗂 **Must / Later** 두 칸으로 → ✂️ Must는 **3~5개**까지만

| ID | 기능 | 입력 → 처리 (가짜) → 출력 | 저장 | 오늘 |
|---|---|---|---|:---:|
| F-01 | 샘플 시작 | 클릭 → samples.json → 문제 | — | ✅ Must |
| F-02 | 서술형 변환 | 다음 → templates.json → 4유형 | localStorage | ✅ Must |
| F-03 | 루브릭 채점 | 답안 → 키워드 규칙 → 점수 | localStorage | ✅ Must |
| F-04 | 힌트 | 0점 항목 → "+2점" 문장 | — | ✅ Must |
| F-05 | 다듬기 v1~v3 | — | — | ⏭ Later |
| F-06 | 공유 · Fork | — | — | ⏭ Later |

`위 3단 · 아래 기능 정의서 · Later 회색`

🎨 IMAGE PROMPT — A whiteboard split into two big columns: on the left a tight cluster of four bright sticky notes under a glowing check mark, on the right a looser cloud of faded sticky notes under a small clock icon; a student moves one note from left to right while a teammate holds up four fingers. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 원본에 있다고 다 넣지 않습니다. 이 표가 v0 프롬프트의 [기능 목록]이 됩니다.

---

# P25 · 역기획 ⑤ 데이터 뽑기 — 화면에 보인 글은 어디서 왔을까?

구조도:
화면에 보인 것 → ❓ **모두에게 똑같나?**
→ 네 → 📄 **시드 JSON** (앱과 함께 배포) — 샘플 문제 · 변환 문장 · 루브릭
→ 아니요 → 🗄 **localStorage** (이 기기에만) — 내가 만든 문제 · 내 답안 · 점수

```jsonc
// data/samples.json — 샘플 3개 (빈 화면 금지)
[{ "id": "sci-01", "subject": "과학", "title": "광합성에 필요한 요소",
   "text": "다음 중 광합성에 필요한 요소가 아닌 것은? ① 빛 ② 물 ③ 이산화탄소 ④ 산소" }]
```
localStorage 키: `mq:problems` · `mq:submissions`

`위 분기 구조도 · 아래 코드 카드`

🎨 IMAGE PROMPT — A sorting station where items from an app screen fall onto a split conveyor: identical printed sheets slide left into a large shared library shelf, while personal notes with a small star slide right into a single wooden drawer belonging to one student. A student operates the sorting lever. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 질문 하나로 데이터 자리가 정해집니다. "모두에게 똑같나?" 샘플은 꼭 3개 이상 준비합니다.

---

# P26 · 역기획 ⑥ 가짜 AI 규칙 뽑기 — 응답 규칙표

단계도: 원본에 **입력을 바꿔 가며** 넣어 보기 → 답이 바뀌는 **단어** 찾기 → 규칙표로 적기 → **default** 답 꼭 넣기

| # | 입력 (답안) | 매칭 키워드 | 앱의 답 | 다음 |
|:---:|---|---|---|---|
| 1 | "빛이 없어서 양분을 못 만들어서" | 광합성 · 양분 · 빛 | 핵심 개념 3/3 · 근거 2/2 | 결과 |
| 2 | "시들었다" | (없음) | 핵심 0/3 · 💡 "광합성과 연결하면 +3점" | 결과 |
| default | 그 외 | — | "조금 더 자세히 써 볼까요?" | 그대로 |

> 🔑 원본이 **생성**하는 게 아니라 **고르는** 것임을 확인하는 순간

`위 4단 · 아래 규칙표 · default 행 머스터드`

🎨 IMAGE PROMPT — A student types different test sentences into an app on a laptop while a teammate watches which answer card pops out of a vending-machine-like box; each time a matching keyword tag lights up on the machine's side, and the third teammate records the pairs on a grid sheet. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 표가 1단계의 `engine.ts` 규칙이 됩니다. 규칙 3개 + default면 충분합니다.

---

# P27 · 역기획 ⑦ 나만의 한 끗 · 안 만들 것 · 정직한 고지

구조도:
✨ **한 끗 1개** — 원본과 다른 점 하나 (과목 · 색 · 대상 · 샘플 주제)
🚫 **안 만들 것** — Later로 미룬 기능 + 서버 · 로그인 · 실제 AI
🏷 **정직한 고지** — "○○를 따라 만든 학습용 클론 · 규칙 기반 시뮬레이션 · 데이터는 이 브라우저에만"

| 한 끗 예시 | 🅠 DeepQ 클론 | 🎭 TeenDramaro 클론 | 🔥 틴스파크 클론 |
|---|---|---|---|
| 대상 바꾸기 | 초등 과학 → **중학 사회** | 친구 관계 → **발표 불안** | 서비스 → **발명품 기획** |

`위 3갈래 · 아래 예시 표`

🎨 IMAGE PROMPT — A finished clone app model on a pedestal with one small part painted a different bright color as its unique touch; beside it a pair of scissors and a small box of postponed parts with a clock, and a small honest signboard hanging at the base of the pedestal. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 한 끗은 딱 하나만. 원본 이름·로고는 쓰지 않고, 우리 앱 이름을 새로 짓습니다.

---

# P28 · 📋 클론 기획 캔버스 — 0단계의 결과물

```
┌──────────────────────────────────────────────────────────┐
│ 📋 클론 기획 캔버스                 팀: ______           │
├──────────────────────────────────────────────────────────┤
│ 🎯 클론 목표 : ____ 의 ____ 흐름을 ____ 까지              │
│ 🏷 우리 앱 이름 : ________   원본 : ________              │
│ 🧭 패턴 : ☐ A 대화 루프  ☐ B 막 머신  ☐ C 위자드          │
├──────────────────────────────────────────────────────────┤
│ 🗺 라우트 : / ______  /______  /about                     │
│ 🔁 상태 : [____] → [____] → [____] → [결과]               │
│ 🧩 Must 기능 : F-01 ____ F-02 ____ F-03 ____              │
├──────────────────────────────────────────────────────────┤
│ 📄 시드 JSON : ______.json (샘플 3) · ______.json          │
│ 🗄 저장 키 : ______:______                               │
│ 🧠 규칙 : 키워드 → 답 3줄 + default                       │
├──────────────────────────────────────────────────────────┤
│ ✨ 한 끗 : ______   🚫 안 만들 것 : ______                │
└──────────────────────────────────────────────────────────┘
```

`양식 카드 · 인쇄용 · 칸마다 앞 카드 번호 작게 (P20~P27)`

🎨 IMAGE PROMPT — A large printed canvas sheet on a table divided into neat boxed sections with pictogram headers (a target, a name tag, three branching shapes, a map, a flow arrow, a puzzle piece, a data sheet, a drawer, a gear, a sparkle and scissors); three students fill it in together with markers, sticky notes from earlier stuck around its edges. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 앞의 역기획 7장을 한 장으로 모은 것입니다. 이 캔버스가 첫 번째 바통입니다.

---

# P29 · 캔버스 예시 — 🅠 DeepQ 클론 "미니딥큐"

| 칸 | 작성 예 |
|---|---|
| 🎯 클론 목표 | DeepQ의 **샘플 → 변환 → 채점** 흐름을 **점수와 힌트**까지 |
| 🏷 이름 · 패턴 | **미니딥큐** · 🅲 위자드 |
| 🗺 라우트 | `/` 위자드 · `/problems` 내 문제 · `/about` |
| 🔁 상태 | [샘플 선택] → [서술형 보기] → [답안 입력] → [결과 · 힌트] |
| 🧩 Must | F-01 샘플 시작 · F-02 변환 · F-03 루브릭 채점 · F-04 힌트 |
| 📄 시드 | `samples.json` (3) · `templates.json` (변환 + 루브릭) |
| 🗄 저장 키 | `mq:problems` · `mq:submissions` |
| ✨ 한 끗 | 과목을 **중학 사회**로 · 🚫 다듬기 · 공유 · 2회 채점 |

`표 · 오른쪽에 완성된 캔버스 축소 그림`

🎨 IMAGE PROMPT — A completed planning canvas pinned on a corkboard with all boxes filled with small doodles: a stack of three sample cards, a staircase of four steps, a rubric with four bars, and a small social-studies globe as the unique touch; a proud student taps the canvas with a pen. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이후 1단계 · 2단계의 모든 예시는 이 "미니딥큐"로 이어집니다. 다른 앱을 고른 팀은 같은 칸을 자기 앱으로 채우면 됩니다.

---

# P30 · 캔버스 예시 — 시드 JSON + 루브릭 규칙

```jsonc
// data/templates.json — 샘플별 변환 결과 + 루브릭 (= 가짜 AI의 두뇌)
{ "sci-01": {
    "converted": [{ "type": "원리 설명",
      "text": "식물을 빛이 없는 상자에 3일간 두었더니 잎이 시들었다. 그 이유를 광합성과 연결하여 설명하시오." }],
    "rubric": [
      { "name": "핵심 개념", "max": 3, "keywords": ["광합성", "양분", "포도당"] },
      { "name": "논리",     "max": 3, "keywords": ["때문에", "그래서", "따라서"] },
      { "name": "근거",     "max": 2, "keywords": ["빛", "에너지"] },
      { "name": "완성도",   "max": 2, "minLength": 30 } ] } }
```

구조도: 답안 → 루브릭 항목마다 **키워드 포함?** → 점수 합계 → 0점 항목 → 💡 힌트

`위 코드 카드 · 아래 4단 구조도`

🎨 IMAGE PROMPT — A neat recipe box opened to reveal index cards: one card with a question illustration of a plant in a dark box, and four rubric cards each with a small sieve of a different mesh size; a student's answer sheet passes through the four sieves, and small score tokens drop into a cup below. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 JSON은 종이에 대충 써 와도 됩니다. 2단계에서 v0에 그대로 붙여넣습니다.

---

# P31 · 🏃 바통 ① — 0단계 → 1단계

바통: 📋 **클론 기획 캔버스** (목표 · 라우트 · 상태 · Must 기능 · 시드 JSON · 규칙 · 한 끗) → 🔵 1단계에서 **v0 마스터 프롬프트**와 **개발 파이프라인**으로 바뀝니다

✅ 넘기기 전 체크
- ☐ 클론 목표 한 줄이 있다
- ☐ Must 기능이 5개 이하다
- ☐ 샘플 3개 + default 규칙이 있다
- ☐ 안 만들 것이 적혀 있다

`⏱ 25:00` `가로 바통 띠 · 체크리스트`

🎨 IMAGE PROMPT — The mustard relay runner hands a glowing clipboard baton to the teal runner at a clearly marked exchange zone on the track; a small checklist with four green check marks floats above the handoff. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 25분 지점입니다. 캔버스가 비어 있는 팀은 "미니딥큐" 예시를 그대로 가져가도 된다고 안내하세요. 흐름이 끊기지 않는 것이 더 중요합니다.

---

# P32 · 🔵 1단계 · 개발 프로세스 — 캔버스가 인터넷 주소가 되기까지

단계도: 📋 **캔버스** → 🗣 **바이브 코딩** → 🎨 **v0** → 🐙 **GitHub** → 🤖 **코딩 에이전트** (Claude Code · Gemini CLI · Codex) → 🚀 **Vercel** → 🔁 **CI/CD**

> 이 단계는 **지도를 머리에 넣는 시간**입니다. 손은 2단계에서 움직입니다.

`⏱ 25:00 – 50:00` `섹션 표지 · 틸`

🎨 IMAGE PROMPT — A section title scene in teal tones: the planning canvas from before is placed at the start of a long glowing factory pipeline that winds through a painting studio, a vault shaped like a friendly octopus, a robot workbench, a checkpoint gate and a launch tower, ending with a link beam reaching smartphones; three students stand at the start holding the canvas and looking down the line. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 0단계에서 만든 캔버스를 책상 위에 펼친 채로 1단계를 듣게 하세요. 모든 설명이 그 캔버스와 연결됩니다.

---

# P33 · 바이브 코딩 = 말한다 → 본다 → 다듬는다 🎼

순환: 🗣 **말한다** (프롬프트) → 👀 **본다** (미리보기 · 원본과 비교) → 🔧 **다듬는다** (한 줄 수정) → 🗣 …

구조도 (지휘자와 연주자):
🎼 **나 = 지휘자** (무엇을 · 왜 · 누구를 위해 · 써도 안전한가)
→ 🎻 v0 = 화면 · 🎺 코딩 에이전트 = 코드 · 🥁 Vercel = 배포 · 🐙 GitHub = 악보 보관

`왼쪽 원형 3칸 · 오른쪽 지휘자 트리`

🎨 IMAGE PROMPT — A student conductor on a small podium waving a baton toward a semicircle of friendly robots: one robot paints a website layout in the air with a violin bow, one robot plays a trumpet from which code blocks float out, one robot plays drums that launch a tiny rocket, and a fourth robot holds a neatly bound sheet-music binder; a circular arrow around the podium shows speak, look, refine. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 지휘자는 악기를 직접 켜지 않지만 음악은 지휘자 것입니다. 오늘은 클론이라 "본다" 단계에서 원본과 나란히 비교합니다.

---

# P34 · 기획서가 있는 바이브 코딩 vs 그냥 시키기

비교:
| 😵 그냥 시키기 | 😎 기획서가 있는 바이브 코딩 |
|---|---|
| "딥큐 같은 앱 만들어 줘" | 캔버스의 **목표 · 라우트 · 상태 · 기능 · 데이터 · 규칙**을 프롬프트로 |
| AI가 상상해서 매번 다른 앱 | 원본과 **같은 흐름** |
| 고칠 때 어디를 고칠지 모름 | 캔버스 **칸 단위로** 고침 |
| 서버 · 로그인까지 멋대로 | "**만들지 말 것**"까지 지정 |

단계도: 📋 캔버스 → 🔄 **변환표** (P41) → 🧾 **마스터 프롬프트** (P42) → 🎨 v0

`2열 비교 · 아래 3단`

🎨 IMAGE PROMPT — Two builders side by side: on the left a robot builds a strange random house from a vague cloud of an idea while a student scratches their head; on the right the same robot builds exactly the planned house by following a detailed blueprint handed over by a confident student, with matching sections highlighted on both blueprint and house. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 바이브 코딩은 "아무렇게나 말하기"가 아닙니다. 0단계의 기획이 있어야 바이브가 정확해집니다.

---

# P35 · 전체 개발 파이프라인 — 한 장 지도 🗺

단계도:
📋 **기획 캔버스** → 🎨 **v0** 화면 프로토타입 → 🐙 **GitHub** 저장소에 코드 보관 → 🤖 **코딩 에이전트**가 구조 정리 · 기능 추가 → ⬆️ **push** → ✅ **CI** 자동 검사 → 🚀 **Vercel** 자동 배포 (Preview → Production) → 🔗 **URL** → 🙋 **피드백** → 📋 다시 캔버스

| 구간 | 하는 일 | 오늘 |
|---|---|---|
| 📋 → 🎨 | 말로 화면 만들기 | ✅ 2단계 실습 |
| 🎨 → 🐙 → 🤖 | 코드를 보관하고 다듬기 | 👀 강사 시연 |
| ⬆️ → ✅ → 🚀 | 올리면 자동 검사 · 자동 배포 | 👀 강사 시연 |

`가로 큰 파이프라인 (끝에서 처음으로 돌아가는 화살표) · 아래 표`

🎨 IMAGE PROMPT — A large factory pipeline map viewed from above in isometric: a planning desk, a bright painting studio, a friendly octopus-shaped storage vault holding numbered drawers, a robot workbench with tools, an upward conveyor, a checkpoint gate with green and red lights, a launch tower that first sends a small test rocket and then a big rocket, a satellite beaming a link to phones, and a mailbox of feedback that sends paper back to the planning desk. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1단계의 나머지 카드는 이 지도의 정류장 하나하나를 차례로 확대해서 봅니다.

---

# P36 · 도구 5개의 역할 — 가게 짓기 비유 🏗

| 도구 | 비유 | 하는 일 | 오늘 누가 |
|---|---|---|---|
| 🎨 **v0** | 인테리어 디자이너 | 말과 그림으로 **화면** 만들기 · 미리보기 | 🧑‍🎓 팀 |
| 🐙 **GitHub** | 설계도 금고 · 세이브 파일 | 코드 **보관 · 기록 · 협업** | 👩‍🏫 강사 |
| 🤖 **코딩 에이전트** | 시공팀 | 코드를 읽고 **고치고 실행해서 확인** | 👩‍🏫 강사 |
| 🚀 **Vercel** | 상가 건물주 | 가게 자리 + **주소** 빌려주기 | 🧑‍🎓 팀 (Publish) |
| 🔁 **CI/CD** | 자동 검수 컨베이어 | 올리면 **자동 검사 → 자동 개점** | 👩‍🏫 강사 |

`5행 표 · 왼쪽 큰 아이콘`

🎨 IMAGE PROMPT — A construction site for a small shop with five characters at work: an interior designer robot with a paint palette, a friendly octopus guarding a vault of rolled blueprints, a builder crew robot with a toolbox, a smiling landlord holding a key and an address plate, and an automatic inspection conveyor with a green check light at the shop's entrance. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 팀이 직접 만지는 건 v0와 Vercel Publish입니다. GitHub · 에이전트 · CI/CD는 강사 시연으로 흐름을 봅니다.

---

# P37 · 클론할 구조 — 원본 3개가 공유하는 5개 레이어

레이어도:
1. 🖥 **UI** · `app/` · `components/` — 화면 · 버튼 · 진행 바 (← v0)
2. 🔁 **상태** · `hooks/useFlow.ts` — 지금 몇 단계? (← 캔버스의 🔁 상태)
3. 🧠 **가짜 AI** · `lib/engine.ts` — 규칙으로 답 고르기 (← 캔버스의 🧠 규칙)
4. 🚪 **데이터 출입구** · `lib/repo.ts` — 읽기 · 쓰기 단일 통로
5. 💾 **데이터** · `data/*.json` (← 📄 시드) · `localStorage` (← 🗄 저장 키)

> 캔버스의 칸이 **그대로 레이어 하나씩**이 된다

`5단 스택 · 각 층 오른쪽에 캔버스 칸 아이콘 연결선`

🎨 IMAGE PROMPT — A tall tower of five stacked translucent glass slabs: the top slab shows miniature UI cards and buttons, the second a small loop of connected circles, the third a glowing gear brain, the fourth a single narrow gateway that everything must pass through, the bottom a shelf of paper sheets and a wooden drawer. Thin colored threads connect each slab to matching sections of a planning canvas pinned beside the tower. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 0단계 캔버스 → 1단계 레이어. 이 연결이 보이면 바이브 코딩이 "감"이 아니라 "설계"가 됩니다.

---

# P38 · 문 두 개 원칙 — 나중에 진짜로 바꾸기 쉬운 구조 🚪🚪

구조도:
🖥 화면 → 🚪 **`repo.ts`** (데이터의 문) → 지금: 📄 JSON · 🗄 localStorage ┈ 나중: 🗄 DB API
🖥 화면 → 🚪 **`engine.ts`** (AI의 문) → 지금: 🧠 규칙 ┈ 나중: 🤖 Claude API

```ts
type Reply = { text: string; followUp?: string; next?: string }; // 반환 모양 고정
const SOURCE = process.env.NEXT_PUBLIC_DATA_SOURCE ?? "json";   // json | api
const ENGINE = process.env.NEXT_PUBLIC_ENGINE ?? "rule";        // rule | llm
```

> 화면은 **이 두 문만** 부른다 → 나중엔 **문 뒤만** 바꾸고 화면 코드는 0줄 수정

`가운데 화면 · 아래 두 문 · 각 문 뒤 실선(지금) / 점선(나중)`

🎨 IMAGE PROMPT — A shop's back wall with exactly two glowing doors, each with a railway switch lever beside it: behind the teal door the track goes to a shelf of paper sheets and a drawer, with a faded branch to a distant database building; behind the mustard door the track goes to a small gear engine, with a faded branch to a cloud brain. The shop front stays untouched. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 원본 3개가 모두 이 원칙으로 만들어졌습니다. 그래서 클론도 처음부터 이 두 문을 v0에 지정합니다.

---

# P39 · v0에게 지정할 폴더 구조

```text
mini-deepq/
├─ app/
│  ├─ page.tsx            # / 위자드 (상태머신)
│  ├─ problems/page.tsx   # 내 문제 (localStorage)
│  └─ about/page.tsx      # 소개 스토리
├─ components/            # 카드 · 진행 바 · 점수 막대
├─ hooks/useFlow.ts       # 🔁 단계 상태
├─ lib/
│  ├─ repo.ts             # 🚪 데이터 문
│  └─ engine.ts           # 🧠 AI 문 (grade · hint)
├─ data/
│  ├─ samples.json        # 📄 샘플 3
│  └─ templates.json      # 📄 변환 + 루브릭
└─ AGENTS.md              # 🤖 코딩 에이전트 규칙 (P49)
```

구조도: `app` → `components` → `hooks` → `lib/engine` · `lib/repo` → `data`

`왼쪽 코드 카드 · 오른쪽 흐름 화살표`

🎨 IMAGE PROMPT — An open filing cabinet with drawers pulled out at different lengths: a drawer of tiny screen thumbnails, a drawer of reusable furniture-like UI pieces, a drawer with a small looping flow, a mustard drawer with two little doors inside, a drawer of stacked paper sheets, and a thin drawer with a rule book for robots on top. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 폴더 이름을 미리 정해 두면 v0 · 코딩 에이전트 · 사람이 같은 지도를 봅니다.

---

# P40 · STEP 1 🎨 v0 — 왜 화면을 먼저 만들까?

단계도: 사용자는 **화면**을 본다 → 화면으로 먼저 원본과 비교 · 검증 → 버릴 서버를 안 만든다 → 검증된 데이터 모양 = 나중의 DB 설계도

| 이유 | v0가 잘하는 것 |
|---|---|
| ⚡ 빠름 | 말하면 1~2분 만에 미리보기 |
| 🖼 그림을 알아봄 | **원본 화면 캡처 · 손그림**을 첨부하면 비슷하게 |
| ⏪ 되돌리기 | 버전 기록 = 세이브 포인트 |
| 🏭 진짜 코드 | Next.js · Tailwind 코드 → 그대로 GitHub로 |
| 🚀 바로 배포 | Publish → Vercel 주소 |

`위 4단 · 아래 표`

🎨 IMAGE PROMPT — A bright design studio where a student shows a screenshot of an app and a sketch to a robot designer; within moments a glowing preview model of the screen appears on the table, with a small save-point crystal and a launch button nearby; in the background an empty lot marked for a future kitchen waits untouched. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 클론 코딩에서는 원본 화면 캡처를 첨부하는 게 큰 무기입니다. 단, 원본 이름·로고는 빼 달라고 말합니다.

---

# P41 · 캔버스 → 프롬프트 변환표

| 📋 캔버스 칸 (0단계) | 🧾 프롬프트 칸 (1단계) | 🧱 결과 레이어 |
|---|---|---|
| 🎯 클론 목표 · 🏷 이름 | [앱 이름] [한 줄 정의] | — |
| 🧭 패턴 | [아키텍처 패턴] | 🔁 상태 |
| 🗺 라우트 | [라우트] | 🖥 UI |
| 🔁 상태 | [화면 흐름 · 진행 바] | 🔁 상태 |
| 🧩 Must 기능 | [기능 목록] | 🖥 + 🧠 |
| 📄 시드 · 🗄 저장 키 | [시드 데이터] [아키텍처 규칙 2] | 🚪 + 💾 |
| 🧠 규칙 | [아키텍처 규칙 3] | 🧠 가짜 AI |
| 🚫 안 만들 것 · 🏷 고지 | [아키텍처 규칙 1 · 6] | — |
| ✨ 한 끗 | [디자인] | 🖥 UI |

`3열 매핑 표 · 화살표 열 강조`

🎨 IMAGE PROMPT — A translation machine on a table: the planning canvas slides in on the left, each colored section passes through its own slot, and on the right a long scroll of a structured order slip comes out with matching colored sections, which then point down to matching slabs of the five-layer tower. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 새로 생각할 것은 없습니다. 캔버스 칸을 프롬프트 칸으로 옮겨 적기만 합니다.

---

# P42 · 🧾 v0 마스터 프롬프트 — 1단계의 결과물

```text
[앱 이름] ________  (________ 를 따라 만든 학습용 클론. 원본 이름·로고는 쓰지 마)
[한 줄 정의] ________ 가 ________ 할 때, ________ 하도록 돕는 앱
[아키텍처 패턴] ☐ A 대화 루프  ☐ B 막 머신  ☐ C 위자드 (단계: ____ → ____ → ____ → 결과)
[라우트] / ________ · /________ · /about 소개
[아키텍처 규칙]
1. 서버 · 로그인 · 실제 AI API는 만들지 마.
2. 데이터 읽기/쓰기는 lib/repo.ts 한 파일로만. 읽기 data/*.json, 쓰기 localStorage("____:____"),
   NEXT_PUBLIC_DATA_SOURCE 가 "api" 면 fetch 하도록 분기만 만들어 둬.
3. "AI 응답"은 lib/engine.ts 함수로만. 키워드 매칭, 없으면 "default". 1.2초 "생각 중…".
4. 화면은 repo.ts 와 engine.ts 만 import. 5. localStorage 는 try/catch.
6. 하단 고지: "학습용 클론 · 규칙 기반 시뮬레이션 · 데이터는 이 브라우저에만 저장"
[시드 데이터] (캔버스 JSON 붙여넣기)   [기능 목록] (Must 기능 붙여넣기)
[디자인] 모바일 우선 · 큰 버튼 · 이모지 · 한 끗: ________ · 모든 글자 한국어
```

`전체 코드 카드 · 빈칸 머스터드`

🎨 IMAGE PROMPT — A long official-looking order scroll unrolled on a table with neatly separated sections and a few highlighted blanks, a wax seal at the bottom; a student hands it to a friendly robot designer who already holds a tablet ready to start, and the planning canvas lies beside the scroll. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 한 장이 2단계 첫 주문입니다. 미니딥큐 완성본은 P64에 있습니다.

---

# P43 · v0와 대화하는 규칙 — 한 번에 하나 · 고치는 공식

순환: 🧾 주문 **1개** → 👀 원본과 비교 → 📝 다른 점 **1개** → 🔧 고치는 주문 → ✅ 확인 (망가지면 ⏪ 되돌리기)

| 규칙 | 예시 |
|---|---|
| 1️⃣ 한 번에 한 가지 | 화면 → 데이터 → 엔진 → 소개 순서로 |
| 2️⃣ 고치는 공식 | "**○○할 때 △△가 돼. □□로 고쳐 줘.**" |
| 3️⃣ 지키는 말 | "**다른 부분은 바꾸지 마.**" |
| 4️⃣ 구조로 말하기 | "page.tsx 에서 JSON을 직접 읽지 말고 **repo.ts 를 거치게** 해 줘" |

`위 원형 5칸 · 아래 표`

🎨 IMAGE PROMPT — A calm loop at a laptop: a student places one single order card into a slot, a preview screen appears next to a printed screenshot of the original for side-by-side comparison, a teammate circles one difference with a marker, and a rewind crystal glows nearby in case something breaks. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 4번이 중요합니다. 1단계에서 레이어 이름을 배웠으니 고칠 때도 "어느 층"인지 말할 수 있습니다.

---

# P44 · STEP 2 🐙 GitHub — 왜 v0 다음에 GitHub일까?

단계도: 🎨 v0에서 만든 코드 → 🐙 **GitHub 저장소**로 → 🤖 다른 도구 (코딩 에이전트)가 같은 코드를 열 수 있다 → 🚀 Vercel이 **변경을 감지해 자동 배포**

| GitHub이 주는 것 | 비유 |
|---|---|
| 💾 모든 변경 기록 | 게임 세이브 파일이 **수백 개** |
| 👥 여러 도구 · 여러 사람이 같은 코드 | 설계도 **원본 금고** |
| 🔀 실험은 따로, 합치기는 검토 후 | 연습장 → 검사 → 본 공책 |
| 🔁 자동화의 출발점 | 올리면 → 자동 검사 → 자동 배포 |

`위 4단 · 아래 표`

🎨 IMAGE PROMPT — A friendly octopus guarding a round vault filled with neatly numbered drawers, each drawer a saved snapshot of a small app model; one tentacle receives a model from a painting studio robot, another tentacle hands a copy to a builder robot with tools, and a third tentacle rings a bell connected to a launch tower. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — v0 안에만 있으면 v0에서만 고칠 수 있습니다. GitHub에 올리면 어떤 도구든 함께 쓸 수 있습니다.

---

# P45 · GitHub 단어 4개 — 저장소 · 커밋 · 브랜치 · PR

구조도:
📦 **저장소 (repository)** — 프로젝트 전체 금고
→ 💾 **커밋 (commit)** — "여기까지 저장" 한 칸 + 메시지
→ 🌿 **브랜치 (branch)** — `main`(본 공책)에서 갈라진 연습장
→ 🔀 **PR (pull request)** — "연습장 내용을 본 공책에 합쳐도 될까요?" 검토 요청

단계도: `main` ──●──●────────●── (합치기)
　　　　　　　　 └ `feature/채점` ──●──●──┘ ← PR

`위 4단 계층 · 아래 브랜치 그림`

🎨 IMAGE PROMPT — A tree illustration: a straight main trunk with round save-point beads along it, one branch growing out to the side with its own beads, and the branch curving back to join the trunk at a small gate where a reviewer with a magnifying glass stands holding a green stamp. The whole tree grows inside a glass vault. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 네 단어만 알면 CI/CD를 이해할 수 있습니다. 본 공책(main)은 항상 "작동하는 상태"로 둡니다.

---

# P46 · v0 ↔ GitHub 연결 흐름

단계도:
🎨 v0 프로젝트 → 🔗 **GitHub 연결** (v0의 Git 메뉴 · 새 저장소 만들기) → 📦 `우리팀/mini-deepq` 저장소 생성 → 💾 v0의 변경이 **커밋/PR로** 저장소에 → 💻 강사 컴퓨터에서 `git clone`

```bash
git clone https://github.com/우리팀/mini-deepq.git
cd mini-deepq
npm install
npm run dev        # http://localhost:3000 에서 확인
```

> ⚠️ v0 화면의 메뉴 이름 · 위치는 업데이트로 바뀔 수 있어요 → **수업 전날 실제 화면으로 확인**

`위 5단 · 아래 코드 카드 · 경고 코랄`

🎨 IMAGE PROMPT — A glowing bridge connects the painting studio to the octopus vault: a small app model travels across the bridge on a cart, gets stored as a new numbered drawer, and then a copy travels down a cable to a teacher's laptop on a desk where the same app appears running locally. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘은 강사가 미리 연결해 둔 저장소로 시연합니다. 학생 개인 계정은 만들지 않습니다.

---

# P47 · STEP 3 🤖 코딩 에이전트 — v0 다음엔 왜?

비교:
| 🎨 v0 | 🤖 코딩 에이전트 |
|---|---|
| **화면** 만들기 · 디자인에 강함 | **프로젝트 전체 코드**를 읽고 고침 |
| 브라우저 안 · 미리보기 | 내 컴퓨터 터미널 · 실제 실행 |
| "이렇게 보이게 해 줘" | "규칙을 추가하고 **빌드가 통과하는지 확인**해 줘" |
| 프로토타입 (0 → 1) | 다듬기 · 확장 (1 → 10) |

단계도: 🎨 v0로 **겉모습** → 🐙 GitHub → 🤖 에이전트로 **속(engine · repo · 테스트)** → ⬆️ push

`2열 비교 · 아래 4단`

🎨 IMAGE PROMPT — Two workers on the same small shop: an interior designer robot painting the front facade and arranging the display window, and a builder robot inside the walls with a flashlight fixing wiring, plumbing and a small engine room, checking a gauge to confirm everything runs. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — v0가 인테리어라면 코딩 에이전트는 배선 공사입니다. 둘 다 바이브 코딩이고, 지휘자는 여전히 우리입니다.

---

# P48 · 코딩 에이전트 3종 — 무엇을 써도 흐름은 같다

| | 🟠 **Claude Code** | 🔵 **Gemini CLI** | ⚫ **Codex** (OpenAI) |
|---|---|---|---|
| 실행 | 터미널에서 `claude` | 터미널에서 `gemini` | 터미널에서 `codex` |
| 읽는 규칙 파일 | `CLAUDE.md` | `GEMINI.md` | `AGENTS.md` |
| 하는 일 | 코드 읽기 · 수정 · 명령 실행 · 커밋 | 〃 | 〃 |

단계도 (공통 사용 순서): 📂 저장소 폴더에서 실행 → 📜 규칙 파일 읽음 → 🗣 작업 요청 → 📝 계획 보여 줌 → ✅ 사람이 승인 → 🔧 수정 · 실행 → 💾 커밋

> 도구는 골라 쓰면 됩니다. **규칙 파일 + 승인 + 확인**이라는 흐름은 같아요.

`3열 비교 · 아래 7단 공통 흐름`

🎨 IMAGE PROMPT — Three friendly robot builders in different accent colors (orange, blue, dark gray) standing side by side at the same workbench, each holding the same rule book and the same toolbox, with a single shared flow chart on the wall behind them showing a plan, a human approval stamp, a fix, and a save. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 학교 환경에 맞는 도구 하나를 강사가 고릅니다. 학생에게는 "어떤 에이전트든 규칙 파일을 먼저 읽는다"만 기억시킵니다.

---

# P49 · 📜 규칙 파일 — 기획 캔버스를 에이전트의 언어로

```md
# AGENTS.md  (Claude Code 는 CLAUDE.md, Gemini CLI 는 GEMINI.md 로 같은 내용)
## 프로젝트
- 미니딥큐: DeepQ 를 따라 만든 학습용 클론 (패턴 C 위자드)
- 흐름: 샘플 선택 → 서술형 보기 → 답안 입력 → 결과·힌트
## 아키텍처 규칙
- 화면(app/, components/)은 lib/repo.ts 와 lib/engine.ts 만 import
- 서버 · 로그인 · 실제 AI API 금지 (PHASE 1)
- 읽기 data/*.json · 쓰기 localStorage "mq:*" (try/catch)
## 작업 규칙
- 한 번에 한 기능 · 바꾸기 전에 계획부터 보여 줄 것
- 끝나면 npm run lint && npm run build 통과 확인
- 커밋 메시지는 한국어 한 줄
```

구조도: 📋 캔버스 → 🧾 v0 프롬프트 · 📜 규칙 파일 (같은 내용, 다른 독자)

`위 코드 카드 · 아래 1 → 2 구조도`

🎨 IMAGE PROMPT — The planning canvas splits into two documents: one rolled order scroll flying toward the painting studio robot, and one thick bound rule book placed on the builder robot's workbench, both with matching colored section tabs. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 0단계 캔버스 하나가 v0 프롬프트와 에이전트 규칙 파일, 두 곳에 쓰입니다. 기획이 개발 전체를 이끈다는 증거입니다.

---

# P50 · 에이전트 작업 루프 — 사람이 승인하고 확인한다

순환: 🗣 **요청** (한 기능) → 📝 **계획** (에이전트가 바꿀 파일 목록) → ✅ **승인** (사람) → 🔧 **수정** → ▶️ **실행 · 확인** (`npm run build`) → 👀 **사람 확인** (localhost) → 💾 **커밋** → 🗣 다음 요청

| 사람이 꼭 하는 일 | 왜 |
|---|---|
| 계획을 **읽고** 승인 | 엉뚱한 파일을 바꾸지 않게 |
| 직접 **눌러 보기** | "빌드 통과" ≠ "원본처럼 동작" |
| 비밀 키 · 개인정보 확인 | 책임은 사람에게 |

`원형 7칸 · 사람 칸(승인 · 사람 확인) 머스터드`

🎨 IMAGE PROMPT — A circular workflow around a workbench: a student hands a single task card to a builder robot, the robot unfolds a small plan sheet, the student stamps it with an approval stamp, the robot works with tools, a test gauge turns green, the student tries the result on a laptop, and the robot files a numbered save into the octopus vault. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 에이전트는 스스로 실행하고 확인까지 합니다. 그래도 승인과 최종 확인은 사람이 합니다. 지휘자의 일입니다.

---

# P51 · 에이전트에게 보내는 요청 예시 3개 (미니딥큐)

| # | 레이어 | 요청 |
|:---:|---|---|
| 1 | 🚪 구조 정리 | "AGENTS.md 규칙대로, app/ 안에서 data/*.json 이나 localStorage 를 **직접 쓰는 곳**을 찾아 lib/repo.ts 를 거치게 고쳐 줘. 먼저 바꿀 파일 목록부터 보여 줘." |
| 2 | 🧠 규칙 추가 | "templates.json 에 sci-02 샘플의 루브릭을 추가하고, engine.ts 의 grade() 가 minLength 규칙도 처리하게 해 줘. 다른 화면은 바꾸지 마." |
| 3 | ✅ 검사 추가 | "engine.ts 의 grade() 에 대해 '키워드 3개 포함이면 3점', '빈 답안이면 0점' 테스트를 만들고 npm test 로 통과를 확인해 줘." |

단계도: 1 구조 → 2 기능 → 3 검사 (← 이 검사가 CI에서 자동으로 돌아간다 · P54)

`3행 표 · 아래 3단`

🎨 IMAGE PROMPT — Three task cards pinned on a workshop board in order: the first shows two doors with tangled wires being straightened, the second shows a new rubric sieve being added to a machine, the third shows a test gauge with a green check; a builder robot works through them left to right. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 세 요청 모두 "어느 레이어"인지가 분명하고, "다른 건 바꾸지 마"가 들어 있습니다. 2단계 시연(P75)에서 2번을 실제로 돌립니다.

---

# P52 · STEP 4 🚀 Vercel — 배포의 두 가지 길

비교:
| 🎊 길 1 · v0 **Publish** | 🔗 길 2 · **GitHub 연결** (Import) |
|---|---|
| v0에서 버튼 한 번 | Vercel에서 GitHub 저장소를 가져오기 |
| 가장 빠름 · **오늘 팀 실습** | 올릴 때마다 **자동 배포** · **오늘 강사 시연** |
| 고칠 때마다 다시 Publish | `git push` 만 하면 끝 |

단계도 (길 2): Vercel → **Add New Project** → GitHub 저장소 선택 → 프레임워크 Next.js 자동 인식 → **Deploy** → `mini-deepq.vercel.app`

`위 2열 비교 · 아래 5단`

🎨 IMAGE PROMPT — Two roads leading to the same shopping-mall building: on the left a short road where students press a single big launch button in the painting studio and the shop pops into the mall; on the right a road with an automatic conveyor from the octopus vault that delivers a new version of the shop into the mall every time a drawer is added. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 팀은 길 1로 주소를 받고, 강사는 길 2로 자동화를 보여 줍니다. 결국 같은 Vercel 건물에 입점합니다.

---

# P53 · STEP 5 🔁 CI/CD — 올리면 저절로 검사하고, 저절로 문을 연다

구조도:
🔁 **CI (지속적 통합)** = 올릴 때마다 **자동 검사** — 문법 검사 (lint) · 빌드 (build) · 테스트 (test) → ✅ / ❌
🚀 **CD (지속적 배포)** = 검사 통과하면 **자동 배포** — Preview 주소 → 합치면 Production 주소

비교:
| 🐢 손으로 | 🤖 CI/CD |
|---|---|
| 고칠 때마다 직접 확인 · 직접 업로드 | `git push` 한 번 |
| 깜빡하면 고장 난 채로 공개 | ❌ 이면 **본 가게에 안 나감** |

`위 2단 구조도 · 아래 2열 비교`

🎨 IMAGE PROMPT — An automatic factory line: a new version of a small shop model rolls out of the octopus vault onto a conveyor, passes through three inspection arches (a spell-check magnifier, a building-stability gauge, a test robot), gets a green light, and is automatically lifted into a test display window and then into the main shopping mall; a model with a red light is gently pushed off to a repair bench instead. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — CI는 "검사 담당 로봇", CD는 "개점 담당 로봇"입니다. 사람은 코드를 올리고 결과를 확인만 합니다.

---

# P54 · CI — GitHub Actions 검사 파일 한 장

```yaml
# .github/workflows/ci.yml
name: CI
on:
  pull_request:
  push:
    branches: [main]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci           # 재료 준비
      - run: npm run lint     # 문법 검사
      - run: npm run build    # 가게가 지어지나?
      - run: npm test --if-present   # 규칙 테스트 (P51-3)
```

단계도: PR · push → 🖥 GitHub의 깨끗한 컴퓨터 → 설치 → lint → build → test → ✅ 초록 체크 / ❌ 빨간 X

> 이 파일도 에이전트에게 "CI 파일 만들어 줘"로 만들 수 있어요

`왼쪽 코드 카드 · 오른쪽 세로 5단 체크 흐름`

🎨 IMAGE PROMPT — A clean robotic inspection room inside a cloud: a fresh empty workbench receives a copy of the app model, a robot unpacks parts, runs a magnifier over it, assembles it, runs a small test, and finally raises a big green check flag; on a monitor outside the room, a row of green check marks appears next to the vault's drawers. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 다섯 줄의 run 이 "검사 목록"입니다. 학생에게는 "올릴 때마다 로봇이 이 순서로 확인한다"만 전달합니다.

---

# P55 · CD — Vercel의 Preview와 Production

비교:
| 🧪 **Preview (미리보기 가게)** | 🏪 **Production (본 가게)** |
|---|---|
| 브랜치 · PR마다 **새 주소** 자동 생성 | `main` 에 합쳐지면 자동 갱신 |
| `mini-deepq-git-feature-채점-….vercel.app` | `mini-deepq.vercel.app` |
| 팀 · 선생님이 **먼저 눌러 보는** 곳 | **손님**이 쓰는 곳 |
| 망가져도 손님은 모름 | 항상 작동하는 상태 |

단계도: 🌿 브랜치 push → 🧪 Preview 주소 → 👀 리뷰 → 🔀 PR 합치기 → 🏪 Production 갱신

`2열 비교 · 아래 5단`

🎨 IMAGE PROMPT — Two shops in the mall: a small pop-up test booth with a curtain where only the team and a teacher try a new version, and the main storefront where customers come and go; a glowing path leads from the test booth to the main store only after a reviewer stamps a green approval. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 바이브 코딩에서 Preview는 정말 중요합니다. 자주 고쳐도 손님 가게는 안전합니다.

---

# P56 · 전체 흐름 한 번에 — 고치기 한 번의 여행

단계도:
1. 🌿 `feature/채점` 브랜치 만들기
2. 🤖 에이전트로 수정 · 로컬 확인
3. 💾 커밋 → ⬆️ `git push`
4. 🔀 PR 열기
5. ✅ **CI** (GitHub Actions) — lint · build · test
6. 🧪 **Vercel Preview** 주소가 PR에 자동으로 달림
7. 👀 팀 · 선생님 리뷰 (Preview에서 눌러 보기)
8. 🔀 **Merge** → `main`
9. 🏪 **Vercel Production** 자동 갱신 → 같은 주소 · 새 모습

`세로 9단 시퀀스 (참여자: 사람 · 에이전트 · GitHub · Actions · Vercel)`

🎨 IMAGE PROMPT — A vertical relay along five tall glass pillars standing in a row (a student, a builder robot, the octopus vault, an inspection robot, and the shopping mall); a glowing baton zigzags down between the pillars in nine hops, pausing at a green check flag and a small test booth before landing in the main storefront, which lights up with a refreshed sign. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 2단계 시연(P74~P78)은 이 9칸을 그대로 따라갑니다. 지금은 순서만 눈에 넣어 두세요.

---

# P57 · 🔐 환경 변수와 비밀 키 — 문 두 개의 스위치

구조도:
`.env` / Vercel 환경 변수
→ 🌐 `NEXT_PUBLIC_DATA_SOURCE=json` · `NEXT_PUBLIC_ENGINE=rule` — **브라우저에 공개돼도 괜찮은 값** (스위치)
→ 🔒 `ANTHROPIC_API_KEY=…` — **서버에만** (PHASE 2) · `NEXT_PUBLIC_` 절대 금지

비교:
| ❌ | ✅ |
|---|---|
| 브라우저 코드에 API 키 → 누구나 훔쳐 씀 → **요금 폭탄** | 브라우저 → `/api/respond` (서버) → 🔒 키 → AI |

> PHASE 1 클론은 AI를 안 부르니 키도 없다 = **가장 안전한 설계**

`위 분기 구조도 · 아래 2열 비교 (코랄 / 틸)`

🎨 IMAGE PROMPT — Two keys in the shop: a simple switch-shaped key hanging openly on the shop front wall labeled only by color teal, harmless to see; and a golden key locked inside a heavy steel vault in the back office, with a small messenger carrying requests from the counter to the vault door; in a small coral inset, a golden key left on the counter is snatched while coins fly away. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 스위치 값은 공개돼도 되고, 비밀 키는 절대 공개되면 안 됩니다. 이 구분이 PHASE 2로 가는 첫 관문입니다.

---

# P58 · 🏃 바통 ② — 1단계 → 2단계

바통: 🧾 **v0 마스터 프롬프트** (캔버스 칸을 옮긴 것) + 🗺 **파이프라인 지도** (v0 → GitHub → 에이전트 → CI → Vercel) → 🔴 2단계에서 **실제 MVP**로

| 모자 🎩 | 2단계에서 맡을 정류장 |
|---|---|
| 🧭 기획자 | 캔버스 · 원본과 비교 기준 |
| 🛠 실행자 | v0 주문 · Publish |
| 🕵️ 탐정 | 미리보기 테스트 · 개발자도구 Local Storage |
| 🪞 성찰자 | 토론 · 다음 버전 백로그 |

`⏱ 50:00` `가로 바통 띠 · 아래 역할 표`

🎨 IMAGE PROMPT — The teal relay runner hands a glowing order scroll and a rolled pipeline map to the coral runner at the exchange zone; behind them, three students put on four different hats in a quick rotation, ready to sprint toward a laptop on the next stretch of track. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 50분 지점, 바로 노트북을 엽니다. 설명은 끝났고 이제부터는 손이 움직입니다.

---

# P59 · 🔴 2단계 · 클론 실습 — v0로 MVP를 만들고, 올리고, 토론한다

단계도:
🎨 **50 – 72분** v0 클론 ① 뼈대 → ② 데이터 → ③ 엔진 → ④ 탐정 → ⑤ 한 끗 · 소개 → ⑥ Publish
→ 🔁 **72 – 80분** CI/CD 연결 시연 (GitHub · 에이전트 · Preview · Production)
→ 🟢 **80 – 90분** MVP 갤러리 · 토론 · 다음 버전

`⏱ 50:00 – 90:00` `섹션 표지 · 코랄 → 초록`

🎨 IMAGE PROMPT — A section title scene in coral tones: three students open a laptop at a workbench with the order scroll and planning canvas beside it; a friendly robot designer stands ready behind the screen, and through a window in the background a shopping mall and a small circle of chairs for discussion are visible. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 40분 안에 만들고, 올리고, 이야기까지 합니다. 단계마다 시간을 화면에 띄워 두세요.

---

# P60 · 출발 전 체크 — 받은 바통이 다 있나?

| ✅ | 준비물 | 어디서 왔나 |
|:---:|---|---|
| ☐ | 📋 클론 기획 캔버스 | 0단계 P28 |
| ☐ | 📄 시드 JSON (샘플 3 + 규칙) | 0단계 P30 |
| ☐ | 🧾 v0 마스터 프롬프트 | 1단계 P42 |
| ☐ | 📸 원본 앱 화면 캡처 2~3장 | 0단계 P21 관찰 |
| ☐ | 💻 v0 로그인된 노트북 (학교 · 선생님 계정) | 수업 전 준비 |
| ☐ | 📱 원본 앱을 띄운 휴대폰 (비교용) | 0단계 P07 |

단계도: 캔버스 → 프롬프트 → 캡처 → v0 → 원본 폰 옆에 두기

`체크리스트 · 오른쪽 책상 배치 그림`

🎨 IMAGE PROMPT — A tidy team desk viewed from above: a laptop in the center, a planning canvas on the left, an order scroll and three printed screenshots on the right, and a smartphone propped up showing the original app next to the laptop for comparison; three students' hands each hold one item. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 원본 앱을 띄운 휴대폰을 노트북 옆에 세워 두는 것이 클론 코딩의 핵심 배치입니다.

---

# P61 · 실습 지도 — 6스텝이 레이어를 아래에서 위로 채운다

구조도 (스텝 ↔ 레이어):
① **뼈대** → 🖥 UI · 🔁 상태 · 🚪 문 두 개
② **데이터** → 💾 `data/*.json`
③ **엔진** → 🧠 `engine.ts` 규칙
④ **탐정** → 전 레이어 점검
⑤ **한 끗 · 소개** → 🖥 `/about`
⑥ **Publish** → 🏠 주소

| 스텝 | 시간 | 주문 수 |
|---|:---:|:---:|
| ① 뼈대 | 50 – 55 | 1 |
| ② 데이터 | 55 – 59 | 1 |
| ③ 엔진 | 59 – 64 | 1 ~ 2 |
| ④ 탐정 | 64 – 68 | 1 ~ 2 |
| ⑤ 한 끗 · 소개 | 68 – 70 | 1 |
| ⑥ Publish | 70 – 72 | — |

`왼쪽 5층 타워에 스텝 번호 표시 · 오른쪽 표`

🎨 IMAGE PROMPT — The five-layer glass tower under construction with numbered scaffolding platforms: the first platform frames the top screen layer and two doors, the second fills the bottom data shelf, the third lights up the gear brain, the fourth has a detective walking around all layers with a flashlight, the fifth adds a storytelling board at the entrance, and at the top a launch flag waits. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 주문은 모두 합쳐 6~8번이면 충분합니다. 무료 사용량을 아끼는 것도 설계입니다.

---

# P62 · v0 화면 — 어디에 무엇을?

구조도 (v0 화면):
💬 **대화창** — 주문 카운터 · 📎 캡처 첨부
👀 **미리보기** — 쇼윈도 · 직접 눌러 보기 · 📱 휴대폰 크기 전환
📂 **코드** — 주방 창문 · `lib/repo.ts` · `lib/engine.ts` 찾기
⏪ **버전** — 세이브 포인트
🐙 **Git 연결** — 저장소와 잇기 (시연)
🎊 **Publish** — Vercel로 개점 (⑥에서 한 번)

`노트북 와이어프레임 · 왼쪽 1/3 대화 · 오른쪽 2/3 미리보기 · 영역별 라벨`

🎨 IMAGE PROMPT — A large laptop screen split into a narrow left chat panel like an order counter with speech bubbles and a paperclip, and a wide right preview panel like a shop display window showing a colorful app; small floating badges around it show a kitchen window with code, a save-point crystal, a little octopus, and a ribbon with scissors at the top right. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — v0 메뉴 이름은 바뀔 수 있으니 실제 화면을 함께 띄워 손가락으로 짚어 주세요.

---

# P63 · 팀 회전 규칙 — 주문 한 번마다 모자를 돌린다 🎩

순환: 🧭 **기획자** (캔버스 · 원본 폰 들고 "원본이랑 같아?") → 🛠 **실행자** (주문 소리 내어 읽으며 입력) → 🕵️ **탐정** (미리보기 눌러 보고 포스트잇) → 시계방향 → 🧭

> ① 주문 **1번 = 모자 1칸 회전** ② 실행자는 **소리 내어** 읽기 ③ 탐정은 **적기만**, 고치는 건 다음 실행자

`원형 3칸 · 아래 규칙 3줄`

🎨 IMAGE PROMPT — Three students around one laptop: one holds a phone with the original app and a canvas wearing an explorer hat, one types and reads aloud wearing a builder cap, one writes on yellow sticky notes wearing a detective hat; a large circular arrow around them shows the hats rotating clockwise. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 키보드 독점 방지 규칙입니다. 6번 주문하면 모두 두 바퀴씩 돕니다.

---

# P64 · 실습 ① 뼈대 — 마스터 프롬프트 넣기 (미니딥큐 완성본)

```text
첨부한 화면 캡처는 DeepQ 앱이야. 이 흐름을 따라 만든 학습용 클론을 만들어 줘. 원본 이름·로고는 쓰지 마.
[앱 이름] 미니딥큐
[한 줄 정의] 중학교 선생님이 객관식 문제를 고르면, 서술형 문제와 루브릭 채점을 바로 볼 수 있게 돕는 앱
[아키텍처 패턴] C 위자드: 샘플 선택 → 서술형 보기 → 답안 입력 → 결과·힌트 (상단 진행 바 1/4~4/4)
[라우트] / 위자드 · /problems 내가 푼 문제 목록 · /about 소개
[아키텍처 규칙]
1. 서버 · 로그인 · 실제 AI API는 만들지 마.
2. 데이터 읽기/쓰기는 lib/repo.ts 로만. 읽기 data/samples.json, data/templates.json / 쓰기 localStorage "mq:problems", "mq:submissions"
   NEXT_PUBLIC_DATA_SOURCE 가 "api" 면 fetch 하도록 분기만 만들어 둬.
3. 채점은 lib/engine.ts 의 grade(answer, rubric) 로만. 지금은 화면에 "채점 준비 중" 만 보여 줘.
4. 화면은 repo.ts 와 engine.ts 만 import. 5. localStorage 는 try/catch.
6. 하단 고지: "학습용 클론 · 규칙 기반 시뮬레이션 · 데이터는 이 브라우저에만 저장"
[디자인] 모바일 우선 · 큰 버튼 · 이모지 · 남색과 초록 · 모든 글자 한국어
```

단계도: 📎 캡처 첨부 → 붙여넣기 → 🗣 소리 내어 읽기 → ▶ 보내기 → ⏳ 1~2분

`⏱ 50 – 55분` `코드 카드 · 아래 5단`

🎨 IMAGE PROMPT — A student attaches screenshots with a paperclip and pastes the long order scroll into the chat counter of a laptop; on the preview side, a wireframe of four connected screens with a progress bar begins to appear, built by a robot with neat blocks, while a teammate holds the original app on a phone beside the laptop. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 3번 규칙에 주목하세요. 엔진은 일부러 ③에서 따로 주문합니다. 한 번에 하나씩!

---

# P65 · ① 확인 — 원본과 나란히 · 코드 속 문 두 개 찾기

비교 (📱 원본 vs 💻 클론):
| 확인 | 원본 | 클론 |
|---|:---:|:---:|
| 단계 수 · 진행 바 | 6단계 | 4단계 (MVP) ✅ |
| 첫 화면에 샘플 바로 시작 | ✅ | ☐ |
| 하단 고지 문구 | ✅ | ☐ |

구조도 (📂 코드에서 찾기): `app/page.tsx` 의 import 줄 → `@/lib/repo` · `@/lib/engine` **만** 있나? → ✅ 문 두 개 OK / ❌ `@/data/...` 직접 import → 고치는 주문

> ❌ 이면: "page.tsx 에서 data 를 직접 import 하지 말고 repo.ts 를 거치게 고쳐 줘. 화면은 바꾸지 마."

`위 비교표 · 아래 판별 구조도 · 고치는 주문 박스`

🎨 IMAGE PROMPT — A side-by-side comparison on a desk: a phone with the original app and a laptop with the clone, a student checking items off with a pencil; in a zoom bubble over the laptop, a detective peeks through a kitchen window into the code and sees exactly two doors connected to the screen, with a third tangled wire marked for fixing. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 코드는 "읽기"만 합니다. import 두 줄을 찾는 것만으로도 아키텍처를 눈으로 확인하는 경험이 됩니다.

---

# P66 · 실습 ② 데이터 — 진열장 채우기

```text
아래 JSON 2개를 data/samples.json, data/templates.json 으로 만들어 줘.
AI가 만든 샘플 데이터는 지우고 이 데이터만 써 줘. 읽기는 반드시 lib/repo.ts 를 거치게 해 줘.
첫 화면에는 samples.json 의 샘플 3개를 카드로 보여 주고, 누르면 바로 2단계(서술형 보기)로 가게 해 줘.

(캔버스의 samples.json 붙여넣기)
(캔버스의 templates.json 붙여넣기)
```

단계도: 📄 캔버스 JSON → 📂 `data/` → 🚪 `repo.getSamples()` → 🖥 샘플 카드 3장 → 클릭 → 서술형

> 🔍 탐정: **원본에 없는 이상한 샘플**이 남아 있지 않은지

`⏱ 55 – 59분` `코드 카드 · 아래 5단`

🎨 IMAGE PROMPT — Paper sheets from the planning canvas are fed into a slot and come out as neat food-model boxes lining a glass display case behind a single mustard door; on the app preview, three large sample cards appear, and a tap on one opens the next step screen. A detective student removes one odd leftover placeholder box. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "빈 화면 금지" 원칙입니다. 원본 DeepQ도 "샘플 문제로 바로 시작"이 첫 화면에 있습니다.

---

# P67 · 실습 ③ 엔진 — 패턴별 핵심 기능 주문 카드

| 선택한 앱 | 🧠 엔진 주문 (하나만) |
|---|---|
| 🅠 **DeepQ 클론** | `lib/engine.ts 에 grade(answer, rubric) 를 만들어 줘. 루브릭 항목마다 keywords 중 하나라도 답안에 있으면 max 점, minLength 항목은 글자 수로 판단. 0점 항목에는 "○○를 쓰면 +n점" 힌트. 1.2초 "채점 중…" 후 항목별 점수 막대로 보여 주고 repo.ts 로 "mq:submissions" 에 저장해 줘.` |
| 🎭 **TeenDramaro 클론** | `lib/safety.ts 의 check() 를 먼저 만들고 모든 입력이 엔진보다 먼저 지나가게 해 줘. 그다음 engine.ts 의 directorLine(act, name) 이 data/acts.json 의 막별 질문을 순서대로 {name} 을 바꿔 보여 주게 해 줘.` |
| 🔥 **틴스파크 클론** | `lib/engine.ts 의 respond(input, ctx) 가 data/responses.json 에서 keywords 가 포함된 항목을 고르고, 없으면 id "default". 반환은 { text, followUp, next }. 답 아래에 followUp 을 🙋 되묻기 카드로 보여 줘.` |

단계도: 입력 → (🛡 safety) → 🧠 규칙 → 📄 JSON → ⏳ → 💬 결과 → 🗄 저장

`⏱ 59 – 64분` `3행 카드 · 각 행 패턴 색`

🎨 IMAGE PROMPT — Three small engine rooms side by side, each matching one app: a scoring room with four rubric sieves dropping tokens into a bar chart, a theater backstage with a shield gate at the entrance before a script holder, and a vending-style answer machine that drops an answer card plus a question hook card. A builder robot connects each engine to its app screen above. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 주문 하나로 앱이 "AI처럼" 움직이기 시작합니다. 0단계에서 뽑은 규칙표가 여기서 쓰입니다.

---

# P68 · ③ 확인 — 원본과 같은 답을 내는가?

단계도: 0단계 **규칙표 (P26)** 의 입력을 그대로 넣기 → 원본 결과와 클론 결과 비교 → 다르면 **JSON**을 고칠지 **엔진**을 고칠지 판단

| 입력 | 원본 | 클론 | 고칠 곳 |
|---|---|---|---|
| "빛이 없어서 양분을 못 만들어서" | 핵심 3 · 근거 2 | ☐ | — |
| "시들었다" | 핵심 0 · 💡 힌트 | ☐ | — |
| (빈칸) | 안내 문구 | ☐ | 🧠 엔진 |
| 아무 말 | default | ☐ | 📄 JSON |

> 🔑 **답이 틀리면 → JSON (데이터)** · **답이 안 나오면 → engine (규칙)**

`위 3단 · 표 · 아래 판별 배너`

🎨 IMAGE PROMPT — A testing bench with two machines side by side, the original and the clone, both receiving the same test sentence cards from a student; their output cards are compared on a scale, and a teammate decides whether to fix a data shelf or a gear engine by pointing to one of two labeled-by-color toolboxes. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "어느 레이어를 고칠까"를 학생이 직접 판단하게 하세요. 1단계에서 배운 레이어 지도가 여기서 쓰입니다.

---

# P69 · 실습 ④ 탐정 — 클론 점검 7개

| # | 탐정 질문 | 해 보는 법 | O/X |
|:---:|---|---|:---:|
| 1 | 🧭 원본과 **같은 순서**로 흘러가나? | 원본 폰과 나란히 처음부터 | |
| 2 | 😶 **빈 입력 · 이상한 입력**에도 default가 나오나? | 빈칸 · 😀 · 300자 | |
| 3 | 🔄 **새로고침**해도 기록이 남나? | 채점 → 새로고침 → `/problems` | |
| 4 | 🗄 **Local Storage** 에 키가 보이나? | 개발자도구 → Application → Local Storage | |
| 5 | 📱 **휴대폰 크기**에서 버튼이 크나? | 미리보기 휴대폰 모드 | |
| 6 | 🏷 **학습용 클론 고지 · 원본 로고 없음** | 화면 하단 · 머리글 | |
| 7 | 🎯 **클론 목표 한 줄**이 이뤄졌나? | 캔버스 맨 윗줄과 비교 | |

`⏱ 64 – 68분` `체크리스트 표 · 7번 머스터드`

🎨 IMAGE PROMPT — A detective case board with seven evidence cards: two phones side by side with matching paths, an empty box with an emoji, a refresh arrow with a saved note, a drawer opened inside a browser window, a phone with large buttons, a small honest signboard, and a target matching a canvas headline; a student detective stamps each card. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 4번은 강사가 화면에서 한 번 시연해 주세요. 저장된 쪽지를 눈으로 보면 localStorage가 확 이해됩니다.

---

# P70 · 고치는 주문 · 막혔을 때

비교:
| 😵 | 😎 |
|---|---|
| `이상해. 고쳐 줘.` | `빈 답안으로 채점하면 하얀 화면이 나와. "답안을 먼저 써 주세요 ✍️" 안내를 보여 줘. 다른 부분은 바꾸지 마.` |
| `저장이 안 돼.` | `채점 후 새로고침하면 /problems 가 비어. repo.ts 의 saveSubmission 으로 "mq:submissions" 에 저장하게 해 줘.` |

단계도 (막혔을 때):
🔥 빨간 에러 → 에러 문장 복사 → "이 에러를 고쳐 줘. 다른 건 바꾸지 마."
🧱 더 망가짐 → ⏪ 마지막으로 잘 되던 버전
🌏 영어로 바뀜 → "모든 글자를 한국어로"
🍱 샘플 데이터로 돌아감 → "data 폴더 JSON 만 써 줘"

`위 2열 비교 · 아래 4갈래`

🎨 IMAGE PROMPT — A friendly help station with four doors showing symptoms (a smoke puff, a cracked wall, a foreign-language speech bubble, an empty display case) each opening to a matching remedy (a precise note to a robot, a rewind crystal, a translation tool, a refilled shelf); a calm student reads the board while a teammate writes a precise order card. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 고치는 공식: 언제 · 무엇이 · 어떻게 + "다른 건 바꾸지 마". 4분 안에 가장 큰 문제 하나만 고칩니다.

---

# P71 · 실습 ⑤ 나만의 한 끗 + 소개 페이지 `/about`

```text
1) 과목을 중학 사회로 바꾸고, 사회 샘플 1개를 samples.json 에 추가해 줘. (한 끗)
2) /about 페이지를 스크롤 스토리로 만들어 줘: 공감 → 문제 → 해결 → 사용법 3단계 → 약속 → 결과.
   맨 아래에 "DeepQ 를 따라 만든 학습용 클론입니다" 와 원본 주소를 출처로 적어 줘.
```

단계도 (소개 스토리): 😣 공감 → ❓ 문제 → 💡 해결 → 👆 사용법 → 🤝 약속 → 🎉 결과 → 🏷 출처

> 원본 3개 앱 모두 `/about`이 있어요 — 기획을 **이야기**로 보여 주는 페이지

`⏱ 68 – 70분` `코드 카드 · 아래 7단 스토리 흐름`

🎨 IMAGE PROMPT — A vertical scrolling storyboard on a phone screen made of seven illustrated panels: a worried teacher with a stack of tests, a puzzle question mark, a glowing lightbulb machine, three tap gestures, a handshake, a happy class, and a small credit ribbon at the bottom; beside the phone, a student paints one part of the app a new bright color as the unique touch. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 소개 페이지는 0단계 캔버스의 문제 · 페르소나 · 한 줄 정의를 그대로 이야기로 바꾼 것입니다. 출처 표기가 클론 코딩의 예의입니다.

---

# P72 · 실습 ⑥ Publish — 가게 문을 연다 🎊

단계도:
🔒 마지막 확인 (개인정보 없음 · 고지 있음) → 🎊 **Publish** → ⏳ 1~2분 → 🏠 `mini-deepq-○○.vercel.app` → 🌐 새 탭 열기 → 🔳 QR → 📱 **팀 휴대폰으로 열기**

> 다시 고치고 Publish 하면 → **같은 주소**에 새 모습 (리모델링 후 재개점)

`⏱ 70 – 72분` `가로 7단 · 6·7번 초록`

🎨 IMAGE PROMPT — Three students press a big launch button together; the clone shop model is lifted by a gentle crane into a slot in a shopping-mall building, an address plate appears on its door, and the students hold up their phones scanning a square pattern to see the same shop on their screens, with confetti falling. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 72분, 모든 팀이 주소를 가졌는지 확인합니다. 이 순간이 오늘의 첫 번째 하이라이트입니다.

---

# P73 · ✅ MVP 완성 점검표 — "가장 작은 진짜"가 됐나?

| ✅ | 점검 | 레이어 |
|:---:|---|---|
| ☐ | 클론 목표 한 줄의 흐름이 **처음부터 끝까지** 된다 | 🔁 상태 |
| ☐ | 화면은 `repo.ts` · `engine.ts` **만** 부른다 | 🚪 문 두 개 |
| ☐ | 샘플 3개로 빈 화면 없이 시작한다 | 💾 시드 |
| ☐ | 매칭 안 되는 입력에도 default가 나온다 | 🧠 엔진 |
| ☐ | 새로고침해도 기록이 남는다 | 🗄 localStorage |
| ☐ | 학습용 클론 고지 · 출처 · 개인정보 없음 | 🖥 UI |
| ☐ | 친구 휴대폰에서 주소가 열린다 | 🚀 배포 |

> 7개 중 **5개 이상 = MVP 통과** 🎉

`체크리스트 · 레이어 배지`

🎨 IMAGE PROMPT — The five-layer glass tower now fully built and glowing on a launch platform, with seven small checkpoint lights along its side mostly lit green; a student inspector with a clipboard gives a thumbs up, and a smartphone on a stand beside it shows the live app. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 0단계 MVP 정의(P09)로 돌아가 확인합니다. 핵심 흐름 하나가 끝까지 되면 MVP입니다.

---

# P74 · 🔁 시연 ① v0 → GitHub 연결 (강사)

단계도: 🎨 한 팀의 v0 프로젝트 → 🐙 **Git 연결** → 📦 `mini-deepq` 저장소 → 🚀 Vercel **Import** (길 2) → 🏪 Production `mini-deepq.vercel.app`

구조도 (지금부터 바뀌는 것):
이전: 🎨 v0 → 🎊 Publish → 🏪
이후: 🐙 GitHub `main` → 🤖 Vercel이 **자동으로** → 🏪

`⏱ 72 – 74분` `위 5단 · 아래 이전 / 이후 비교`

🎨 IMAGE PROMPT — The teacher at a big screen connects a glowing bridge from the painting studio to the octopus vault; from the vault, an automatic conveyor now runs directly to the shopping mall, replacing a manual launch button that fades out; students watch from their seats. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 저장소와 Vercel Import는 수업 전에 미리 해 두고, 시연에서는 화면을 보여 주며 흐름만 설명하면 2분이면 충분합니다.

---

# P75 · 🔁 시연 ② 코딩 에이전트로 개선 1건 (강사)

```bash
git switch -c feature/minlength      # 🌿 연습장 만들기
claude                               # 또는 gemini / codex
> AGENTS.md 규칙대로, templates.json 에 사회 샘플의 루브릭을 추가하고
> engine.ts 의 grade() 가 minLength 규칙도 처리하게 해 줘. 다른 화면은 바꾸지 마.
> 먼저 바꿀 파일 목록부터 보여 줘.
```

순환: 📝 계획 (바꿀 파일 2개) → ✅ 승인 → 🔧 수정 → ▶️ `npm run build` · `npm test` → 👀 localhost에서 눌러 보기 → 💾 커밋

`⏱ 74 – 76분` `왼쪽 터미널 코드 카드 · 오른쪽 원형 6칸`

🎨 IMAGE PROMPT — A teacher's laptop with a terminal window glowing; a builder robot emerges from the screen holding a small plan sheet listing two items, the teacher stamps approval, the robot adjusts a rubric sieve inside the gear engine, a test gauge turns green, and the robot files a numbered save drawer. Students watch the big projected screen. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — P51의 2번 요청을 그대로 씁니다. "계획부터 보여 줘"에서 에이전트가 파일 목록을 내놓는 장면을 꼭 보여 주세요.

---

# P76 · 🔁 시연 ③ push → CI 검사 → Preview 주소

```bash
git push -u origin feature/minlength
```

단계도: ⬆️ push → 🔀 PR 열기 → ✅ **GitHub Actions** (install · lint · build · test) → 🧪 **Vercel Preview** 주소가 PR 댓글로 → 📱 Preview를 휴대폰으로 열기

구조도 (PR 화면에서 보이는 것):
🔀 PR `minlength 규칙 추가` → ✅ CI / check — 통과 · 🧪 Vercel — Preview 준비 완료 🔗

`⏱ 76 – 78분` `위 코드 · 가운데 5단 · 아래 PR 화면 와이어프레임`

🎨 IMAGE PROMPT — A new version of the shop model rides a conveyor out of the octopus vault into a cloud inspection room where a robot raises a green check flag; then it is placed into a small curtained test booth in the mall, and a link beam from the booth reaches a student's phone showing the updated app. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 학생들이 직접 Preview QR을 찍어 보게 하면 "손님 가게는 그대로인데 미리보기 가게만 바뀐" 것을 체감합니다.

---

# P77 · 🔁 시연 ④ 리뷰 → Merge → Production 자동 갱신

단계도: 👀 Preview에서 팀 리뷰 ("사회 샘플 채점 OK?") → 🔀 **Merge** → `main` → ✅ CI 다시 통과 → 🏪 **Production 자동 배포** → 📱 원래 주소 새로고침 → ✨ 새 기능

비교:
| ❌ CI가 빨간 X라면? | ✅ 초록 체크라면? |
|---|---|
| Merge 하지 않는다 → 에이전트에게 에러 붙여넣고 수정 → 다시 push | Merge → 본 가게 자동 갱신 |
| 손님 가게는 **그대로 안전** | 손님은 새 기능을 바로 사용 |

`⏱ 78 – 80분` `위 7단 · 아래 2열 비교`

🎨 IMAGE PROMPT — A reviewer student stamps a green approval on a small gate; the tested shop version glides from the test booth into the main storefront of the mall, whose sign brightens; in a side panel, a version with a red light is sent back on a small track to the builder robot's repair bench while the main store remains untouched. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 80분 지점입니다. 1단계 P56의 9칸 여행을 실제로 한 바퀴 돌았습니다.

---

# P78 · 오늘 연결된 전체 파이프라인 — 지도가 현실이 됐다

단계도 (오늘 실제로 지나간 길):
📋 캔버스 (0단계) → 🧾 프롬프트 (1단계) → 🎨 v0 클론 (2단계 ①~⑤) → 🎊 Publish (⑥) → 🐙 GitHub (시연 ①) → 🤖 에이전트 (시연 ②) → ✅ CI · 🧪 Preview (시연 ③) → 🔀 Merge · 🏪 Production (시연 ④) → 🙋 피드백 (토론) → 📋

> P35의 지도와 **똑같은 그림**. 이제 각 칸을 직접 봤어요.

`큰 원형 파이프라인 · 각 칸 아래 카드 번호 · 모두 초록 체크`

🎨 IMAGE PROMPT — The same large factory pipeline map from earlier, now fully lit with green check lights at every station, and small footprints of the three students along the entire loop; at the end, a feedback mailbox overflows with cards flowing back to the planning desk where the loop starts again. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 25분 지점에 본 지도(P35)를 다시 띄우고 "이제 이 칸들을 다 지나왔다"고 말해 주세요. 이 장면이 수업 전체를 하나로 묶습니다.

---

# P79 · 🟢 MVP 갤러리 — 같은 원본, 다른 클론

단계도: 📱 팀 QR을 책상에 세운다 → 🚶 **같은 앱을 클론한 팀**끼리 먼저 방문 (2분) → 🚶 **다른 앱을 클론한 팀** 방문 (2분) → 🃏 손님 카드 작성

| 🙋 손님 카드 | |
|---|---|
| 👍 원본처럼 잘 된 것 1개 | |
| 🤔 원본과 다르거나 헷갈린 것 1개 | |
| ✨ 이 팀의 한 끗 · 다음에 있으면 좋을 것 1개 | |

`⏱ 80 – 84분` `위 4단 · 아래 손님 카드`

🎨 IMAGE PROMPT — A mini science-fair gallery: team tables each with a phone stand displaying a square scan pattern and a small model of their clone app; students walk between tables in two groups, those who cloned the same original first, then mixing; visitors write on three-section feedback cards with a thumbs up, a thinking face and a sparkle. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 같은 원본을 클론한 팀끼리 비교하면 "같은 기획, 다른 결과"가 보여 토론 거리가 풍부해집니다.

---

# P80 · 토론 ① 기획 — 원본과 무엇이 같고, 무엇이 달랐나?

구조도 (토론 질문 → 연결 단계):
❓ "원본의 **핵심 경험**을 우리 클론도 주나?" → 🟡 0단계 한 줄 정의
❓ "MVP에서 **뺀 기능** 중 가장 아쉬운 건?" → 🟡 0단계 Must / Later
❓ "**한 끗**이 사용자에게 의미가 있었나?" → 🟡 0단계 한 끗
❓ "역기획하면서 **강사의 기획 의도**를 하나 찾았다면?" → 🟡 0단계 기획 8단계

`⏱ 84 – 86분` `4개 질문 카드 · 각 카드 오른쪽에 0단계 배지`

🎨 IMAGE PROMPT — A circle of students sitting on cushions with question cards in the middle; above them a floating comparison shows the original app model and their clone model side by side with glowing lines connecting matching parts and a sparkle on one different part. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 팀당 한 질문만 골라 30초씩 말하게 합니다. 정답보다 "왜"를 말하는 게 목표입니다.

---

# P81 · 토론 ② 구조 — 진짜 서비스가 되려면 어디를 바꿀까?

구조도:
❓ "AI 답을 **진짜 AI**로 바꾸려면?" → 🧠 `engine.ts` 뒤만 → `/api/respond` → Claude API · 🔒 키는 서버
❓ "**친구 폰에도** 내 기록이 보이려면?" → 🚪 `repo.ts` 뒤만 → DB API (Django · Supabase)
❓ "**화면 코드**는 몇 줄 바뀌나?" → **0줄** (문 두 개 원칙)

| 오늘 (PHASE 1) | 다음 (PHASE 2) | 바꾸는 곳 |
|---|---|---|
| 키워드 규칙 채점 | 루브릭 LLM 채점 | `ENGINE=llm` |
| localStorage | DB + 로그인 | `DATA_SOURCE=api` |
| JSON 직접 수정 | 관리자 페이지 | `models.py` · `admin.py` |

`⏱ 86 – 87분` `위 3갈래 · 아래 표`

🎨 IMAGE PROMPT — The two doors at the back of the clone shop: a student flips the mustard door's switch so its track now leads to a cloud brain, and the teal door's track now leads to a shared database building; the shop front and its customers remain exactly the same, with a mustard ribbon on the unchanged facade. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1단계 P38에서 배운 문 두 개가 여기서 답이 됩니다. "화면 코드 0줄"이라는 답이 나오면 구조를 이해한 것입니다.

---

# P82 · 토론 ③ 책임 — "돌아간다"와 "믿고 쓴다"는 다르다

비교:
| ⛵ 오늘의 클론 (종이배) | 🚢 진짜 서비스 (여객선) |
|---|---|
| 우리 팀 · 친구만 써 봄 | 낯선 사람이 씀 |
| 규칙 기반 · 정직하게 고지 | AI가 틀릴 수 있음 → 사람 확인 장치 |
| 개인정보 없음 | 개인정보 · 비밀 키 보호 |
| 마음 앱이면 안전 검사 | 안전 검사 + 전문가 검토 |

❓ "우리 클론이 **누군가에게 해를 줄 수 있는 지점**은?"
❓ "**CI가 초록**이면 안전한가?" → 아니요, 사람이 눌러 보고 판단

`⏱ 87 – 88분` `2열 비교 · 아래 질문 2개`

🎨 IMAGE PROMPT — A calm harbor: a small paper boat with a few students floating safely near the shore, and a large passenger ship nearby with a captain checking a long checklist, lifebuoys, a shield emblem and a lighthouse; a dotted path of question-mark stepping stones connects the boat to the ship. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 자동 검사와 AI가 아무리 좋아도 마지막 판단은 사람의 몫입니다. 바이브 코딩의 지휘자가 지는 책임입니다.

---

# P83 · 피드백 → 백로그 → 다음 PR

단계도: 🃏 **손님 카드** 모으기 → 🗂 같은 의견 묶기 → 🔢 **다음 버전 3개** 고르기 → 📝 **고치는 주문 문장**으로 → 🌿 다음 시간 첫 브랜치 · 첫 PR

| 순위 | 다음 버전 백로그 | 고칠 레이어 | 주문 / 요청 문장 |
|:---:|---|---|---|
| 1 | | | "○○할 때 △△가 돼. □□로 고쳐 줘." |
| 2 | | | |
| 3 | | | |

`⏱ 88 – 89분` `위 5단 · 아래 백로그 표`

🎨 IMAGE PROMPT — A team gathers feedback cards on a table, groups them into three neat piles, and pins the top three onto a small kanban board; one card is rolled into an order scroll and placed at the start of a fresh branch growing from a tree trunk inside the octopus vault. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘의 마지막 결과물이 다음 시간의 첫 바통입니다. 루프는 끝나지 않고 다시 시작합니다.

---

# P84 · 앞으로의 지도 — 클론 MVP에서 내 서비스까지

단계도:
🧬 **오늘** 클론 MVP (PHASE 1) → 🔁 **다음** 피드백 2~3바퀴 (PR · Preview) → ✨ **내 아이디어**로 갈아타기 (같은 구조 · 다른 기획) → 🗄 **PHASE 2** DB · 로그인 · 관리자 → 🤖 **AI 연결** (서버에서 Claude API · 🔒 키) → 📱 **앱** (같은 데이터 · 다른 화면)

> 클론으로 배운 **구조**와 **파이프라인**은 그대로 → 바뀌는 건 **기획 캔버스**뿐

`가로 6단 로드맵 · 첫 칸 "현재 위치" 핀`

🎨 IMAGE PROMPT — A winding road map across a small town: starting from a cloned shop marked with a you-are-here pin, past a feedback workshop, a fork where students swap in their own new blueprint while keeping the same building frame, a construction site for a database basement, a back door where a cloud brain chef arrives with a locked key box, and finally a second branch store shaped like a smartphone. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 클론 코딩의 진짜 목적은 "내 앱"을 만들 힘을 얻는 것입니다. 오늘 배운 구조에 내 캔버스만 바꿔 끼우면 됩니다.

---

# P85 · 90분 한 장 총정리 — 0 → 1 → 2

단계도:
🟡 **0 기획 · 선택** — 앱 1개 선택 → 역기획 7단계 → 📋 **클론 기획 캔버스**
→ 🔵 **1 개발 프로세스** — 바이브 코딩 · 5 레이어 · 문 두 개 · v0 → GitHub → 에이전트 → Vercel → CI/CD → 🧾 **마스터 프롬프트 + 파이프라인 지도**
→ 🔴 **2 실습** — v0 클론 6스텝 → Publish → CI/CD 시연 → 🌐 **MVP 주소**
→ 🟢 **토론** — 기획 · 구조 · 책임 → 🗂 **다음 버전 백로그** → 다시 🟡

| 단계 | 핵심 질문 | 결과물 |
|---|---|---|
| 🟡 0 | 무엇을, 왜, 어디까지? | 캔버스 |
| 🔵 1 | 어떤 구조로, 어떤 길로? | 프롬프트 · 지도 |
| 🔴 2 | 정말 돌아가고, 믿을 만한가? | MVP · 백로그 |

`위 4단 릴레이 · 아래 표`

🎨 IMAGE PROMPT — A summary poster showing the full relay track as a loop: the mustard runner with a canvas, the teal runner with a scroll and a map, the coral runner crossing a finish line where a phone shows a live app, and a green group of students in a discussion circle who hand a new card back to the mustard runner, closing the loop. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 세 가지 질문을 학생들이 함께 소리 내어 읽게 하세요. 무엇을 · 어떤 구조로 · 믿을 만한가.

---

# P86 · 마무리 — 여러분이 지휘자였어요 🎼

> "오늘 여러분은 잘 만든 앱 하나를 **거꾸로 기획**하고,
> **말로 지휘해서** 똑같이 돌아가는 MVP를 만들고,
> **올리기만 하면 저절로 검사하고 문을 여는 길**까지 봤어요.
> 잘 설계된 가짜는 **스위치 하나로 진짜**가 됩니다."

| 📝 과제 | 내용 |
|---|---|
| 1 | MVP 주소를 **사용자 5명**에게 보내고 손님 카드 받기 |
| 2 | 백로그 1번을 **고치는 주문 문장**으로 써 오기 (다음 시간 첫 PR) |
| 3 (선택) | 같은 구조에 **내 아이디어**로 캔버스 한 장 새로 쓰기 |

`⏱ 89 – 90분` `위 큰 인용 (머스터드 배경) · 아래 과제 표`

🎨 IMAGE PROMPT — A curtain-call scene on a small stage: three students bow holding a conductor's baton while friendly robots with instruments (a painting robot, a builder robot, a little octopus, a launch-tower robot) bow behind them; above the stage a large screen shows the live clone app on a phone, and a mustard light switch glows on the side wall with a faint path of light leading to a future cloud brain. friendly isometric 3D clay-style illustration, Korean students in teams of three, navy teal coral mustard and green palette on warm cream, soft shadows, clean composition, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 마지막 문장 "잘 설계된 가짜는 스위치 하나로 진짜가 된다"를 함께 읽고 90분을 마칩니다.
