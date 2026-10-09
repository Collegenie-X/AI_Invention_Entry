# 🎬 Gamma 프롬프트 — 3일차 1차시 · 바이브 코딩: 말로 지휘해서 화면을 만든다 (이론)

> **원본** — `3일차_1차시_바이브코딩_이론.md`
> **대상** — 초등 5학년 · 3인 1팀 · 40분 이론
> **핵심 비유** — 🍽️ 웹사이트 = 식당 · 🎼 나는 지휘자 · 🏗️ 식당의 종류(아키텍처 5가지) · 🪜 6계단
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

### 전역 디자인 지시 (Additional instructions에 붙여넣기)

```text
- 초등학교 5학년이 보는 수업 슬라이드입니다. 글은 짧고 크게, 그림과 도식은 크게.
- 이 수업의 목표는 "웹사이트의 구조(아키텍처)"와 "바이브 코딩 과정"을 이해하는 것입니다. 단계도·구조도를 최우선으로 시각화하세요.
- "단계도:" 로 시작하는 목록 → 화살표가 있는 가로 프로세스 다이어그램
- "구조도:" 로 시작하는 목록 → 상자와 연결선이 있는 구조 다이어그램 (왼쪽→오른쪽 또는 위→아래)
- "순환:" 으로 시작하는 목록 → 원형 사이클 다이어그램
- "비교:" 로 시작하는 표 → 2열 비교 카드 (왼쪽 코랄=나쁜/옛날, 오른쪽 틸=좋은/새로운)
- "계단:" 으로 시작하는 목록 → 왼쪽 아래에서 오른쪽 위로 올라가는 계단 다이어그램
- 모든 카드에 이모지를 아이콘처럼 크게 사용하세요.
- 각 카드의 "🎨 IMAGE PROMPT" 문단은 화면에 표시하지 말고 그 카드의 AI 이미지 프롬프트로만 사용하세요.
- 각 카드의 "🗣️ 노트" 문단은 발표자 노트로 옮기고 화면에는 표시하지 마세요.
- 색: 네이비 #1B2A4A · 틸 #12A4A0 (오늘 만드는 것) · 코랄 #FF6B5B (주의) · 머스터드 #F2B705 (핵심) · 배경 크림 #FFFBF2
- 글꼴: Pretendard (제목 ExtraBold, 본문 SemiBold), 본문 최소 28pt
- 한 카드에 글은 최대 5줄.
```

### 이미지 공통 스타일 (모든 프롬프트 끝에 이미 포함됨)

```text
friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9
```

---

▼ 여기부터 붙여넣기

---

# P01 · 종이가 웹사이트가 된다 📄 → 🌐
### 3일차 1차시 · 바이브 코딩 — 말로 지휘해서 화면을 만든다

오늘 우리는 **코딩하는 사람**이 아니라
**지휘하는 사람**이 됩니다 🎼

`표지 · 왼쪽 큰 제목 · 오른쪽 일러스트`

🎨 IMAGE PROMPT — A magical transformation scene: on the left a hand-drawn paper sketch of three phone screens lying on a school desk with colored markers, and from the paper a swirl of sparkles flows to the right where the same design appears glowing on a real smartphone screen held by a smiling 11-year-old Korean student. Two classmates lean in excitedly. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "어제 여러분이 그린 손그림, 꺼내 볼까요? 이 종이가 오늘 진짜 웹사이트가 됩니다."

---

# P02 · 오늘의 길 — 6개의 정류장

단계도:
① 🎼 바이브 코딩이 뭐예요? → ② 🍽️ 웹사이트는 어떻게 생겼나? → ③ 🏗️ 식당의 종류 5가지 → ④ 🪜 코딩 없이 만드는 6계단 → ⑤ 📝 좋은 주문서 쓰는 법 → ⑥ 🚢 종이배 vs 여객선 → ✍️ 내 주문서 1장

> ⭐ 가장 중요한 정류장: **② 식당** 과 **⑤ 주문서**

`가로 7칸 버스 노선도 · ②와 ✍️ 강조`

🎨 IMAGE PROMPT — A cheerful bus route map drawn as a winding road through a small cartoon town, with seven bus stops each marked by a large icon sign: a conductor's baton, a restaurant, a row of different buildings, a staircase, an order notepad, a paper boat beside a big ship, and a pencil writing on paper. A small yellow school bus full of children drives along the road. The restaurant stop and the pencil stop glow mustard. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘은 이 버스를 타고 6개 정류장을 지나 마지막에 주문서를 씁니다.

---

# P03 · 오프닝 — 종이에서 친구 폰까지

단계도:
📄 어제 그린 **손그림 3장** → (오늘 1차시: 방법 배우기) → 🧠 **AI에게 주문하는 법** → (2차시: 직접 만들기) → 🌐 **진짜 웹사이트** `my-app.vercel.app` → 📱 **엄마 폰 · 친구 폰**으로 접속

`가로 4단 흐름 · 마지막 칸 초록 강조`

🎨 IMAGE PROMPT — A four-step journey illustration from left to right: a paper sketch on a desk, a child talking into a glowing speech bubble toward a friendly robot, a laptop displaying a colorful website, and finally a mother and a friend each holding smartphones showing the same website, smiling. Dotted path arrows connect the four scenes. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "코딩을 몰라도 괜찮아요. 오늘 우리는 지휘하는 사람이 될 거예요."

---

# P04 · ① 바이브 코딩이란?
### 🎼 나는 지휘자, AI는 연주자

`섹션 구분 카드 · 큰 숫자 ①`

🎨 IMAGE PROMPT — A section title illustration: a spotlight on an empty conductor's podium with a baton resting on a music stand, and behind it a semicircle of cute friendly robots holding a violin, a trumpet and drums, waiting for the conductor. Warm stage lights. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 첫 번째 정류장입니다. 바이브 코딩이 무엇인지 알아봅니다.

---

# P05 · 바이브 코딩 = 말한다 → 본다 → 다듬는다

> 💬 **AI에게 만들고 싶은 것을 말로 설명하고 → 결과를 보고 → 다시 다듬으며 완성하는 방법**

순환:
1. 🗣️ **말한다** — "이런 화면 만들어 줘"
2. 👀 **본다** — AI가 만든 화면
3. 🔧 **다듬는다** — "버튼을 더 크게"
→ 다시 1번 · 마음에 들면 🎉 **완성**

`가운데 원형 3칸 사이클 · 오른쪽으로 "완성" 출구`

🎨 IMAGE PROMPT — A circular three-part cycle illustration: at the top a child speaking into a large speech bubble, at the bottom right the same child looking at a laptop screen with wide curious eyes, at the bottom left the child holding a small wrench adjusting a giant button on the screen. Curved arrows connect the three in a loop, and one arrow exits to the right toward a celebration with confetti and a trophy. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 원이 바이브 코딩의 전부입니다. 한 번에 완성하는 게 아니라 이 원을 여러 번 돕니다.

