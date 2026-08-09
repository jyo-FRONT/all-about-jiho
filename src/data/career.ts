import inaviLogo from "../assets/logos/inavi.png";
import oneMillionLogo from "../assets/logos/1million.png";

export interface CareerDuty {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
}

export interface CareerItem {
  id: string;
  logo: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  duties?: CareerDuty[];
}

export const careerData: CareerItem[] = [
  {
    id: "inavi",
    logo: inaviLogo,
    company: "아이나비시스템즈",
    role: "UX기획 팀원",
    period: "2023.08 — 2024.01",
    location: "Seoul, Korea",
    description:
      "AI 업무 효율화 TF에서 기획 파트를 담당해 IA·화면설계 프로세스에 AI를 도입했습니다. 이후에도 토요타/렉서스 차량 내비게이션, 오르다AI, 아이나비 스탬프-오르다, 김해시 스마트 교통 서비스 등 아이나비 관련 프로젝트에서 기획을 이어가고 있습니다.",
    tags: ["Automotive UX", "AI 업무 효율화", "공공서비스"],
    duties: [
      {
        title: "토요타/렉서스 차량 내비게이션",
        period: "2024.02 — 2026.08",
        summary: "토요타 내비게이션 기획 업무 담당",
        bullets: [
          "기존 PPT 기반 기획서를 Figma로 전체 이관",
          "기존 토요타/렉서스 차량 내비게이션 이슈 대응",
          "LG U+(토요타 코리아에 탑재되는 인포테인먼트 플랫폼 제공사)와 차량 내비게이션 사용성 테스트 진행",
          "사용성 테스트 결과로 UX 변경 및 2026년 6월 토요타 라브4 차량에 탑재 및 출시",
        ],
      },
      {
        title: "아이나비 스탬프 - 오르다",
        period: "2024.12 — 2026.08",
        summary: "지자체 제휴 및 사용자 행동 보상형 B2B2C 서비스",
        bullets: [
          "초기 기획부터 배포, 운영까지 전 과정 담당 (기여 100%)",
          "지자체의 요구사항 정의 및 기능 기획",
          "화성시와 협업한 오르다 앱 내 걷기 기반 스탬프 미션 기능 기획",
          "미션 오픈 직후 걸음수 관련 VOC 급증(2월 34건 → 3월 195건, 전체 VOC의 98%)을 기술적 측정 오류로 진단",
          "개선안 기획 및 반영 후 VOC를 195건 → 40건 → 22건으로 단계적으로 감소시켜 누적 88.7% 절감 달성",
        ],
      },
      {
        title: "오르다AI",
        period: "2025.08 — 2026.08",
        summary: "숙명여자대학교 AI공학부와 협업한 국가 R&D 과제 기반 등산 안전 AI 플랫폼",
        bullets: [
          "국책사업으로 AI 기반 안전 등산 플랫폼 기획 (기여 100%)",
          "AI 학습 데이터 수집 및 AI 반환값을 기반으로 안전 등산 기능 등을 총괄 기획",
          "등산 중 신체 데이터 수집을 위한 웨어러블 디바이스 앱 기획",
          "실사용 검증을 위한 2차 POC 준비 및 2026년 11월 출시 예정",
        ],
      },
      {
        title: "AI 업무 효율화 프로젝트 TF",
        period: "2025.11 — 2025.12",
        summary: "프로덕트 전과정 AI 활용 파이프라인 구축",
        bullets: [
          "기획/디자인/개발 파트에서 한 명씩 구성되어 AI를 업무에 활용해 업무 효율을 높이는 TF에 참여",
          "기획 파트를 담당해 기획 전 과정 테스트 진행, 실제 프로젝트 기반으로 진행",
          "1. IA 도출 - 요구사항 정의서 기반 IA 도출 (업무시간 50% 감소 / ChatGPT 활용)",
          "2. 화면 설계 및 프로토타입 작업 - IA 기반 화면 설계 및 프로토타입 제작 (업무시간 40% 감소 / Figma Make 활용)",
          "현재 : 개인 LLM Wiki를 구축하여 업무 전과정에 활용",
        ],
      },
      {
        title: "김해시 강소형 스마트 교통 서비스",
        period: "2026.02 — 2026.08",
        summary: "국토부 스마트도시 사업 기반 시민참여형 탄소저감 교통 서비스",
        bullets: [
          "요구사항 검토, 정책 정의, 서비스 기획(스토리보드 작성), 기능명세서 도출",
          "K-MaaS 공공 API를 연동해 스마트주차장, 대중교통, 침수안전, 포인트 기능을 포함한 앱 기획",
          "APP 기반 Admin 기획 (AI를 활용한 IA 설계, 화면 구성까지 진행)",
        ],
      },
    ],
  },
  {
    id: "wonmillion",
    logo: oneMillionLogo,
    company: "원밀리언",
    role: "UX기획·디자인 팀원",
    period: "2021.02 — 2023.04",
    location: "Seoul, Korea",
    description:
      "원밀리언 공식 앱 리뉴얼, KT IPTV 협업 앱, Admin 개선 프로젝트에서 UX 기획과 디자인을 담당했습니다. VOC 분석을 기반으로 회원가입 플로우를 개선하고, Hi-fi 프로토타입 제작부터 UX Writing, QA까지 전 과정을 리드했습니다.",
    tags: ["UX Renewal", "Mobile App", "VOC 분석"],
    duties: [
      {
        title: "원밀리언 Admin 개선 프로젝트",
        period: "2022.04 — 2022.05",
        summary: "안무가 정보 업로드 기능 추가",
        bullets: [
          "원밀리언 공식 홈페이지에 노출되는 안무가 상세 정보를 관리자가 Admin에서 쉽게 정보를 조회, 수정 가능하도록 한 기능을 기획 및 디자인하여 추가함",
          "1. 문제 발견 - 홈페이지 내 안무가 상세 화면 관리 불가, 관리자가 개발자와 함께 하드코딩으로 정보 입력",
          "2. 요구사항 도출 - Admin에서 안무가 정보 수정 가능 및 해당 정보 DB에 저장",
          "3. 기획 및 디자인 - 기존 Admin에서 사용 중인 컴포넌트나 모듈을 최대한 활용하여 개발 소요 시간 절감",
          "4. 프로토타입 제작 및 테스트 - Sketch로 프로토타입 제작 및 관리자 대상 테스트 진행",
          "5. 개발 및 배포 - 탐색적 테스트(QA)로 품질 보증 완료",
        ],
      },
      {
        title: "KT IPTV 내 1M HomeDance ver2",
        period: "2022.05 — 2022.08",
        summary: "KT와 협업하여 제작한 1M HomeDance TV앱 (Android 기반)",
        bullets: [
          "KT가 제공한 AI 기능을 더하여 누구나 집에서도 유명 안무가에게 춤을 배우고, 동작이 얼마나 일치하는지를 평가받아 볼 수 있는 앱을 기획 및 UX/UI 디자인 담당",
          "1. 목표 수립 - KT 측 요구사항을 기반으로 서비스 컨셉 도출",
          "2. 경쟁사 조사 - 시장에 나와있는 유사 서비스 체험 및 벤치마킹",
          "3. IA, 플로우 설계 - Figma를 활용하여 전체적인 플로우 정리",
          "4. UX/UI 디자인",
          "5. 개발 및 배포",
          "TestCase 작성 및 QA 진행",
        ],
      },
      {
        title: "원밀리언 공식 앱 리뉴얼 프로젝트",
        period: "2023.01 — 2023.02",
        summary: "원밀리언 앱 개선을 위한 리뉴얼 프로젝트",
        bullets: [
          "구글 플레이스토어에 실사용자가 남긴 리뷰들을 기반으로 개선점을 찾고, UX를 새롭게 설계하여 전체적인 리뉴얼 작업 진행",
          "1. VOC 분석 및 문제점 정의 - 회원가입 단계에서 많은 개인정보 요구 (2019-2022까지 부정적 리뷰 중 약 20% 차지)",
          "2. 현황 분석 - 요구되는 개인정보 중 각각이 어디에 사용되는지, 필요한 정보인지 정리",
          "3. 아이디에이션 - 새로운 플로우 설계하며 개선 방안을 도출",
          "4. 프로토타입 제작 - Sketch와 Adobe XD를 활용하여 Hi-fi 프로토타입 제작",
          "5. 사용성 테스트 - 신규 입사자 5명을 대상으로 기존 시안과 새로운 시안의 사용성 테스트 진행",
          "전체적인 UX Writing 정리 (한/영, Notion과 Google SpreadSheet 활용)",
          "TestCase 작성 및 QA 진행",
        ],
      },
    ],
  },
];
