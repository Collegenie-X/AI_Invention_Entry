# 🎬 Gamma 프롬프트 — 4일차 1교시 · 개발 환경 구축: 내 컴퓨터에 "진짜 주방"을 차린다

> **원본** — `4일차_1교시_개발환경_구축과_Nextjs의_탄생.md`
> **대상** — 초등 5~6학년 · 중학생 · 3인 1팀 (팀당 Windows 노트북 1대) · 45분
> **핵심 비유** — 🍳 개발 환경 = 요리사의 주방 · 🪜 주방 공사 5계단 · 🚗 React = 엔진, Next.js = 완성차 · 🏭 CI/CD = 컨베이어 벨트
> **분량** — 50장 · 16:9

---

## 📌 사용법 (이 박스는 Gamma에 붙여넣지 않습니다)

| 순서 | 할 일 |
|:---:|---|
| 1 | Gamma → **새로 만들기** → **텍스트 붙여넣기 (Paste in text)** |
| 2 | 아래 **`▼ 여기부터 붙여넣기`** 부터 파일 끝까지 복사해서 붙여넣기 |
| 3 | 카드 나누기: **`---` 기준** · 텍스트: **보존 (Preserve)** · 이미지: **AI 이미지** · 언어: **한국어** · 16:9 |
| 4 | **추가 지시** 칸에 아래 「전역 디자인 지시」 붙여넣기 |
| 5 | 생성 후 `🎨 IMAGE PROMPT` → 카드 이미지의 AI 생성 프롬프트로, `🗣️ 노트` → 발표자 노트로 옮기고 본문에서 지우기 |
| 6 | `📸 캡처` 표시가 있는 카드(설치 화면 등)는 **리허설 때 찍은 실제 화면 캡처**로 이미지를 바꾸면 훨씬 정확합니다. AI 이미지는 프로그램 화면을 정확히 그리지 못해요. |

### 전역 디자인 지시 (Additional instructions에 붙여넣기)

