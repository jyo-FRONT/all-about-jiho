export interface SkillItem {
  icon: string;
  title: string;
  description: string;
}

export interface SkillSubCategory {
  label: string;
  items: SkillItem[];
}

export interface SkillCategory {
  id: string;
  name: string;
  subCategories?: SkillSubCategory[];
  items?: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "ai",
    name: "AI 활용",
    items: [
      { icon: "🤖", title: "Claude", description: "개인 LLM Wiki 구축 및 기획 문서 초안 작성에 활용" },
      { icon: "✨", title: "Gemini", description: "리서치 및 아이디에이션 보조 도구로 활용" },
      { icon: "🛠️", title: "Figma Make", description: "IA 기반 화면설계 및 프로토타입 제작 시간 40% 단축" },
      { icon: "📚", title: "LLM Wiki", description: "기획 전 과정에 활용하는 개인 LLM Wiki를 구축해 요구사항 정의서 기반 IA 도출 시간 50% 단축, 앱-어드민 기획 프로세스 일관성 확보" },
    ],
  },
  {
    id: "planning",
    name: "기획 & UX 툴",
    items: [
      { icon: "🎯", title: "UX 기획", description: "IA 설계, 플로우 정리, 기능명세서·스토리보드 작성" },
      { icon: "🖼️", title: "Figma", description: "IA·플로우 설계부터 Hi-fi 프로토타입까지 전 과정 제작" },
      { icon: "✏️", title: "Sketch", description: "Hi-fi 프로토타입 제작 및 사용성 테스트용 시안 설계" },
      { icon: "🎨", title: "Adobe XD", description: "프로토타이핑 및 디자인 시안 제작" },
      { icon: "📐", title: "UI 디자인", description: "컴포넌트 기반 화면 디자인 및 디자인 시스템 활용" },
      { icon: "🔄", title: "Zeplin", description: "개발 핸드오프를 위한 디자인 스펙 전달" },
    ],
  },
  {
    id: "collab",
    name: "협업 & 문서화",
    items: [
      { icon: "📓", title: "Notion", description: "기획 문서 및 UX Writing(한/영) 정리, 위키 관리" },
      { icon: "📄", title: "Confluence", description: "요구사항 정의서 및 프로젝트 문서 관리" },
      { icon: "🐞", title: "JIRA", description: "업무 티켓 생성 및 진행 상태 관리" },
      { icon: "💬", title: "Slack", description: "팀 및 협력사(KT, LG U+ 등)와의 커뮤니케이션" },
      { icon: "📊", title: "PowerPoint", description: "기획서 및 이해관계자 보고 자료 작성" },
    ],
  },
];
