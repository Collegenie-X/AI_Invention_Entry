# 🎬 Gamma 프롬프트 — 3일차 2차시 · v0로 우리 가게(홀)를 차리고 문을 연다 (실습)

> **원본** — `3일차_2차시_v0_프론트_실습.md`
> **대상** — 초등 5학년 · 3인 1팀 · 40분 실습 (1차시와 연속)
> **만드는 식당** — 🍱 ② 모형 음식 식당 = 프론트 + 가짜 데이터(JSON) + 내 서랍(localStorage) · 서버 없음
> **분량** — 44장 (50장 이내) · 16:9

---

## 📌 사용법 (이 박스는 Gamma에 붙여넣지 않습니다)

| 순서 | 할 일 |
|:---:|---|
| 1 | Gamma → **새로 만들기** → **텍스트 붙여넣기 (Paste in text)** |
| 2 | 아래 **`▼ 여기부터 붙여넣기`** 부터 파일 끝까지 복사해서 붙여넣기 |
| 3 | 카드 나누기: **`---` 기준** · 텍스트: **보존 (Preserve)** · 이미지: **AI 이미지** · 언어: **한국어** · 16:9 |
| 4 | **추가 지시** 칸에 아래 「전역 디자인 지시」 붙여넣기 |
| 5 | 생성 후 `🎨 IMAGE PROMPT` → 카드 이미지의 AI 생성 프롬프트로, `🗣️ 노트` → 발표자 노트로 옮기고 본문에서 지우기 |
| 6 | P05~P06 (수업 전 준비)은 **강사용**입니다. 학생에게 보여줄 때는 숨기기(Hide card) |

### 전역 디자인 지시 (Additional instructions에 붙여넣기)

```text
- 초등학교 5학년 실습 수업 슬라이드입니다. 화면에 띄워 두고 학생이 따라 하는 "작업 안내판" 역할을 합니다.
- 이 수업의 목표는 바이브 코딩 과정(주문 → 보기 → 고치기 → 배포)과 우리가 만드는 웹사이트의 구조(홀 · 진열장 · 서랍 · 통로)를 이해하는 것입니다.
- 각 단계 카드 상단에 진행 표시줄을 넣으세요: 0 입장 · 1 첫 화면 · 2 모형 음식 · 3 기능 · 4 탐정 · 5 오픈 · 6 회고 (현재 단계 강조)
- "단계도:" 로 시작하는 목록 → 화살표 가로 프로세스 다이어그램
- "구조도:" 로 시작하는 목록 → 상자와 연결선 구조 다이어그램
- "순환:" 으로 시작하는 목록 → 원형 사이클 다이어그램
- "비교:" 로 시작하는 표 → 2열 비교 카드 (왼쪽 코랄 = 나쁜 예, 오른쪽 틸 = 좋은 예)
- 코드 블록(주문서)은 복사하기 쉬운 큰 고정폭 글꼴의 밝은 카드로. 빈칸 ____ 은 머스터드 밑줄로 강조.
- 각 카드의 "🎨 IMAGE PROMPT" 문단은 화면에 표시하지 말고 AI 이미지 프롬프트로만 사용하세요.
- 각 카드의 "🗣️ 노트" 문단은 발표자 노트로 옮기고 화면에는 표시하지 마세요.
- 색: 네이비 #1B2A4A · 틸 #12A4A0 · 코랄 #FF6B5B · 머스터드 #F2B705 · 초록 #2F9E44 (완성 · 오픈) · 배경 크림 #FFFBF2
- 글꼴: Pretendard (제목 ExtraBold, 본문 SemiBold), 본문 최소 28pt. 한 카드 글 최대 5줄 (주문서 카드 제외).
```

### 이미지 공통 스타일 (모든 프롬프트 끝에 이미 포함됨)

```text
friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9
```

---

▼ 여기부터 붙여넣기

---

# P01 · v0로 우리 가게(홀)를 차리고 문을 연다 🎊
### 3일차 2차시 · 손이 움직이는 시간

주문하고 👉 보고 👉 고치고 👉 **문을 연다**

`표지 · 큰 제목 · 오른쪽 일러스트`

🎨 IMAGE PROMPT — Three Korean kids in aprons cutting a big ribbon in front of a small bright shop whose front window is shaped like a laptop screen, with confetti falling; one kid holds a smartphone showing the same shop, and a friendly robot assistant stands behind them holding a paintbrush. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 선생님은 설명을 줄이고, 학생이 주문하고·보고·고칩니다. 오늘 끝에는 진짜 인터넷 주소가 생깁니다.

---

# P02 · 오늘 들고 나갈 결과물 5가지

✅ **작동하는 화면** · ✅ **`○○.vercel.app` 주소** · ✅ **QR 코드** · ✅ **회고 3줄** · ✅ **공모전용 스크린샷 3장**

가져올 것: 📝 1차시 주문서 1장 · 📄 2일차 손그림 3장 · 🍱 데이터 20건

`위 5개 체크 배지 · 아래 준비물 3개 아이콘`

🎨 IMAGE PROMPT — A cheerful treasure chest opened on a table revealing five glowing items: a laptop with a working app, an address plate with a chain link, a QR-code-like square pattern (abstract, no readable code), a small diary page, and three photo frames. Beside the chest, three items wait to go in: an order slip, a paper sketch, and a data sheet. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 준비물 세 가지가 노트북 옆에 있는지 먼저 확인하세요.

---

# P03 · 2차시 한눈에 — 7단계 40분

단계도:
🔑 **0 입장** 3분 → 🎨 **1 첫 화면** 7분 → 🍱 **2 모형 음식** 7분 → ⚡ **3 기능 1개** 6분 → 🕵️ **4 탐정 · 고치기** 7분 → 🎊 **5 가게 오픈** 5분 → 🪞 **6 회고** 5분

| 단계 | 왜 필요해요? | 식당 비유 |
|---|---|---|
| 0 | 도구를 모르면 주문도 못 해요 | 주방 견학 |
| 1 | 홀의 **뼈대**부터 | 인테리어 도면 맡기기 |
| 2 | 빈 가게엔 손님이 안 와요 | 진열장 채우기 |
| 3 | 1단 심장이 **뛰게** | 벨 누르면 직원이 와요 |
| 4 | 손님보다 **먼저** 실수 찾기 | 개업 전 리허설 |
| 5 | 주소가 없으면 못 와요 | 간판 달고 문 열기 |
| 6 | 다음에 더 잘하려고 | 오늘 장사 일기 |

> ⏱ 시간이 밀리면 **3단계를 건너뛰고** 4단계로. **5단계(오픈)는 절대 빼지 않기!**

`가로 7칸 타임라인 (시간 비율대로 폭) · 5번 초록 굵게`

🎨 IMAGE PROMPT — A long horizontal road with seven milestone flags, each flag topped with an icon: a key, a paintbrush, a plastic food model, a lightning bolt, a magnifying glass, a ribbon and scissors, and a mirror. A team of three kids walks along the road with a clock above them; the ribbon-and-scissors milestone glows green and larger than the others. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 장은 수업 내내 화면 한쪽에 띄워 두면 좋습니다.

---

# P04 · 오늘 짓는 가게의 구조 — ② 모형 음식 식당

구조도:
🙋 **손님** (친구 폰) → 🏠 **주소** `○○.vercel.app` (Vercel) → 🪑 **홀** (v0가 만든 화면 3개) → 🚪 **통로 하나** (`lib/repo.ts`) → 🍱 **진열장** (`data/items.json` 20건) · 🗄️ **내 서랍** (localStorage ⭐ ✅)

❌ 오늘 없는 것: 🧑‍🍳 웨이터(API) · 👨‍🍳 주방(서버) · 🧊 냉장고(DB) · 🔐 로그인