```text
- 초등 5~6학년·중학생이 보는 수업 슬라이드입니다. 글은 짧고 크게, 그림과 도식은 크게.
- 이 수업의 목표는 "개발 도구 5개를 왜·어떤 순서로 설치하는지"와 "JavaScript → React → Next.js → Vercel 흐름"을 이해하는 것입니다. 도식을 최우선으로 시각화하세요.
- 핵심 비유는 처음부터 끝까지 "요리사의 주방" 하나입니다. 아이콘·그림을 주방 소품으로 통일하세요.
- "단계도:" 로 시작하는 목록 → 화살표가 있는 가로 프로세스 다이어그램
- "세로단계:" 로 시작하는 목록 → 번호가 붙은 세로 스텝 다이어그램 (설치 순서)
- "구조도:" 로 시작하는 목록 → 상자와 연결선이 있는 구조 다이어그램
- "트리:" 로 시작하는 목록 → 위 1칸에서 아래 여러 칸으로 갈라지는 트리 다이어그램
- "순환:" 으로 시작하는 목록 → 원형 사이클 다이어그램
- "비교:" 로 시작하는 표 → 2열 비교 카드 (왼쪽 코랄=불편/옛날, 오른쪽 틸=좋은/새로운)
- "계단:" 으로 시작하는 목록 → 왼쪽 아래에서 오른쪽 위로 올라가는 계단 다이어그램
- "타임라인:" 으로 시작하는 목록 → 가로 연표 (연도 크게)
- "갈림길:" 로 시작하는 목록 → 가운데 질문에서 여러 갈래로 나뉘는 결정 다이어그램
- "매핑:" 으로 시작하는 목록 → 왼쪽 항목과 오른쪽 항목을 1:1 화살표로 잇는 다이어그램
- 명령어(`node -v` 등)는 검은 터미널 모양 상자에 고정폭 글꼴로 크게 보여 주세요.
- 도구별 고정 색: Node.js=코랄 #FF6B5B · npm=머스터드 #F2B705 · VS Code=블루 #1971C2 · Git=그린 #2F9E44 · GitHub=네이비 #1B2A4A · Next.js=틸 #12A4A0
- 배경 크림 #FFFBF2 · 글꼴 Pretendard (제목 ExtraBold, 본문 SemiBold) · 본문 최소 28pt · 한 카드 글 최대 5줄
- 모든 카드에 이모지를 아이콘처럼 크게 사용하세요.
- "🎨 IMAGE PROMPT", "📸 캡처", "🗣️ 노트" 문단은 화면에 표시하지 마세요. IMAGE PROMPT는 그 카드의 AI 이미지 프롬프트로, 노트는 발표자 노트로만 사용하세요.
- 백틱(`)으로 감싼 마지막 줄의 레이아웃 설명(예: `표지 · 왼쪽 큰 제목`)은 배치 지시이며 화면에 표시하지 마세요.
```

### 이미지 공통 스타일 (모든 프롬프트 끝에 이미 포함됨)

```text
friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9
```

### 고정 캐릭터 (사람이 나오는 프롬프트에 이미 포함됨 — 카드마다 같은 팀이 나오도록)

```text
the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron
```

### 이미지 작성 원칙 (이 파일의 모든 프롬프트가 지키는 규칙)

| 원칙 | 이유 |
|---|---|
| 프로그램 화면·로고를 그리지 않고 **주방 소품으로 바꿔** 그림 | AI는 글자·로고를 엉망으로 그리고, 상표 문제도 있어요 |
| 도구는 항상 같은 소품: Node.js=휴대용 가스레인지 · npm=배달 스쿠터 · VS Code=나무 조리대와 칼 · Git=레시피 일지 · GitHub=벽의 금고 · GitHub Desktop=ATM · Next.js=완성된 자동차 · React=레고 블록 · Vercel=정비소/상가 · CI/CD=컨베이어 벨트 · Claude Code=AI 요리사 로봇 | 50장 내내 같은 그림 언어로 기억이 이어져요 |
| 한 장면 = 한 메시지, 소품은 3~5개까지 | 어린 학생은 복잡한 그림에서 핵심을 놓쳐요 |
| 도식이 있는 카드는 그림을 **오른쪽 또는 아래 작은 칸**에 | 도식이 주인공이에요 |

---

▼ 여기부터 붙여넣기

---

# P01 · 내 컴퓨터에 "진짜 주방"을 차린다 🏠🍳
### 4일차 1교시 · 개발 환경 구축과 Next.js의 탄생

어제는 **빌린 주방(v0)**,
오늘은 **내 주방**을 직접 차립니다

`표지 · 왼쪽 큰 제목 · 오른쪽 큰 일러스트`

🎨 IMAGE PROMPT — A bright cozy kitchen built inside a giant open laptop, as if the laptop screen were the back wall of the kitchen. Inside, the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron, wearing chef hats, proudly unpacking boxes: a portable gas stove, a wooden cutting board with a knife, a recipe notebook, and a small safe. A delivery scooter waits at a little window. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "오늘은 여러분 노트북 안에 주방을 차리는 날이에요. 개발자들은 이걸 '개발 환경 구축'이라고 불러요."

---

# P02 · 오늘의 길 — 45분 6정거장

단계도:
🎬 오프닝 (3분) → 🤔 ① 왜 필요해? (7분) → 🛠️ ② 한 단계씩 설치 (22분) → 📜 ③ Next.js 이야기 (8분) → 🏭 ④ 회사는 어떻게 일하나 (3분) → 🔗 닫기 (2분)

> ⭐ 가장 긴 정거장: **② 설치** · 가장 중요한 질문: **③ 왜 Next.js?**

`가로 6칸 노선도 · ②는 블루, ③은 머스터드로 굵게 강조 · 칸마다 분 표시`

🎨 IMAGE PROMPT — A cheerful road map drawn as a winding path through a small kitchen-themed town, with six signposts each marked by a big icon: a movie clapper, a question mark bubble, a toolbox, an old scroll, a factory with a conveyor belt, and a ticket. A small food truck drives along the path. The toolbox stop is the largest and glows blue, the scroll stop glows mustard. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 설치가 22분으로 가장 깁니다. 다운로드 기다리는 동안 ①·③ 비유를 끼워 넣으면 시간이 넉넉해져요.

---

# P03 · 🎬 어제는 공유 주방, 오늘은 내 가게 주방

단계도:
📅 **3일차** 🏢 v0 공유 주방 (설비는 다 있지만 내 것이 아님) → ⬆️ **오늘의 업그레이드** → 📅 **4일차** 🏠 내 컴퓨터 주방 (설비를 직접 설치)

> "진짜 요리사가 되려면 언젠가 **내 가게에 내 주방**을 차려야 해요. 오늘이 그날이에요."

`왼쪽 회색빛 공유 주방 → 큰 화살표 → 오른쪽 밝은 내 주방 · 오른쪽 블루 테두리`

🎨 IMAGE PROMPT — A two-scene illustration connected by a big glowing arrow. Left: a large shared commercial kitchen with a wall clock and a "time is up" feeling, the three students cooking at a rented station while other people wait in line behind them. Right: the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron, standing in their own small bright kitchen, arranging tools on the wall exactly how they like, relaxed and smiling. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "어제 v0는 공유 주방이었어요. 가스레인지, 냄비, 칼이 다 있었죠. 그런데 내 주방이 아니라서 시간이 다 되면 나가야 하고, 구조를 바꿀 수 없어요."

---

# P04 · 공유 주방 vs 내 주방 — 무엇이 달라질까?

비교:
| 🏢 공유 주방 (v0만 쓰기) | 🏠 내 주방 (개발 환경) |
|---|---|
| ⚡ 바로 시작 | 🛠️ 처음에 설치가 필요 |
| ⏰ 사용량 · 시간 제한 | ♾️ **제한 없음** |
| 📦 코드는 v0 안에 | 💾 **내 컴퓨터 + GitHub에 내 것으로** |
| 🙏 AI에게 부탁만 | 🔧 **직접 열고 고칠 수 있음** |
| 🎨 v0만 | 🤖 **Claude Code 등 무엇이든 연결** |

`2열 비교 카드 · 5줄 · 오른쪽 틸 강조 · 마지막 줄에 "2교시 마지막!" 작은 배지`

🎨 IMAGE PROMPT — A side-by-side comparison of two kitchen doors. Left door: a shared kitchen entrance with a ticket machine, a timer and a lock icon shape, looking a bit gray. Right door: a warm wooden door of a small personal kitchen with an open sign shape, a key hanging on a hook, and a friendly robot chef peeking out from inside. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 마지막 줄이 핵심입니다. 내 주방이 있어야 2교시 마지막에 AI 요리사(Claude Code)를 초대할 수 있어요.

---

# P05 · ① 왜 이 도구들이 필요할까?
### 🍳 화면 하나 만드는데 도구가 왜 4개나?

`섹션 구분 카드 · 큰 숫자 ① · 코랄 배경 띠`

🎨 IMAGE PROMPT — A section title illustration: an empty kitchen counter under a spotlight with four empty outlined spaces on it, like a puzzle waiting to be filled, shaped like a gas stove, a scooter, a cutting board and a notebook. A big friendly question mark floats above the counter. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 첫 번째 정거장. 설치 전에 "왜"를 먼저 알면 설치가 덜 지루해요.

---

# P06 · 클론 코딩 = 맛집 라면 따라 끓이기 🍜

> **클론 코딩** = 이미 있는 서비스를 **똑같이 따라 만들어 보며** 배우는 방법

단계도:
🍜 **맛집 라면** = 실제 서비스 (askback) → 🔍 맛 · 모양 분석 → 📝 **레시피 노트** = 분석.md → 🧑‍🍳 내 주방에서 → 🍜 **내가 끓인 라면** = 클론 사이트 → 🏪 **가게 오픈** = ○○.vercel.app

> 🏠 **내 주방(개발 환경)** 이 없으면 끓일 곳이 없어요 → **오늘 1교시!**

`가로 4칸 흐름 · 아래에 "내 주방" 블루 상자가 세 번째 칸을 점선으로 받쳐 줌`

🎨 IMAGE PROMPT — A four-step story strip: a famous noodle shop bowl steaming on a counter, a student tasting it with a magnifying glass and taking notes in a notebook, the team of three cooking the same noodles in their own small kitchen, and finally a tiny new noodle shop with a ribbon being cut. A soft blue highlight surrounds the home kitchen scene. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "유명한 맛집 라면을 먹어 보고 '이건 어떻게 만들었을까?'를 거꾸로 알아내서 내 주방에서 똑같이 끓여 보는 거예요."

---

# P07 · 클론 코딩, 궁금한 세 가지

| ❓ 질문 | 💡 답 | 🍳 비유 |
|---|---|---|
| 왜 따라 만들어요? | 잘 만든 서비스엔 **이유 있는 배치**가 숨어 있어요 | 🎨 명화를 따라 그리면 붓질이 보여요 |
| v0만으로는 안 돼요? | 코드를 **내 것으로 가져와 고치려면** 내 주방이 필요해요 | 🍱 배달 음식 vs 직접 요리 |
| 베끼는 거 아니에요? | **공부용**이에요. 이름 · 로고 · 글은 **우리 것으로** | 📚 교과서 예제 풀기 |

`질문 3개 카드형 · 왼쪽 큰 물음표 아이콘 · 세 번째 줄 머스터드 강조`

🎨 IMAGE PROMPT — Three small vignettes in a row: a child copying a famous painting on an easel and noticing brush strokes, a child choosing between a delivery food box and fresh ingredients on a counter, and a child solving a textbook example at a desk with a pencil. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "베끼기"가 아니라 "공부"라는 점을 꼭 짚어 주세요. 2교시에 이름·로고·글은 반드시 우리 것으로 바꿉니다.

---

# P08 · ⭐ 주방 설비 4종 + 금고 1개

구조도:
🏠 **내 주방 (Windows 노트북)**
- 🔥 **Node.js** = 가스레인지 — 불(실행)을 켜 주는 기계
- 🛵 **npm** = 식재료 배달 앱 — 부품을 한 번에 배달
- 🔪 **VS Code** = 조리대 + 칼 — 코드를 펼치고 다듬는 곳
- 📒 **Git** = 레시피 일지 — 바뀐 걸 모두 기록

📒 Git → 📤 보내기 → 🏦 **GitHub** = 레시피 금고 (온라인)

`큰 주방 상자 안에 4칸 아이콘 (도구별 고정 색) · 상자 밖 오른쪽에 금고 1칸 · Git→GitHub 화살표`

🎨 IMAGE PROMPT — A cutaway view of one cozy kitchen showing exactly five clearly separated objects, each with its own soft colored glow: a coral-red portable gas stove with a blue flame, a mustard-yellow delivery scooter parked at the window, a blue-tinted wooden cutting board counter with a chef's knife, a green recipe notebook with a pen, and outside the kitchen wall, connected by a dotted line, a navy bank vault. The team of three points at the objects. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 이 카드가 1교시 전체의 지도입니다. 이후 모든 카드에서 같은 소품(가스레인지·스쿠터·조리대·일지·금고)이 다시 나와요.

---

# P09 · 하나라도 없으면 어떻게 될까?

| 도구 | 🍳 비유 | 😱 없으면? |
|---|---|---|
| 🔥 Node.js | 가스레인지 | 불이 없어요 → Next.js가 **아예 안 켜져요** |
| 🛵 npm | 배달 앱 | 밀가루부터 직접 빻기 → React를 **손으로 못 구해요** |
| 🔪 VS Code | 조리대 | 바닥에서 요리 → 파일 수십 개를 메모장으로 |
| 📒 Git | 레시피 일지 | 망친 요리를 **되돌릴 수 없어요** |
| 🏦 GitHub | 금고 | 노트북 고장 = 레시피 증발 · **자동 배포 불가** |

`표 · 왼쪽 열은 도구별 고정 색 칩 · 오른쪽 "없으면?" 열은 코랄 글씨`

🎨 IMAGE PROMPT — A funny "what if" illustration: a student trying to cook with no stove, holding a pot over a candle; another student kneeling on the floor chopping vegetables on a newspaper; a third student grinding wheat by hand with a stone. Their expressions are comically tired. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "가스레인지가 없으면? 배달 앱이 없으면? 조리대가 없으면? 일지가 없으면? 그래서 넷 다 있어야 주방이 돌아가요."

---

# P10 · 왜 "이 순서"로 설치할까? — 주방 공사 순서

계단:
1️⃣ 🔥 **가스 공사** — Node.js + npm (가스가 먼저!)
2️⃣ 🔪 **조리대 설치** — VS Code (터미널 스위치가 달려 있어요)
3️⃣ 📒 **일지 준비** — Git ("편집기는 VS Code로"를 고르려면)
4️⃣ 🏧 **금고 ATM** — GitHub Desktop (일지가 있어야 금고에)
5️⃣ 🍳 **첫 요리** — Next.js 실행 (모두 준비된 뒤!)

`왼쪽 아래 → 오른쪽 위 5계단 · 1단 코랄, 5단 그린 굵게 · 계단마다 아이콘`

🎨 IMAGE PROMPT — A five-step staircase rising from bottom-left to top-right, each step holding one object: a portable gas stove with a delivery scooter, a wooden cutting board counter, a recipe notebook, an ATM machine, and at the top a steaming plate of food under a spotlight. The team of three climbs the stairs carrying toolboxes, the leader almost at the top. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 순서에는 이유가 있습니다. 특히 3계단 Git 설치 중 "편집기 = VS Code"를 고르려면 VS Code가 먼저 있어야 해요.

---

# P11 · 프론트 페이지 하나에 이게 다 필요한 이유 — 한 장 그림

구조도:
🏠 **내 컴퓨터** (1교시)
🔪 VS Code 코드 고치기 → 🔥 Node.js `npm run dev` → 🖥️ localhost:3000 (나만 보는 시식)
🛵 npm (React · Next.js 배달) → 🔥 Node.js
🔪 VS Code → 📒 Git 기록

🌐 **인터넷** (2교시)
📒 Git → push → 🏦 GitHub → 자동 연결 → 🚀 Vercel → 🌐 모두가 보는 가게

> **핵심 한 줄** — VS Code에서 고치고 → Node.js로 맛보고 → Git으로 기록하고 → GitHub에 넣으면 → Vercel이 가게를 연다

`왼쪽 큰 상자 "내 컴퓨터(오늘)" · 오른쪽 상자 "인터넷(2교시)" · 둘을 잇는 push 화살표`

🎨 IMAGE PROMPT — A wide panorama split into two halves joined by a glowing path. Left half: inside a cozy home kitchen, a student edits at the cutting board, the gas stove is lit, a scooter delivers boxes, and a small tasting spoon over a pot. Right half: the recipe notebook travels along the path into a bank vault, then a mechanic garage, and finally a bright street shop with many customers lining up. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "오늘 1교시는 이 그림의 왼쪽 상자를 완성하고, 2교시는 오른쪽을 이어요." 손으로 왼쪽/오른쪽을 짚어 주세요.

---

# P12 · ② 한 단계씩 설치하기
### 🪜 주방 공사 5계단 · 규칙: **설치 1개 = 확인 1개**

순환:
1. ⬇️ **설치**
2. ✅ **확인 명령** — 숫자가 나왔나?
3. 네 → 🎫 **체크 카드 도장** → 다음 계단
4. 아니요 → 🆘 **대처표 보기** → 다시 확인

`섹션 구분 카드 · 큰 숫자 ② · 블루 배경 띠 · 아래에 작은 결정 사이클`

🎨 IMAGE PROMPT — A section title illustration: a construction-themed kitchen with a hard hat on top of a chef's hat, a big rubber stamp pressing a green check mark onto a card, and a staircase of five steps in the background. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "확인 안 한 설치는 2교시에 반드시 터집니다." 확인하기는 절대 건너뛰지 않아요. 팀이 확인을 끝내면 체크 카드에 도장!

---

# P13 · 🎫 우리 주방 공사 체크 카드

```
┌──────────────────────────────────────────────┐
│ 🏠 우리 주방 공사 체크 카드     팀: ______    │
├──────────────────────────────────────────────┤
│ 1️⃣ 🔥 Node.js   node -v → v_______  [도장]  │
│    🛵 npm       npm -v  → ________  [도장]  │
│ 2️⃣ 🔪 VS Code   code -v → ________  [도장]  │
│ 3️⃣ 📒 Git       git -v  → ________  [도장]  │
│ 4️⃣ 🏧 GitHub Desktop 계정 표시      [도장]  │
│ 5️⃣ 🍳 Next.js  localhost:3000 열림  [도장]  │
└──────────────────────────────────────────────┘
```

`인쇄용 양식 카드 · 큰 고정폭 글씨 · 오른쪽 도장 칸을 동그라미로`

🎨 IMAGE PROMPT — A close-up of a teacher's hand stamping a bright green star stamp onto a printed checklist card on a classroom desk, while the team of three watches excitedly. Five empty stamp circles are on the card, two already filled. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 팀당 1장 인쇄해서 나눠 주세요. 도장 5개가 모이면 1교시 성공입니다.

---

# P14 · 공사 전 점검 (1분) — 주방은 전용 공간에

| 확인 | 어디서 | 필요한 값 |
|---|---|---|
| 💻 Windows 버전 | 시작 → 설정 → 시스템 → 정보 | Windows 10 / 11 · **64비트** |
| 💾 저장 공간 | 파일 탐색기 → 내 PC | **3GB 이상** |
| 📁 작업 폴더 | C: 드라이브 | **`C:\dev`** 폴더 만들기 |

> ❓ **왜 `C:\dev`?** — 바탕화면 · 문서 폴더는 **OneDrive 동기화**나 **한글 사용자 이름** 때문에 오류가 잦아요.
> 🏠 주방은 **현관 앞 복도(바탕화면)** 가 아니라 **전용 공간**에!

`위 점검표 · 아래 "C:\dev" 큰 폴더 아이콘 강조`

🎨 IMAGE PROMPT — A house cross-section: a messy hallway near the front door cluttered with shoes, boxes and a tangled cloud cable (representing the desktop), and a separate clean, tidy dedicated kitchen room at the back with a fresh empty counter and a door sign shaped like a folder. The team carries their cooking tools past the hallway into the dedicated room. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 파일 탐색기에서 `C:\dev` 폴더를 만든 화면

🗣️ 노트 — 노트북 사용자 폴더 이름이 한글이면 일부 도구가 오류를 냅니다. 모든 작업은 `C:\dev`에서!

---

# P15 · 1️⃣ 계단 — 🔥 Node.js: 왜 필요해?

비교:
| ❌ Node.js 없이 | ✅ Node.js 있으면 |
|---|---|
| JavaScript → 🌐 **브라우저 안에서만** 돌아가요 | JavaScript → 💻 **내 컴퓨터에서도** 돌아가요 |
| 식당 안에서만 요리 | Next.js 개발 서버 · npm · 빌드 도구 사용 가능 |

> 🔥 Node.js = JavaScript를 **식당 밖, 내 주방**에서도 요리하게 해 준 **휴대용 가스레인지**
> 🛵 npm = Node.js를 깔면 **선물처럼 같이 따라오는 배달 앱**

`2열 비교 · 오른쪽에 큰 가스레인지 아이콘(코랄) + 작은 스쿠터 아이콘(머스터드)`

🎨 IMAGE PROMPT — A two-part scene. Left: a chef stuck inside a restaurant building, cooking only behind its glass window. Right: the same chef happily carrying a coral-red portable gas stove out into a cozy home kitchen and lighting a blue flame, while a mustard-yellow delivery scooter arrives with a gift box tied with a ribbon. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "JavaScript는 원래 브라우저라는 식당 안에서만 요리할 수 있었어요. Node.js는 그걸 밖으로 꺼내 준 휴대용 가스레인지예요."

---

# P16 · Node.js 설치 순서 — ⭐ LTS를 고르세요

세로단계:
1. 🌐 크롬 → **nodejs.org**
2. ⭐ **LTS 버전** 다운로드 (Windows Installer .msi)
3. 📂 받은 파일 더블클릭
4. ▶️ Next → 동의 ☑ → Next (위치 · 구성 **그대로**)
5. ⚠️ "Tools for Native Modules" **☐ 체크하지 않고** Next (체크하면 20분+)
6. ✅ Install → 권한 창 "예" → Finish

> ❓ **LTS** = Long Term Support = 🎮 게임의 **정식판** (Current = 베타판) → 수업은 무조건 **정식판!**

`세로 6스텝 · 2번 머스터드, 5번 코랄 강조 · 오른쪽 작은 이미지`

🎨 IMAGE PROMPT — Two game cartridges on a shelf: one shiny polished box with a gold star seal labeled only by a star shape (the stable official edition), and one rough box with tape and a beaker icon (the experimental beta). A student confidently picks the shiny star box while a friendly gas stove mascot gives a thumbs up. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — nodejs.org의 LTS 다운로드 버튼 · "Tools for Native Modules" 체크박스 화면 (빨간 동그라미 표시)

🗣️ 노트 — 권한 창에서 비밀번호를 물으면 손 들고 선생님을 부르게 하세요. 설치 파일은 USB로 미리 나눠 주면 10분을 벌어요.

---

# P17 · ✅ Node.js 확인하기 — 가스레인지에 불이 들어왔나?

> 설치 후 **열려 있던 창을 다 닫고** → 시작 → `cmd` → 명령 프롬프트

| 명령 | 🍳 질문 | ✅ 성공 | ❌ 실패 |
|---|---|---|---|
| `node -v` | 🔥 가스레인지야, 몇 년형이니? | `v22.○○.○` | `'node'은(는) 내부 또는 외부 명령…` |
| `npm -v` | 🛵 배달 앱아, 버전이 뭐니? | `10.○.○` | 같은 메시지 |
| `npx -v` | 🧑‍🍳 출장 요리사 호출기야, 있니? | `10.○.○` | 같은 메시지 |

`검은 터미널 상자에 명령 3줄 크게 · 오른쪽에 성공(그린)/실패(코랄) 예시`

🎨 IMAGE PROMPT — A student kneeling in front of a coral-red portable gas stove, turning the knob, and a bright blue flame pops up with sparkles; beside it a mustard scooter honks happily and a tiny chef figure waves from a pager device. The other two teammates cheer behind. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 명령 프롬프트에 `node -v`, `npm -v`, `npx -v`를 치고 숫자가 나온 화면

🗣️ 노트 — 숫자가 나오면 체크 카드에 버전을 적고 도장! 실패 메시지가 나오면 창을 모두 닫았다가 다시 열어 보세요.

---

# P18 · npx는 또 뭐예요? — 🧑‍🍳 출장 요리사 호출기

비교:
| 🛵 npm install | 🧑‍🍳 npx |
|---|---|
| 재료(부품)를 **주방에 영구 보관** | 요리사를 **한 번만 불러** 일 맡기기 |
| 냉장고에 계속 남아요 | 일 끝나면 돌아가요 |
| 예: `npm install` | 예: `npx create-next-app` (5계단에서!) |

> 출장 요리사를 한 번 불러서 **주방 기초 공사**를 맡기는 것

`2열 비교 · 오른쪽에 호출기 아이콘 크게`

🎨 IMAGE PROMPT — A student pressing a big button on a small pager, and a cheerful traveling chef arrives at the kitchen door carrying a toolbox and blueprints, ready to set up the kitchen; in the background a fridge stays full of stored ingredients for contrast. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — npx는 5계단에서 Next.js 주방 기초 공사를 맡길 때 씁니다. 지금은 "있다"만 확인하면 돼요.

---

# P19 · 2️⃣ 계단 — 🔪 VS Code: 조리대 설치

> 코드는 **파일 수십 개**. 메모장으로 하나씩 열면 **바닥에 재료를 늘어놓고 요리**하는 것과 같아요.

세로단계:
1. 🌐 **code.visualstudio.com** → Download for Windows
2. 📂 설치 파일 실행 → 동의
3. ⭐ **추가 작업 체크 4개 모두 켜기**
   ☑ 바탕 화면 바로 가기 · ☑ 파일 "Code로 열기" · ☑ **폴더** "Code로 열기" · ☑ **PATH에 추가**
4. ✅ 설치 → 마침 → 실행
5. 🌏 오른쪽 아래 "한국어 언어 팩" 알림 → 설치 → 다시 시작

`세로 5스텝 · 3번을 블루 큰 상자로 · 체크 4개를 체크박스 아이콘으로`

🎨 IMAGE PROMPT — Workers in overalls (the team of three) installing a long blue-tinted wooden kitchen counter, with a knife rack, ingredient shelves above, and a small control knob panel built into the side of the counter. Four big green check marks float above the counter like a finished checklist. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — VS Code 설치 "추가 작업 선택" 화면에서 4개 모두 체크한 상태

🗣️ 노트 — 특히 "PATH에 추가"가 빠지면 나중에 `code .` 명령이 안 됩니다. 4개 모두 켰는지 옆 팀끼리 확인!

---

# P20 · VS Code 주방 지도 — 다섯 구역

구조도:
🧭 **활동 막대** (왼쪽 끝) = 공구 벽걸이
📂 **탐색기** `Ctrl+Shift+E` = 재료 선반
📝 **편집기** = 도마 위
⌨️ **터미널** `` Ctrl+` `` = ⭐ **가스레인지 스위치**
📊 **상태 표시줄** = 온도계