---

# P06 · 왜 이름이 '바이브(vibe · 느낌)'일까?

비교:
| 🐢 코드로 말하기 | 🚀 느낌으로 말하기 |
|---|---|
| `<button class="bg-green-500 rounded-xl">` | "초록색 둥근 버튼으로 해 줘" |
| 문법을 외워야 해요 | 원하는 모습을 말하면 돼요 |
| 한 줄 한 줄 직접 | AI가 수백 줄을 대신 |

> 코드 한 줄 한 줄 대신 **"이런 느낌으로!"** 라고 말하면 AI가 코드를 써 줘요.

`2열 비교 · 왼쪽 코드 카드 · 오른쪽 말풍선`

🎨 IMAGE PROMPT — A split illustration: on the left a tired child surrounded by floating cryptic code symbols and brackets, scratching their head; on the right a happy child making a gesture with hands describing a round green button, while a friendly robot beside them is typing quickly on a keyboard with long streams of code flowing out. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 왼쪽처럼 쓰던 걸 이제는 오른쪽처럼 말하면 됩니다.

---

# P07 · 오케스트라 지휘자 비유 🎼

구조도:
🎼 **지휘자 = 나** (어떤 곡을 · 어떤 느낌으로 · 언제 크게)
→ 🎻 바이올린 = **화면 AI (v0)**
→ 🎺 트럼펫 = **코딩 AI (Cursor · Claude)**
→ 🥁 드럼 = **배포 (Vercel)**
→ 🎵 음악 = **완성된 웹사이트**

`위 지휘자 1칸 → 가운데 3칸 → 아래 결과 1칸 (트리 구조)`

🎨 IMAGE PROMPT — A Korean child conductor around age 11 standing on a small podium waving a baton with confidence, leading a small orchestra of three cute robots: one robot playing a violin while painting a website layout in the air, one robot playing a trumpet while code blocks float out, and one robot playing drums that launch a small rocket. Musical notes swirl together above them forming the shape of a glowing website window. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "지휘자는 바이올린을 직접 켜지 않아요. 그래도 음악은 지휘자 것이죠? 무슨 곡을, 어떤 느낌으로 할지 정하는 사람이니까요."

---

# P08 · 사람이 하는 일 vs AI가 하는 일

비교:
| | 🧑 사람 (지휘자) | 🤖 AI (연주자) |
|---|---|---|
| 무엇을 | **무엇을 · 왜 · 누구를 위해** 정한다 | 코드를 쓴다 |
| 어떻게 | 원하는 모습을 **말로 설명** | 화면을 그린다 |
| 확인 | **눌러 보고 이상한 걸 찾는다** | 고치라는 곳을 고친다 |
| 책임 | **"이거 써도 안전해?" 판단** | 책임은 못 진다 |

`2열 비교 · 사람 칸 머스터드 강조`

🎨 IMAGE PROMPT — Two side-by-side panels: on the left a thoughtful Korean child holding a compass, a magnifying glass and a shield, standing in front of a map; on the right a friendly robot busily building with blocks, painting and hammering. A thin bridge connects them where the child hands a plan to the robot. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 마지막 줄 "책임"을 꼭 짚어 주세요. AI는 책임을 질 수 없어요.

---

# P09 · 옛날 방식 vs 바이브 코딩

단계도 (🐢 옛날 방식 — 몇 달 뒤에 첫 결과물):
문법 외우기 → 기초 연습 → 응용 연습 → 드디어 프로젝트

단계도 (🚀 바이브 코딩 — 첫날부터 작동하는 것):
기획 (어제 한 것!) → AI에게 주문 → 보고 고치기 → 작동하는 서비스

| | 옛날 | 바이브 코딩 |
|---|---|---|
| 먼저 배우는 것 | 문법 | **문제 찾기 · 기획** |
| 남는 것 | 연습용 코드 | **친구가 쓰는 진짜 서비스** |
| 중요한 능력 | 많이 외운 사람 | **좋은 질문을 하는 사람** |

`위아래 2줄 타임라인 · 아래 작은 표`

🎨 IMAGE PROMPT — Two parallel roads: the upper road is long and winding with a slow turtle carrying heavy textbooks past many signposts, reaching a small finish flag far away under a calendar with many pages flipping; the lower road is short and straight with a child riding a small rocket skateboard, already arriving at a finish line where friends are using a phone app. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 1~2일차에 한 기획이 바이브 코딩의 첫 단계였다는 걸 연결해 주세요.

---

# P10 · ⏱ 작은 서비스 하나 — 7시간 vs 35분

단계도 (🐢 약 7시간): 화면 2시간 → 서버 3시간 → 오류 고치기 1시간 → 올리기 1시간
단계도 (🚀 약 35분): v0 화면 10분 → 서버 15분 → 올리기 5분 → 테스트 5분

> ❓ 그럼 코딩 공부는 필요 없나요? — 아니요! 지휘자도 악기 소리를 **알아들어야** 틀린 음을 잡아요.
> 오늘은 코드를 **쓰는 법**이 아니라 **알아보는 눈**을 키우는 첫날.

`가로 막대 비교 2줄 · 아래 Q&A 박스`

🎨 IMAGE PROMPT — A playful comparison chart drawn as two horizontal tracks: the top track is a very long row of four big hourglasses in sequence, the bottom track is a short row of four tiny hourglasses ending at a finish flag. A curious child with a magnifying glass looks at a page of code with understanding eyes, standing at the bottom corner. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 숫자는 참고 사이트의 예시입니다. 핵심은 "빠르니까 여러 번 고칠 수 있다"입니다.

---

# P11 · 초등학생도 벌써 하고 있어요 🏫

구조도:
🏫 **초등학교 · 2026학년도 바이브 코딩 수업**
→ 📚 정규수업 — 4·5·6학년 22학급 × 4차시 = 88차시
→ 🧑‍🤝‍🧑 동아리 — 4~6학년 20~24명 · 40분 × 2차시 연속 × 7회
→ 🎯 목표: **내 아이디어를 직접 작동하는 결과물로**
→ 🏆 결과물 공유 · 전시 · 발표

> 출처: 인천석암초등학교 바이브 코딩 강사 채용 공고 (2026. 9.)

`위 1칸 → 2갈래 → 아래 목표 → 결과 (트리)`

🎨 IMAGE PROMPT — A bright elementary school building with two open doors: through one door a regular classroom of 4th to 6th graders working on laptops, through the other door a small after-school club of kids gathered around one laptop. Both groups' glowing project screens float up and gather into a display board at an exhibition with a trophy. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "여러분 또래 친구들이 학교 수업 시간에 이걸 하고 있어요. 4학년도 해요. 그러니까 오늘 여러분이 못 할 이유가 하나도 없어요."