| 단계 | 구조도에서 어디를 짓나? |
|---|---|
| 1 첫 화면 | 🪑 홀 |
| 2 모형 음식 | 🚪 통로 + 🍱 진열장 |
| 3 기능 1개 | 🪑 홀의 버튼 + 🗄️ 서랍 |
| 5 가게 오픈 | 🏠 주소 |

`위 가로 구조도 · 아래 "단계 ↔ 구조" 매핑 표`

🎨 IMAGE PROMPT — A cutaway of a compact street-food shop seen from the side: a customer kid with a phone at the front door under an address plate, a bright dining hall with three menu boards, a single mustard door at the back, behind it a glass display case of twenty plastic food models and a small wooden drawer with star notes. Beyond the back wall, faded dotted outlines of a waiter, a kitchen and a refrigerator show what is not built today. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 7단계는 결국 이 그림을 왼쪽부터 하나씩 채워 가는 과정입니다. 단계가 바뀔 때마다 이 그림으로 돌아와 "지금 어디를 짓고 있나?"를 물어 보세요.

---

# P05 · 🧰 수업 전 준비 (강사용) — 학교 vs 강사

구조도:
🏫 **학교 · 담임** — 💻 팀당 노트북 1대 (크롬 최신) · 📶 Wi-Fi (v0.app · vercel.app 접속 확인) · 🔑 v0 계정 (학교·선생님 계정으로 미리 로그인)
🧑‍🏫 **강사** — 🧪 예제 프로젝트 1개 (분리수거 도우미 완성본) · 🔁 배포 리허설 · 📄 주문서 카드 · 데이터 표 인쇄 · 💳 무료 사용량 확인
→ ✅ **수업 준비 끝**

`2열 → 하나로 모이는 구조도`

🎨 IMAGE PROMPT — Two preparation tables merging into one ready checkpoint: on the left a school staff member setting up laptops on desks with a Wi-Fi signal icon above; on the right an instructor testing a sample app on a laptop and stacking printed cards. Both paths join at a big green check mark gate leading into a classroom. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 학교 수업에서는 보통 학교가 기기·네트워크·계정을, 강사가 자료와 예제를 준비합니다. (학생에게는 숨김)

---

# P06 · 🧰 수업 전 체크리스트 7 (강사용)

| # | 체크 | 왜 |
|:---:|---|---|
| 1 | ☐ 학생 개인 계정 대신 **학교·선생님 계정** (이용 연령·약관 확인) | 개인정보 보호 |
| 2 | ☐ 수업 전 **모든 노트북 로그인** | 로그인 5분 = 수업 붕괴 |
| 3 | ☐ **무료 사용량** 확인 → 팀당 **주문 6~8번** 계획 | 아껴 쓰는 것도 수업 |
| 4 | ☐ 예제 1개 **Publish까지** 리허설 | 메뉴 위치는 업데이트로 바뀜 |
| 5 | ☐ 팀별 **데이터 20건 미리 타이핑** | 초5는 10분 이상 걸림 |
| 6 | ☐ 데이터에 **진짜 이름·전화번호·주소 없음** | 배포 = 전 세계 공개 |
| 7 | ☐ **QR 코드** 만드는 방법 준비 | 친구 폰으로 바로 열기 |

`체크리스트 카드`

🎨 IMAGE PROMPT — A teacher's clipboard checklist with seven checkbox rows illustrated by small icons (a shield with a person, a laptop with an open lock, a battery gauge, a rehearsal stage, a keyboard with a table, a magnifying glass over a name tag, and a square pattern for scanning), with a coffee cup and a pen beside it on a desk at evening. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 4번이 가장 중요합니다. v0의 버튼 이름·위치는 바뀔 수 있으니 전날 실제 화면으로 꼭 확인하세요. (학생에게는 숨김)

---

# P07 · 🔑 0단계 · 입장 — 오늘 쓰는 도구의 큰 그림

구조도:
🧑 **우리 팀 (지휘자)** —📝 주문서 + 📷 손그림 사진→ 🎨 **v0** (AI 인테리어 디자이너 · 화면 · 코드)
🎨 v0 —👀 미리보기→ 🧑 우리 팀 (다시 주문)
🎨 v0 —🎊 Publish→ 🏢 **Vercel** (상가 건물주) → 🏠 **○○.vercel.app** → 📱 **손님** (친구 · 가족 폰)

`왼쪽 팀 ⇄ v0 왕복 루프 · v0 → Vercel → 주소 → 손님 직선`

🎨 IMAGE PROMPT — A flow scene: three kids at a laptop hand an order slip and a photo to a friendly robot interior designer holding a paint palette; the robot shows them a small preview model of a shop and they point to adjust it (a looping arrow between them). Then the robot carries the finished shop model to a big shopping-mall building owned by a smiling landlord, where the shop gets an address plate, and customers with phones walk in. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 팀 ⇄ v0 사이의 왕복이 바이브 코딩의 루프입니다. Publish는 오늘 5단계에서 한 번만 누릅니다.

---

# P08 · v0 화면은 세 부분이에요

구조도 (v0 화면):
💬 **왼쪽 · 대화창** = 🧾 주문 카운터 (주문서 붙여넣기 · 📎 사진 첨부)
👀 **오른쪽 · 미리보기** = 🪟 쇼윈도 (직접 눌러 보기)
📂 **코드 보기** = 🔍 주방 창문 (오늘은 구경만!)
⏪ **버전 기록** = 💾 세이브 포인트 · 🎊 **Publish** = 🎀 개업 테이프 커팅 (5단계에 딱 한 번)

`노트북 화면 와이어프레임 (왼쪽 1/3 대화 · 오른쪽 2/3 미리보기) · 각 영역에 라벨`

🎨 IMAGE PROMPT — A large laptop screen illustration divided into two panels: the left narrow panel looks like a cozy order counter with speech bubbles and a paperclip, the right wide panel looks like a shop display window showing a colorful app preview with big rounded cards. Small floating badges around the laptop show a magnifying glass peeking into a kitchen window, a save-point crystal, and a ribbon with scissors at the top right corner. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 실제 v0 화면을 같이 띄우고 세 부분을 손가락으로 짚어 주세요.

---

# P09 · 팀 역할 — 모자 돌리기 🎩

순환:
🎩 **기획자** — 주문서 · 손그림을 들고 "손그림이랑 같아?" → 🎩 **실행자** — 키보드 담당 · 주문 입력 → 🎩 **탐정** — 미리보기를 눌러 보고 이상한 곳 적기 → (주문 1번 끝나면 시계방향으로) → 🎩 기획자

> **규칙 3가지**
> ① **주문 한 번마다** 모자를 돌려요
> ② 실행자는 **소리 내어 읽으며** 입력 · 나머지는 "잠깐!" 가능
> ③ 탐정은 **포스트잇에 적기만** · 고치는 주문은 다음 사람이

`원형 3칸 사이클 · 아래 규칙 3줄`

🎨 IMAGE PROMPT — Three Korean kids around one laptop: one holding paper sketches and an order slip wearing an explorer hat, one typing on the keyboard and reading aloud wearing a builder cap, one writing on a yellow sticky note wearing a detective hat with a magnifying glass. A large circular arrow around them shows the hats rotating clockwise. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 순환이 1차시에서 배운 "네 개의 모자" 프로세스를 실제로 돌리는 방법입니다.

---

# P10 · 🎨 1단계 · 첫 화면 주문 — 왜 손그림 사진을 같이?

비교:
| 📝 글만 보내면 | 📝 글 + 📷 손그림 사진 |
|---|---|
| 🤖 AI가 **상상해서** 마음대로 배치 | 🤖 AI가 **그림을 보고** 비슷하게 배치 |