> 🔀 소스 제어 `Ctrl+Shift+G` = 레시피 일지 펼치기 · 🧩 확장 `Ctrl+Shift+X` = 주방 도구 상점

`VS Code 화면 배치를 닮은 5구역 와이어프레임 (왼쪽 막대 · 왼쪽 패널 · 가운데 큰 편집기 · 아래 터미널 · 맨 아래 띠) · 터미널 머스터드 강조`

🎨 IMAGE PROMPT — A top-down view of a well-organized kitchen arranged like a floor plan: a vertical tool wall on the far left, an ingredient shelf next to it, a big cutting board in the center as the main workspace, a stove control panel along the bottom edge glowing mustard, and a thin thermometer strip at the very bottom. No screens, just the kitchen layout. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — VS Code 실제 화면 위에 다섯 구역을 색 상자로 표시한 이미지

🗣️ 노트 — 터미널 단축키는 Ctrl + 숫자 1 왼쪽 키(`). 오늘 가장 많이 누를 키예요.

---

# P21 · 추천 확장 + ✅ VS Code 확인

| 🧩 확장 (선택) | 🍳 비유 | 하는 일 |
|---|---|---|
| Korean Language Pack | 🌏 한국어 메뉴판 | 메뉴를 한국어로 |
| ES7+ React snippets | ✂️ 모양 틀 | React 코드 틀 자동 입력 |
| Tailwind CSS IntelliSense | 🎨 양념 이름 자동 완성 | 디자인 글자 자동 완성 |
| Markdown Preview Mermaid | 🖼️ 레시피 그림 보기 | `.md` 안 도식을 그림으로 |

✅ **VS Code 안에서** 터미널 열기 (`` Ctrl+` ``) → `code -v` → `1.○○.○` 숫자 3줄
❌ 안 되면 → VS Code **완전히 닫고 다시 열기** → 그래도 안 되면 PATH 체크 빠짐 → 재설치