---

# P12 · 공모전까지 가는 길 🏆

단계도:
💡 **1~2일차** 문제 · 페르소나 · 아이템 1단 → 🌐 **3일차** 작동하는 웹 (`vercel.app` 주소) → 🙋 **사용자 5명** 써 보고 한 마디씩 → 🔁 **고치기** 2~3바퀴 · 개선 기록 → 🏆 **공모전 제출** 기획서 · 주소 · 시연 영상 3분

| 심사위원이 보는 것 | 우리가 가진 것 |
|---|---|
| ⚙️ **진짜로 작동하나?** | **오늘 받을 배포 주소!** |
| 🙋 사람들이 써 봤나? | 사용자 5명 · 개선 기록 |

`가로 5단 · 2번째 칸 강조 · 아래 작은 표`

🎨 IMAGE PROMPT — A rising path of five stepping stones across a pond toward a trophy podium: a lightbulb stone, a stone with a glowing laptop and a link chain, a stone with five small smiling user faces, a stone with a circular refresh arrow, and the final podium where a team of three kids holds up a trophy and a tablet showing their app. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 심사위원이 가장 좋아하는 건 "진짜로 작동하는 것"과 "사람들이 써 본 흔적"입니다. 오늘 그 첫 번째를 만듭니다.

---

# P13 · 한 프로젝트, 네 개의 모자 🎩

순환:
1. 🎩 **기획자** — 🗺️ 종이 · 손그림 · "무엇을 만들까?"
2. 🎩 **실행자** — ⌨️ v0 · AI · "이렇게 만들어 줘"
3. 🎩 **디버거 (탐정)** — 🕵️ 브라우저로 눌러 보기 · "어디가 이상하지?"
4. 🎩 **성찰자** — 🪞 회고 3줄 · "문제가 풀렸나?"
→ 다시 기획자로

> 2차시에는 **주문 한 번마다 모자를 시계방향으로** 돌려요.

`원형 4칸 사이클 · 각 칸 다른 색 모자`

🎨 IMAGE PROMPT — Three Korean kids sitting around a round table with one laptop, each wearing a different colorful hat (an explorer hat with a map, a builder cap with a keyboard, a detective hat with a magnifying glass), and a fourth hat with a small mirror floating above the center of the table. Curved arrows around the table show the hats rotating clockwise between the kids. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 이 네 모자가 바이브 코딩의 "프로세스"입니다. 한 사람이 키보드를 독차지하지 않게 돌립니다.

---

# P14 · ② 웹사이트는 어떻게 생겼나?
### 🍽️ 웹사이트는 식당이다

> ⭐ **오늘의 심장 파트** — 이 비유 하나로 프론트 · 서버 · 데이터베이스 · API · 배포를 전부 설명해요

`섹션 구분 카드 · 큰 숫자 ②`

🎨 IMAGE PROMPT — A cozy small restaurant storefront at dusk with warm glowing windows, a striped awning, a menu board by the door, and a friendly open sign shaped like a browser window frame. A few kids approach the door curiously. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 수업에서 가장 중요한 장입니다. 시간이 부족해도 절대 줄이지 마세요.

---

# P15 · 식당 한 장 그림 — 웹사이트의 구조

구조도 (왼쪽 → 오른쪽):
🙋 **손님** = 사용자 —(🏠 가게 주소 = **URL**)→ 🪑 **홀 · 메뉴판** = **프론트엔드** (눈에 보이는 화면) ⇄ 🧑‍🍳 **웨이터 · 주문서** = **API** (주문 전달) ⇄ 👨‍🍳 **주방** = **서버 · 백엔드** (요리 = 계산 · 처리) ⇄ 🧊 **냉장고 · 창고** = **데이터베이스** (재료 = 데이터 보관)

> 손님은 **홀만** 봐요. 그런데 주방이 없으면 음식이 안 나와요.

`가로 5칸 구조도 · 홀 칸 머스터드 굵은 테두리`

🎨 IMAGE PROMPT — A detailed cross-section cutaway of a small friendly restaurant viewed from the side, divided into clear rooms from left to right: customers (Korean kids and a parent) entering through the front door with an address sign, a bright dining hall with a big menu board and tables, a smiling waiter carrying an order slip through a swinging door, a busy kitchen with a chef cooking at a stove, and a large walk-in refrigerator and storage shelves full of ingredients at the very back. The dining hall is lit brightest with a mustard glow. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "우리가 보는 화면은 홀이고, 그 뒤에 주방(서버)과 냉장고(데이터베이스)가 숨어 있어요. 오늘은 홀부터 예쁘게 차립니다."

---

# P16 · 식당 사전 — 오늘 만드는 것 vs 다음에

| 식당 | 웹 용어 | 하는 일 | 오늘? |
|---|---|---|:---:|
| 🏠 가게 주소 | **URL** | `my-app.vercel.app` 찾아오는 길 | ✅ |
| 🏢 상가 건물 | **호스팅 (Vercel)** | 가게 자리를 빌려줌 | ✅ |
| 🪑 홀 · 메뉴판 | **프론트엔드** | 화면 · 버튼 · 색 | ✅ ⭐ |
| 🍱 진열장 모형 음식 | **가짜 데이터 (JSON)** | "이런 메뉴예요" 보여주기 | ✅ |
| 🗄️ 내 책상 서랍 | **localStorage** | 내 기기에만 넣어 두는 메모 | ✅ |
| 🧑‍🍳 웨이터 | **API** | 홀 ⇄ 주방 주문 전달 | ⏭ |
| 👨‍🍳 주방 | **서버** | 계산 · 저장 · 로그인 확인 | ⏭ |
| 🧊 냉장고 | **데이터베이스** | 모든 손님의 데이터 보관 | ⏭ |

`표를 아이콘 그리드(4×2)로 · ✅ 칸 틸, ⏭ 칸 회색`

🎨 IMAGE PROMPT — An illustrated picture-dictionary grid of eight square tiles, each with one cute object: a house address plate, a shopping mall building, a dining table with a menu, a glass display case of plastic food models, a small wooden desk drawer, a waiter with a tray, a chef's hat over a stove, and a big refrigerator. The first five tiles are bright and colorful, the last three are softly faded as "later". friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 위 5개는 오늘 만들고, 아래 3개는 다음에 만듭니다. 이 구분이 오늘의 "아키텍처"입니다.

---

# P17 · 화면(홀)은 무엇으로 만들어지나 — 🏠 집 짓기