> 미용실에서 "멋있게 잘라 주세요"보다 **사진 한 장**이 훨씬 정확하죠? AI도 같아요.

**📷 잘 찍는 법** — ① 위에서 똑바로 ② 그림자 없이 밝게 ③ 3장을 **나란히 한 장에** ④ 네임펜으로 진하게

`2열 비교 · 아래 사진 팁 4칸 아이콘`

🎨 IMAGE PROMPT — Two hair salon scenes side by side: on the left a kid asks a robot hairdresser vaguely and gets a wild random haircut; on the right a kid shows a photo on a phone and gets exactly the haircut in the photo, both happy. Below, a small inset shows a phone camera held directly above three hand-drawn sketches laid side by side on a bright desk. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — v0는 그림을 알아봅니다. 사진 한 장이 프롬프트 열 줄만큼 일합니다.

---

# P11 · 1단계 순서 — 주문하고, 비교하고, 한 줄 고치기

단계도:
1. 📎 대화창 클릭 → **손그림 사진 첨부**
2. 📝 **주문서 ①** 붙여넣기 · 빈칸 채우기
3. 🗣️ 실행자가 **소리 내어 읽기** → 팀원 OK?
4. ▶ **보내기** → AI가 만드는 동안 1~2분 기다리기
5. ❓ 미리보기가 **손그림과 비슷해?**
   - 네 👍 → 2단계로
   - 많이 달라 😵 → "손그림처럼 ○○을 위로 옮겨 줘" **한 줄 주문** → 5번으로

`세로 5단 플로우차트 · 5번에서 분기 · 되돌아가는 화살표`

🎨 IMAGE PROMPT — A vertical step-by-step flow drawn as a board game path: a paperclip attaching a photo, a kid filling blanks on an order slip, a kid reading aloud with sound waves while two friends give thumbs up, a send arrow with a small waiting hourglass, and finally a fork in the path with a comparison of a paper sketch next to a screen; one path goes forward with a thumbs up, the other loops back with a small single-line note. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 5번의 "비교하기"가 바이브 코딩의 "본다" 단계입니다. 다르면 한 줄만 고칩니다.

---

# P12 · 📝 주문서 ① — 첫 화면 (복사해서 빈칸만 채우기)

```text
첨부한 손그림 사진 3장을 보고 웹사이트를 만들어 줘.

[누가] ________ 가 쓰는 웹사이트야.
[무엇을] ________ 하면 → ________ 가 보이는 게 핵심이야.
[화면] 화면은 3개야.
  ① ________ 화면
  ② ________ 화면
  ③ ________ 화면
[모양] ________ 색을 주로 쓰고, 버튼은 크고 둥글게, 이모지를 넣어 줘.
초등학생도 쉽게 쓸 수 있게 글씨는 크게, 휴대폰 화면에서 잘 보이게 해 줘.
[규칙] 아직 서버와 로그인은 만들지 마. 화면만 만들어 줘.
모든 글자는 한국어로 써 줘.
```

`전체 코드 카드 · 빈칸 머스터드 밑줄 · 왼쪽에 누·무·화·데·모 라벨`

🎨 IMAGE PROMPT — A large restaurant order ticket clipped to a wooden clipboard with several blank lines highlighted in mustard, a pencil resting on it, and three small hand-drawn sketch photos clipped to the top corner. Five tiny colored tabs stick out from the left side of the ticket. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1차시에서 쓴 "누·무·화·데·모" 주문서를 이 틀에 옮겨 적으면 됩니다.

---

# P13 · ✍️ 주문서 ① 예시 — 분리수거 도우미

```text
첨부한 손그림 사진 3장을 보고 웹사이트를 만들어 줘.

[누가] 분리수거가 헷갈리는 초등학교 5학년 학생이 쓰는 웹사이트야.
[무엇을] 쓰레기 이름을 검색하면 → 어느 통에 어떻게 버리는지가 보이는 게 핵심이야.
[화면] 화면은 3개야.
  ① 큰 검색창과 자주 찾는 쓰레기 버튼이 있는 첫 화면
  ② 버리는 통 색깔과 방법이 카드로 나오는 결과 화면
  ③ 내가 별표 한 쓰레기만 모아 보는 즐겨찾기 화면
[모양] 초록색을 주로 쓰고, 버튼은 크고 둥글게, 이모지를 넣어 줘.
초등학생도 쉽게 쓸 수 있게 글씨는 크게, 휴대폰 화면에서 잘 보이게 해 줘.
[규칙] 아직 서버와 로그인은 만들지 마. 화면만 만들어 줘.
모든 글자는 한국어로 써 줘.
```

`코드 카드 · 오른쪽에 화면 3개 미니 와이어프레임`

🎨 IMAGE PROMPT — Three smartphone screens side by side in a fresh green theme: the first with a big rounded search bar and a row of chunky item buttons showing a plastic bottle, a milk carton and a can; the second with a large result card showing a blue recycling bin icon and a step illustration of peeling a label; the third with a list of starred items. Cute emoji-style icons and large rounded buttons throughout. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "AI가 만드는 동안 화면에 글씨가 막 흘러가죠? 여러분이 쓴 몇 줄로 수백 줄이 나오고 있어요. 이게 지휘자의 힘이에요."

---

# P14 · ❓ 왜 "[규칙] 서버와 로그인은 만들지 마"를 넣나요?

비교:
| 😵 규칙이 없으면 | 😎 규칙이 있으면 |
|---|---|
| AI가 신이 나서 **주방(서버) · 출입문(로그인)까지** 지으려 해요 | 🪑 **홀(화면)만** 깔끔하게 |
| 복잡해지고 · 오류 늘고 · **사용량 많이 씀** | 빠르고 · 고치기 쉽고 · 사용량 절약 |

> 우리가 짓는 건 **② 모형 음식 식당**이니까요. 주문서에 **설계도(아키텍처)** 를 적는 거예요.

`2열 비교 · 오른쪽 아래 "② 모형 음식 식당" 배지`

🎨 IMAGE PROMPT — Two construction scenes: on the left an over-enthusiastic robot builder constructing a huge complicated building with a kitchen, a vault and security gates around a tiny shop while kids look worried and a fuel gauge drains; on the right the same robot calmly finishing just a neat bright shop front following a simple blueprint held by a kid, with the fuel gauge mostly full. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 프롬프트에 "만들지 말 것"을 쓰는 것도 아키텍처 설계입니다.

---

# P15 · 🍱 2단계 · 모형 음식 진열 — 왜 우리 데이터 20건?

비교:
| 🤖 AI가 지어낸 샘플 3개 | 🧑 우리가 직접 모은 데이터 20건 |
|---|---|
| "예시 항목 1, 2, 3" | 페트병 · 우유팩 · 건전지 … |
| 😐 남의 가게 같아요 · 공모전에서 티가 나요 | 😊 **진짜 우리 가게** · 검색 · 필터가 의미 있어져요 |

> 진열장에 **'음식 1, 음식 2'** 빈 접시만 있으면 손님이 안 들어와요.

`2열 비교 · 오른쪽 초록`

🎨 IMAGE PROMPT — Two shop display windows: on the left a dull window with three identical blank white plates and bored passersby walking away; on the right a vibrant window filled with twenty colorful, varied plastic food models with little picture tags, and excited kids pressing their faces to the glass. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 데이터가 앱의 정체성입니다. 화면은 AI가 만들지만, 데이터 20건은 우리만 만들 수 있어요.

---

# P16 · 데이터는 어떤 모양으로 저장될까? — 📋 표 → 🍱 JSON

단계도:
📋 **우리가 쓴 표** (종이 · 엑셀) → 🤖 AI가 바꿔 줘요 → 🍱 **JSON** (컴퓨터가 읽는 표) → 📂 **`data/items.json`** = 진열장 → 🪑 **화면에 카드 20장**