> 💡 **이제부터 모든 명령은 VS Code 터미널에서!**

`위 확장 표 · 아래 검은 터미널 상자 · 맨 아래 머스터드 띠`

🎨 IMAGE PROMPT — A small cozy kitchen gadget shop shelf with four cute gadgets on display: a menu card with a globe, a set of cookie-cutter shapes, a spice rack with tidy jars, and a picture frame showing a recipe diagram. A student puts one gadget in a basket. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — VS Code 터미널에 `code -v` 결과가 나온 화면

🗣️ 노트 — 확장은 시간이 남는 팀만. "가스레인지 스위치가 조리대에 달린 셈"이라 이제부터 명령은 VS Code 터미널에서 칩니다.

---

# P22 · 3️⃣ 계단 — 📒 Git: 레시피 일지 = 세이브 포인트

비교:
| 😱 일지 없이 | 😎 일지(Git)가 있으면 |
|---|---|
| 어제 맛있었던 라면 | 📸 세이브 1: 기본 라면 |
| 오늘 뭘 바꿨더니 망함 | 📸 세이브 2: 계란 추가 |
| 어제 방법이 기억 안 나요 | 📸 세이브 3: 파 추가 → 망함 → ⏪ **세이브 2로 되돌리기** |

> 🎮 게임의 **세이브 포인트**처럼, 망치면 **어제 버전으로** 돌아갈 수 있어요

`2열 비교 · 오른쪽은 세이브 3칸 가로 흐름 + 3→2로 돌아가는 곡선 화살표`

🎨 IMAGE PROMPT — An open green recipe notebook with three polaroid photos clipped in a row: a plain bowl of noodles, the same bowl with an egg, and the same bowl overflowing with too many green onions looking ruined. A curved rewind arrow loops from the third photo back to the second, and a student happily points at the second photo. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "Git은 요리할 때마다 무엇을 바꿨는지 사진과 메모를 남기는 레시피 일지예요."

---

# P23 · Git 설치 — 화면 10개 중 딱 두 개만 바꿔요

세로단계:
1. 🌐 **git-scm.com** → Download for Windows → 64-bit Setup 실행
2. ▶️ 화면이 10개 넘게 나와요 → **거의 전부 Next**
3. ⭐ **기본 편집기** → "Use **Visual Studio Code** as Git's default editor"
4. ⭐ **기본 브랜치 이름** → "Override …" → **`main`**
5. ✅ Install → Finish

| 바꾸는 화면 | 왜? |
|---|---|
| 편집기 = VS Code | 기본값(Vim)은 처음 쓰는 사람이 **빠져나오기 어려워요** 😵 |
| 브랜치 = main | GitHub · Vercel이 쓰는 이름과 맞춰요 |

`세로 5스텝 · 3·4번만 블루 강조, 나머지는 회색 · 아래 작은 표`

🎨 IMAGE PROMPT — A long line of ten identical doors in a hallway; a student walks through most of them quickly with a "next" gesture, but stops at two special doors glowing blue, one with a cutting board symbol and one with a tree branch symbol, carefully choosing them. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — "Choosing the default editor" 화면과 "Adjusting the name of the initial branch" 화면

🗣️ 노트 — 나머지는 기본값이 가장 안전합니다. 두 화면만 선생님이 큰 화면으로 같이 보여 주세요.

---

# P24 · ✅ Git 확인 + 📛 일지에 이름표 달기