단계도:
🧱 **HTML** = 뼈대 · 벽돌 ("여기에 제목, 여기에 버튼") → 🎨 **CSS (Tailwind)** = 페인트 · 옷 ("초록색, 둥글게") → ⚡ **JavaScript (React)** = 전기 · 스위치 ("누르면 움직여라") → 🏠 **웹 페이지**

| 재료 | 누가? |
|---|---|
| 🧱 HTML · 🎨 CSS · ⚡ JS | 🤖 AI (일꾼) |
| 📐 **설계도 · 주문서** | 🧑 **나 (건축주)** |

`가로 3단 + 결과 · 아래 작은 표`

🎨 IMAGE PROMPT — A three-stage house building sequence: first a bare frame of bricks and beams being stacked by a robot worker, second the same house being painted in teal and coral with rounded windows by a robot with a paint roller, third the house with lights turning on as a robot flips a glowing switch. A Korean child architect in front holds a rolled blueprint and points proudly. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 벽돌·페인트·전기는 AI가 합니다. 우리는 건축주예요. 어떤 집을 원하는지 정확히 말하는 사람이 집을 잘 짓습니다.

---

# P18 · 손님이 버튼을 누르면? — 주문 한 번의 여행 (진짜 식당)

단계도 (가는 길):
🙋 손님 "검색" 클릭 → 🪑 홀 → 🧑‍🍳 웨이터 "페트병 찾아 주세요" → 👨‍🍳 주방 → 🧊 냉장고에서 재료 꺼내기

단계도 (오는 길):
🧊 재료 → 👨‍🍳 요리 완성 → 🧑‍🍳 서빙 → 🪑 홀 → 🙋 화면에 결과

`U자 왕복 흐름도 (위 가는 길 → 오른쪽 끝에서 꺾여 → 아래 오는 길)`

🎨 IMAGE PROMPT — A U-shaped journey map through the restaurant cutaway: a dotted mustard path starts at a child tapping a phone at the front door, goes through the dining hall, follows a waiter with an order slip into the kitchen, reaches the chef opening the refrigerator, then returns along a second dotted teal path with the waiter carrying a steaming dish back to the dining table and the child's phone lighting up with a result card. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 진짜 웹사이트는 버튼 하나 누를 때마다 이 여행을 해요. 몇 칸을 지나가는지 손가락으로 세어 보게 하세요.

---

# P19 · 오늘(프론트만)은 짧은 여행

단계도:
🙋 "검색" 클릭 → 🪑 홀 → 🍱 **진열장 (가짜 데이터 JSON)** → 모형 데이터 → 🪑 홀 → 🙋 결과

단계도:
🙋 ⭐ 즐겨찾기 클릭 → 🪑 홀 → 🗄️ **내 서랍 (localStorage)** 에 저장

> 📌 서랍은 **내 기기에만** 있어요. 친구 폰에는 안 보여요.

`위 짧은 왕복 · 아래 서랍 저장 · 앞 장보다 칸 수가 적게`

🎨 IMAGE PROMPT — A compact version of the restaurant: only the bright dining hall exists, with a glass display case of colorful plastic food models right beside the table and a small wooden drawer under the table. A child taps a phone, a short dotted arrow goes to the display case and back; another child places a little star note into the drawer. The kitchen area behind is just a closed, quiet wall with a "coming later" feel (no sign text). friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 앞 장과 비교해 보세요. 웨이터·주방·냉장고가 없어요. 그래서 빠르고 공짜예요.

---

# P20 · ③ 식당의 종류 — 아키텍처 5가지 🏗️

> **아키텍처 (architecture)** = **건물 설계 방식**
> 떡볶이 포장마차에 대형 냉장 창고는 필요 없어요. **필요한 만큼만** 지어야 돈과 시간이 안 새요.

`섹션 구분 카드 · 큰 숫자 ③`

🎨 IMAGE PROMPT — A row of five different food buildings along a street, growing in size from left to right: a paper flyer on a pole, a tiny street food cart with a display case, a proper restaurant with a kitchen chimney, a restaurant with delivery scooters arriving from outside, and a second branch store on the other side of the street sharing one central kitchen via a bridge. A child architect with a hard hat looks at them with a blueprint. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 아키텍처는 어려운 말이 아니라 "어떤 방이 몇 개, 어떻게 이어지나"입니다.

---

# P21 · 다섯 가지 식당 한눈에

계단:
① 📄 **전단지** — 정적 페이지 · 보여주기만
② 🍱 **모형 음식 식당** — 프론트 + 가짜 데이터 · ⭐ **오늘 여기!**
③ 🍽️ **진짜 식당** — 프론트 + 서버 + DB · 모두가 같은 데이터
④ 🛵 **외부 셰프 초대** — + 외부 API · AI (날씨 · 번역 · 챗봇)
⑤ 🏬 **2호점 오픈** — 웹 + 앱 · 같은 주방, 두 매장

`왼쪽 아래 → 오른쪽 위 5단 계단 · ② 머스터드 강조 + "오늘" 깃발`

🎨 IMAGE PROMPT — A five-step staircase rising from bottom left to top right, each step holding a miniature building: a paper flyer, a cute street cart with plastic food models and a small drawer (highlighted with a mustard flag and a group of three kids standing on it), a full restaurant with a kitchen and refrigerator, a restaurant receiving delivery from outside chefs on scooters, and two connected stores sharing one kitchen. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 계단을 한 칸씩 올라갈수록 방(부품)이 늘어납니다. 오늘은 두 번째 칸에 섭니다.

---

# P22 · ① 📄 전단지 — 정적 페이지

구조도: 🙋 손님 → 📄 전단지 (글 · 사진 · 링크)

| 할 수 있는 것 | 할 수 없는 것 | 예시 |
|---|---|---|
| 읽기 · 사진 보기 · 링크 누르기 | 저장 · 검색 · 로그인 | 자기소개 페이지 · 동아리 홍보 |

> 방이 **딱 하나**인 건물

`왼쪽 2칸 구조도 · 오른쪽 표`

🎨 IMAGE PROMPT — A simple colorful paper flyer pinned on a neighborhood bulletin board with pictures of a club and a big smile, and a child reading it while pointing at a small arrow to another page. Nothing behind the flyer, just a clean wall. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 보여주기만 하면 될 때는 이걸로 충분합니다.

---

# P23 · ② 🍱 모형 음식 식당 — ⭐ 오늘 만드는 것

구조도:
🙋 손님 → 🪑 **홀 (프론트)**
→ 🍱 **진열장** = JSON 데이터 20건 (과제로 만든 것!)
→ 🗄️ **내 서랍** = localStorage (즐겨찾기 · 체크)

| 할 수 있는 것 | 할 수 없는 것 | 예시 |
|---|---|---|
| 목록 · **검색 · 필터** · 퀴즈 · 계산기 · **내 기기에 저장** | 다른 사람과 공유 · 로그인 | 분리수거 도우미 · 단어 퀴즈 · 급식 메뉴 |