| 이름 | 통 | 방법 |
|---|---|---|
| 페트병 | 플라스틱 🟦 | 라벨 떼고, 찌그러뜨려요 |
| 우유팩 | 종이팩 🟨 | 씻어서 펼쳐 말려요 |

```json
[
  { "id": 1, "name": "페트병", "bin": "플라스틱", "how": "라벨 떼고, 찌그러뜨려요" },
  { "id": 2, "name": "우유팩", "bin": "종이팩",   "how": "씻어서 펼쳐 말려요" }
]
```

`위 가로 단계도 · 아래 왼쪽 표 → 오른쪽 JSON (화살표)`

🎨 IMAGE PROMPT — A transformation machine: on the left a paper table sheet with rows and columns is fed into a friendly robot's machine, which outputs neat food-model boxes, each box with three labeled compartments, lining up on a conveyor into a glass display case; on the far right a phone screen shows twenty cards neatly arranged. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — JSON은 구경만 합니다. "우리 표가 컴퓨터가 읽는 표로 바뀌었다"만 알면 충분해요.

---

# P17 · JSON 읽는 법 (1분)

구조도:
`[ ]` = **진열장 한 칸에 전부 담기**
→ `{ }` 하나 = **모형 음식 하나 (카드 한 장)**
→ `"name": "페트병"` = **이름표 : 내용**

| 기호 | 식당 비유 | 화면에서 |
|---|---|---|
| `[ ]` | 🍱 진열장 | 카드 목록 전체 |
| `{ }` | 🍙 모형 음식 1개 | 카드 1장 |
| `"name"` | 🏷️ 이름표 | 카드 제목 |
| `"how"` | 📝 설명 쪽지 | 카드 설명 |

`위 3단 포함 관계 그림 (큰 상자 안에 작은 상자) · 아래 표`

🎨 IMAGE PROMPT — A nested illustration: a big bento display tray (representing square brackets) holding several individual lunch boxes (representing curly braces), and one lunch box is zoomed in to show small name tags attached to each compartment, like labels on ingredients. A kid points at the tags with a pointer. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 큰 상자 안에 작은 상자, 작은 상자 안에 이름표. 이 그림 하나면 JSON 구조를 이해합니다.

---

# P18 · 📝 주문서 ② — 데이터 붙이기

```text
아래 표의 데이터 20개를 data 폴더에 JSON 파일로 만들어서 화면에 보여 줘.
샘플 데이터는 지우고 이 데이터만 써 줘.
데이터는 한 곳(lib/repo.ts 같은 파일)에서만 불러오게 해 줘.
나중에 서버 API로 바꿀 때 화면 코드는 안 고쳐도 되게 해 줘.

항목: 이름 | ________ | ________
1. ____ | ____ | ____
2. ____ | ____ | ____
...
20. ____ | ____ | ____
```

> 💡 타이핑이 느리면 — 데이터 표를 **📷 사진으로 첨부**하고 *"첨부한 표 사진의 데이터 20개를 JSON으로 만들어 화면에 보여 줘"*
> ⚠️ 단, AI가 **잘못 읽은 글자**가 없는지 탐정이 꼭 확인!

`코드 카드 · 3·4번째 줄 머스터드 강조 · 아래 팁 박스`

🎨 IMAGE PROMPT — A kid typing a data table into a laptop while another kid photographs a printed table sheet with a phone as an alternative path; a third kid with a magnifying glass compares the screen against the paper sheet to catch mistakes. A small mustard door icon floats above the laptop. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 3·4번째 줄이 아키텍처 문장입니다. 다음 장에서 그 이유를 봅니다.

---

# P19 · ❓ 왜 "한 곳에서만 불러오게"? — 통로 하나 원칙 🚪

구조도:
🪑 첫 화면 · 🪑 결과 화면 · 🪑 즐겨찾기 화면 → 🚪 **통로 하나** `lib/repo.ts`
🚪 → (오늘) 🍱 `data/items.json`
🚪 ┈> (나중에 주방을 지으면 **여기만** 바꿔요) 👨‍🍳 서버 API

비교:
| 😵 화면마다 따로 데이터를 가져오면 | 😎 통로 하나로 모으면 |
|---|---|
| 나중에 화면 3개를 **전부** 고쳐야 해요 | **통로 1개만** 고치면 끝 |

`왼쪽 화면 3개 → 가운데 문 1개 (머스터드) → 오른쪽 2갈래 · 아래 비교`

🎨 IMAGE PROMPT — Three dining rooms on the left each with a door, all hallways merging into one single bright mustard door in the center; behind that door is a glass display case of food models, and a dotted path continues past it to a faded future kitchen. In a small inset at the corner, a messy version shows three separate tangled hallways each going to its own storage, with a worried kid. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1차시 "통로 하나" 원칙을 실제 주문에 넣은 것입니다. 오늘 배우는 가장 개발자다운 생각이에요.

---

# P20 · ⚡ 3단계 · 기능 1개 추가 — 왜 딱 1개만?

비교:
| 😵 기능 3개를 한 번에 주문 | 😎 기능 1개씩 주문 → 확인 |
|---|---|
| 🔥 하나가 고장 나면 **뭐가 원인인지 몰라요** | ✅ 고장 나도 **방금 그거예요** |

> 요리사에게 "볶음밥, 짜장면, 탕수육 동시에!" → 하나는 꼭 타요
> **하나 완성 → 맛보기 → 다음 요리**

`2열 비교 · 아래 비유`

🎨 IMAGE PROMPT — Two kitchen scenes: on the left a robot chef juggling three pans at once with one pan smoking and burning while kids look alarmed; on the right the robot chef cooks one dish at a time, a kid tastes it with a spoon and gives a thumbs up, with the next ingredients waiting neatly in line. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1차시 약속 1번 "한 번에 한 가지만"을 실제로 지키는 단계입니다.

---

# P21 · 우리 아이템엔 어떤 기능? — 고르기 사다리

단계도 (판별):
❓ 우리 **1단 심장 문장**이 무엇으로 시작해요?
- "○○을 **찾으면**" → 🔍 **검색** — 글자를 치면 목록이 줄어요
- "**종류별로** 보면" → 🏷️ **필터** — 버튼을 누르면 그 종류만
- "내가 **고른 것을 모으면**" → ⭐ **즐겨찾기** — 내 서랍에 저장
- "**맞히면 · 풀면**" → ❓ **퀴즈 · 점수** — 정답이면 +1점
- "**체크하면 · 기록하면**" → ✅ **체크리스트** — 새로고침해도 남아요

`위 질문 1개 → 아래 5갈래 트리 · 각 끝에 큰 이모지`

🎨 IMAGE PROMPT — A tree-shaped signpost with five branches, each ending in a big round fruit-like icon: a magnifying glass, a set of colored tag buttons, a golden star, a question mark with a score badge, and a check box. Three kids stand at the trunk holding their worksheet and pointing up at one branch together. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 2일차 워크시트의 1단 심장 문장을 읽고 30초 안에 하나를 고르게 하세요.

---

# P22 · 기능별 주문서 카드 (하나만 골라 쓰기)