✅ VS Code를 **완전히 닫고 다시 열어** → `git -v` → `git version 2.○○.○.windows.1`

📛 **이름표** (선생님이 노트북마다 1회)
`git config --global user.name "team-03"`
`git config --global user.email "수업용계정@example.com"`

| 칸 | ✅ 넣을 값 | ❌ 넣지 않을 값 |
|---|---|---|
| user.name | **팀 이름** (team-03) | 학생 실명 |
| user.email | **수업용 계정 이메일** | 학생 · 부모님 개인 이메일 |

> 🔒 기록은 **영원히** 남고, 공개 저장소면 **누구나** 봐요

`위 검은 터미널 상자 2개 · 아래 표 · 마지막 줄 코랄 경고 띠`

🎨 IMAGE PROMPT — A green recipe notebook on a counter with a blank name tag sticker being attached to its cover by a student; the name tag shows only a cartoon team emblem of three small chef hats instead of any personal name. A small padlock and shield float beside it, suggesting privacy. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 이름표가 없으면 Git이 기록을 거부합니다. 개인정보 보호를 위해 실명·개인 이메일은 절대 넣지 않아요.

---

# P25 · 4️⃣ 계단 — 🏦 Git과 GitHub는 뭐가 달라?

트리:
📒 **Git** (내 주방 서랍 속 일지) → 📤 push → 🏦 **GitHub** (은행 금고)
- 💻 다른 컴퓨터에서도 꺼내 쓸 수 있어요
- 👥 팀원과 함께 같은 레시피를 봐요
- 🚀 Vercel이 금고를 보고 **자동으로 가게를 열어요** (2교시)

| | 📒 Git | 🏦 GitHub |
|---|---|---|
| 비유 | 서랍 속 **일지 공책** | 은행 **금고 서비스** |
| 어디에? | 내 컴퓨터 | 인터넷 |
| 만든 곳 | 리누스 토르발스 (2005) | GitHub (2008 · 지금은 Microsoft) |

`위 트리(1→3) · 세 번째 가지 그린 강조 · 아래 작은 비교표`

🎨 IMAGE PROMPT — A green notebook from a home kitchen drawer flying along a dotted line into a grand navy bank vault. From the vault, three paths branch out: one to a second laptop in another room, one to three teammates reading the same recipe together, and one to a garage with a mechanic opening a shop shutter. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 이름이 비슷해서 헷갈리지만, Git은 "공책", GitHub는 "공책을 맡기는 금고"예요.

---

# P26 · 🏧 GitHub Desktop = 금고 ATM

비교:
| ⌨️ 명령어 (창구 직원에게 말로) | 🏧 GitHub Desktop (ATM 버튼) |
|---|---|
| `git clone 주소` | **Clone a repository** |
| `git add .` | ☑ 바뀐 파일 체크 |
| `git commit -m "…"` | **Summary** 쓰고 **Commit to main** |
| `git push` | **Push origin** 버튼 |

> 하는 일은 **똑같아요**. 속에서는 Git이 일하고, 우리는 **화면만 보고 누르면** 돼요

`2열 비교 · 왼쪽 검은 터미널 스타일, 오른쪽 둥근 버튼 스타일 · 줄마다 ↔ 화살표`

🎨 IMAGE PROMPT — A bank lobby split in two: on the left a student nervously reading long spoken spells to a teller behind a counter, with tangled speech bubbles full of squiggles; on the right the same student calmly pressing big round colorful buttons on a friendly ATM machine that has a small vault door behind it. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 명령어는 영어 주문을 외워서 외치는 것과 같아요. 처음엔 ATM 버튼으로 시작합니다. (3계단 Git은 나중에 Claude Code가 씁니다.)

---

# P27 · GitHub Desktop 설치 + 로그인

세로단계:
1. 🌐 **desktop.github.com** → Download for Windows
2. ⚡ 실행 → **자동 설치** (Next 버튼 없음)
3. 🔑 **Sign in to GitHub.com** → 브라우저 열림 → 🧑‍🏫 **선생님이** 수업용 계정으로 승인
4. 📛 **Configure Git** → Name: `team-03` · Email: 수업용 계정 이메일
5. ✅ Finish → **"Let's get started!"** 화면

> 🔒 **약속** — GitHub 비밀번호 · 인증 코드는 **학생이 입력하지 않아요.** 선생님이 직접 승인합니다.

`세로 5스텝 · 3번 코랄(선생님 아이콘), 4번 머스터드 · 아래 자물쇠 약속 띠`

🎨 IMAGE PROMPT — A friendly teacher with a lanyard pressing an approval button on a tablet while the team of three waits beside a newly installed ATM machine in their kitchen corner; a big key and a padlock icon float near the teacher, showing the teacher holds the key. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — "Sign in to GitHub.com" 화면 · "Configure Git" 화면 · "Let's get started!" 화면

🗣️ 노트 — 초등학생은 GitHub 가입 연령 제한이 있어 수업용 계정을 씁니다. 사용 통계 동의는 체크 해제 권장.

---

# P28 · VS Code와 짝 맺기 + 🏧 ATM 화면 지도

🔗 **짝 맺기 (30초)** — `File → Options → Integrations`
- External Editor → **Visual Studio Code** (버튼 하나로 VS Code가 열려요)
- Shell → **Command Prompt** (PowerShell 보안 오류 피하기)

구조도 (ATM 화면 네 구역):
📁 **Current repository** (왼쪽 위) = 어느 금고 칸?
🌳 **Current branch** (가운데 위) = main
🔄 **Fetch / Push origin** (오른쪽 위) = ⭐ 입금 · 조회 버튼
📋 **Changes · History** (왼쪽 아래) = 오늘 / 지난 거래 내역
📝 **Summary + Commit to main** (왼쪽 맨 아래) = ⭐ 세이브 포인트 찍기

`위 짝 맺기 2줄 · 아래 GitHub Desktop 배치를 닮은 와이어프레임 · Push origin 머스터드, Commit 코랄`

🎨 IMAGE PROMPT — A blue cutting board counter and a navy ATM machine shaking hands like two friendly cartoon characters, with a small heart between them, standing side by side in a cozy kitchen. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — GitHub Desktop 메인 화면 위에 다섯 구역을 색 상자로 표시 · Options → Integrations 화면

🗣️ 노트 — ✅ 확인: Options → Accounts에 수업용 계정 이름 · Git의 Name이 팀 이름 · External Editor가 VS Code. 3개 다 맞으면 도장!

---

# P29 · 5️⃣ 계단 — 🍳 드디어 첫 요리! 무슨 일이 일어날까?

단계도:
🧑 나 (터미널) `npx create-next-app@latest hello-next` → 🧑‍🍳 **npx** 질문 몇 개 → 🧑 Enter (추천값) → 🛵 **npm 창고**에 React · Next.js 주문 → 📦 부품 배달 (node_modules) → 🏗️ **기본 주방 완성** → 🧑 `npm run dev` → 🖥️ **localhost:3000** ✅ Ready!

`가로 순서도(시퀀스) · 등장인물 4명(나 · 출장 요리사 · 배달 창고 · 화면)을 위에 아이콘으로 · 마지막 칸 그린`

🎨 IMAGE PROMPT — A comic-strip sequence of four panels: a student calling on a pager, a traveling chef arriving and asking a few questions with a clipboard, delivery scooters dropping off many boxes into a new kitchen room, and finally the student turning on the stove as a small screen-shaped window lights up with a celebratory glow. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "출장 요리사(npx)를 불러서 Next.js 주방 기초 공사를 맡기고, 가스레인지를 켜서(npm run dev) 맛을 봐요."

---

# P30 · 따라 치기 — 한 줄씩 Enter ⌨️

세로단계:
1. 📁 작업 폴더로 이동 → `cd C:\dev`
2. 🧑‍🍳 출장 요리사 부르기 → `npx create-next-app@latest hello-next` (질문은 **그냥 Enter**)
3. 🚪 만든 주방으로 들어가기 → `cd hello-next`
4. 🔪 조리대에 올리기 → `code .`
5. 🔥 새 VS Code 창 터미널에서 불 켜기 → `npm run dev`

`세로 5스텝 · 각 스텝 오른쪽에 검은 터미널 상자 · 명령 글씨 크게`

🎨 IMAGE PROMPT — A student typing on a laptop keyboard with focus, and above the laptop five floating stepping stones in a row leading upward, each stone with a small kitchen icon: a folder door, a pager, an entrance door, a cutting board, and a lit stove flame. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — VS Code 터미널에서 5줄을 순서대로 친 화면

🗣️ 노트 — 한 줄 치고 Enter, 결과 확인하고 다음 줄. `↑` 키로 방금 쓴 명령을 다시 불러올 수 있어요.

---

# P31 · create-next-app 질문 — 모르면 Enter가 정답

