# 🎬 Gamma 프롬프트 — 4일차 2교시 · v0로 만들고, GitHub로 옮기고, Claude Desktop을 내 개발실로 세팅한다

> **원본** — `4일차_2교시_askback_클론_v0_GitHub_ClaudeDesktop.md` · `skills/vibe-class-coach/SKILL.md`
> **대상** — 초등 5~6학년 · 중학생 · 3인 1팀 (팀당 Windows 노트북 1대 + 휴대폰 1대) · 45분
> **핵심 한 줄** — 🎨 v0로 만들고 → 🏦 GitHub에 올리고 → 🤖 Claude Desktop에 연결해 → 💬 말로 조금씩 다듬는다
> **핵심 비유** — 1교시의 🍳 **"내 주방"** 을 그대로 이어 갑니다. 오늘은 그 주방에 **🤖 AI 요리사**를 들이고, **📜 주방 규칙**과 **📚 본사 매뉴얼**을 쥐여 줍니다.
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
| 6 | **`📸 캡처`** 표시 카드(설정 화면 · Code 탭 · 허락 창 등 **12장**)는 리허설 때 찍은 **실제 화면 캡처**를 AI 그림 **옆 또는 대신** 넣으세요. AI 그림은 "분위기", 캡처는 "정확한 위치"를 맡아요 |
| 7 | 도식 키워드(`단계도:` `구조도:` 등)가 붙은 목록은 Gamma에서 **Smart Layout(다이어그램)** 으로 바뀌었는지 확인 → 안 바뀌었으면 카드 선택 → **다이어그램으로 변환** |

### 전역 디자인 지시 (Additional instructions에 붙여넣기)