| 기능 | 📝 주문서 | 식당 비유 |
|---|---|---|
| 🔍 **검색** | `첫 화면 검색창에 글자를 입력하면, 이름에 그 글자가 들어간 카드만 바로 보여 줘. 결과가 0개면 "앗, 아직 없어요 🥲"라고 보여 줘.` | 메뉴판에서 손가락으로 찾기 |
| 🏷️ **필터** | `○○별로 필터 버튼을 만들어 줘. 버튼을 누르면 그 종류만 보이고, "전체" 버튼을 누르면 다시 다 보이게 해 줘.` | "매운 메뉴만 보여 주세요" |
| ⭐ **즐겨찾기** | `카드마다 ⭐ 버튼을 만들어 줘. 누르면 localStorage에 저장하고, 즐겨찾기 화면에서 모아 보여 줘. 새로고침해도 남아 있게 해 줘.` | 서랍에 단골 메뉴 쪽지 |
| ❓ **퀴즈** | `데이터에서 문제를 하나씩 랜덤으로 내고, 보기 3개 중 고르게 해 줘. 맞히면 🎉와 점수 +1, 틀리면 정답을 알려 줘. 10문제가 끝나면 점수를 보여 줘.` | 오늘의 메뉴 맞히기 |
| ✅ **체크리스트** | `카드마다 체크 버튼을 만들어 줘. 체크 상태를 localStorage에 저장해서 새로고침해도 남게 하고, 맨 위에 "20개 중 ○개 완료"를 보여 줘.` | 도장 쿠폰 찍기 |

`5행 카드 목록 · 각 행 왼쪽 큰 이모지`

🎨 IMAGE PROMPT — Five recipe cards fanned out on a kitchen counter, each card with one big illustration: a magnifying glass over a menu, colored filter tags on a shelf, a star note slipping into a drawer, a quiz show buzzer with a party popper, and a stamp coupon card being stamped. A kid's hand picks just one card from the fan. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 다섯 장 중 딱 한 장만 뽑습니다. 각 주문서에 "결과가 0개면", "새로고침해도" 같은 예외 처리 문장이 미리 들어 있다는 점을 짚어 주세요.

---

# P23 · 🗄️ 내 서랍(localStorage)은 어떻게 작동할까?

단계도 (시퀀스):
1. 🙋 나 — ⭐ 페트병 누르기
2. 🪑 화면 → 🗄️ 서랍에 "페트병" **쪽지 넣기**
3. 🙋 나 — 🔄 **새로고침**
4. 🪑 화면 → 🗄️ "쪽지 있어?"
5. 🗄️ → 🪑 "페트병 있어요!"
6. 🪑 → 🙋 ⭐ **그대로 켜져 있음**

> 📌 친구 폰에는 내 ⭐이 안 보여요 → 서랍은 **내 책상에만** 있으니까요

`3열 시퀀스 다이어그램 (나 · 화면 · 서랍) · 6개 화살표`

🎨 IMAGE PROMPT — A four-panel comic strip: panel one, a kid taps a star on a phone and a tiny hand puts a star note into a small wooden drawer inside the phone; panel two, the kid presses a refresh circle arrow and the screen blinks; panel three, the screen opens the drawer and finds the star note; panel four, the star is glowing again and the kid smiles, while a friend's phone nearby shows no star. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 개발자도구(F12) → Application → Local Storage를 열어 쪽지가 실제로 들어간 것을 보여 주면 효과가 큽니다. (강사 시연)

---

# P24 · 서랍의 약속 — 넣으면 안 되는 것 · 친구도 보게 하려면?

비교:
| 🔒 서랍에 넣으면 안 되는 것 | 🙋 친구 폰에도 보이게 하고 싶다면? |
|---|---|
| ❌ 비밀번호 · 진짜 이름 · 전화번호 · 주소 | 그때가 바로 **③ 진짜 식당 (서버 + 냉장고)** 을 지을 때 |
| 서랍은 **잠금장치가 없어요** | 오늘은 여기까지! → 다음 이야기 |

구조도: 🗄️ 서랍 (나만) ┈> 🧊 냉장고 (모두) — 통로(repo.ts) 뒤만 바꾸면 돼요

`2열 · 아래 화살표 한 줄`

🎨 IMAGE PROMPT — On the left a small wooden drawer with an open broken lock, and items like a key card, an ID badge and a phone shown with a coral cross mark floating above it; on the right a path leading from that drawer to a big shared restaurant refrigerator in the distance, with several kids' phones all showing the same star. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘의 한계를 아는 것도 아키텍처 이해입니다. "친구도 보게"가 필요하면 그게 다음 단계의 이유가 됩니다.

---

# P25 · 🕵️ 4단계 · 탐정 놀이 — 왜 할까?

비교:
| 😱 손님이 먼저 고장을 발견 | 🕵️ 우리가 먼저 고장을 발견 |
|---|---|
| 다시는 안 와요 | 고쳐서 문 열어요 |

> AI는 **'돌아가는 것'** 까지 만들어 줘요.
> **'믿고 쓸 수 있는지'** 는 **사람(탐정)** 이 확인해요. ⛵ 종이배 → 🚢 여객선!

`2열 비교 · 아래 종이배 → 여객선 아이콘`

🎨 IMAGE PROMPT — A rehearsal before opening: three kid detectives with magnifying glasses and flashlights inspect a shop at night, finding a wobbly chair, a crooked sign and an empty menu slot, and marking them with sticky notes; in the background, a small paper boat sits beside a big sturdy ship. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1차시 "종이배 vs 여객선"을 실제로 하는 시간입니다.

---

# P26 · 탐정 순서 — 찾기 → 적기 → 하나만 고치기 → 다시 확인

순환:
🔍 **찾기** — 체크리스트대로 눌러 보기 → 📝 **적기** — 포스트잇 1장 = 문제 1개 → 🗳️ **고르기** — 가장 큰 문제 1개만 → 📝 **고치는 주문** — "○○할 때 △△가 돼. □□로 고쳐 줘" → ✅ **고쳐졌어? 다른 곳은 안 망가졌어?**
- 네 → 다음 문제로
- 더 망가졌어 😱 → ⏪ **이전 버전으로 되돌리기** (세이브 포인트) → 고치는 주문 다시

`원형 5칸 사이클 · 마지막 칸에서 ⏪ 분기`

🎨 IMAGE PROMPT — A circular detective workflow board: a magnifying glass, a stack of yellow sticky notes, a ballot box choosing one note, a kid speaking a precise order to a robot, and a check-mark inspection station. From the inspection station, a side path leads to a glowing save-point crystal that rewinds a clock, looping back to the order step. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 원이 "디버깅"입니다. 바이브 코딩의 "다듬는다"가 실제로는 이렇게 생겼어요.

---

# P27 · 🕵️ 탐정 체크리스트 (팀당 1장 · 7개만)

| # | 탐정 질문 | 해 보는 법 | O / X |
|:---:|---|---|:---:|
| 1 | 😶 결과가 **0개**면 뭐라고 나와요? | 검색창에 `ㅋㅋㅋ` 입력 | |
| 2 | 🤪 **이상한 입력**에 깨지지 않아요? | 이모지 😀 · 긴 글 · 빈칸으로 누르기 | |
| 3 | 📱 **휴대폰**에서 잘 보여요? | 미리보기를 휴대폰 크기로 | |
| 4 | 👆 **손가락으로** 누르기 쉬워요? | 휴대폰 크기에서 손가락으로 가리키기 | |
| 5 | 🔄 **새로고침**해도 ⭐ · ✅가 남아요? | 누르고 → 새로고침 | |
| 6 | 🔒 **진짜 개인정보**가 없어요? | 데이터 20건 훑어보기 | |
| 7 | 🎯 **페르소나의 문제가 풀렸어요?** | 페르소나인 척 처음부터 써 보기 | |

`체크리스트 표 · 7번 머스터드 · 인쇄용`

🎨 IMAGE PROMPT — A detective case file folder opened on a desk with seven evidence cards lined up, each with an icon: an empty box, a weird emoji character, a phone, a pointing finger, a refresh arrow with a star, a lock over a name tag, and a target with a persona face at the center glowing mustard. A kid detective holds a stamp ready to mark each card. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1차시 탐정 질문 10개 중 실습용 7개입니다. 7번이 가장 중요합니다.