| 질문 (영어로 나와요) | 뜻 | 오늘 답 |
|---|---|:---:|
| Need to install create-next-app? | 출장 요리사 불러도 돼? | `y` |
| Use the recommended defaults? | 추천 설정으로 할래? | **Yes** |
| TypeScript? | 철자 검사기 달린 JS? | Yes |
| Tailwind CSS? | 양념(디자인) 세트? | **Yes** ⭐ v0와 같아요 |
| App Router? | 새 방식 길 안내? | **Yes** ⭐ |
| `src/` · import alias? | 서랍 · 별명 바꾸기? | No |

> 💡 버전마다 질문 순서 · 개수가 달라요. **모르면 Enter!**

`표 · ⭐ 줄 머스터드 · 아래 큰 "Enter" 키보드 키 아이콘`

🎨 IMAGE PROMPT — A traveling chef holding a clipboard with a list of check boxes, asking questions to a relaxed student who simply presses a giant glowing Enter-shaped key with a big smile; little check marks pop out like confetti. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 리허설 때 찍은 create-next-app 질문 화면 (버전별 순서 확인용)

🗣️ 노트 — Tailwind와 App Router는 v0가 쓰는 것과 같아서 2교시에 v0 코드를 그대로 붙일 수 있어요.

---

# P32 · 🎉 localhost:3000 — 첫 요리 성공!

단계도:
⌨️ 터미널 `▲ Next.js · Local: http://localhost:3000 · ✓ Ready` → 🖱️ **Ctrl + 클릭** → 🌐 크롬 → 🎉 **Next.js 기본 페이지 = 첫 요리 성공!**

> 🍲 **localhost** = 주방에서 **나만 맛보는** 주소 (아직 손님은 못 봐요)

`가로 3칸 · 마지막 칸 아주 크게 그린 · 축하 분위기`

🎨 IMAGE PROMPT — A celebration scene in the home kitchen: the team of three in chef hats lifting a lid off a steaming pot, and a golden glow plus confetti bursts out; one student tastes from a spoon with sparkling eyes. Only the team is in the kitchen, no customers yet. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 터미널의 Ready 메시지 + 크롬에 뜬 Next.js 기본 페이지

🗣️ 노트 — 첫 화면이 뜨면 팀 모두 박수! 체크 카드 5번째 도장입니다.

---

# P33 · 🍳 맛 바꿔 보기 — 내 손으로 한 글자 (1분)

단계도:
📂 `app/page.tsx` 열기 → ✏️ 영어 문장 하나를 **"안녕! 우리 팀 주방이야 🍳"** 로 → 💾 `Ctrl + S` → ⚡ **크롬이 저절로 바뀜**

> ⚡ **핫 리로드** = 국에 소금 넣고 **바로 한 숟갈** 맛보기
> 🛑 **끄는 법** — 터미널에서 `Ctrl + C` → `Y` = 🔥 가스 불 끄기

`가로 4칸 · 마지막 칸 머스터드 번개 아이콘 · 아래 끄는 법 작은 코랄 상자`

🎨 IMAGE PROMPT — A student sprinkling a pinch of salt into a soup pot and instantly tasting it with a spoon, with a small lightning bolt sparkle between the pot and the spoon showing speed; in the corner, a hand turns the stove knob off. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — page.tsx에서 문장을 바꾼 편집기 + 바뀐 크롬 화면을 나란히

🗣️ 노트 — "오븐에 다시 넣고 기다릴 필요가 없어요. 저장하는 순간 바로 바뀌어요."

---

# P34 · 📂 첫 주방 둘러보기 — 무엇이 생겼나?

트리:
📁 **hello-next**
- 📂 `app/` 🚪 방(페이지) → 📄 `page.tsx` = **정문 (첫 화면)** ✏️ · 📄 `layout.tsx` = 건물 뼈대 · 📄 `globals.css` = 기본 양념
- 📂 `public/` 🖼️ 사진 창고
- 📂 `node_modules/` 🛵 배달 온 재료 — **❌ 건드리지 않기**
- 📄 `package.json` 📋 재료 주문서 + 요리 버튼
- 📄 `.gitignore` 🙈 일지에 안 적을 목록

`폴더 트리 다이어그램 · page.tsx 머스터드 · node_modules 회색 + 금지 표시`

🎨 IMAGE PROMPT — A dollhouse-style cutaway of a small restaurant building with labeled-by-icon rooms: a bright front entrance door, a structural frame visible in the walls, a spice cabinet, a photo storage closet, a huge storeroom packed with delivery boxes behind a rope barrier, a clipboard order sheet pinned by the door, and a small shy notebook marking things to skip. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — VS Code 탐색기에 펼친 hello-next 폴더 구조

🗣️ 노트 — 오늘 직접 고친 건 page.tsx 하나. 나머지는 "아, 이런 게 있구나"만 보면 됩니다.

---

# P35 · ❓ node_modules는 왜 일지(Git)에 안 적어요?

비교:
| 📋 package.json (주문서) | 📦 node_modules (재료 창고) |
|---|---|
| "밀가루 200g" 이라고 **적어 둔 종이** | 진짜 **밀가루 포대 수백 개** |
| 가볍다 · Git에 기록 ✅ | 무겁다 · Git에 기록 ❌ |
| 이것만 있으면 → `npm install` → 언제든 **다시 배달** | 필요할 때 다시 받으면 돼요 |

> 📒 레시피에는 "밀가루 200g"이라고만 적지, **밀가루 자체를 공책에 붙이진 않죠?**

`2열 비교 · 왼쪽 얇은 종이 아이콘, 오른쪽 거대한 상자 더미 · 둘을 잇는 npm install 화살표`

🎨 IMAGE PROMPT — A humorous comparison: on the left a student neatly writing a short ingredient list into a green recipe notebook; on the right another student struggling to tape an entire heavy sack of flour onto the notebook's page while flour puffs everywhere. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 그래서 `.gitignore`(비밀 목록)에 node_modules가 적혀 있어요. 2교시에 GitHub에 올릴 때 이 원리가 다시 나옵니다.

---

# P36 · 🆘 설치 막혔을 때 — 통합 대처표

갈림길:
❓ **무슨 메시지가 나왔나?**
- "내부 또는 외부 명령이 아닙니다" → 🔄 창 **모두** 닫고 다시 열기 → 재부팅
- "npm.ps1 … 실행할 수 없으므로" → ⌨️ 터미널 `+` 옆 `∨` → **Command Prompt**
- npx 질문 화면에서 멈춤 → ⏳ 1~2분 기다리기 → Enter
- npm install 5분 넘게 → 📶 Wi-Fi · 방화벽 → 🙋 선생님
- EPERM · 권한 오류 → 📁 `C:\dev`에서 했는지 · OneDrive ❌
- Port 3000 is in use → 🅿️ **3001** 주소로 열기

`가운데 큰 물음표 → 6갈래 결정 다이어그램 · npm.ps1 갈래 머스터드 강조`

🎨 IMAGE PROMPT — A friendly help desk in a kitchen: a calm robot assistant with a first-aid kit and a flowchart-shaped signpost with six arrows pointing to small icons (a restart circle arrow, a terminal switch, an hourglass, a wifi wave, a folder, a parking sign). A student approaches with a worried face that is turning into relief. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 가장 흔한 두 가지: ① 창을 다시 안 열어서 명령을 못 찾음 ② PowerShell 보안 오류. 보안 설정은 바꾸지 않고 Command Prompt로 바꿉니다.

---

# P37 · 막힘의 원인 — 주방 비유로 이해하기

| 증상 | 🍳 원인 | 해결 |
|---|---|---|
| 명령을 못 찾음 | 📞 주방 전화번호부(**PATH**)에 아직 안 적힘 | 창 다시 열기 |
| npm.ps1 오류 | 🛡️ PowerShell **경비원**이 막음 | Command Prompt로 |
| `v16` 같은 옛 숫자 | 🧓 예전에 깔린 **낡은 가스레인지** | 🙋 제거 → LTS 재설치 |
| 한글 경로 오류 | 🔤 출장 요리사가 **한글 주소**를 못 읽음 | 영어 경로로 |
| `Missing script: "dev"` | 🚪 **다른 방**에서 스위치를 찾음 | `cd hello-next` 확인 |

> 💡 **터미널은 무섭지 않아요** — 컴퓨터와 **채팅하는 창**이에요. 틀려도 **컴퓨터는 고장 나지 않아요.**

`표 · 원인 열에 주방 아이콘 크게 · 아래 틸 안심 띠`

