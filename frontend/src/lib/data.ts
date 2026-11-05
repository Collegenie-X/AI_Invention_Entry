export type Role = "coach" | "me";

export interface Message {
  role: Role;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  idea: string;
  answers: string[];
  messages: Message[];
  createdAt: number;
  updatedAt: number;
  example?: boolean;
}

export interface Question {
  stage: string;
  text: string;
  hint: string;
}

/** 10개의 열린 질문: 발견 → 확장 → 착륙 */
export const QUESTIONS: Question[] = [
  { stage: "발견", text: "이 아이디어가 해결하려는 불편은 무엇일까?", hint: "정답은 없어. 지금 떠오르는 생각을 편하게 적어봐." },
  { stage: "발견", text: "누가 가장 먼저 이 서비스를 사용할까?", hint: "떠오르는 한 사람을 구체적으로 상상해봐." },
  { stage: "발견", text: "그 사람은 언제, 어디서 이 불편을 느낄까?", hint: "하루 중 한 장면을 떠올려봐." },
  { stage: "발견", text: "비슷한 문제를 지금은 어떻게 해결하고 있을까?", hint: "앱, 사람, 종이… 어떤 방법이든 좋아." },
  { stage: "확장", text: "지금 방법의 가장 아쉬운 점은 뭘까?", hint: "불편, 시간, 비용, 마음… 어떤 점이든." },
  { stage: "확장", text: "네 아이디어가 다른 방법과 가장 다른 점은?", hint: "딱 하나만 고른다면?" },
  { stage: "확장", text: "이 아이디어가 잘 되면, 사용자의 하루는 어떻게 달라질까?", hint: "전과 후를 비교해봐." },
  { stage: "착륙", text: "이 아이디어만의 가장 작은 시작은 무엇일까?", hint: "이번 주에 해볼 수 있는 크기로." },
  { stage: "착륙", text: "만들려면 어떤 정보나 도구가 필요할까?", hint: "데이터, 센서, 사람, 앱… 떠오르는 대로." },
  { stage: "착륙", text: "이 아이디어를 한 문장으로 소개한다면?", hint: "친구에게 10초 안에 설명한다고 생각해봐." },
];

export const TOTAL = QUESTIONS.length;

export const DONE_MESSAGE =
  "10개의 질문을 모두 탐험했어! 🎉 네 아이디어가 설계도로 착륙했어. 기획 리포트를 열어서 확인해봐.";


export function progressOf(p: Pick<Project, "answers">) {
  return Math.round((p.answers.filter(Boolean).length / TOTAL) * 100);
}

export function currentIndex(p: Pick<Project, "answers">) {
  const i = p.answers.findIndex((a) => !a);
  return i === -1 ? (p.answers.length < TOTAL ? p.answers.length : TOTAL) : i;
}

export function buildMessages(answers: string[], idea: string): Message[] {
  const msgs: Message[] = [
    { role: "coach", text: `좋아, "${idea}"(으)로 우주 탐험을 시작해보자.` },
  ];
  answers.forEach((a, i) => {
    msgs.push({ role: "coach", text: QUESTIONS[i].text });
    msgs.push({ role: "me", text: a });
  });
  if (answers.length < TOTAL) msgs.push({ role: "coach", text: QUESTIONS[answers.length].text });
  else msgs.push({ role: "coach", text: DONE_MESSAGE });
  return msgs;
}

function seed(id: string, title: string, idea: string, answers: string[], example = false): Project {
  const t = Date.UTC(2026, 10, 5);
  return { id, title, idea, answers, messages: buildMessages(answers, idea), createdAt: t, updatedAt: t, example };
}