```text
- 초등 5~6학년·중학생이 보는 수업 슬라이드입니다. 글은 짧고 크게, 그림과 도식은 크게. 도식이 글보다 먼저입니다.
- 이 수업의 목표는 ① v0 → GitHub → Claude Desktop으로 이어지는 개발 흐름, ② Claude Desktop 설정 · Skill · CLAUDE.md 세팅, ③ "말 → 허락 → 확인 → 저장" 바이브 코딩 루프를 이해하는 것입니다.
- 핵심 비유는 처음부터 끝까지 "내 주방 + AI 요리사 로봇" 하나입니다. 아이콘·그림을 주방 소품으로 통일하세요.
- "단계도:" 로 시작하는 목록 → 화살표가 있는 가로 프로세스 다이어그램
- "세로단계:" 로 시작하는 목록 → 번호가 붙은 세로 스텝 다이어그램
- "구조도:" 로 시작하는 목록 → 상자와 연결선이 있는 구조 다이어그램 (들여쓴 줄은 안쪽 상자)
- "트리:" 로 시작하는 목록 → 위 1칸에서 아래 여러 칸으로 갈라지는 트리 다이어그램
- "순환:" 으로 시작하는 목록 → 원형 사이클 다이어그램 (마지막 칸에서 첫 칸으로 화살표)
- "비교:" 로 시작하는 표 → 2열 비교 카드 (왼쪽 코랄=위험/옛날/❌, 오른쪽 틸=안전/새로운/⭕)
- "계단:" 으로 시작하는 목록 → 왼쪽 아래에서 오른쪽 위로 올라가는 계단 다이어그램
- "갈림길:" 로 시작하는 목록 → 가운데 질문에서 여러 갈래로 나뉘는 결정 다이어그램
- "매핑:" 으로 시작하는 목록 → 왼쪽 항목과 오른쪽 항목을 1:1 화살표로 잇는 다이어그램
- "층:" 으로 시작하는 목록 → 아래에서 위로 쌓이는 3층 건물(피라미드) 다이어그램 (첫 줄이 1층)
- "신호등:" 으로 시작하는 목록 → 세로 신호등 모양, 줄마다 해당 색 원 + 설명
- "체크:" 로 시작하는 목록 → 큰 체크박스 리스트 (☐ 모양)
- "화면지도:" 로 시작하는 목록 → 앱 화면 와이어프레임 (왼쪽 · 가운데 · 오른쪽 · 아래 영역 상자에 번호 말풍선)
- 백틱 코드 블록(```text)의 내용은 학생이 그대로 따라 칠 "부탁 문장"입니다. 말풍선 또는 채팅 입력창 모양 상자에 크게 보여 주세요.
- 도구별 고정 색: v0=차콜 #343A40 · GitHub=네이비 #1B2A4A · Vercel=그린 #2F9E44 · Claude Desktop=테라코타 #D97757 · CLAUDE.md=머스터드 #F2B705 · Skill=블루 #1971C2
- 배경 크림 #FFFBF2 · 글꼴 Pretendard (제목 ExtraBold, 본문 SemiBold) · 본문 최소 28pt · 한 카드 글 최대 5줄 (표 제외)
- 모든 카드에 이모지를 아이콘처럼 크게 사용하세요.
- "🎨 IMAGE PROMPT", "📸 캡처", "🗣️ 노트" 문단은 화면에 표시하지 마세요. IMAGE PROMPT는 그 카드의 AI 이미지 프롬프트로, 노트는 발표자 노트로만 사용하세요.
- 백틱(`)으로 감싼 마지막 줄의 레이아웃 설명은 배치 지시이며 화면에 표시하지 마세요.
```

### 이미지 공통 스타일 (모든 프롬프트 끝에 이미 포함됨)

```text
friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9
```

### 고정 캐릭터 · 고정 소품 (프롬프트에 이미 포함됨 — 50장 내내 같은 그림 언어)

```text
the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron
a friendly round white robot chef with a terracotta-orange apron and a teal visor face
```

| 개념 | 🎨 그림 속 고정 소품 | 고정 색 |
|---|---|---|
| 🎨 v0 | **밀키트 공장의 로봇 팔** — 80% 손질된 밀키트 상자를 포장 | 차콜 |
| 📐 분석.md | **설계도처럼 생긴 레시피 스케치** (돌돌 말린 파란 종이) | 블루 |
| 🏦 GitHub | **벽에 붙은 네이비 금고** · 🏧 GitHub Desktop = **ATM** | 네이비 |
| 📸 commit / 📤 push | **즉석카메라 사진** / **금고로 들어가는 기송관(빨대 튜브)** | — |
| 🚀 Vercel | **컨베이어 벨트 → 거리의 작은 가게** | 그린 |
| 🤖 Claude Desktop | **AI 요리사 로봇 + 로봇 전용 작업대** (창문 = 미리보기, 영수증 프린터 = 바뀐 내용) | 테라코타 |
| 📜 CLAUDE.md | **냉장고 문에 자석으로 붙은 규칙 메모** | 머스터드 |
| 📚 Skill | **책등에 별이 그려진 두꺼운 본사 요리 매뉴얼** | 블루 |
| 🛡️ 권한 모드 | **주방 벽의 4색 신호등** | 빨강·노랑·파랑·검정 |
| ⚙️ 설정 | **주방 벽의 스위치 패널** (토글 스위치 여러 개) | — |
| 🧠 메모리 | **포스트잇이 가득한 유리병** | — |

### 이미지 작성 원칙

| 원칙 | 이유 |
|---|---|
| 프로그램 화면 · 로고를 그리지 않고 **주방 소품으로 바꿔** 그림 | AI는 글자 · 로고를 엉망으로 그리고, 상표 문제도 있어요 |
| 정확한 화면이 필요한 카드는 **📸 캡처**로 보완 | 설정 메뉴 위치는 그림이 아니라 캡처로 가르쳐야 정확해요 |
| 한 장면 = 한 메시지, 소품은 3~5개까지 | 어린 학생은 복잡한 그림에서 핵심을 놓쳐요 |
| 도식이 있는 카드는 그림을 **오른쪽 또는 아래 작은 칸**에 | 도식이 주인공이에요 |

---

▼ 여기부터 붙여넣기

---

# P01 · 🤖 내 주방에 AI 요리사를 들인다
### 4일차 2교시 · v0 → GitHub → Claude Desktop

1교시엔 **주방을 차렸고**,
2교시엔 **AI 요리사를 들여 말로 요리**합니다

`표지 · 왼쪽 큰 제목 · 오른쪽 큰 일러스트 · 테라코타 포인트`

🎨 IMAGE PROMPT — A bright cozy home kitchen built inside a giant open laptop. a friendly round white robot chef with a terracotta-orange apron and a teal visor face steps through the kitchen door holding a big recipe manual under one arm, waving hello. the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron welcome the robot with a ribbon-cutting gesture, wearing chef hats. On the counter sits a meal-kit box with a ribbon, and on the fridge door a note held by a magnet. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "1교시에 여러분 노트북 안에 주방을 차렸죠? 오늘은 그 주방에 AI 요리사를 모셔 올 거예요. 우리는 말로 부탁하고, 요리사는 요리하고, 결정은 우리가 해요."

---

# P02 · 오늘의 길 — 45분 5정거장

단계도:
🎨 **① v0 뼈대** (10분) → 🏦 **② GitHub 버튼 4번** (7분) → 🤖 **③ Claude Desktop 세팅** (15분) → 🔁 **④ 다듬기 루프** (10분) → 🪞 **닫기** (3분)

> ⭐ 가장 긴 정거장: **③ Claude Desktop 세팅** · 꼭 지킬 것: **③ + ④ 한 바퀴**

`가로 5칸 노선도 · ③ 테라코타 굵게 · ④ 머스터드 · 칸마다 분 표시`

🎨 IMAGE PROMPT — A cheerful road map drawn as a winding path through a small kitchen-themed town with five signposts marked by big icons: a robot arm packing a meal-kit box, a navy bank vault, a robot chef's workstation with a window, a circular arrow made of spoons, and a mirror. The robot workstation stop is the largest and glows terracotta orange. A tiny food truck drives along the path. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 시간이 밀리면 ① v0는 주문 1번만, ② Vercel 연결은 선생님이 대신. 하지만 ③ 세팅과 ④ 한 바퀴는 꼭 지킵니다.

---

# P03 · 어제의 공유 주방 → 오늘의 AI 요리사

단계도:
📅 **3일차** 🏢 v0 공유 주방 (빌린 곳) → 📅 **4일차 1교시** 🏠 내 주방 차리기 (Node · npm · Git · GitHub) → 📅 **4일차 2교시** 🤖 내 주방 + **AI 요리사** + 📜 규칙 + 📚 매뉴얼

> "주방만 있고 요리사가 없으면? 오늘은 **요리사를 들이고, 일하는 규칙까지** 정해 줘요."

`가로 3단 성장 흐름 · 1단 회색, 2단 블루, 3단 테라코타로 점점 밝아짐`

🎨 IMAGE PROMPT — A three-panel growth story connected by arrows. Panel one: the students cooking at a rented station in a big gray shared kitchen. Panel two: the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron arranging tools in their own small bright kitchen. Panel three: the same kitchen now with a friendly round white robot chef with a terracotta-orange apron and a teal visor face cooking beside the students, a rule note on the fridge and a thick manual on a shelf, everyone smiling. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 1교시와 같은 주방 그림을 계속 씁니다. 학생들이 "아, 그 주방!" 하고 이어지게 해 주세요.

---

# P04 · ⭐ 오늘의 핵심 한 줄

단계도:
🎨 **v0로 만들고** → 🏦 **GitHub에 올리고** → 🤖 **Claude Desktop에 연결해** → 💬 **말로 조금씩 다듬는다** → 🚀 가게가 저절로 바뀐다

> **코드는 AI가 · 버튼은 사람이 · 판단은 우리 팀이**

`큰 가로 5칸 흐름 · 각 칸 도구 고정 색 · 아래 한 줄 슬로건을 큰 리본 배너로`

🎨 IMAGE PROMPT — One long continuous kitchen conveyor scene from left to right: a robot arm in a meal-kit factory packs a box, the box slides into a navy wall vault, then comes out into a home kitchen where a friendly robot chef and three students season it together, then the finished dish rides a green conveyor belt out a window to a small street shop with happy customers. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 이 카드를 오늘 세 번 다시 보여 줍니다: 시작할 때, ③ 세팅 전, 닫기 때. "지금 우리는 몇 번째 칸?" 하고 물어보세요.

---

# P05 · 바이브 코딩 = 말로 요리하기 🗣️🍳

비교:
| 🤖 AI 요리사가 하는 일 | 🧑‍🤝‍🧑 우리 팀이 하는 일 |
|---|---|
| ✏️ 코드 쓰기 · 고치기 | 📐 **설계도** 그리기 (분석.md) |
| 📦 설치 · 서버 켜기 · 검사 | 📜 **규칙** 정하기 (CLAUDE.md) |
| 📸 commit · 📤 push | 💬 **하나씩 부탁**하기 |
| 💡 설명 · 제안 | 🛡️ **허락 / 거절** 판단 · 👀 **눈으로 확인** |

> 바이브 코딩에서 사람의 일 = **지휘자** 🎼

`2열 비교 · 왼쪽 테라코타(로봇), 오른쪽 틸(사람) · 가운데 지휘봉 아이콘`

🎨 IMAGE PROMPT — A kitchen orchestra scene: a friendly round white robot chef with a terracotta-orange apron and a teal visor face busy chopping, stirring and plating with several arms, while the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron stand on a small podium in front, one holding a conductor's baton, one holding a blueprint, one holding a thumbs-up and thumbs-down sign. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "코드를 직접 안 쓰면 우리는 뭐 해요?" → 설계도, 규칙, 부탁, 허락, 확인. 이게 사람이 하는 일이에요.

---

# P06 · ⚠️ 한 방향 원칙 — 요리사는 한 명만

비교:
| ❌ 두 요리사가 같은 냄비에 | ⭕ 한 방향으로 |
|---|---|
| v0도 고치고 · Claude도 고치고 | **v0는 뼈대까지만** |
| 🧂 소금을 두 번 넣음 = **충돌** | GitHub로 옮긴 뒤엔 **Claude Desktop에서만** |
| 누가 뭘 바꿨는지 모름 | 기록이 한 줄로 깔끔 |

단계도:
🎨 v0 (처음 1번) → 🏦 GitHub → 🤖 Claude Desktop (이제부터 여기서만!) 🔁

`위 2열 비교(코랄/틸) · 아래 한 방향 화살표 · v0 칸은 회색으로 "끝" 표시`

🎨 IMAGE PROMPT — A split scene. Left: two different chefs, a factory robot arm and a robot chef, both pouring salt into the same pot at the same time, the soup bubbling over in a funny mess. Right: a calm kitchen where the factory robot arm waves goodbye after handing over a meal-kit box, and only a friendly round white robot chef with a terracotta-orange apron and a teal visor face cooks at the stove with the three students. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 학생들이 가장 많이 하는 실수입니다. "v0에서 또 고치고 싶어요!" → "같은 주문을 Claude에게 하세요."

---

# P07 · 오늘 쓰는 도구 = 주방 소품 매핑

매핑:
- 🎨 **v0** ↔ 🏭 밀키트 공장 (80% 손질된 재료)
- 🏦 **GitHub** ↔ 🔐 벽 금고 · 🏧 **GitHub Desktop** ↔ ATM
- 🚀 **Vercel** ↔ 🏪 자동 컨베이어 벨트 + 가게
- 🤖 **Claude Desktop** ↔ 🧑‍🍳 AI 요리사 + 작업대
- 📜 **CLAUDE.md** ↔ 🧲 냉장고에 붙은 주방 규칙
- 📚 **Skill** ↔ 📘 본사 요리 매뉴얼

`왼쪽 도구 6칸(고정 색) ↔ 오른쪽 소품 6칸 1:1 화살표 · 아래 3줄(Claude·CLAUDE.md·Skill)은 오늘 새로 등장 배지`

🎨 IMAGE PROMPT — A neat kitchen wall shelf displaying six labeled-by-shape objects in a row like a museum display: a small robot arm holding a meal-kit box, a navy wall safe with a tiny ATM beside it, a mini conveyor belt leading to a toy shop, a round white robot chef figurine with a terracotta apron, a fridge door with a magnet note, and a thick blue manual book with a star on its spine. The last three glow softly as new arrivals. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 앞 세 개는 1교시·3일차에 본 것, 뒤 세 개가 오늘의 주인공입니다.

---

# P08 · ① v0로 뼈대 만들기
### 🏭 밀키트 공장에서 80% 손질된 재료를 받아 온다

`섹션 구분 카드 · 큰 숫자 ① · 차콜 배경 띠`

🎨 IMAGE PROMPT — A section title illustration: a clean meal-kit factory where a friendly robot arm packs neatly prepared ingredients into a box: chopped vegetables, measured sauce bottles, and a recipe card with drawings only. The box is mostly full, with one small empty compartment left on purpose. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — v0는 처음부터 끝까지 다 만들어 주는 곳이 아니라, 빠르게 뼈대를 받아 오는 곳이에요.

---

# P09 · 📐 분석.md — 4칸만 채운다

구조도:
📐 **분석.md (설계도)**
- 1️⃣ **한 줄 요약** — ○○가 질문하면 AI 코치가 △△로 답하는 페이지
- 3️⃣ **레이아웃 6구역** — 사이드바 · 상단 바 · 알림 · 5단계 카드 · 타임라인 · 입력창
- 6️⃣ **강조 순위** — 🙋 되물음 → 🪜 5단계 카드 → 결론 첫 줄
- 8️⃣ **데이터 모양** — data/projects.json 칸 이름

> 📐 이 설계도는 **v0에게도, Claude에게도** 똑같이 줘요 = **공통 설계도**

`가운데 큰 설계도 문서 아이콘 · 4개 칸이 방사형으로 · 아래 v0와 로봇 두 화살표가 같은 설계도를 가리킴`

🎨 IMAGE PROMPT — A large rolled-out blue blueprint recipe sketch on a kitchen table showing a simple page layout drawn with boxes and arrows only. Two helpers look at the same blueprint from opposite sides: a factory robot arm on the left and a friendly round white robot chef with a terracotta-orange apron and a teal visor face on the right, both nodding. the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron hold pencils beside the table. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 상세판의 분석.md 템플릿에서 1·3·6·8번 칸만 채웁니다. 5분 이내.

---

# P10 · v0 주문 3번 — 한 번에 한 구역

세로단계:
1. 🥇 **주문 ①** 분석.md 첨부 + **6구역 전체 틀 + 디자인**
2. 🥇 **주문 ②** `data/projects.json` + `lib/repo.ts` + 5단계 카드 + 타임라인
3. 🥈 **주문 ③** 되물음 강조 + 되묻기 카드 (시간 없으면 → **Claude에게 넘기기**)
4. ⭐ **마지막 한 줄** — 폴더 정리 주문 ↓

```text
데이터는 data/projects.json, 데이터 통로는 lib/repo.ts, 화면 부품은 components/ 폴더로 정리해 줘. 다른 화면은 바꾸지 마.
```

`세로 4단 · 1·2단 머스터드 메달 · 4단 아래 채팅 말풍선 크게`

🎨 IMAGE PROMPT — An order counter at the meal-kit factory: the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron hand over three order tickets one at a time to a friendly robot arm, the first ticket already turned into a neatly packed box, the second being packed, the third waiting. A fourth small sticky note says to organize compartments, shown as a box with tidy labeled-by-color dividers. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 마지막 "폴더 정리" 한 줄이 나중에 Claude가 코드를 읽기 쉽게 만들어 줍니다. 꼭 넣으세요.

---

# P11 · 80%면 충분 + v0가 만든 폴더 지도

트리:
📂 **askback-clone-t03**
- 📁 `app/p/[id]` — 프로젝트 페이지 (폴더 = 주소)
- 📁 `components/` — 화면 부품 (사이드바 · 카드 · 입력창)
- 📁 `data/projects.json` — 🍱 모든 데이터
- 📁 `lib/repo.ts` — 🚪 데이터 통로 하나
- 📄 `분석.md` — 📐 설계도

> 💡 v0에서 **100%를 만들지 마세요.** 나머지 20%는 **Claude Desktop에서 조금씩** = 오늘의 연습

`왼쪽 트리 다이어그램 · 오른쪽 80% 채워진 큰 진행 막대(차콜) + 20% 빈칸(테라코타 점선)`

🎨 IMAGE PROMPT — An opened meal-kit box seen from above, divided into five tidy compartments of different sizes holding ingredients, with one compartment intentionally empty and outlined with a dotted terracotta line. Beside the box, a friendly round white robot chef with a terracotta-orange apron and a teal visor face holds a spice jar ready to fill the empty spot. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — v0 사용량도 아끼고, Claude와 다듬는 연습 시간도 확보하는 전략입니다.

---

# P12 · ② GitHub — 버튼으로 옮기기
### 🔐 밀키트를 금고에 넣고, 우리 주방으로 꺼내 온다

`섹션 구분 카드 · 큰 숫자 ② · 네이비 배경 띠`

🎨 IMAGE PROMPT — A section title illustration: a meal-kit box sliding through a pneumatic tube into a big navy wall vault, and on the other side a friendly ATM machine handing the same box out into a cozy home kitchen. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 오늘 GitHub는 1분만 설명하고, 대부분 버튼과 자동화로 지나갑니다.

---

# P13 · GitHub, 딱 다섯 단어만

매핑:
- 🗄️ **저장소 (repo)** ↔ 금고 한 칸 → 🔘 v0 버튼이 만들어 줌
- 📥 **clone** ↔ 금고 → 우리 주방으로 복사 → 🔘 GitHub Desktop 버튼
- 📸 **commit** ↔ 세이브 포인트 한 장 → 🤖 "저장해 줘"
- 📤 **push** ↔ 세이브 포인트를 금고로 → 🤖 "올려 줘"
- 🚀 **자동 배포** ↔ 금고에 들어오면 가게가 저절로 → Vercel

> 외울 것은 **📸 commit · 📤 push** 두 개뿐!

`왼쪽 단어 5칸 ↔ 오른쪽 비유 5칸 · 맨 오른쪽 "누가?" 아이콘(버튼 / 로봇 / 자동)`

🎨 IMAGE PROMPT — Five small icons in a row like a picture dictionary: a single compartment of a navy safe, a box being copied into a house, an instant camera snapping a photo of a dish, the photo flying through a tube into the safe, and a shop window magically changing its display. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "명령어는 외우지 않아요. 세이브 포인트와 금고로 보내기, 두 단어만 기억해요."

---

# P14 · 🔘 버튼 4번이면 끝

세로단계:
1. 🎨 **v0** 오른쪽 위 GitHub(Git) 아이콘 → 이름 `askback-clone-t03` → 🔒 Private → 만들기
2. 🏧 **GitHub Desktop** File → Clone repository → 우리 저장소 → Local path `C:\dev\…` → Clone
3. 🚀 **vercel.com** Add New → Project → 우리 저장소 Import → Deploy (설정 그대로)
4. 📱 **휴대폰** ○○.vercel.app 열어 두기 🎉

`세로 4단 · 단마다 도구 고정 색 원 번호 · 4단 그린 굵게`

🎨 IMAGE PROMPT — Four big friendly push buttons arranged in a vertical column on a kitchen control board, each with a small icon above it: a robot arm, an ATM, a conveyor belt, and a smartphone. A student's finger presses the fourth button and confetti pops from a tiny shop model. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — v0 Git 연결 버튼 위치 · GitHub Desktop Clone 창 · Vercel Import 화면 (3장을 작게 나란히)

🗣️ 노트 — 명령어 없이 버튼만으로 저장소 생성 → 복사 → 자동 배포 연결까지 끝납니다.

---

# P15 · 📂 Clone 위치는 `C:\dev` 로!

비교:
| ❌ 기본값 그대로 | ⭕ 전용 주방 |
|---|---|
| `C:\Users\(한글이름)\Documents\GitHub\…` | **`C:\dev\askback-clone-t03`** |
| 한글 이름 · OneDrive 동기화 → **오류** | 짧고 깨끗한 경로 |
| AI가 엉뚱한 폴더를 볼 수 있음 | 이 폴더 = **AI 요리사의 작업 범위** |

`2열 비교 · 오른쪽 큰 폴더 아이콘에 C:\dev 고정폭 글씨`

🎨 IMAGE PROMPT — A house cross-section: on the left a cluttered hallway full of boxes and tangled cloud-shaped cables, on the right a clean dedicated kitchen room with a door sign shaped like a folder. The ATM delivers the meal-kit box straight into the clean room, not the hallway. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — GitHub Desktop Clone 창의 **Local path** 칸 (C:\dev로 바꾼 상태)

🗣️ 노트 — 3단계 ③에서 Claude Desktop에 고를 폴더가 바로 이 폴더입니다. 여기서 경로가 꼬이면 뒤가 다 꼬여요.

---

# P16 · 🚀 Vercel — 자동 컨베이어 벨트

단계도:
📤 push → 📥 ① 코드 받기 → 📦 ② 재료 설치 → 🔍 ③ 조립 + 검사 → 🚚 ④ 출고 → 🪧 ⑤ 간판 교체 → 🌐 ○○.vercel.app

> 🛡️ **검사(③)에서 불합격이면 출고 중지** → 손님 가게는 **예전 그대로 안전**

`가로 5작업대 컨베이어 · ①~③ 블루 "검사", ④~⑤ 그린 "출고" · ③ 아래 빨간 갈림 화살표 "불합격 → 그대로"`

🎨 IMAGE PROMPT — A long green conveyor belt passing five small stations: a box arriving from a navy vault, a delivery scooter dropping ingredients, an inspection gate with a scanner light, a delivery truck loading, and a shop sign being swapped. A side track at the inspection gate sends a cracked box into a red bin while the shop stays unchanged and happy. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 오늘은 CI/CD 실험을 길게 하지 않고, "push하면 저절로 바뀐다 + 고장 나면 가게는 안전하다" 두 가지만 짚어요. 상세 실험은 상세판 4장.

---

# P17 · 🆘 막혔을 때 — 세 갈래

갈림길:
❓ **어디서 막혔어?**
- 🎨 v0에 Git 메뉴가 없다 → **Download ZIP** → `C:\dev`에 압축 풀기 → GitHub Desktop **Add local repository → Publish** (☑ Private)
- 🚀 Vercel 목록에 저장소가 없다 → **Adjust GitHub App Permissions** → 🙋 선생님
- 🌿 v0가 `main`이 아닌 가지로 올렸다 → github.com **Compare & pull request → Merge** (버튼 2번)

`가운데 큰 물음표 · 세 갈래 화살표 · 각 끝에 해결 카드`

🎨 IMAGE PROMPT — A friendly crossroads in a kitchen town with a big question mark signpost in the middle and three paths: one leading to a zip-up lunch bag being unzipped, one leading to a key handed over at a vault door by a teacher, and one leading to two tree branches being joined together with a ribbon. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 세 번째(가지 합치기)는 v0 버전에 따라 생깁니다. Vercel 진짜 가게는 main만 보기 때문에 꼭 합쳐야 해요.

---

# P18 · ③ Claude Desktop — 우리 개발실 세팅
### 🤖 AI 요리사에게 열쇠 · 규칙 · 매뉴얼을 준다

`섹션 구분 카드 · 큰 숫자 ③ · 테라코타 배경 띠 · "⭐ 오늘의 핵심" 배지`

🎨 IMAGE PROMPT — A section title illustration: a friendly round white robot chef with a terracotta-orange apron and a teal visor face standing at the entrance of the home kitchen receiving three things from the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron: a single brass key, a note with a magnet, and a thick blue manual with a star on the spine. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 오늘 수업의 절반이 여기 있습니다. 열쇠 = 폴더, 규칙 = CLAUDE.md, 매뉴얼 = Skill.

---

# P19 · 왜 Claude Desktop일까?

비교:
| 😵 도구가 흩어진 창고 | 😎 요리사 전용 작업대 하나 |
|---|---|
| VS Code + 터미널 + 브라우저 + GitHub Desktop 왔다 갔다 | **앱 하나** 안에서 |
| 명령어를 직접 입력 | 💬 **말로 부탁** |
| 바뀐 곳을 직접 찾기 | 🔍 **바뀐 내용**을 빨강/초록으로 |
| 화면은 다른 창에서 | 👀 **미리보기**가 바로 옆에 |

`2열 비교 · 오른쪽 큰 테라코타 작업대 아이콘`

🎨 IMAGE PROMPT — A split scene. Left: a messy storage room where tools are scattered on different shelves and a student runs back and forth between them, sweating. Right: a single tidy chef workstation where a friendly round white robot chef with a terracotta-orange apron and a teal visor face stands at the counter with a small window showing a mini shop, a receipt printer, and a speaking tube, while one student calmly talks to the robot. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 대화, 파일 수정, 명령 실행, 미리보기, 바뀐 내용 확인, 저장까지 한 곳에서. 이게 바이브 코딩 개발실입니다.

---

# P20 · 🗺️ Code 탭 화면 지도

화면지도:
- 📋 **① 왼쪽** — 세션(대화) 목록 · ＋ 새 세션 = 작업 노트 한 권씩
- 💬 **② 가운데** — 대화창 · 부탁 · 허락 · 결과
- 🪟 **③ 오른쪽 패널** — 👀 미리보기 · 🔍 바뀐 내용(Diff) · ⌨️ 터미널
- ⬇️ **④ 입력창 아래** — 📂 폴더 · 🛡️ 권한 모드 · 🧠 모델

`앱 창 와이어프레임 · 4영역 번호 말풍선 · ② 테라코타 테두리 · ③ 그린`

🎨 IMAGE PROMPT — A cutaway of the robot chef's workstation seen from the front, divided into clear zones: on the left a shelf of stacked notebooks, in the center a speaking counter where a student talks to a friendly round white robot chef with a terracotta-orange apron and a teal visor face, on the right a window showing a tiny shop plus a receipt printer, and at the bottom a row of three dials. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — Claude Desktop **Code 탭 전체 화면** (리허설 노트북) · 4영역에 번호 스티커

🗣️ 노트 — 메뉴 이름·위치는 업데이트로 바뀔 수 있어요. 반드시 리허설 캡처로 보여 주세요.

---

# P21 · ⚙️ 설정 지도 — 계정 한 번 · 노트북마다

트리:
⚙️ **설정** (프로필 → 설정 · `Ctrl ,`)
- 👤 **계정 (한 번만 → 모든 노트북)** — 📊 사용량 · 🧠 메모리 · 📚 Skills · 🔌 커넥터 · 🧩 플러그인
- 💻 **노트북마다** — `</>` Claude Code · 🌐 Claude in Chrome · 🖥️ 시스템 · 확장 · 개발자

> 수업 계정 **하나를 여러 노트북이 같이** 쓰기 때문에, 계정 설정은 **선생님이 한 번만**

`위 1칸 → 아래 2갈래 트리 · 왼쪽 가지 블루, 오른쪽 가지 테라코타`

🎨 IMAGE PROMPT — A kitchen wall control panel split into two sections: a large shared master panel at the top connected by wires to five small identical kitchens below, and each small kitchen has its own little local switch box. A teacher figure flips switches on the master panel. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 설정 창 **왼쪽 메뉴 전체** (결제 · 사용량 · 기능 · 메모리 … Skills · 커넥터 · 플러그인 · API 키)

🗣️ 노트 — 이 카드는 선생님용입니다. 학생에게는 "선생님이 미리 주방 스위치를 맞춰 뒀어요"라고만 말해도 충분해요.

---

# P22 · ⚙️ 설정 메뉴 체크표 — 켤 것 · 끌 것

| 메뉴 | 수업 권장 | 왜 |
|---|:---:|---|
| 💳 결제 · 📊 사용량 | 👀 확인 | Code 탭 요금제 · 팀 수 × 1시간 여유 |
| 🧠 **메모리** | ⛔ **끄기** | 팀끼리 대화가 섞임 → 규칙은 CLAUDE.md에 |
| `</>` **Claude Code** | ⚙️ 다음 카드 | 바이브 코딩 핵심 |
| 📚 **Skills** | ✅ `vibe-class-coach` 1개 | 모든 팀 같은 규칙 |
| 🌐 Chrome · 🔌 커넥터 · 🔑 API 키 | ⛔ 사용 안 함 | 계정 · 비밀 노출 길 차단 |
| 🧩 플러그인 | ⛔ 안 쓰는 것 끄기 | 개발자용 스킬이 끼어들지 않게 |
| 🖥️ 시스템 · 확장 · 개발자 | ✋ 건드리지 않기 | 리허설 화면과 같게 |

`표 · 두 번째 열을 신호등 아이콘(✅ 초록 / ⛔ 빨강 / 👀 노랑)으로 크게`

🎨 IMAGE PROMPT — A close-up of a kitchen wall switch panel with many toggle switches in two colors: a few green switches turned on with glowing lights, several red switches firmly turned off with little lock covers, and one blue switch with a star sticker being turned on by a teacher's hand. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 설정 → **메모리** 끈 화면 · 설정 → **플러그인** 목록

🗣️ 노트 — 핵심 세 가지: 메모리 끄기, 수업 스킬 1개 켜기, 외부 연결 쓰지 않기.

---

# P23 · 🧠 메모리를 끄는 이유

비교:
| ❌ 메모리 켜짐 (한 계정 · 여러 팀) | ⭕ 메모리 끄고 CLAUDE.md |
|---|---|
| A팀: "우리 서비스 이름은 거북이 코치" | A팀 저장소의 📜 CLAUDE.md에만 |
| → B팀 대화에 "거북이 코치" 등장 😱 | B팀은 B팀 CLAUDE.md만 읽음 |
| 무엇을 기억했는지 안 보임 | 규칙이 **파일로 보이고 고칠 수 있음** |

`2열 비교 · 왼쪽 엉킨 말풍선, 오른쪽 팀별 냉장고 2대`

🎨 IMAGE PROMPT — A split scene. Left: one big glass jar full of sticky notes shared by two different kitchens, notes flying out of the jar into the wrong kitchen and confusing the students there. Right: two separate kitchens, each with its own fridge and its own rule note held by a magnet, students calm and focused. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 팀 규칙은 메모리(보이지 않는 기억)가 아니라 저장소 안 CLAUDE.md(보이는 파일)에 둡니다.

---

# P24 · `</>` Claude Code 설정 — 바이브 코딩 핵심

| 항목 | 수업 권장값 | 🍳 비유 |
|---|---|---|
| 🛡️ 기본 권한 모드 | **매번 묻기** | 요리사가 소금 넣기 전마다 물어봄 |
| 🌿 worktree (작업 복사본) | **끄기 → 고른 폴더에서 바로** | 복사본 주방 말고 진짜 주방에서 |
| 🔔 알림 | 켜기 | 설치 끝나면 "띵!" |
| 🗃️ 자동 보관 | 끄기 | 수업 중 노트가 사라지지 않게 |
| ☕ 화면 꺼짐 방지 | 켜기 | 빌드 중 노트북이 잠들지 않게 |
| 📡 원격 조작 | 끄기 | 다른 기기에서 조작 ❌ |

`표 · 앞 두 줄(권한 · worktree) 테라코타 굵게 강조`

🎨 IMAGE PROMPT — A close-up of the robot chef's workstation side panel with six chunky dials and switches: a traffic light dial set to red, a switch with two little kitchen icons set to the single kitchen, a bell, a drawer with a lock, a coffee cup, and an antenna switched off. a friendly round white robot chef with a terracotta-orange apron and a teal visor face gives a thumbs-up. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 설정 → **Claude Code** 화면 (권한 모드 · worktree 항목에 빨간 동그라미)

🗣️ 노트 — 항목 이름은 버전마다 조금씩 다릅니다. 리허설 캡처의 실제 이름으로 바꿔 말해 주세요.

---

# P25 · 🌿 worktree를 끄는 이유

갈림길:
❓ **Claude가 어디서 일하고 있나?**
- ⭕ **고른 폴더 · `main`** → push → 🚀 진짜 가게가 바뀜 → 👀 미리보기 = 우리 폴더 ✅
- ❌ **복사본 폴더 · 다른 가지** → push가 다른 가지로 → 🪧 **가게가 안 바뀜** · 미리보기도 다른 폴더 😵

```text
지금 어느 폴더 · 어느 가지(branch)에서 일하고 있어?
```
→ 답이 **`C:\dev\askback-clone-t03` · `main`** 이면 성공!

`가운데 질문 · 위 갈래 그린(성공) · 아래 갈래 코랄(실패) · 아래 채팅 말풍선`

🎨 IMAGE PROMPT — A fork in a kitchen hallway: one door opens into the real home kitchen connected by a green conveyor to the shop, where the dish arrives and the shop lights up; the other door opens into a duplicate copy kitchen whose conveyor leads to a dead-end wall, with a friendly round white robot chef with a terracotta-orange apron and a teal visor face looking confused there. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 리허설 때 이 질문을 꼭 해 보세요. 수업 당일 "push했는데 가게가 안 바뀌어요"의 1순위 원인입니다.

---

# P26 · 📚 Skill이란? — 본사 매뉴얼 vs 우리 가게 메뉴판

비교:
| 📜 CLAUDE.md = 우리 가게 메뉴판 | 📚 Skill = 본사 요리 매뉴얼 |
|---|---|
| 각 팀 **저장소 안** 파일 | **계정 설정**에 한 번 → 모든 노트북 |
| 폴더 지도 · 디자인 · 강조 순위 | 수업 공통 규칙 · 말투 · 진행 순서 |
| 팀 + Claude가 만듦 | 🧑‍🏫 선생님이 미리 준비 |
| 바뀌면 그 팀만 | 바뀌면 **모든 팀 한 번에** |

> **스킬 = 반 공통 · CLAUDE.md = 팀 전용**

`2열 비교 · 왼쪽 머스터드, 오른쪽 블루 (이 카드는 코랄/틸 대신 도구 색)`

🎨 IMAGE PROMPT — Two objects side by side on a kitchen counter: on the left a fridge door with a handwritten rule note held by a mustard magnet, specific to this kitchen; on the right a thick blue headquarters manual with a star on its spine, with small copies of the same manual floating toward several kitchens in the background. a friendly round white robot chef with a terracotta-orange apron and a teal visor face reads both. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "프랜차이즈 본사 매뉴얼은 모든 가게가 같고, 메뉴판은 가게마다 달라요."

---

# P27 · 📚 Skill 올리는 법 — 클릭 4번

단계도:
⚙️ 설정 → 📚 **Skills** (사용자 지정) → ＋ **추가 ▾** → 📦 **업로드** `vibe-class-coach.zip` → ✅ **내 항목**에 켜짐

| 파일 | 위치 |
|---|---|
| 📦 업로드용 | `ppt/4일차/skills/vibe-class-coach.zip` |
| 📄 내용 | `ppt/4일차/skills/vibe-class-coach/SKILL.md` |

`가로 5칸 흐름 · 3번째 칸(＋ 추가) 블루 굵게 · 아래 파일 표`

🎨 IMAGE PROMPT — A teacher placing a thick blue manual with a star on its spine into a slot in a kitchen wall bookshelf; the slot lights up, and small identical copies of the manual appear on the shelves of several kitchens connected by glowing lines. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 설정 → **Skills** 화면 (오른쪽 위 **＋ 추가** 버튼에 빨간 동그라미) · 업로드 후 목록에 `vibe-class-coach` 가 보이는 화면

🗣️ 노트 — 목록의 "Anthropic 및 파트너 제공" 아래 기본 스킬들과 별개로 "내 항목"에 들어갑니다. 수정하면 zip을 다시 만들어 기존 것을 지우고 다시 업로드하세요.

---

# P28 · Skill을 준비하는 3가지 길

갈림길:
❓ **어떻게 준비할까?**
- 🅰️ **zip 업로드** (추천) — 이 수업 스킬 그대로 → 계정 전체
- 🅱️ **skill-creator에게 부탁** — 우리 반에 맞게 새로 만들기 · 고치기 → 계정 전체
- 🅲 **저장소 안에 넣기** — `.claude/skills/vibe-class-coach/SKILL.md` → 그 프로젝트만 (플랜 B)

```text
초·중학생 수업용 스킬 vibe-class-coach 를 첨부한 SKILL.md 를 바탕으로 고쳐 줘.
답은 3줄 이내, 끝에 항상 "미리보기에서 확인할 곳" 한 줄. 예시 부탁 5개로 시험해 줘.
```

`가운데 질문 · 세 갈래 · 🅰️ 블루 굵게 · 아래 🅱️용 채팅 말풍선`

🎨 IMAGE PROMPT — Three ways to get a cookbook into a kitchen: a delivery box containing a ready-made blue manual, a friendly writer robot at a desk drafting a new manual with a quill, and a manual tucked into a specific kitchen's own drawer. Arrows from a central question mark lead to each. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — Code 탭에서 계정 스킬이 안 보이면 🅲로 저장소 안에 넣어 두면 그 프로젝트에서는 반드시 읽힙니다.

---

# P29 · 🤖 vibe-class-coach가 하는 일

매핑:
- 💬 **"시작"** ↔ 📜 규칙 읽기 → 📦 설치 → 🔥 서버 → 👀 미리보기 → 최근 commit 3개 요약
- 💬 **"구경시켜 줘"** ↔ ✋ 안 고침 · 구역 ↔ 파일 표 · **분석.md와 다른 곳 3개**
- 💬 **"○○ 고쳐 줘"** ↔ 흐릿하면 되묻기 → 고치기 → 🔍 검사 → 확인할 곳 안내
- 💬 **"저장하고 올려 줘"** ↔ 바뀐 내용 3줄 → 📸 commit → 📤 push → 📱 새로고침 안내
- 💬 **"되돌려 줘"** ↔ ⏪ 안전하게 되돌리기 (강제 ❌)
- 💬 **"규칙 만들어 줘"** ↔ 📜 CLAUDE.md 틀 채우기

`왼쪽 말풍선 6개 ↔ 오른쪽 진행 카드 6개 · 1:1 화살표 · 블루 테마`

🎨 IMAGE PROMPT — a friendly round white robot chef with a terracotta-orange apron and a teal visor face reading a thick blue manual open to a page of simple pictograms, with six speech bubbles floating from the students around it, each connected by a thin line to a different robot action: lighting a stove, pointing at a map, stirring a pot carefully, snapping an instant photo, rewinding a clock, and pinning a note to a fridge. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 학생은 이 여섯 마디만 알면 됩니다. 입력창에 `/vibe-class-coach 시작` 처럼 불러요.

---

# P30 · "고쳐 줘"가 들어오면 — 스킬 속 흐름

갈림길:
💬 **"○○ 고쳐 줘"**
- 🌫️ 흐릿하다 ("예쁘게") → 🙋 **보기 2~3개로 되묻기** → 학생이 고름
- 📏 분명하다 → 파일이 **2개 이상?**
  - 예 → 🔵 **계획 먼저** → 허락
  - 아니요 → ✏️ 고치기
- → 🔍 `npm run build` 검사 → 👀 "미리보기에서 ○○ 확인해 봐 · 휴대폰 폭도!"

`위에서 아래로 내려가는 결정 트리 · 되묻기 칸 머스터드 · 마지막 칸 그린`

🎨 IMAGE PROMPT — A friendly flowchart made of kitchen objects: a speech bubble at the top drops into a sorting funnel; a foggy cloud path leads to a friendly round white robot chef with a terracotta-orange apron and a teal visor face holding up three small sample plates for the student to choose from; a clear path leads to a blueprint check and then to a careful stirring pot, ending at a tasting spoon held up to a window. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "예쁘게 해 줘"라고 해도 스킬이 알아서 "어디를 어떻게?"로 되묻게 되어 있어요. 학생이 부탁 공식을 자연스럽게 배웁니다.

---

# P31 · 🛡️ 스킬에 넣어 둔 안전 규칙

체크:
- ☐ 📂 **프로젝트 폴더 밖**은 읽지도 바꾸지도 않는다
- ☐ 🗑️ 파일 · 폴더 **삭제는 먼저 묻는다**
- ☐ 📤 commit · push는 **"저장해 줘 / 올려 줘"** 할 때만 · `main`에
- ☐ 🔐 첫 push 로그인 창 → **"선생님을 불러 주세요"** 하고 멈춤
- ☐ ⏪ 되돌리기는 안전하게 — **강제 push ❌**
- ☐ 🔒 이름 · 학교 · 비밀번호가 나오면 **쓰지 말라고** 알려 줌

`큰 체크리스트 6줄 · 왼쪽 방패 아이콘 · 블루 테두리`

🎨 IMAGE PROMPT — a friendly round white robot chef with a terracotta-orange apron and a teal visor face standing inside a kitchen with a soft glowing safety fence around the kitchen's boundary, holding a shield-shaped pot lid. Outside the fence, other rooms are dimmed. A small bell on the counter is labeled by an icon of a teacher, ready to be rung. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 학생이 실수로 위험한 부탁을 해도 스킬이 한 번 더 막아 줍니다. 그래도 최종 허락은 사람이 해요.

---

# P32 · 📚 스킬 관리 규칙 5

| # | 규칙 | 왜 |
|:---:|---|---|
| 1 | 수업 스킬은 **1개만** 켜기 | 매뉴얼이 여러 권이면 엉뚱한 걸 꺼내요 |
| 2 | 안 쓰는 **플러그인 스킬은 끄기** | 개발자용 매뉴얼이 끼어들지 않게 |
| 3 | 고치면 **리허설 노트북 1대에서 먼저** 시험 | 모든 팀에 한 번에 퍼지니까 |
| 4 | 팀마다 다른 내용은 **CLAUDE.md** 에 | 스킬 = 반 공통 |
| 5 | 스킬에 **비밀번호 · 키 · 실명 ❌** | 계정 전체에 공유되는 파일 |

`번호 5줄 리스트 · 번호 원 블루 · 1번 굵게`

🎨 IMAGE PROMPT — A tidy kitchen bookshelf with exactly one thick blue manual standing proudly in the center, while several other technical-looking books are neatly boxed away on a lower shelf with a closed lid. A teacher tests a recipe from the manual in one small kitchen before sharing it. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 선생님용 카드입니다. 스킬을 고칠 땐 항상 한 대에서 먼저 시험하세요.

---

# P33 · ✅ 노트북별 최종 점검 (1대당 1분)

체크:
- ☐ 1. Code 탭이 보이고 **수업 계정** 로그인
- ☐ 2. 설정 → 🧠 메모리 **꺼짐**
- ☐ 3. 설정 → 📚 Skills **vibe-class-coach 켜짐**
- ☐ 4. 설정 → `</>` Claude Code: 권한 **매번 묻기** · worktree **끔**
- ☐ 5. 🌐 Chrome · 🔌 커넥터 **연결 없음**
- ☐ 6. 새 세션 → `C:\dev\…` → `/vibe-class-coach 시작` → 👀 미리보기 화면

`큰 체크리스트 6줄 · 6번 그린 굵게 "이게 되면 준비 끝"`

🎨 IMAGE PROMPT — A teacher walking along a row of identical small kitchens with a clipboard, placing a green check sticker on each kitchen door, while in each kitchen a robot chef stands ready next to a lit window showing a tiny shop. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 수업 전날 노트북마다 6번까지 확인하면 수업 당일 막힘이 크게 줄어요.

---

# P34 · 🪜 세팅 5단계 — 학생이 하는 순서

계단:
1️⃣ 🔐 Claude Desktop 열기 → **Code 탭**
2️⃣ 📂 **폴더 선택** `C:\dev\askback-clone-t03` → 신뢰 "예"
3️⃣ 🛡️ 권한 **매번 묻기** 확인
4️⃣ 📜 **CLAUDE.md 만들기** (규칙서)
5️⃣ 🔥 **"설치하고 서버 켜서 미리보기로 보여 줘"** → 🎉

`왼쪽 아래 → 오른쪽 위 5계단 · 2단 머스터드, 4단 머스터드 굵게, 5단 그린`

🎨 IMAGE PROMPT — A five-step staircase rising from bottom-left to top-right inside the kitchen: a door opening, a brass key in a lock, a traffic light set to red, a fridge with a note being pinned, and at the top a lit stove with a window showing a tiny shop. the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron climb together with a friendly round white robot chef with a terracotta-orange apron and a teal visor face following behind. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 2번(폴더)과 4번(규칙서)이 가장 중요합니다. 여기만 정확하면 나머지는 AI가 해요.

---

# P35 · 📂 폴더 선택 = 열쇠 주기

비교:
| ❌ 집 전체 열쇠 | ⭕ 우리 주방 열쇠 하나 |
|---|---|
| `C:\` · 바탕화면 · 문서 | **`C:\dev\askback-clone-t03`** |
| `C:\dev` (다른 팀 폴더까지 보임) | 안에 `package.json` · `app` · `data` 가 보임 |
| AI가 엉뚱한 곳을 읽고 고침 | AI는 **이 폴더 안에서만** 일함 |

`2열 비교 · 왼쪽 큰 열쇠 꾸러미(코랄), 오른쪽 열쇠 하나(틸)`

🎨 IMAGE PROMPT — A split scene. Left: a student nervously handing a friendly round white robot chef with a terracotta-orange apron and a teal visor face a giant ring with dozens of keys to every room in a house. Right: the student calmly handing the robot one single brass key with a small folder-shaped tag, and the robot stepping into one bright kitchen. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 새 세션의 **폴더 선택** 창 (저장소 폴더를 고른 상태) · "이 폴더를 신뢰하나요?" 창

🗣️ 노트 — "폴더 = AI가 일할 수 있는 범위"예요. 집 전체 열쇠를 주면 안 돼요.

---

# P36 · 🚦 권한 모드 = 주방 신호등

신호등:
- 🔴 **매번 묻기** — 고치기 · 명령 전마다 허락 → ✅ **수업 기본**
- 🟡 **수정 자동 허락** — 파일 수정은 바로, 명령은 물음 → 익숙해지면
- 🔵 **계획 모드** — 아무것도 안 바꾸고 계획만 → 큰 일 전에
- ⚫ **묻지 않고 전부** — ❌ **사용 금지**

> 🧑‍⚖️ 바이브 코딩에서 **허락 버튼 = 우리의 일**

`세로 신호등 모양 · 빨강 칸 가장 크게 · 검정 칸에 금지 표시`

🎨 IMAGE PROMPT — A big friendly traffic light mounted on a kitchen wall with four lamps from top to bottom: red glowing brightly, yellow, blue, and a black lamp covered with a red prohibition sign. a friendly round white robot chef with a terracotta-orange apron and a teal visor face waits politely at the red light holding a salt shaker, looking at the students for permission. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 입력창 아래 **권한 모드 선택** 메뉴를 펼친 화면

🗣️ 노트 — "요리사가 소금 넣기 전에 매번 물어보면 귀찮죠? 그런데 오늘은 그게 맞아요. 무엇이 바뀌는지 우리가 알아야 하니까요."

---

# P37 · 📜 CLAUDE.md = 냉장고에 붙은 주방 규칙

순환:
1. 🆕 **새 대화 시작**
2. 📜 **CLAUDE.md 자동으로 읽기** (규칙 · 폴더 지도 · 금지)
3. 📐 필요하면 **분석.md** 읽기 (설계도)
4. 💬 **우리 부탁** 처리
5. 🔁 같은 실수 반복? → **규칙 한 줄 추가** → 다시 1로

> 매번 같은 말을 반복하지 않아도 돼요 = **규칙서는 자란다** 🌱

`원형 5칸 사이클 · 2번 칸 머스터드 크게 · 5번 칸에 새싹 아이콘`

🎨 IMAGE PROMPT — a friendly round white robot chef with a terracotta-orange apron and a teal visor face arriving at the kitchen in the morning and first stopping at the fridge door to read a note held by a mustard magnet, then picking up a blueprint, then cooking. A circular arrow of spoons wraps around the scene, and a student adds one more line to the fridge note with a marker. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 회사 개발팀도 이렇게 규칙서를 키웁니다. AI가 실수할 때마다 화내지 말고 규칙을 한 줄 추가!

---

# P38 · 📜 CLAUDE.md 틀 — 5칸

구조도:
📜 **CLAUDE.md — 우리 프로젝트 작업 규칙**
- 1️⃣ **이 프로젝트는** — 교육용 클론 · 서비스 이름 · 프론트만 · 설계도 = 분석.md
- 2️⃣ **폴더 지도** — data · lib/repo.ts · app/p/[id] · components
- 3️⃣ **꼭 지킬 것** — 한 번에 하나 · 서버·로그인·키 ❌ · 고친 뒤 build · push는 말할 때만
- 4️⃣ **디자인** — 남색 우주 · 노랑 강조 · 모서리 16px · 휴대폰
- 5️⃣ **강조 순위** — 🙋 되물음 → 🪜 5단계 → 결론 첫 줄

```text
분석.md 와 이 폴더를 읽고 CLAUDE.md 를 만들어 줘. 틀을 그대로 쓰고 ____ 칸과 폴더 지도는 실제 폴더를 보고 채워 줘. 다른 파일은 바꾸지 마.
```

`큰 메모지 모양 상자 안에 5칸 · 3번 칸 머스터드 굵게 · 아래 채팅 말풍선`

🎨 IMAGE PROMPT — A close-up of a large fridge door with one tall note held by a mustard magnet, the note divided into five sections marked only by small icons: a house, a map, a shield, a paint palette, and a star. the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron point at the shield section while a friendly round white robot chef with a terracotta-orange apron and a teal visor face nods. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 전체 틀은 원본 문서 3-2 ④에 있습니다. 또는 `/vibe-class-coach 규칙 만들어 줘` 한 마디로도 됩니다.

---

# P39 · 🔥 명령어 대신 한 마디 — 설치 · 서버 · 미리보기

```text
/vibe-class-coach 시작
(또는) 필요한 것을 설치하고 개발 서버를 켜서 오른쪽 미리보기 창에 보여 줘.
```

단계도:
💬 부탁 → 🛡️ "npm install 해도 돼요?" ✅ → 📦 재료 배달 (1~3분) → 🛡️ "미리보기 설정 · 서버 켜도 돼요?" ✅ → 👀 **앱 안에 클론 화면!** 🎉

| 허락 창 | 허락? |
|---|:---:|
| `npm install` · `.claude/launch.json` · `npm run dev` | ✅ |
| 모르는 주소 · `rm` · `del` · 폴더 밖 경로 | ❌ → 🙋 |

`위 채팅 말풍선 · 가운데 가로 흐름(허락 칸 2개 테라코타) · 아래 작은 표`

🎨 IMAGE PROMPT — A sequence in the kitchen: a student speaks into a speaking tube, a friendly round white robot chef with a terracotta-orange apron and a teal visor face raises a hand asking permission holding a delivery box, the student gives a thumbs-up, a scooter unloads ingredients, the robot lights the stove, and a small window on the workstation glows with a tiny shop scene. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 미리보기 패널에 클론 화면이 뜬 순간

🗣️ 노트 — "여기까지 오면 개발실 완성!" 1교시에 직접 쳤던 npm 명령을 이제 AI가 허락받고 대신 해 줍니다.

---

# P40 · 🔍 첫 부탁은 "구경만"

```text
이 프로젝트를 초등학생도 알게 설명해 줘.
1) 6구역은 각각 어느 파일에 있어?  2) 데이터는 어디서 와?
3) 미리보기 화면과 분석.md 를 비교해서 다른 곳 3개를 목록으로만 알려 줘.
아직 아무것도 고치지 마.
```

단계도:
👀 구경 → 🗺️ 구역 ↔ 파일 지도 → 📋 **다른 곳 3개 = 오늘의 할 일 목록** → 🔁 ④ 다듬기 재료

`위 큰 채팅 말풍선 · 아래 3칸 흐름 · 마지막 칸 머스터드`

🎨 IMAGE PROMPT — a friendly round white robot chef with a terracotta-orange apron and a teal visor face giving a kitchen tour to the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron, pointing with a ladle at different stations, holding a clipboard with a short three-item checklist drawn as simple icons. No one is cooking yet; all pots are empty and clean. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 새 요리사에게 주방 구경부터 시키는 것처럼, AI가 무엇을 이해했는지 먼저 확인해야 엉뚱하게 고치지 않아요.

---

# P41 · 📘 세션 시작 의식 — 매번 30초

단계도:
＋ **새 세션** → 📂 **폴더** 우리 저장소? → 🛡️ **매번 묻기**? → 💬 `/vibe-class-coach 시작` → 👀 **미리보기 화면 ✅**

| 잘못되면 | 이렇게 |
|---|---|
| 다른 팀 폴더 | 세션 닫고 다시 |
| 권한이 다른 모드 | 입력창 아래에서 바꾸기 |
| 미리보기가 빈 화면 | `개발 서버 로그를 보고 왜 안 나오는지 알려 줘.` |

`가로 5칸 체크 흐름 · 각 칸에 작은 체크박스 · 마지막 칸 그린`

🎨 IMAGE PROMPT — A morning routine in the kitchen shown as five small panels: opening a new notebook, checking the key on the door, checking the red traffic light, saying hello to a friendly round white robot chef with a terracotta-orange apron and a teal visor face through the speaking tube, and the workstation window lighting up with a tiny shop. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 운동 전 스트레칭처럼, 매 세션 시작 때 이 순서를 반복하면 사고가 거의 없어요.

---

# P42 · ⌨️ 입력창 도구 5가지

매핑:
- `/` **슬래시** ↔ 📚 매뉴얼 펼치기 → `/vibe-class-coach 저장하고 올려 줘`
- `@` **파일 지목** ↔ 👉 "이 벽이요!" → `@components/StageCards.tsx 화살표만 키워 줘`
- 📎 **스크린샷** ↔ 📸 사진 보여 주며 설명 → `빨간 동그라미 친 곳이 잘려. 고쳐 줘.`
- ⏹ **멈춤 · Esc** ↔ 🛑 "스톱!" → `잠깐, ○○만 고쳐 줘`
- 🛡️ **권한 모드** ↔ 🚦 신호 바꾸기 → 큰 일 전 계획 모드

> 💡 **`@` 와 스크린샷이 가장 강력** — "어디"를 정확히!

`왼쪽 도구 기호 5개(크게) ↔ 오른쪽 비유 + 예시 · @ 와 📎 줄 테라코타 강조`

🎨 IMAGE PROMPT — Five kitchen gestures toward a friendly round white robot chef with a terracotta-orange apron and a teal visor face: a student opening a thick blue manual, a student pointing a finger directly at one specific cabinet, a student holding up an instant photo with a red circle drawn on it, a student raising a hand in a stop gesture, and a student turning a traffic light dial. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 입력창에 `/` 를 쳤을 때 목록 · `@` 를 쳤을 때 파일 목록

🗣️ 노트 — 부탁 공식의 [어디]를 말로 설명하기 어려우면 `@` 로 파일을 찍거나 스크린샷을 붙이세요.

---

# P43 · 🛡️ 허락 창 3초 체크

갈림길:
🛡️ **허락 창이 떴다!**
- ① **무엇을?** 파일 수정 / 명령 실행
- ② **어디를?** 우리 폴더 안 · 부탁한 파일? → 아니요 → ❌ **거절** + "○○만 바꿔 줘"
- ③ **얼마나?** 빨강/초록이 부탁한 만큼? → 너무 많다 → ❓ "왜 이렇게 많이 바꿔? 쉽게 설명해 줘"
- 모두 OK → ✅ **허락**

| 버튼 | 수업에서 |
|---|---|
| 허락 (이번만) | ✅ 기본 |
| 이 세션 동안 계속 허락 | `npm run build` · `npm run dev` 같은 안전한 명령만 |
| 거절 | 이상하면 망설이지 말고 |

`위 3단 결정 흐름(①②③) · 거절 칸 코랄, 허락 칸 그린 · 아래 작은 표`

🎨 IMAGE PROMPT — a friendly round white robot chef with a terracotta-orange apron and a teal visor face holding up a small permission card with a dish preview drawing, while the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron inspect it together with a magnifying glass; one student holds a green paddle, another a red paddle, the third a question-mark paddle. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

📸 캡처 — 실제 **허락 창** (파일 수정 1장 · 명령 실행 1장)

🗣️ 노트 — 허락 창을 안 읽고 연속 클릭하는 것 = 지휘자가 악보를 안 보는 것. 팀이 함께 3초!

---

# P44 · 🪟 오른쪽 패널 + 🙅 하지 않을 것

| 패널 | 언제 | 확인 |
|---|---|---|
| 👀 미리보기 | 고친 직후 매번 | 바뀐 곳 · **다른 곳 안 깨졌나** · 좁은 폭 |
| 🔍 바뀐 내용 | 저장 **전** | 부탁한 파일만? |
| ⌨️ 터미널 | 빈 화면 · 에러 | 빨간 글씨 → Claude에게 |

비교:
| ❌ 하지 않을 것 | ⭕ 대신 |
|---|---|
| 한 세션에서 하루 종일 | 큰 일 끝 + 저장 → **새 세션** |
| "다 알아서 해 줘" | 부탁 공식 · 한 번에 하나 |
| 대화창에 이름 · 학교 · 비밀번호 | 가짜 이름 · 예시 데이터 |

`위 3패널 아이콘 표 · 아래 2열 비교(코랄/틸)`

🎨 IMAGE PROMPT — The robot workstation's right side with three features highlighted: a window showing a tiny shop, a receipt printer printing a red and green striped receipt, and a small speaker grille. Below, a student gently puts away an overly long scroll of conversation into a drawer and opens a fresh notebook. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 대화가 길어지면 AI가 앞부분을 헷갈려요. 규칙은 CLAUDE.md에 남아 있으니 새 세션을 두려워하지 마세요.

---

# P45 · ④ 다듬기 루프 — 조금씩, 한 번에 하나

순환:
1. 💬 **말하기** — 하나만 부탁 (🎩 기획자)
2. 🛡️ **허락** — 계획 · 바뀐 내용 읽기 (🎩 탐정)
3. 👀 **확인** — 미리보기 · 휴대폰 폭 (🎩 실행자)
4. 💾 **저장** — "저장하고 올려 줘" (모두 동의)
5. 🚀 **자동 배포** — 📱 가게 새로고침 → 다시 1로

> 😵 이상하면? → ⏪ `방금 바꾼 거 되돌려 줘.` → 다시 1로

`섹션 구분 겸 큰 원형 5칸 사이클 · 숫자 ④ · 각 칸에 팀 역할 모자 아이콘`

🎨 IMAGE PROMPT — A circular kitchen workflow drawn as a round table: the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron sit around it with role hats (a planner's beret, a detective's cap, a tester's headband), a friendly round white robot chef with a terracotta-orange apron and a teal visor face in the center turning a lazy Susan that carries a speech bubble, a permission card, a tasting spoon, an instant photo, and a tiny shop model in a loop. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 팀원 세 명이 역할을 나눠 루프를 돕니다. 한 바퀴 = 3~4분이 목표.

---

# P46 · 💬 부탁 공식

> **"[어디]의 [무엇]이 지금 [이래]. [이렇게] 바꿔 줘. 다른 건 바꾸지 마."**

비교:
| ❌ 흐릿한 부탁 | ⭕ 공식 부탁 |
|---|---|
| 더 예쁘게 해 줘 | **5단계 카드**의 **화살표**가 **너무 작아**. **2배 크게, 노란색**으로. 다른 건 바꾸지 마. |
| 되물음 강조해 줘 | **답 카드**의 **"하나만 되물을게"**가 **다른 글과 같아 보여**. **노란 왼쪽 띠 + 연노랑 배경 + 큰 글씨**로. |
| 휴대폰 고쳐 줘 | **폭 375px**일 때 **5단계 카드**가 **잘려**. **카드 줄만 가로 스크롤**로. |

`맨 위 공식을 큰 빈칸 채우기 카드로(4칸 색 구분) · 아래 2열 비교`

🎨 IMAGE PROMPT — A fill-in-the-blank order ticket pinned on the kitchen order rail with four colored empty slots, and two sample plates below: on the left a vague blurry plate with a question mark steam, on the right a precise plate with a clearly marked garnish exactly where a student points. a friendly round white robot chef with a terracotta-orange apron and a teal visor face smiles at the precise one. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 공식의 네 칸 = 어디 · 무엇 · 지금 · 바꿀 모습. 마지막 "다른 건 바꾸지 마"는 매번 붙여요.

---

# P47 · 📋 다듬기 메뉴판 + 🔵 계획 모드

계단:
⭐ **제목 · 알림 문구 바꾸기** (데이터 · 글자)
⭐⭐ **되물음 강조 · 화살표 키우기 · 휴대폰 가로 스크롤**
⭐⭐ **우리 팀 아이템으로 질문 · 답 1개 추가**
⭐⭐⭐ **입력창 데모 답 카드** → 🔵 **계획 모드 먼저!**

```text
입력창에 글을 보내면 타임라인 맨 아래에 질문 카드, 1초 뒤 "🤖 (데모) 좋은 질문이야!" 답 카드가 나오게 하고 싶어. 저장은 안 해. 계획만 먼저 보여 줘.
```
→ 계획 OK → 🔴 매번 묻기로 돌아와 `계획대로 해 줘.`

`왼쪽 아래 → 오른쪽 위 4계단 (별 개수) · 마지막 계단 파랑 · 아래 채팅 말풍선`

🎨 IMAGE PROMPT — A kitchen menu board shaped like a staircase with four steps, decorated with one, two, two, and three little stars. On the top step, a friendly round white robot chef with a terracotta-orange apron and a teal visor face unrolls a blue blueprint for the students to approve before cooking, while a traffic light beside it glows blue. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 파일 2개 이상이 바뀔 것 같은 큰 일 = 계획 모드. 벽을 허물기 전에 설계도부터!

---

# P48 · 💾 저장하고 올리기 → 가게가 저절로

```text
/vibe-class-coach 저장하고 올려 줘
(또는) 바뀐 파일과 내용을 3줄로 보여 주고, 한 일을 알 수 있는 한국어 메시지로 commit · push 해 줘.
```

단계도:
🤖 바뀐 내용 3줄 → 📸 commit "되물음 카드 강조" → 📤 push → 🏦 GitHub → 🔔 → 🚀 Vercel 검사 · 출고 → 📱 **새로고침 → 바뀜!**

| 확인 | 어디서 |
|---|---|
| 새 commit 메시지 | github.com · 🏧 History |
| **Ready** 🟢 | vercel.com Deployments |
| 📱 바뀐 화면 | ○○.vercel.app |

> 🔴 Error면? 가게는 **예전 그대로 안전** → 로그 빨간 줄 복사 → `쉽게 설명하고 고쳐 줘`

`위 채팅 말풍선 · 가운데 긴 가로 흐름(마지막 칸 그린 굵게) · 아래 작은 확인표`

🎨 IMAGE PROMPT — a friendly round white robot chef with a terracotta-orange apron and a teal visor face snapping an instant photo of a finished dish, dropping the photo into a pneumatic tube that leads to a navy wall vault, a bell ringing, a green conveyor belt carrying the dish out to a street shop whose window display updates, and a student outside holding a smartphone cheering. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "오늘의 모든 퍼즐이 맞춰지는 순간!" 휴대폰 새로고침을 팀 모두가 함께 보게 하세요.

---

# P49 · 🏠 프롬프트 3층 집 — 전체 프롬프트를 어떻게 가져가나

층:
- 🧱 **1층 · 늘 그대로 — 📜 CLAUDE.md** (규칙 · 폴더 지도 · 금지 · 디자인) → 대화마다 자동으로 읽힘 · 같은 실수 반복 시 추가
- 📐 **2층 · 설계도 — 분석.md** (구역 · 흐름 · 데이터) → v0 · Claude 모두에게 같은 설계도
- 💬 **3층 · 그때그때 — 한 번의 부탁** (부탁 공식) → 짧게 · 하나만 · 매번

단계도:
📐 분석.md → 🎨 v0 주문 ①②③ → 🔘 버튼 4번 → 📜 CLAUDE.md → 🔥 시작 → 👀 구경 → 🔁 **부탁 × N** → 💾 저장 · 올리기 ↺

> 📚 **스킬(vibe-class-coach)** 은 이 집 전체를 감싸는 **본사 매뉴얼**

`왼쪽 3층 건물 다이어그램(1층 머스터드 가장 넓게) · 오른쪽 세로 흐름 · 건물 바깥을 블루 점선으로 감싸기`

🎨 IMAGE PROMPT — A cute three-story house cross-section: the ground floor is a sturdy kitchen with a fridge note held by a mustard magnet, the second floor is a study room with a large blueprint on the wall, the top floor is a small balcony where a student speaks one short sentence through a speaking tube down to a friendly round white robot chef with a terracotta-orange apron and a teal visor face. A soft blue dotted bubble shaped like an open manual wraps around the whole house. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — 프롬프트를 매번 길게 쓰는 게 아니에요. 변하지 않는 건 파일에 한 번(1·2층), 그때그때 바뀌는 것만 짧게(3층). 스킬은 반 전체의 공통 매뉴얼로 이 집을 감싸요.

---

# P50 · 🪞 닫기 — 오늘 우리가 만든 개발실

단계도:
🎨 v0 뼈대 → 🔘 GitHub 버튼 → 🤖 Claude Desktop + 📜 + 📚 → 🔁 말 → 확인 → 저장 → 🚀 가게

체크:
- ☐ 💾 `/vibe-class-coach 저장하고 올려 줘`
- ☐ 📜 `오늘 한 일 3줄 + 다음 할 일 3개를 CLAUDE.md 맨 아래에 적어 줘.`
- ☐ 🔥 `개발 서버 꺼 줘.` → 세션 닫기
- ☐ 🪞 회고 한 줄 — **"바이브 코딩에서 사람이 하는 일은 ____ 이다"**

`위 가로 흐름(Claude 칸 테라코타 굵게) · 아래 체크리스트 4줄 · 마지막 줄 큰 빈칸`

🎨 IMAGE PROMPT — the same team of three Korean students: a girl with a short bob and a yellow hoodie, a boy with round glasses and a teal t-shirt, and a girl with a high ponytail and a navy apron and a friendly round white robot chef with a terracotta-orange apron and a teal visor face standing proudly together in the finished home kitchen at the end of the day: a rule note on the fridge, a blue manual on the shelf, the workstation window showing a busy little shop, and a small notebook open with three simple icons for tomorrow. The students give a high-five while the robot turns off the stove. friendly flat vector illustration, warm storybook feel, cozy kitchen-workshop metaphor, Korean students aged 11 to 14, rounded shapes, thick soft outlines, navy teal coral palette with mustard yellow accent on cream background, gentle shadows, no text, no letters, no numbers, no logos, no brand marks, 16:9

🗣️ 노트 — "오늘 여러분은 코드를 한 줄도 직접 안 썼어요. 대신 설계도를 그리고, 규칙서를 쓰고, 하나씩 부탁하고, 허락하고, 눈으로 확인했어요. 다음 시간엔 폴더 열고 `/vibe-class-coach 시작` 한 마디면 바로 이어서 시작이에요."