🎨 IMAGE PROMPT — A cozy kitchen scene with a student chatting with a friendly old-fashioned computer terminal that has a smiling face and speech bubbles, like texting a friend; nearby a phone book on the wall, a little security guard figure at a doorway, and an old rusty stove being swapped for a new one. Calm, reassuring mood. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 오류를 만나도 겁먹지 않게 하는 게 이 카드의 목적입니다. "↑ 키로 고쳐서 다시 치면 돼요."

---

# P38 · ③ Next.js 이야기
### 📜 엔진에서 자동차까지 — "왜 하필 Next.js야?"

> 도구는 **불편함을 해결하려고** 태어나요. 그 불편함을 알면 **왜 쓰는지** 알게 돼요.

`섹션 구분 카드 · 큰 숫자 ③ · 머스터드 배경 띠`

🎨 IMAGE PROMPT — A section title illustration: an old unrolled scroll on a table showing a sequence of small drawings from a sandcastle to a lego tower to a shiny car, with a magnifying glass and a cup of cocoa beside it, warm lamp light, as if about to tell a story. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 설치를 끝낸 학생들이 쉬어 가는 이야기 시간입니다. 질문을 던지며 시작하세요: "그냥 JavaScript로 만들면 안 돼?"

---

# P39 · ⭐ 웹 화면 만들기의 30년 연표

타임라인:
- **1995** ⚡ JavaScript 탄생 — 브라우저 안 작은 움직임
- **2009** 🔥 Node.js — 브라우저 밖에서도 JS
- **2010** 🛵 npm — 부품 배달 시스템
- **2013** 🧱 React (Facebook) — 레고 블록
- **2015** 🔪 VS Code (Microsoft) — 무료 조리대
- **2016** 🚗 Next.js (ZEIT) — React 완성차
- **2020** 🏢 ZEIT → Vercel 이름 변경
- **2023** 🎨 App Router · v0 — AI 화면 디자이너
- **2025** 🤖 Claude Code 등 — 내 주방의 AI 요리사

`가로 연표 9칸 · 연도 크게 · 오늘 설치한 도구(Node·npm·VS Code·Next.js)는 도구별 색 점으로 표시`

🎨 IMAGE PROMPT — A long horizontal timeline drawn as a road through history, with nine small landmarks along it from left to right: a tiny sparkle, a portable stove, a delivery scooter, a stack of lego bricks, a wooden cutting board, a shiny car, a garage with a new sign shape, a painter robot with a palette, and a robot chef in a kitchen. The road gets brighter toward the right. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "오늘 우리가 깐 도구들이 이 연표에 다 있어요!" 학생들이 자기가 깐 도구를 찾아보게 하세요. 시간이 밀리면 1995 · 2013 · 2016 세 장면만.

---

# P40 · 🎬 장면 1·2 — 맨손 모래성 → 가스레인지와 배달 앱

**장면 1 · 순수 JavaScript (1995~)**
단계도: 🧱 HTML 뼈대 → 🎨 CSS 옷 → ⚡ JavaScript 움직임 → 😵 **화면이 커질수록 코드가 엉킴**
> 🏖️ 맨손으로 모래성 — 작은 건 되지만 큰 성은 무너져요

**장면 2 · Node.js · npm (2009~2010)**
> 라이언 달이 JS를 **브라우저 밖**으로 · 곧이어 **부품 배달 시스템(npm)**
> → 전 세계 부품을 **한 줄로 받아 쓰는** 시대 = **오늘 1계단에서 깐 그것!**

`위아래 2단 · 위 장면은 코랄 톤(불편), 아래 장면은 틸 톤(해결)`

🎨 IMAGE PROMPT — A two-panel illustration. Top panel: a child building a tall sandcastle by hand on a beach as it starts crumbling on one side. Bottom panel: a world map with many delivery scooters zooming from all over the globe toward one small kitchen, carrying parcels, while a portable stove glows inside the kitchen. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 같은 코드를 복사-붙여넣기 반복하다 엉키는 게 장면 1의 불편함. 장면 2는 오늘 설치한 Node.js·npm의 탄생 이야기예요.

---

# P41 · 🎬 장면 3 — React (2013, Facebook): 레고 블록의 발명

비교:
| 😵 예전 방식 | 🧱 React 방식 |
|---|---|
| 페이지 전체가 **하나의 큰 덩어리** | 🔘 Button · 🃏 Card · 🔍 SearchBar **블록** |
| 하나 바꾸면 다른 곳이 망가짐 | 블록을 **조립**해서 페이지 완성 |
| | 데이터가 바뀌면 **그 블록만** 새로 그림 |

> 왜 태어났나? — Facebook은 **좋아요 · 댓글 · 알림**이 쉴 새 없이 바뀌었어요

`2열 비교 · 왼쪽 거대한 회색 덩어리, 오른쪽 색깔 블록 3개가 하나의 페이지로 합쳐지는 그림`

🎨 IMAGE PROMPT — On the left, a giant tangled lump of clay that a frustrated developer is trying to reshape; on the right, the same developer happily snapping together colorful lego-like bricks of different shapes, a round button brick, a flat card brick and a long search bar brick, to build a neat tower. A heart icon floats above one brick changing color to show only that piece updates. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "블록 틀 하나를 만들면 100번 찍어 쓸 수 있어요."

---

# P42 · React의 핵심 아이디어 4개

| 아이디어 | 🧱 비유 | 2교시 askback에서는? |
|---|---|---|
| **컴포넌트** | 레고 블록 **틀** | 질문 카드 틀 1개 → 20번 찍기 |
| **props** | 블록에 붙이는 **이름표** | 카드마다 다른 질문 글 |
| **state** | 블록의 **기분** (켜짐/꺼짐) | 답 카드 접힘 / 펼침 |
| **JSX** | 블록 **조립 설명서** | `<QuestionCard text="…" />` |

> ❓ **그럼 React만 쓰면 되지 않아요?** → 다음 장면으로!

`4칸 아이콘 그리드 (틀 · 이름표 · 스위치 · 설명서) · 아래 머스터드 질문 띠`

🎨 IMAGE PROMPT — Four small scenes in a 2x2 grid: a cookie-cutter mold stamping out many identical card-shaped cookies, the cookies each getting a different blank name tag, one cookie box with a lid opening and closing like a switch, and an instruction booklet with assembly diagrams of blocks. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 용어를 외우게 할 필요는 없어요. "2교시에 질문 카드를 20번 찍어 낸다"는 그림만 기억하면 됩니다.

---

# P43 · 🎬 장면 4 — Next.js (2016): 엔진에 차체를 씌우다

비교:
| 🔧 React만 = 자동차 **엔진** | 🚗 Next.js = **완성된 자동차** |
|---|---|
| 강력한 엔진 (화면 블록 그리기) | React 엔진 **그대로** |
| ❓ 바퀴는? (페이지 이동 · 주소) | 🛞 **폴더 = 주소** |
| ❓ 핸들은? (검색 · 첫 화면 속도) | ⚡ **서버에서 미리 그리기** (SSR) |
| ❓ 차고는? (배포) | 🏁 **build 한 번으로 배포 준비** |

> ZEIT(지금의 Vercel)의 기예르모 라우치 팀: **"매번 바퀴 · 핸들을 직접 달기 힘들어!"**

`2열 비교 · 왼쪽 엔진(회색), 오른쪽 완성차(틸) · 가운데 큰 화살표`

🎨 IMAGE PROMPT — On the left, a bare car engine sitting on a workshop stand with loose wheels, a steering wheel and car parts scattered around on the floor; a puzzled mechanic scratches their head. On the right, a finished shiny teal car with wheels, steering wheel and body, parked proudly under a spotlight with the team of three admiring it. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 이 카드가 ③의 핵심입니다. "React는 강력한 엔진이지만, 진짜 웹사이트를 만들려면 바퀴·핸들·차고를 매번 직접 조립해야 했어요."

---

# P44 · React만 vs Next.js — 자세히 비교

| | 🔧 React만 | 🚗 Next.js |
|---|---|---|
| 페이지 주소 | 라우터 부품을 골라 조립 | 📁 **폴더를 만들면 주소가 생김** |
| 첫 화면 속도 | 브라우저가 다 받은 뒤 그림 | ⚡ **서버가 미리 그려서** 보냄 |
| 검색엔진 | 빈 화면으로 보일 수 있음 | 🔍 내용이 **이미 들어간** 화면 |
| 이미지 | 직접 크기 조절 | 🖼️ 자동 최적화 |
| 배포 | 방법을 직접 고민 | 🏁 `npm run build` → **Vercel에 바로** |

> ✅ 오늘 1교시에 `create-next-app`으로 **이미 만들어 봤어요!**

`표 · 오른쪽 열 틸 배경 · 아래 그린 체크 띠`