---

# P28 · 고치는 주문의 공식 — "○○할 때 △△가 돼. □□로 고쳐 줘"

비교:
| 😵 나쁜 주문 | 😎 좋은 주문 |
|---|---|
| `이상해. 고쳐 줘.` | `검색 결과가 0개일 때 하얀 화면만 나와. "앗, 아직 없어요 🥲"라는 글과 처음으로 돌아가는 버튼을 보여 줘.` |
| `휴대폰에서 안 예뻐.` | `휴대폰 화면에서 카드가 옆으로 잘려. 휴대폰에서는 카드가 한 줄에 1개씩 보이게 해 줘.` |
| `별표가 안 돼.` | `⭐를 누르고 새로고침하면 별표가 사라져. localStorage에 저장해서 새로고침해도 남게 해 줘.` |

> 🏥 "아파요" ❌ → "**계단 내려갈 때 오른쪽 무릎이** 아파요" ✅

`3행 2열 비교 · 공식 3칸(언제·증상·원하는 것) 색 구분`

🎨 IMAGE PROMPT — A friendly clinic scene: a robot doctor listens as a kid patient points precisely at their right knee while mimicking walking down stairs; on the wall behind, a three-part chart shows a clock (when), a crack (what happens), and a sparkle (what we want), connected by arrows. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 공식 세 칸: 언제(상황) · 무엇이(증상) · 어떻게(원하는 결과). 이 세 칸이면 AI가 정확히 고칩니다.

---

# P29 · 🆘 막혔을 때 대처표

단계도 (증상별 분기):
❓ 무슨 일이에요?
- 🔥 **빨간 에러 글씨** → 🔧 v0 '고치기(Fix)' 버튼 · 없으면 에러 글 복사 → "이 에러를 고쳐 줘. 다른 부분은 바꾸지 마."
- 🧱 **더 망가졌어요** → ⏪ 마지막으로 잘 되던 버전으로
- 🤪 **엉뚱한 걸 만들어요** → 📏 주문을 더 짧게 · 한 가지만 · "다른 건 바꾸지 마"
- ⬜ **하얀 화면 · 안 움직여요** → 🔄 미리보기 새로고침 → 그래도 안 되면 선생님
- 🪫 **사용량이 다 떨어졌어요** → 🙋 선생님 호출 (옆 팀과 화면 같이 보기)

| 증상 | 해결 주문 |
|---|---|
| 🌏 한국어가 영어로 | `화면의 모든 글자를 한국어로 바꿔 줘.` |
| 🎨 디자인이 통째로 바뀜 | `색과 배치는 그대로 두고 ○○만 바꿔 줘.` |
| 🍱 데이터가 샘플로 돌아감 | `data 폴더의 JSON 20개만 쓰고 샘플 데이터는 쓰지 마.` |

`위 5갈래 결정 트리 · 아래 표`

🎨 IMAGE PROMPT — An emergency help board in a classroom styled like a friendly first-aid station, with five colorful doors each showing a symptom icon (a small smoke puff, a cracked wall, a confused robot, a blank white screen, an empty battery) and behind each door a matching tool (a wrench, a rewind crystal, a short ruler, a refresh arrow, a raised hand calling a teacher). A calm kid reads the board while a teacher waves nearby. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "다른 건 바꾸지 마"라는 한 문장이 가장 많이 쓰는 마법 주문입니다. 교실 벽에 붙여 두세요.

---

# P30 · 🎊 5단계 · 가게 오픈 — 배포(Deploy)가 뭐예요?

단계도:
💻 **지금 우리 화면** = v0 안에서만 보이는 🏗️ 공사 중 가게 → 🎊 **Publish** → 🏢 **Vercel 건물에 입점** → 🏠 **○○.vercel.app** = 가게 주소 생김 → 📱 **전 세계 누구나** 주소만 알면 들어와요

> 지금까지는 공사 중인 가게 안에서 우리끼리 구경했어요.
> **Publish**를 누르면 Vercel 상가 건물에 가게가 들어가고 **주소**가 생겨요.

`가로 4단 · 주소 칸 초록 굵게`

🎨 IMAGE PROMPT — A before-and-after sequence: a shop covered in construction scaffolding with a privacy curtain, three kids press a big glowing launch button, the shop is lifted by a gentle crane into a slot in a large friendly shopping-mall building, an address plate appears on its door, and a crowd of diverse people with phones from around a small globe walk toward it. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 순간이 수업의 하이라이트입니다. 시간이 밀려도 이 단계는 절대 빼지 마세요.

---

# P31 · 가게 오픈 순서 7

단계도:
1. 🎊 오른쪽 위 **Publish(배포)** 버튼 → 2. ⏳ 1~2분 기다리기 (간판 다는 중) → 3. 📋 **주소 복사** `○○.vercel.app` → 4. 🌐 크롬 새 탭에 열어 보기 → 5. 🔳 주소창 공유 → **QR 코드** 만들기 → 6. 📱 **팀 휴대폰으로 QR 찍어 열기** ⭐ → 7. 🔄 **옆 팀과 QR 바꿔서** 서로의 가게 1분씩 방문

`가로 7단 (2줄 지그재그) · 6번 초록 강조`

🎨 IMAGE PROMPT — A seven-step zigzag path drawn like a board game: a launch button, an hourglass with a sign being hung, a copy clipboard with a chain link, a browser window opening, a square scan pattern (abstract), a kid scanning it with a phone and the shop appearing on the phone screen with sparkles (highlighted green), and two teams exchanging phones across tables. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 6번에서 학생들 표정을 꼭 보세요. 내 손으로 만든 것이 내 폰에서 열리는 순간입니다.

---

# P32 · ⚠️ 배포 전 마지막 확인 · 💡 고치면 어떻게 돼요?

구조도 (배포 전):
🕵️ 탐정 체크 **6번 (개인정보 없음)** ✅ → 👩‍🏫 선생님 팀마다 10초 확인 → 🎊 Publish

> 배포하면 **주소를 아는 누구나** 볼 수 있어요. 이게 **"책임"** 의 시작이에요.

순환 (배포 후):
🔧 v0에서 고치기 → 🎊 다시 Publish → 🏠 **같은 주소**의 가게가 새 모습으로 (리모델링 후 재오픈) → 🙋 손님 의견 → 🔧

`위 직선 3단 · 아래 원형 4칸`

🎨 IMAGE PROMPT — Top half: a teacher with a clipboard and a kid checking a list with a lock icon before a big launch button, the button slightly glowing as approval is given. Bottom half: the same shop with the same address plate shown in a circular cycle of renovation — painters update the shop, the ribbon is cut again, customers come in with feedback cards, and painters return. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 주소는 그대로, 가게만 새로워집니다. 그래서 오늘 받은 QR을 계속 쓸 수 있어요.

---

# P33 · 🔄 옆 팀 가게 방문 (1분) — 손님 카드

| 🙋 손님 카드 | 적기 |
|---|---|
| 👍 좋았던 점 1개 | |
| 🤔 헷갈렸던 점 1개 | |
| 💡 "이게 있으면 좋겠어요" 1개 | |

> 이 카드가 바로 **공모전의 "사용자 반응" 증거**예요. **사진 찍어 두세요!** 📸

`카드 양식 · 크게`

🎨 IMAGE PROMPT — Two teams of kids visiting each other's tables like a mini market: each kid holds a phone showing the other team's app and writes on a small card with three sections marked by a thumbs-up, a thinking face and a lightbulb. One kid takes a photo of a completed card with a phone. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 손님 카드는 다음 바퀴의 "주문서" 재료가 됩니다. 바이브 코딩 루프가 여기서 다시 시작돼요.

