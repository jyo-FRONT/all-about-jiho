export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  major: string;
  period: string;
  description?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    school: "아주대학교",
    degree: "학사",
    major: "디지털미디어학과",
    period: "2016.03 — 2021.08",
    description:
      "UX 디자인, 인터랙션 디자인, 인터페이스 디자인, 디지털 타이포그래피, 컴퓨터 프로그래밍, 미디어 애널리틱스, 미디어 조사 방법론 이수",
  },
];