🎨 IMAGE PROMPT — Two lunch scenes side by side: on the left, a customer waiting at an empty table while a cook prepares everything from scratch slowly; on the right, a pre-packed lunch box (dosirak) already beautifully arranged being handed instantly to a happy customer. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — SSR = 🍱 미리 담아 둔 도시락. 손님(브라우저)이 오자마자 바로 내줄 수 있어요.

---

# P45 · 📁 폴더 = 주소 — Next.js의 가장 쉬운 마법

매핑:
- 📄 `app/page.tsx` → 🌐 `/`
- 📄 `app/about/page.tsx` → 🌐 `/about`
- 📄 `app/p/[id]/page.tsx` → 🌐 `/p/prj_example_turtle-neck` ⭐

> 🏠 아파트에 **방을 하나 만들면 자동으로 호수(주소)가 붙는** 것
> `[id]` = **"여기에 아무 이름이나 들어와도 돼"** 라는 빈칸 → 2교시 askback 주소!

`왼쪽 폴더 3개 ↔ 오른쪽 주소 3개 1:1 화살표 · 세 번째 줄 머스터드`

🎨 IMAGE PROMPT — An apartment building cross-section where a builder adds a new room and a door number plate automatically appears and lights up on its door; one special door has a blank changeable nameplate slot glowing mustard, showing any name can go there. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — VS Code 탐색기의 app 폴더 구조와 브라우저 주소창을 나란히

🗣️ 노트 — 2교시에 클론할 askback 주소도 이 원리로 `app/p/[id]/page.tsx` 한 파일이면 만들어집니다.

---

# P46 · 🎬 장면 5 — 한 회사의 세 가지 도구

트리:
🏢 **Vercel 회사** (2020년 ZEIT에서 이름 변경)
- 🚗 **Next.js** = 자동차 (설계 · 제작) · 무료 공개
- 🎨 **v0** = AI 디자인 스튜디오 · 말로 Next.js 코드 (2023~)
- 🏢 **Vercel 호스팅** = 전용 주차장 · 정비소

단계도: 🎨 v0가 만든 코드는 → 🚗 Next.js → 올리는 곳은 → 🏢 Vercel

`위 회사 1칸 → 아래 3칸 트리 · 맨 아래 v0→Next.js→Vercel 가로 화살표 · 회사 칸 머스터드`

🎨 IMAGE PROMPT — A single big company campus seen from above with three connected buildings: a car factory producing shiny teal cars, a design studio where a painter robot sketches car designs on an easel, and a garage-parking station where finished cars are serviced and driven out onto a busy street. Roads connect studio to factory to garage. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "자동차 회사가 차도 만들고, 디자인 스튜디오도 차리고, 전용 정비소까지 만들었다고 생각해 봐요. 그 회사 차를 그 회사 정비소에 맡기면 제일 잘 맞겠죠?"

---

# P47 · 💬 한 줄로 정리 — 왜 Next.js인가?

단계도:
⚡ **JavaScript** = 웹의 언어 → 🧱 **React** = 레고 블록 → 🚗 **Next.js** = 블록 + 주소 + 속도 + 배포 완성차 → 🎨 v0가 만들고 🏢 Vercel이 올린다

> ### "프론트 화면은 JavaScript로, 레고 블록(React)으로 나누고, 바퀴·핸들·차고까지 달린 완성차(Next.js)를 쓴다. 그 완성차는 v0가 디자인하고 Vercel이 몰아 준다."

✍️ **팀 한 줄 정리** — React는 ______ 이고, Next.js는 ______ 이다.

`가로 4칸 진화 화살표 · 가운데 큰 인용문 · 아래 빈칸 채우기 카드`

🎨 IMAGE PROMPT — An evolution-style progression from left to right: a small spark, a pile of lego bricks, a shiny teal car built from those bricks, and the car driving out of a garage toward a bright city street while a painter robot waves from a studio window. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 팀 한 줄 정리는 체크 카드 뒷면에 쓰게 하세요. 2교시 첫 질문으로 씁니다.

---

# P48 · ④ 회사는 어떻게 일할까? — 🏭 공장의 컨베이어 벨트

단계도:
📝 **1. 기획 · 분석** (분석.md) → 🎨 **2. v0** 레이아웃 빠르게 → 🏦 **3. GitHub** 금고에 팀이 함께 → 🔪 **4. 내 주방** VS Code · Claude Code로 다듬기 → (git push) → 🏭 **5. Vercel CI/CD** 자동 검사 · 빌드 · 배포 → 👀 미리보기 · 🌐 **진짜 가게**

| 단계 | 🏭 비유 | 2교시에 우리는 |
|---|---|---|
| 기획 · v0 | 📐 설계도 · 🏗️ 뼈대 로봇 | askback 분석 → v0 주문 |
| GitHub · 내 주방 | 🗄️ 부품 창고 · 🔧 장인 손질 | VS Code + Claude Code |
| CI/CD | 🏭 **자동 컨베이어 벨트** | Vercel 연결 → 자동 배포 |

`섹션 표시 ④ · 위 가로 5단 컨베이어 흐름(4↔3 되돌이 화살표) · 5번 그린 굵게 · 아래 작은 표`

🎨 IMAGE PROMPT — A cheerful factory interior with one long conveyor belt passing five stations from left to right: a blueprint desk, a robot arm assembling a frame, a big navy storage vault, a craftsman polishing with a small tool next to a robot chef, and an automatic packing machine that sends finished boxes out a door onto a delivery truck heading to a shop. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "2교시에 우리가 할 일이 실제 회사의 일하는 순서와 똑같아요. 미리 지도를 보고 가면 길을 안 잃어요."

---

# P49 · CI/CD = 자동 검사 · 자동 배달 🏭 + 🤖 내 주방의 AI 요리사

비교:
| 😓 손으로 할 때 | 😎 CI/CD |
|---|---|
| 코드 고침 → 직접 빌드 → 직접 서버에 올림 | 코드 고침 → `git push` → 🤖 **CI** 자동 검사·빌드 → 🤖 **CD** 자동 배포 |
| 실수하면 가게 고장 | 🌐 가게가 **저절로** 새 모습 |

| | 🎨 v0 | 🤖 Claude Code |
|---|---|---|
| 어디서? | v0 웹사이트 (밖) | **내 컴퓨터 터미널** (내 주방 안) |
| 잘하는 것 | 처음 레이아웃 빠르게 | 있는 코드를 **읽고 · 고치고 · 명령 실행** |
| 비유 | 인테리어 디자인 스튜디오 | 내 주방에 **출근하는 AI 요리사** |

`위 2열 비교(코랄/틸) · 아래 v0 vs Claude Code 작은 비교 · 🤖 아이콘 블루 강조`

🎨 IMAGE PROMPT — Two-part scene. Top: a quality-check scanner gate on a conveyor belt giving a green light to a box, then a small automatic delivery truck carrying it to a shop that magically updates its window display. Bottom: a friendly round robot chef wearing an apron walks into the team's home kitchen, standing next to the gas stove, the cutting board counter, the recipe notebook and the wall vault, ready to cook with the three students. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "AI 요리사는 내 주방에 와서 일해요. 가스레인지·조리대·일지·금고가 없으면 AI 요리사도 요리할 곳이 없어요. 오늘 1교시가 그 주방을 차린 시간이에요."

---

# P50 · 🔗 1교시 → 2교시 + 쉬는 시간 전 체크

단계도:
🏠 **1교시 결과** 내 주방 완성 (node · npm · git · code ✅ · GitHub Desktop ✅ · 첫 Next.js ✅) → 📝 **2교시 ①** askback 분석 → 🎨 **②** v0 레이아웃 → 🏦🚀 **③** GitHub + Vercel CI/CD → 🤖 **④** Claude Code 연결 = 수업 끝!

| ☐ 쉬는 시간 전 체크 | 왜 |
|---|---|
| 체크 카드 **도장 5개** | 2교시는 이 주방 위에서 |
| `npm run dev` **끄기** (`Ctrl + C`) | 3000번 자리 비워 두기 |
| GitHub Desktop **로그인 유지** | 2교시 Clone · Commit · Push |
| 팀 한 줄 정리 | 2교시 첫 질문 |

`위 가로 5칸 흐름 (첫 칸 블루, 마지막 칸 그린 굵게) · 아래 체크리스트`

🎨 IMAGE PROMPT — The team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron, standing proudly in their completed home kitchen with all five objects in place (gas stove, delivery scooter at the window, cutting board counter, recipe notebook, wall vault), giving high-fives. Through the kitchen window a path leads to a small shop with a ribbon ready to be cut and a robot chef waving at the door. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "오늘 여러분은 빌린 주방에서 나와 내 주방을 차렸어요. 쉬는 시간 뒤에는 이 주방에서 진짜 서비스를 따라 만들고, 자동 컨베이어 벨트를 설치하고, 마지막으로 AI 요리사를 주방에 초대할 거예요."