`가운데 홀 1칸에서 2갈래 구조도 · 머스터드 강조`

🎨 IMAGE PROMPT — A bright, inviting street-food style shop counter run by three Korean kids: a big glass display case filled with twenty colorful plastic food models neatly labeled with small picture tags, and a small wooden drawer under the counter holding a few star-shaped sticky notes. A customer kid browses with a phone, tapping filter buttons that light up certain food models. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 과제로 만든 데이터 20건이 바로 이 진열장에 들어갑니다.

---

# P24 · 왜 오늘은 ②번부터? — 프론트 퍼스트

구조도 (3갈래 → 1):
💸 **공짜** — 주방(서버) 비용 0원
⚡ **빠름** — 하루에 여러 번 고쳐 볼 수 있음
🎯 **검증** — "이 메뉴 사람들이 좋아할까?" 먼저 확인
→ 🍱 **모형 음식으로 먼저 손님 반응 보기** → 😊 손님이 좋아하면 **그때 주방을 짓는다**

`왼쪽 3칸이 가운데 1칸으로 모이고 → 오른쪽 결과`

🎨 IMAGE PROMPT — A smart young shop owner kid arranging plastic food models in a display window while curious passersby (other kids and adults) stop and point excitedly; in the background an empty lot with only a few construction cones and a dotted outline of a future big kitchen, waiting. Three small floating icons above: a coin, a lightning bolt, and a target. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "새 식당을 열 때 주방부터 큰돈 들여 지으면? 손님이 안 오면 망하죠. 똑똑한 사장님은 모형 음식부터 진열해요. 이걸 프론트 퍼스트라고 해요."

---

# P25 · ③ 🍽️ 진짜 식당 — 프론트 + 서버 + 데이터베이스

구조도:
🙋 손님 A · 🙋 손님 B → 🪑 **홀 (Vercel)** ⇄ 🧑‍🍳 **API** ⇄ 👨‍🍳 **주방 = 서버 (Django)** ⇄ 🧊 **냉장고 = DB**
👨‍🍳 주방 → 📋 **사장님 장부 = 관리자 페이지 (Admin)**

| 할 수 있는 것 | 언제 필요해요? |
|---|---|
| 회원가입 · 로그인 · 모두의 게시판 · 랭킹 | **"내 데이터가 친구 폰에도 보여야 해!"** |

`2명 손님 → 홀 → 주방 → 냉장고 · 주방 아래 장부`

🎨 IMAGE PROMPT — A full restaurant cutaway: two different kid customers at separate tables both see the same leaderboard poster on the wall; a waiter shuttles orders to a kitchen where a chef works, a large shared refrigerator at the back, and a small office corner where the owner checks a big ledger book. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 두 손님이 "같은 것"을 본다는 점이 ②번과의 차이입니다.

---

# P26 · 💡 서랍 (localStorage) vs 냉장고 (데이터베이스)

비교:
| | 🗄️ 서랍 (localStorage) | 🧊 냉장고 (데이터베이스) |
|---|---|---|
| 어디에? | 내 브라우저 안 | 식당(서버) 안 |
| 누가 봐요? | **나만** | **모든 손님** |
| 크기 | 작아요 (약 5MB) | 아주 커요 |
| 넣으면 안 되는 것 | ❌ 비밀번호 · 이름 · 전화번호 | 지켜서 넣어야 함 |
| 비용 | 0원 | 돈이 들 수 있음 |

`2열 비교 · 왼쪽 틸(오늘) · 오른쪽 네이비(나중)`

🎨 IMAGE PROMPT — A split illustration: on the left a single child at their own bedroom desk opening a small wooden drawer with a few personal notes and a star sticker inside; on the right a big shared restaurant refrigerator with many kids standing around it, each taking out items, with a chef guarding it. A small open padlock icon floats over the drawer to show it has no lock. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 서랍은 잠금장치가 없어요. 그래서 비밀번호나 이름을 넣으면 안 됩니다.

---

# P27 · ④ 🛵 외부 셰프 초대 — 외부 API · AI

구조도:
🪑 홀 ⇄ 👨‍🍳 **우리 주방 (서버)** —🔑 출입증 (API 키)→ 🌦️ 날씨 셰프 (기상청 API) · 🤖 AI 셰프 (ChatGPT · Claude) · 🗺️ 지도 셰프 (지도 API)

> ⚠️ **🔑 출입증(API 키)은 절대 홀(프론트)에 두면 안 돼요!**
> 손님이 주워 가서 마음대로 쓰면 → **요금 폭탄** 💸 → 반드시 **주방 금고**에

`가운데 주방 → 오른쪽 3명 셰프 방사형 · 아래 코랄 경고 박스`

🎨 IMAGE PROMPT — A restaurant kitchen with a back door opening to three visiting guest chefs: a weather chef with a cloud-and-sun hat, a friendly robot AI chef, and a map chef holding a folded map. Our own chef hands them a glowing golden key from a sturdy safe in the kitchen. In a small inset at the corner, a golden key left on a dining table is being grabbed by a sneaky hand, with coins flying away, shown with a coral warning tint. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 다 만들 필요 없이 잘하는 외부 셰프에게 맡기는 방식입니다. 단, 열쇠는 주방 금고에!

---

# P28 · ⑤ 🏬 2호점 오픈 — 웹에서 앱으로

구조도:
👨‍🍳 **하나의 주방** (서버 · DB 공유)
→ 🏪 **1호점 · 웹** — Next.js → Vercel · 주소로 접속
→ 📱 **2호점 · 앱** — React Native (Expo) · 앱스토어에서 설치

| | 🏪 웹 | 📱 앱 |
|---|---|---|
| 인테리어 (태그) | `div` · `span` | `View` · `Text` |
| 서랍 | localStorage | AsyncStorage |
| **주방 · 메뉴 (데이터)** | **똑같이 공유!** | **똑같이 공유!** |

`위 주방 1칸 → 아래 2갈래 · 아래 표`

🎨 IMAGE PROMPT — One central kitchen building in the middle with two bridges leading to two different storefronts: on the left a web-style shop with a big window shaped like a laptop screen, on the right a phone-shaped kiosk shop. The same chef sends identical dishes along both bridges, and customers at both shops enjoy the same menu. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 겉모습만 바뀌고 주방과 메뉴는 그대로입니다. 그래서 처음에 데이터 모양(메뉴판)을 잘 정해 두는 게 중요해요.

---

# P29 · 우리 아이템은 몇 번 식당? — 30초 판별 사다리