export const SEED_PROJECTS: Project[] = [
  seed("prj-alergy", "급식 알레르기 앱", "급식에 내가 못 먹는 재료가 있는지 바로 알려주는 앱", [
    "급식 메뉴를 보고도 어떤 재료가 들어갔는지 바로 알기 어려운 친구들이 있어. 알레르기가 있으면 매일 확인하는 일이 꽤 불안해.",
    "땅콩·우유 알레르기가 있는 중학생, 그리고 그 친구의 부모님.",
    "아침 등교 전이나 점심 줄 서기 직전에.",
    "학교 홈페이지 식단표를 보거나 영양 선생님께 직접 물어봐.",
    "정보가 흩어져 있어 매일 확인하는 데 시간이 걸리고, 매번 물어보는 게 부담스러워.",
    "내 알레르기만 골라서, 위험한 메뉴에 빨간 표시를 해줘.",
    "아침에 알림 하나만 확인하면 안심하고 점심을 먹을 수 있어.",
  ]),
  seed("prj-bag", "가방 무게 알림", "가방이 너무 무거우면 알려주는 스마트 가방끈", [
    "교과서를 다 넣고 다니다 보니 어깨랑 허리가 아파.",
    "초등학교 고학년과 중학생.",
    "등굣길이나 학원 가는 길에.",
  ]),
  seed("example-1", "스마트 화분", "흙이 마르면 물 줄 때를 알려주는 화분", [
    "화분을 키우는데 물 주는 때를 자꾸 잊어서 식물이 시들어.",
    "식물을 처음 키우는 학생, 교실 화분 당번.",
    "주말이나 방학처럼 교실을 비울 때.",
    "달력에 적어두거나 그냥 감으로 줘.",
    "감으로 주다 보니 너무 많이 주거나 너무 적게 줘.",
    "흙의 습도를 직접 재서 딱 필요할 때만 알려줘.",
    "식물이 건강해지고, 당번이 바뀌어도 걱정 없어.",
    "토양 습도 센서와 LED 하나로 '목말라요' 신호 만들기.",
    "아두이노, 토양 습도 센서, LED, 작은 화분.",
    "목마를 때 스스로 말해주는 똑똑한 화분.",
  ], true),
  seed("example-2", "거북목 감시 웹캠", "공부할 때 자세가 무너지면 알려주는 웹캠 앱", [
    "공부하다 보면 나도 모르게 목이 앞으로 쭉 나와 있어.",
    "하루에 몇 시간씩 책상에 앉아있는 수험생.",
    "밤늦게 집중해서 공부할 때.",
    "가끔 스트레칭 영상을 보거나 거울을 봐.",
    "집중하고 있을 땐 자세를 신경 쓸 여유가 없어.",
    "웹캠이 자세를 보고 있다가 조용히 알려줘.",
    "공부가 끝나도 목과 어깨가 덜 뻐근해.",
    "노트북 웹캠으로 얼굴 위치를 재서 너무 가까우면 소리 내기.",
    "웹캠, 자세 인식 AI 모델, 브라우저.",
    "공부하는 동안 내 목을 지켜주는 조용한 코치.",
  ], true),
  seed("example-3", "위험 등굣길 지도", "친구들이 위험했던 장소를 함께 표시하는 지도", [
    "등굣길에 차가 갑자기 튀어나오는 골목이 있어서 무서워.",
    "걸어서 등교하는 초등학생과 학부모.",
    "비 오는 날 아침이나 어두운 겨울 하굣길.",
    "어른들이 말로 '거기 조심해'라고 알려줘.",
    "정보가 기록되지 않아서 새로 온 친구는 몰라.",
    "학생들이 직접 위험한 곳을 지도에 핀으로 남겨.",
    "모두가 더 안전한 길을 골라서 다닐 수 있어.",
    "우리 반 친구들과 종이 지도에 위험 장소 스티커 붙이기.",
    "지도 앱, 사진, 친구들의 경험담.",
    "우리가 함께 만드는 안전한 등굣길 지도.",
  ], true),
];

export const COACH_CHEERS = [
  "좋은 생각이야! 거기서 한 걸음 더 들어가 볼까?",
  "오, 그 부분이 핵심이 될 수도 있겠다.",
  "구체적이라서 좋아. 아이디어가 조금 더 선명해졌어.",
  "그 장면이 머릿속에 그려져. 다음 궤도로 가보자.",
  "멋진 관찰이야. 이게 설계도의 한 조각이 될 거야.",
];

