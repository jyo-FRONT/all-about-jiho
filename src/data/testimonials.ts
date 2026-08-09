export interface TestimonialItem {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  text: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "홍길동",
    company: "Company A",
    role: "Engineering Lead",
    avatar: "H",
    text: "함께 일하면서 가장 인상 깊었던 점은 복잡한 문제를 명확하게 구조화하는 능력이었습니다. 개발팀과의 소통에서도 항상 명확한 기준을 제시해주어 협업이 매우 수월했습니다.",
  },
  {
    id: "t2",
    name: "김철수",
    company: "Company B",
    role: "Head of Design",
    avatar: "K",
    text: "사용자 중심 사고와 데이터 기반 의사결정을 균형 있게 갖춘 PM입니다. 디자인팀과의 협업에서도 항상 비즈니스 맥락을 잘 설명해주어 올바른 방향으로 일할 수 있었습니다.",
  },
  {
    id: "t3",
    name: "이영희",
    company: "Company A",
    role: "Data Scientist",
    avatar: "L",
    text: "AI 프로젝트에서 기술적인 부분을 빠르게 이해하고 현실적인 요구사항으로 번역해주는 능력이 탁월했습니다. 함께 일한 PM 중 가장 AI 친화적인 분이었습니다.",
  },
  {
    id: "t4",
    name: "박민준",
    company: "External Partner",
    role: "CEO",
    avatar: "P",
    text: "파트너사 입장에서도 함께 일하기 매우 좋은 분이었습니다. 항상 투명하게 소통하고, 양측에 이로운 방향을 적극적으로 모색해주었습니다.",
  },
];