단계도 (질문 사다리):
❓ 글·사진만 보여주면 끝? → **네** → ① 📄 전단지
→ 아니요 → ❓ 내 데이터가 **친구 폰에도** 보여야 해? → **아니요** → ② 🍱 **모형 음식 식당** ⭐ 오늘 바로 가능
→ 네 → ❓ 날씨 · AI 같은 **바깥 능력**이 필요해? → 아니요 → ③ 🍽️ 진짜 식당 / 네 → ④ 🛵 외부 셰프

> ③ · ④가 나와도 괜찮아요! **오늘은 전부 ②번 모양으로 먼저 흉내 내기**

`위에서 아래로 내려가는 결정 트리 · ② 머스터드`

🎨 IMAGE PROMPT — A playful ladder-game (ghost leg) board drawn on a classroom chalkboard: three yes/no question bubbles at different levels with branching lines leading down to four small building icons at the bottom (flyer, food cart, restaurant, delivery chef). A dotted curved arrow from the restaurant and delivery icons loops back to the food cart icon, which glows mustard. Three kids trace the lines with their fingers. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 2일차 워크시트를 꺼내 팀별로 30초 동안 사다리를 타 보게 하세요.

---

# P30 · 흉내 내기 (목업 · mock-up) — 진짜 같은 가짜

비교:
| 필요한 것 | 🎭 오늘의 흉내 내기 |
|---|---|
| 🏆 반 전체 랭킹 | 가짜 랭킹 20개를 진열장에 미리 |
| 🤖 AI 답변 | "AI가 이렇게 답했다"고 미리 쓴 예시 답 20개 |
| 🌦️ 날씨에 따라 추천 | 날씨 버튼(☀️🌧️❄️)을 누르면 미리 정한 추천 |

> 손님 반응을 보는 데는 **이걸로 충분해요.**
> 나중에 진짜로 바꿀 때는 **진열장 뒤만** 바꾸면 돼요.

`2열 비교 3행`

🎨 IMAGE PROMPT — A theater-prop workshop where kids craft realistic-looking props: one kid paints a cardboard leaderboard, another writes pre-made answer cards and places them into a friendly robot-shaped box, a third arranges weather buttons (sun, rain, snow) on a board connected to preset recommendation cards. Everything looks convincing from the front, with simple cardboard backs visible. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 흉내 내기는 속이기가 아닙니다. "데모입니다"라고 밝히고, 손님 반응을 먼저 보는 방법입니다.

---

# P31 · ④ 코딩 없이 화면을 만드는 6계단 🪜

> 참고 사이트의 **"프론트 퍼스트 (Phase 1)"** 를 초등 버전 6계단으로

`섹션 구분 카드 · 큰 숫자 ④`

🎨 IMAGE PROMPT — A colorful six-step staircase made of giant building blocks rising into a sunny sky, with a small flag at the top showing a globe and a house. Three kids holding hands start climbing from the bottom step holding a paper sketch. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 바이브 코딩의 "프로세스"를 계단으로 보여 줍니다.

---

# P32 · 6계단 전체 — 그리고 다시 한 바퀴

계단:
1️⃣ **손그림** 📄 종이 (어제 과제)
2️⃣ **주문서** 📝 프롬프트 (오늘 1차시) ⭐
3️⃣ **화면 만들기** 🎨 v0 (2차시)
4️⃣ **모형 음식** 🍱 가짜 데이터 (2차시)
5️⃣ **탐정 놀이** 🕵️ 테스트 · 수정 (2차시)
6️⃣ **가게 오픈** 🌐 Vercel 배포 (2차시)
↺ 손님 의견 듣고 → 다시 2️⃣로

`6단 계단 + 꼭대기에서 2번으로 돌아가는 곡선 화살표 · 2번 코랄 강조`