---

# P34 · 🪞 6단계 · 회고 — 왜 할까?

단계도:
🎩 **성찰자 모자** → ❓ **처음 문제가 정말 풀렸나?** → 📝 **회고 3줄** → 🔁 **다음 시간 고칠 것 1개** → 🏆 **공모전 개선 기록**

> 장사를 마친 사장님이 **"오늘 뭐가 잘 팔렸지? 손님이 뭘 불편해했지?"** 를 적어야 내일 더 잘해요.

`가로 5단 · 마지막 초록`

🎨 IMAGE PROMPT — An evening scene after closing the shop: three kids sit around a table under a warm lamp, one wearing a hat with a small mirror, writing in a diary while looking at customer cards; through the window, the shop sign glows, and a small trophy shelf in the corner awaits. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 회고는 네 번째 모자(성찰자)를 쓰는 시간입니다. 이 모자가 다음 바퀴의 기획자 모자로 이어집니다.

---

# P35 · 회고 3줄 — 오늘의 장사 일기 (팀당 1장)

```
┌──────────────────────────────────────────────┐
│ 🪞 오늘의 장사 일기            팀: ______     │
├──────────────────────────────────────────────┤
│ 🏠 우리 가게 주소 : https://______.vercel.app │
├──────────────────────────────────────────────┤
│ ✅ 잘된 것   : __________________________     │
│ 🕵️ 찾은 문제 : __________________________     │
│ 🔁 다음에 고칠 것 1개 : __________________    │
├──────────────────────────────────────────────┤
│ 🎯 페르소나의 문제가 풀렸나? 😀 많이 / 🙂 조금 / 😐 아직 │
│ 📝 오늘 AI에게 주문한 횟수 : ____ 번          │
└──────────────────────────────────────────────┘
```

`양식 카드 · 인쇄용`

🎨 IMAGE PROMPT — A cute diary page laid on a table with a pencil and three emoji stickers (big smile, small smile, neutral face) waiting to be stuck; beside it a small tally counter clicker and a phone showing a shop address. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "주문 횟수"를 적게 하는 이유: 몇 번의 대화로 완성했는지가 바이브 코딩 실력의 기록입니다.

---

# P36 · 🏆 공모전 증거 상자 — 오늘 꼭 남길 4가지

구조도:
📦 **증거 상자**
→ 📸 **스크린샷 3장** — ① 첫 화면 ② 결과 ③ 기능
→ 🏠 **배포 주소 + QR**
→ 📝 **주문서 기록** — 첫 주문 · 고친 주문
→ 🙋 **손님 카드 사진**
→ 🏆 **공모전 · 발표** — 문제 → 해결 → 반응

| 증거 | 왜 중요해요? |
|---|---|
| 📸 스크린샷 | 고치면 지금 모습이 사라져요 · **"처음 → 나중"** 비교가 성장의 증거 |
| 🏠 주소 · QR | 심사위원이 **직접 눌러 볼 수** 있어요 |
| 📝 주문서 기록 | **"AI를 어떻게 지휘했는지"** = 바이브 코딩 실력 |
| 🙋 손님 카드 | "사람들이 써 봤다" → 반응 → 개선 |

`가운데 상자 → 4갈래 → 하나로 모여 트로피`

🎨 IMAGE PROMPT — An open treasure box in the center with four items floating out of it — three photo frames, an address plate with a scan square, a stack of order slips, and customer feedback cards — all flowing together upward into a shining trophy on a presentation stage where three kids stand proudly with a screen behind them. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 특히 "주문서 기록"을 강조하세요. 공모전에서 "AI를 어떻게 썼나요?"에 대한 최고의 답입니다.

---

# P37 · 오늘 우리가 돌린 바이브 코딩 루프

순환:
📝 **주문** (주문서 ① · ② · 기능) → 👀 **보기** (미리보기 · 손그림과 비교) → 🕵️ **찾기** (탐정 체크리스트) → 🔧 **고치기** ("○○할 때 △△가 돼. □□로") → 🎊 **오픈** (Publish → 주소) → 🙋 **손님 의견** (손님 카드) → 📝 다시 주문

| 루프 칸 | 오늘 쓴 모자 |
|---|---|
| 📝 주문 | 🎩 실행자 |
| 👀 보기 · 🕵️ 찾기 | 🎩 탐정 |
| 🔧 고치기 기준 | 🎩 기획자 |
| 🙋 의견 → 다음 | 🎩 성찰자 |

`큰 원형 6칸 사이클 · 오른쪽 모자 표`

🎨 IMAGE PROMPT — A large circular merry-go-round with six seats, each seat shaped like an icon: an order slip, an eye, a magnifying glass, a wrench, a ribbon with scissors, and a customer feedback card. Three kids ride it wearing different hats, swapping hats as they go around, and a friendly robot gently pushes the carousel. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 40분 동안 이 원을 몇 바퀴 돌았는지 팀별로 세어 보게 하세요. 그게 오늘의 "주문 횟수"입니다.

---

# P38 · 마무리 — 여러분이 지휘자였어요 🎼

> "오늘 여러분은 코드를 한 줄도 직접 안 썼어요.
> 그런데 **진짜 인터넷 주소가 있는 가게**를 열었어요.
> 이게 바이브 코딩이에요. **여러분이 지휘자였고, AI가 연주자였어요.**"

| 구분 | 내용 |
|---|---|
| ✅ 수업 안에서 반드시 | 화면 + 데이터 20건 + **배포 주소** |
| 📝 과제 1 | **사용자 5명**에게 주소 보내고 손님 카드 받기 |
| 📝 과제 2 | "다음에 고칠 것"을 **주문서로** 써 오기 |
| 📝 과제 3 (선택) | 데이터 **20건 → 40건** |

`위 큰 인용 · 아래 과제 표`

🎨 IMAGE PROMPT — A curtain-call scene: three Korean kids take a bow on a small stage holding a conductor's baton, with a row of cute robots holding instruments bowing behind them; above the stage, a large screen shows their app on a phone, and an audience of classmates and parents applauds holding phones. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "다음 시간엔 손님 5명의 의견을 듣고 가게를 더 좋게 고쳐 볼 거예요."

---

# P39 · 🏗️ 부록 A · v0가 만든 가게 안을 들여다보면 — 프로젝트 구조

구조도:
🏢 **우리 가게 (프로젝트)**
→ 📂 `app/` 🚪 방(페이지)들 · `page.tsx` = 정문(첫 화면)
→ 📂 `components/` 🪑 가구(부품) · 카드 · 버튼 · 검색창
→ 📂 `lib/` 🚪 통로 · `repo.ts` (데이터 가져오는 문)
→ 📂 `data/` 🍱 진열장 · `items.json` (20건)
→ 📂 `public/` 🖼️ 사진 창고

연결: `app` → `components` → `lib/repo.ts` → `data/items.json`

`위 트리 구조도 · 아래 4단 연결 화살표 · lib와 data 머스터드`

🎨 IMAGE PROMPT — A dollhouse-style cutaway of a shop building with five clearly separated rooms: an entrance hall with a front door and inner doors to other rooms, a furniture storage room with reusable chairs, buttons and cards, a narrow corridor with one mustard door, a display pantry with twenty food models, and a small attic with framed pictures. A kid with a flashlight peeks through the cutaway, following a glowing path from the entrance through furniture, corridor, to the pantry. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘은 구경만 합니다. v0의 📂 코드 보기에서 이 폴더들을 함께 찾아보세요. "AI가 이렇게 방을 나눠 지었구나!"

---

# P40 · 폴더 · 파일 사전

