export const introHeadline =
  "\"사용자의 불편을 데이터로 증명하고, AI로 실행 속도를 끌어올려 서비스로 완성합니다.\"";

export const introText: string[] = [
  "5년차 서비스 기획자로 모바일 앱, PC 웹, TV OS, 차량 내비게이션까지 다양한 디바이스를 넘나들며 서비스를 기획해왔습니다. 디바이스마다 사용자의 사용 맥락과 기술적 제약이 다르다는 것을 직접 부딪히며 익혔고, 그 차이를 이해하고 각 환경에 맞는 최적의 흐름을 설계하는 역량을 쌓았습니다.",
  "정해진 요구사항과 제약 안에서 답을 찾는 과정을 즐기고, '사용자라면 이 서비스에서 무엇을 기대할까'를 끊임없이 고민합니다. 제약이 명확할수록 오히려 더 좋은 답을 찾을 수 있다고 믿으며, 그 물음에 답하기 위해 데이터와 사용자의 목소리를 함께 살펴보는 것을 즐깁니다.",
  "최근에는 AI를 기획 전 과정에 끌어들이는 데 집중하고 있습니다. 기능명세서를 매개로 앱-어드민 기획을 자동으로 연결하거나, Figma Make·ChatGPT·Claude로 IA 도출과 화면설계 시간을 절반 가까이 줄이는 방식으로 실행 속도를 끌어올리고 있습니다.",
];

export const introHighlights: string[] = [
  "아이나비 스탬프-오르다에서 오픈 직후 5.7배 급증한 걸음수 VOC의 원인을 진단부터 검증까지 리드해, 삼성헬스/애플건강 연동으로 누적 88.7% 절감시켰습니다.",
  "앱 기획과 어드민 기획을 동시에 맡으며 기능명세서 기반 AI 파이프라인을 설계해, 어드민 기획 소요 시간을 3주에서 1.5주로 약 50% 단축했습니다.",
  "토요타 내비게이션 기획을 담당하며 사용성 테스트 결과를 반영해 2026년 6월 토요타 라브4 차량에 실제 탑재·출시했습니다.",
  "숙명여자대학교 IT공학부와 공동연구하는 국가 R&D 과제 '오르다AI'에서 등산 안전 서비스 기획을 총괄하고 있습니다.",
];

export const contactEmail = "prinrusia031226@gmail.com";
export const contactPhone = "010-9567-7801";

export interface StrongPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HowIWork {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhatILove {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const strongPoints: StrongPoint[] = [
  {
    id: "sp1",
    icon: "📊",
    title: "VOC 기반 문제 해결",
    description: "실사용자 VOC를 유형별로 분석해 근본 원인을 진단하고, 아이나비 스탬프 프로젝트에서 VOC를 88.7% 절감했습니다",
  },
  {
    id: "sp2",
    icon: "🗺️",
    title: "전 과정 기획 리드",
    description: "요구사항 정의부터 IA·화면설계·프로토타이핑·QA·배포까지 기획 전 과정을 리드한 경험",
  },
  {
    id: "sp3",
    icon: "🤖",
    title: "AI 활용 업무 효율화",
    description: "Figma Make·ChatGPT·Claude를 활용해 IA 도출과 화면설계 시간을 40~50% 단축하는 AI 기획 파이프라인을 구축",
  },
  {
    id: "sp4",
    icon: "🌐",
    title: "폭넓은 도메인 경험",
    description: "B2C 모바일 앱, TV 앱, Admin, 완성차 인포테인먼트, 공공 스마트도시 서비스까지 다양한 도메인에서 기획",
  },
  {
    id: "sp5",
    icon: "🤝",
    title: "이해관계자 협업",
    description: "KT, LG U+, 토요타/렉서스, 숙명여대 AI공학부, 지자체 등 다양한 파트너와 협업하며 서비스를 실제 출시",
  },
  {
    id: "sp6",
    icon: "🎯",
    title: "사용자 리서치 & 테스트",
    description: "사용자 인터뷰와 Hi-fi 프로토타입 기반 사용성 테스트를 반복하며 제작자가 아닌 사용자를 위한 서비스를 설계",
  },
];

export const howIWork: HowIWork[] = [
  {
    id: "hw1",
    icon: "❤️",
    title: "공감(Empathize)",
    description: "사용자 인터뷰, 사용자 환경 체험, VOC 분석을 통해 사용자의 이야기에 먼저 집중합니다.",
  },
  {
    id: "hw2",
    icon: "🔍",
    title: "문제 정의(Define)",
    description: "제작자가 아닌 사용자의 관점에서 진짜 풀어야 할 문제를 명확히 합니다.",
  },
  {
    id: "hw3",
    icon: "💡",
    title: "아이디어 도출(Ideate)",
    description: "AI 도구와 협업 툴을 활용해 다양한 개선 방안을 빠르게 도출합니다.",
  },
  {
    id: "hw4",
    icon: "🖼️",
    title: "프로토타이핑(Prototype)",
    description: "Figma, Sketch, Adobe XD로 Hi-fi 프로토타입을 제작해 아이디어를 눈에 보이게 만듭니다.",
  },
  {
    id: "hw5",
    icon: "🔄",
    title: "테스트(Test)",
    description: "사용성 테스트와 VOC 모니터링을 반복하며 검증하고 개선합니다.",
  },
];

export const whatILove: WhatILove[] = [
  {
    id: "wl1",
    icon: "📚",
    title: "읽기와 쓰기",
    description: "새로운 개념을 흡수하고 내 언어로 재구성하는 과정을 즐깁니다.",
  },
  {
    id: "wl2",
    icon: "🎵",
    title: "음악",
    description: "장르를 가리지 않고 음악을 들으며 생각을 정리합니다.",
  },
  {
    id: "wl3",
    icon: "🏃",
    title: "러닝",
    description: "아이디어의 절반은 달리면서 나옵니다.",
  },
  {
    id: "wl4",
    icon: "🌏",
    title: "여행과 관찰",
    description: "낯선 환경에서 새로운 시각을 얻고, 이를 제품 기획에 녹여냅니다.",
  },
];

export const experienceList: string[] = [
  "AI 기획 파이프라인 구축 경험 (Figma Make, ChatGPT, Claude, Gemini 활용)",
  "0→1 신규 서비스 기획 경험 (오르다AI 국책 R&D 과제, 아이나비 스탬프-오르다)",
  "B2C 모바일 앱, TV 앱(Android), Admin, 완성차 인포테인먼트까지 다양한 플랫폼 경험",
  "KT, LG U+, 토요타/렉서스, 지자체 등 다양한 파트너와의 협업 경험",
  "VOC 분석·사용성 테스트 기반 데이터 드리븐 개선 (VOC 88.7% 절감 등 정량 성과)",
  "SQLD·ADSP·정보처리기사 보유, 데이터 기반 의사결정 역량",
];