🎨 IMAGE PROMPT — A six-step staircase where each step is a small scene: a paper sketch, a notepad with a pencil (glowing coral as today's focus), a laptop with a painting robot, a display case of food models, a detective kid with a magnifying glass, and a shop opening with a ribbon cutting and confetti. From the top step, a long curved slide loops back down to the second step, with a kid happily sliding down holding a customer feedback card. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 6계단은 한 번 오르고 끝이 아닙니다. 손님 의견을 들으면 미끄럼틀을 타고 2번으로 내려와 다시 올라갑니다.

---

# P33 · 계단마다 "왜?"

| 계단 | 하는 일 | **왜 필요해요?** | 도구 | 결과물 |
|---|---|---|---|---|
| 1️⃣ 손그림 | 화면 3장 (입력→처리→결과) | 🗺️ 지도 없이 출발하면 길을 잃어요 | 종이 | 손그림 3장 |
| 2️⃣ 주문서 | 손그림을 **글로** | 📝 "맛있는 거 주세요" 하면 아무거나 나와요 | 종이 | 프롬프트 1장 |
| 3️⃣ 화면 | v0에 주문 | 🎨 인테리어 디자이너에게 도면 맡기기 | **v0** | 첫 화면 |
| 4️⃣ 모형 음식 | 데이터 20건 붙이기 | 🍱 빈 진열장엔 손님이 안 와요 | v0 + JSON | 데이터 화면 |
| 5️⃣ 탐정 | 눌러 보고 고치기 | 🕵️ 손님이 먼저 발견하면 창피해요 | 브라우저 | 고친 화면 |
| 6️⃣ 오픈 | 인터넷 주소 만들기 | 🏠 주소가 없으면 못 찾아와요 | **Vercel** | `○○.vercel.app` |

`표 · "왜?" 열 머스터드 강조`

🎨 IMAGE PROMPT — Six small round icon badges in a row, each showing a scene with a tiny question mark balloon above: a lost child with a map, a confused waiter with a random dish, an interior designer with a floor plan, an empty display case with sad customers, a detective finding a crack, and a house without an address sign. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "무엇을"보다 "왜"를 기억하면 순서를 잊지 않습니다.

---

# P34 · 도구 지도 — 누가 무슨 일을 하나

구조도 (왼쪽 → 오른쪽):
🗺️ **기획** — 종이 · 펜 · ChatGPT · Claude (아이디어 상담)
→ 🎨 **화면 만들기 (AI 스튜디오)** — ⭐ **v0** (오늘) · Bolt · Lovable · Google AI Studio
→ 🌐 **가게 오픈** — ⭐ **Vercel** (오늘) · GitHub (코드 보관 창고)
┈ 🔧 **코드 다듬기 (나중에)** — Cursor · Claude Code

`4개 구역 지도 · v0와 Vercel 별표`

🎨 IMAGE PROMPT — A cute treasure-map style illustration of a small island with four districts connected by paths: a planning village with a desk and paper, a bright art studio where a painting robot works (highlighted with a star), a workshop district with tools shown faded as "later", and a harbor with a launch tower and a storage warehouse (highlighted with a star). Three kids walk along the path with a map. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 쓸 도구는 별표 두 개뿐입니다. 나머지는 "이런 것도 있다" 정도로만.

---

# P35 · 왜 v0 + Vercel인가요?

| 이유 | 설명 (비유) |
|---|---|
| 🤝 한 회사 | 인테리어 업체와 건물주가 같아서 **버튼 하나로 가게 오픈** |
| 🖼️ 그림을 알아봐요 | **손그림 사진을 올리면** 그걸 보고 화면을 만들어요 |
| 👀 바로 보여요 | 왼쪽에 주문하면 **오른쪽에 바로 미리보기** |
| ⏪ 되돌리기 | 망쳐도 **이전 버전으로** (게임 세이브 포인트) |
| 🏭 진짜 도구 | 현업 개발자가 쓰는 Next.js · Tailwind 코드를 만들어요 |

`아이콘 5개 가로 배열 · 아래 한 줄 설명`

🎨 IMAGE PROMPT — Five friendly icon scenes arranged in a row: an interior designer and a building owner shaking hands in front of one shop, a robot looking at a child's paper sketch through a magnifying glass, a split laptop screen with a chat on the left and a live preview on the right, a video-game style save-point crystal, and a professional workshop with real tools. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 특히 "되돌리기"를 강조하세요. 망쳐도 괜찮다는 안심이 실습을 살립니다.

---

# P36 · 나중에 주방을 지어도 괜찮을까? — "통로 하나" 원칙 🚪

구조도:
🪑 **홀 (화면)** — 절대 안 바뀜 → 🚪 **통로 하나** `lib/repo.ts` (데이터 가져오는 문)
→ 지금: 🍱 **진열장** (JSON 파일)
┈ 나중에 (스위치만 딸깍): 👨‍🍳 **주방** (서버 API)

> 홀과 주방 사이에 **문을 딱 하나만** 만들어 둬요. 나중엔 **문 뒤만 바꾸면** 돼요. **홀 코드는 한 줄도 안 고쳐요.**
> → 2차시 주문서에 *"데이터는 한 곳에서만 불러오게 해 줘"* 가 들어가는 이유

`왼쪽 홀 → 가운데 문 (머스터드) → 오른쪽 2갈래 (실선 진열장 / 점선 주방)`

🎨 IMAGE PROMPT — A dining hall with a single bright mustard door at the back wall; through the open door you can see a glass display case of plastic food models right behind it. Beside the door is a big toggle switch, and a faded dotted path continues past the display case to a future kitchen building drawn as a light sketch. All the customer tables stay exactly the same. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 오늘 배우는 가장 "개발자다운" 생각입니다. 문을 하나로 모으면 나중에 바꾸기 쉽습니다.

---

# P37 · ⑤ 좋은 주문서 쓰는 법 📝 — 나쁜 주문 vs 좋은 주문

비교:
| 😵 나쁜 주문 | 😎 좋은 주문 |
|---|---|
| "분리수거 앱 만들어 줘" | "초등학생이 쓰레기 이름을 검색하면 버리는 통 색깔과 방법이 카드로 나오는 화면…" |
| → AI가 마음대로 🤷 | → 손그림과 비슷한 화면 🎯 |

> "밥 주세요" ➡ 아무 밥 · "**김치볶음밥, 계란 반숙, 덜 맵게**" ➡ 원하는 밥

`2열 비교 · 왼쪽 코랄 · 오른쪽 틸`

🎨 IMAGE PROMPT — Two restaurant order scenes side by side: on the left a kid says a short vague order and the confused waiter brings a random strange plate; on the right a kid points at a detailed order slip with pictures of kimchi fried rice, a soft-boiled egg and a mild pepper icon, and the waiter brings exactly that dish, both smiling. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — AI는 아주 성실한 요리사지만, 독심술은 못 합니다.

---

# P38 · 주문서 5칸 공식 — 누 · 무 · 화 · 데 · 모

단계도 (위 → 아래):
👤 **누가** — 누가 쓰나요? (페르소나) → 🎯 **무엇을** — 무엇을 해결? (1단 심장) → 🖼️ **화면** — 몇 개, 순서는? (손그림 3장) → 🍱 **데이터** — 어떤 정보? (데이터 20건) → 🎨 **모양** — 색 · 크기 · 느낌 (바이브!)

| 칸 | 어제 워크시트 | 예시 (분리수거 도우미) |
|---|---|---|
| 👤 누가 | 칸 ③ | 분리수거가 헷갈리는 **초등 5학년** |
| 🎯 무엇을 | 칸 ⑤ | 쓰레기 이름 검색 → 버리는 방법 |
| 🖼️ 화면 | 손그림 | ① 검색창 ② 결과 카드 ③ 즐겨찾기 |
| 🍱 데이터 | 20건 | 이름 · 통 · 방법 한 줄 |
| 🎨 모양 | 칸 ① | 초록 · 큰 버튼 · 둥근 카드 · 휴대폰 |

`세로 5단 블록 · 오른쪽 예시 표`

🎨 IMAGE PROMPT — A tall order slip shaped like a restaurant ticket divided into five colorful horizontal sections, each with a big icon: a child's face, a target, three small phone frames, a tray of food models, and a paint palette. A kid holds a pencil about to fill it in, with yesterday's worksheet beside it showing matching icons connected by dotted lines. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "누무화데모" 다섯 글자를 함께 외치게 하세요. 각 칸이 어제 워크시트 어디서 오는지 연결해 줍니다.

---

# P39 · 주문할 때 꼭 지킬 약속 4가지

단계도:
1️⃣ **한 번에 한 가지만** 🍳 → 2️⃣ **구체적인 숫자 · 색깔** 📏 → 3️⃣ **결과를 보고 '왜?' 다시 묻기** 🔁 → 4️⃣ **개인정보 · 비밀번호 절대 안 넣기** 🔒

| 약속 | 이유 |
|---|---|
| 1️⃣ | 주문 10개를 한 번에 외치면 **하나는 꼭 빠지고**, 뭐가 잘못됐는지도 몰라요 |
| 2️⃣ | "크게" ❌ → "버튼 높이 두 배, 초록색" ✅ |
| 3️⃣ | **한 번에 완벽한 주문은 없어요.** 다시 묻는 게 실력 |
| 4️⃣ | 김민준 → **'학생A'** 로 바꿔요 |

`가로 4칸 · 4번 코랄`

🎨 IMAGE PROMPT — Four promise cards pinned on a cork board, each with a cute illustration: a chef cooking just one pan at a time, a ruler next to a large green button, a kid thinking with a looping question arrow, and a shield with a lock protecting a name tag. A child raises a pinky finger in a promise gesture in front of the board. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 2차시에서 가장 많이 틀리는 것이 1번입니다. 한 번에 한 가지!

---

# P40 · ⑥ 종이배 vs 여객선 🚢

비교:
| ⛵ 종이배 = 데모 | 🚢 여객선 = 서비스 |
|---|---|
| 나만 탄다 | 낯선 사람이 탄다 |
| 질문 5~10번 | 질문 100번 이상 |
| "일단 떠요" | "문제 생기면 고칩니다" |

> **"돌아간다"** 와 **"사람들이 믿고 쓴다"** 는 달라요.
> 좋은 결과물은 **좋은 첫 질문**이 아니라 **포기하지 않은 백 번째 질문**에서 나와요.

`2열 비교 · 아래 큰 인용`

🎨 IMAGE PROMPT — A calm harbor scene: on the left a small paper boat with one child floating in a puddle; on the right a large friendly passenger ship with many diverse passengers waving, a captain checking a long checklist, and lifebuoys hanging neatly. A dotted arrow with many small question-mark stepping stones connects the paper boat to the ship. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — AI는 "돌아가는 것"까지 만들어 줍니다. "믿고 쓰는 것"은 사람이 확인합니다.

---

# P41 · 2차시 탐정 놀이 미리보기 — 탐정 질문 10개

| 그룹 | 탐정 질문 |
|---|---|
| 😶 텅 빈 상황 | ① 검색 결과가 0개면 뭐라고 나와요? |
| 🤪 이상한 입력 | ② 이모지 😀 · 긴 글(100자)을 넣으면? ③ 아무것도 안 쓰고 누르면? |
| 📱 휴대폰 | ④ 글씨가 너무 작지 않나요? ⑤ 손가락으로 누르기 쉬운가요? |
| 🔄 새로고침 | ⑥ 즐겨찾기 하고 새로고침하면 남아요? |
| 👵 누구나 | ⑦ 할머니도 처음 보고 쓸 수 있나요? ⑧ 색깔만으로 구분하지 않나요? |
| 🔒 안전 | ⑨ 진짜 이름 · 전화번호가 없나요? |
| 🎯 처음 문제 | ⑩ **페르소나의 문제가 정말 풀렸나요?** ⭐ |

`그룹별 아이콘 카드 7개 · ⑩ 머스터드`

🎨 IMAGE PROMPT — A detective notebook spread open on a desk with seven small sticky-note sketches: an empty search box with a tear drop, a long scroll of text overflowing a box, a phone with tiny squinting eyes, a refresh arrow with a star, a grandmother happily using a phone, a lock over a name tag, and a big target with a smiling persona face at the center. A kid detective with a magnifying glass leans over the notebook. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 참고 사이트의 "100번의 질문"에서 초등 버전 10개를 골랐습니다. 마지막 ⑩번이 가장 중요합니다.

---

# P42 · ✍️ 내 주문서 1장 쓰기 (4분)

```
┌───────────────────────────────────────────────┐
│ 📝 우리 팀 주문서              팀: _______     │
├───────────────────────────────────────────────┤
│ 🏗️ 우리 식당 번호 : ① ② ③ ④ ⑤ → 오늘은 ②번 │
├───────────────────────────────────────────────┤
│ 👤 누가   : ______________ 가 쓰는             │
│ 🎯 무엇을 : ______________ 하면                │
│            → ______________ 가 보이는 웹사이트 │
│ 🖼️ 화면   : ① ______ ② ______ ③ ______       │
│ 🍱 데이터 : 항목 ___ / ___ / ___ (20건)        │
│ 🎨 모양   : 색 ___ · 느낌 ___ · 휴대폰에서     │
├───────────────────────────────────────────────┤
│ 🚫 일부러 안 넣을 것 : ___ / ___ / ___         │
└───────────────────────────────────────────────┘
```

`양식 카드 · 큰 글씨 · 인쇄용`

🎨 IMAGE PROMPT — Three Korean kids at a classroom table working together on one paper order form: one writes with a marker, one holds up yesterday's hand-drawn sketches, one checks a printed data table with twenty rows. A small timer shows four minutes on the side, and pencils and erasers are scattered around. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — "오늘 여러분은 코드를 한 줄도 안 썼어요. 그런데 가장 중요한 걸 썼어요 — 바로 주문서예요."

---

# P43 · 오늘 배운 것 한 장 정리 — 구조 + 과정

구조도 (오늘의 아키텍처 = ② 모형 음식 식당):
🙋 손님 → 🏠 URL (Vercel) → 🪑 홀 (v0가 만든 화면) → 🚪 통로 하나 (repo) → 🍱 진열장 (JSON 20건) · 🗄️ 서랍 (localStorage)

순환 (오늘의 과정 = 바이브 코딩):
📝 주문서 → 🎨 v0 화면 → 🍱 데이터 → 🕵️ 탐정 → 🌐 오픈 → 🙋 손님 의견 → 📝

`위 가로 구조도 · 아래 원형 사이클`

🎨 IMAGE PROMPT — A summary poster split into two halves: the top half shows the compact street-food shop cutaway (customer at the door, bright dining hall, one mustard door, display case of food models and a small drawer); the bottom half shows a circular loop of six small icons (order slip, painting robot, food models, detective, ribbon cutting, customer feedback card) with arrows going around. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 위는 "무엇을 짓는가(구조)", 아래는 "어떻게 짓는가(과정)"입니다. 학생들에게 위·아래를 손가락으로 짚으며 말해 보게 하세요.

---

# P44 · 1차시 → 2차시 연결

단계도:
📝 **주문서 1장** → ⌨️ v0에 붙여넣기
📄 **손그림 3장** → 📷 사진 찍어 첨부 → ⌨️ v0
🍱 **데이터 20건** → 표로 붙여넣기 → ⌨️ v0
⌨️ v0 → 🌐 **우리 가게 주소**

> "다음 시간에 이 주문서를 v0에 넣으면 AI 일꾼이 홀을 차려 줄 거예요.
> 그리고 그 가게를 **진짜 인터넷 주소**로 열어서, 친구 폰으로 들어와 보게 할 거예요."

`왼쪽 3칸이 가운데 v0로 모이고 → 오른쪽 주소 (초록 강조)`

🎨 IMAGE PROMPT — Three items flying into a glowing laptop from the left: an order slip, a photo of hand-drawn sketches taken by a phone camera, and a data table sheet. From the right side of the laptop, a beam of light forms a shop storefront with an address plate, and kids outside hold up phones showing the same shop. friendly flat vector illustration, warm storybook feel, cozy restaurant metaphor, Korean elementary school students around age 11, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, 16:9

🗣️ 노트 — 쉬는 시간에 주문서·손그림·데이터 세 가지를 노트북 옆에 준비해 두게 하세요.
