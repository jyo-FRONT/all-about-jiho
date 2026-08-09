export interface ArticleItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  url?: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: "a1",
    title: "AI 시대의 PM은 무엇이 달라야 하는가",
    summary: "LLM이 제품의 핵심이 되는 시대, PM이 갖춰야 할 새로운 역량과 사고방식에 대해 씁니다.",
    category: "AI / Product",
    date: "2024.01.15",
    readTime: "8분",
    url: "#",
  },
  {
    id: "a2",
    title: "좋은 제품 발견은 어떻게 이루어지는가",
    summary: "사용자 인터뷰, 데이터, 그리고 직관. 세 가지를 균형 있게 활용하는 제품 발견 프로세스를 공유합니다.",
    category: "Product Discovery",
    date: "2023.11.08",
    readTime: "6분",
    url: "#",
  },
  {
    id: "a3",
    title: "스타트업 PM이 대기업으로 이직한 후 배운 것들",
    summary: "조직 규모가 달라질 때 일하는 방식이 어떻게 달라져야 하는지, 제 경험을 솔직하게 씁니다.",
    category: "Career",
    date: "2023.09.22",
    readTime: "10분",
    url: "#",
  },
];