| 폴더 · 파일 | 비유 | 하는 일 |
|---|---|---|
| `app/page.tsx` | 🚪 정문 | 주소로 들어오면 처음 보이는 화면 |
| `app/favorites/page.tsx` | 🚪 안쪽 방 | `주소/favorites` 즐겨찾기 화면 |
| `components/` | 🪑 가구 | 여러 방에서 **같이 쓰는** 카드 · 버튼 |
| `lib/repo.ts` | 🚪 통로 하나 | 데이터를 가져오는 **유일한 문** → 나중에 서버로 바꾸는 곳 |
| `data/items.json` | 🍱 진열장 | 우리 데이터 20건 |
| `public/` | 🖼️ 사진 창고 | 그림 파일 |
| `package.json` | 📋 재료 주문 목록 | 이 가게가 쓰는 도구 목록 |

`아이콘 + 이름 + 한 줄 설명 카드 7개 그리드`

🎨 IMAGE PROMPT — A picture glossary grid of seven tiles: a grand front door, a cozy inner room door, a set of reusable furniture pieces, a single glowing mustard corridor door, a display case of food models, a picture frame storage shelf, and a shopping list clipboard. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — `components/`의 "가구를 한 번 만들어 여러 방에 놓기"가 재사용이라는 개념입니다.

---

# P41 · 🏗️ 부록 B · 오늘 가게에서 → 진짜 식당까지 (앞으로의 지도)

단계도:
🍱 **오늘** 프론트 + JSON + 서랍 (v0 · Vercel) → 🔧 **다음** 사용자 5명 피드백 → 고치기 2~3바퀴 → 👨‍🍳 **주방 짓기** 서버 · DB · 관리자 장부 (Django · Supabase 등) → 🛵 **외부 셰프** AI · 날씨 · 지도 API (🔑 키는 주방 금고에) → 🏬 **2호점** 휴대폰 앱 (React Native)

┈ 오늘 → 주방 짓기: **통로(repo.ts)만 바꾸면 화면은 그대로**

| 단계 | 언제 필요해요? | 무엇이 바뀌어요? |
|---|---|---|
| 👨‍🍳 주방 | "친구 폰에도 내 데이터가!" | 통로 뒤만 진열장 → 주방 |
| 🛵 외부 셰프 | "AI가 진짜로 답하게!" | 주방이 셰프를 부름 · 키는 홀에 두지 않기 |
| 🏬 2호점 | "앱스토어에 올리고 싶어!" | 인테리어만 바뀜 · 주방·메뉴 그대로 |

`가로 5단 로드맵 · 첫 칸 머스터드 "현재 위치" 핀`

🎨 IMAGE PROMPT — A winding road map across a small town from left to right: a small street-food cart marked with a "you are here" map pin, a workshop with a feedback mailbox, a full restaurant with a kitchen and refrigerator under construction, a back door where guest chefs on scooters arrive with a key safe, and finally a second branch store shaped like a smartphone. A dotted shortcut arrow goes from the cart directly through a single mustard door into the restaurant kitchen. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1차시 "식당의 종류 5가지" 계단을 실제 로드맵으로 다시 보여 주는 장입니다. 오늘 위치는 첫 칸입니다.

---

# P42 · 🧾 부록 C · 아이템 유형별 주문서 ① 예시 (막힌 팀에게)

| 유형 | 예시 아이템 | 🎨 주문서 ① 핵심 문장 |
|---|---|---|
| 🔍 **찾기형** | 분리수거 도우미 · 놀이터 지도 | `○○ 이름을 검색하면 → △△ 정보가 카드로 나오는 웹사이트` |
| ❓ **퀴즈형** | 영어 단어 · 수도 맞히기 | `문제가 하나씩 나오고 → 맞히면 점수가 올라가는 웹사이트` |
| ✅ **기록형** | 독서 체크 · 물 마시기 | `○○을 하면 체크하고 → 이번 주 몇 개 했는지 보이는 웹사이트` |
| 🎯 **추천형** | 오늘 뭐 입지 · 급식 골라주기 | `기분 · 날씨 버튼을 누르면 → 어울리는 ○○를 추천 (목록 20개 중에서)` |
| 💛 **마음형** | 감정 일기 · 칭찬 카드 | `오늘 기분 이모지를 고르면 → 응원 문장이 나오고 서랍에 기록` |

`5행 카드 · 왼쪽 큰 유형 이모지`

🎨 IMAGE PROMPT — Five small shop stalls in a row at a children's market, each themed by type: a stall with magnifying glasses and maps, a quiz booth with a buzzer, a stall with checklists and water bottles, a stall with weather buttons and clothing on hangers, and a stall with heart-shaped cards and emoji faces. A teacher hands a small card to a puzzled team standing in front. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 막힌 팀에게 해당 줄만 잘라서 건네주세요.

---

# P43 · AI가 필요해 보이는 아이템도 오늘은 ②번 식당으로

구조도:
🙋 기분 버튼 😊😢😡 → 🪑 홀 → 🚪 통로 (repo) → 🍱 진열장: **"AI가 했을 법한 답 20개"** → 미리 정한 규칙으로 골라서 → 💬 답 카드
┈ 나중에: 🚪 통로 뒤를 → 👨‍🍳 주방 → 🛵 AI 셰프 로 교체

> 진짜 AI 대신 **미리 써 둔 답 20개**를 진열장에 넣고 골라서 보여 줘요.
> 손님 반응을 보는 데는 충분해요. (1차시 "흉내 내기")
> ⚠️ 하단에 **"데모: 미리 준비한 답을 보여 줘요"** 라고 정직하게 적기

`가로 구조도 · 아래 점선 미래 경로`

🎨 IMAGE PROMPT — A friendly fortune-cookie style counter: a kid presses one of three big emoji buttons (happy, sad, angry), and a small mechanical arm behind the counter picks a pre-written message card from a neatly organized box of twenty cards, delivering it in a speech bubble on a phone. Behind the counter, a faded dotted outline of a robot AI chef stands in a future kitchen, waiting for later. A small honest note sign hangs at the bottom of the counter. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 0차시 분석의 세 예시 앱(틴스파크 · TeenDramaro · DeepQ)이 모두 이 방식입니다. 강사는 그 앱을 하나 열어 보여 줘도 좋습니다.

---

# P44 · 한 장 총정리 — 구조 × 과정

구조도 (무엇을 지었나 · 아키텍처):
🙋 손님 → 🏠 `○○.vercel.app` → 🪑 홀 (`app/` · `components/`) → 🚪 통로 (`lib/repo.ts`) → 🍱 진열장 (`data/items.json`) · 🗄️ 서랍 (localStorage)

단계도 (어떻게 지었나 · 바이브 코딩):
🔑 입장 → 🎨 첫 화면 (주문서 ①) → 🍱 모형 음식 (주문서 ②) → ⚡ 기능 1개 → 🕵️ 탐정 · 고치기 → 🎊 오픈 → 🪞 회고 → ↺

> 🎯 **좋은 앱 = 좋은 구조 × 끝까지 돈 루프**

`위 구조도 · 아래 단계도 · 맨 아래 머스터드 배너`

🎨 IMAGE PROMPT — A summary poster with two horizontal bands: the upper band shows the compact shop cutaway (address plate, bright dining hall with reusable furniture, one mustard corridor door, a display case of food models and a small drawer); the lower band shows seven small milestone flags along a road that curves back to its start. Three proud kids stand at the bottom holding their phone with the shop open, a friendly robot giving a high five. friendly flat vector illustration, warm storybook feel, cozy restaurant and shop-opening metaphor, Korean elementary school students around age 11 working in teams of three, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow and fresh green accents on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 위는 "무엇을 지었나", 아래는 "어떻게 지었나". 이 두 줄을 설명할 수 있으면 오늘 수업의 목표를 달성한 것입니다.
