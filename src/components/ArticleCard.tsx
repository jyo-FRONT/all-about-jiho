import type { ArticleItem } from "../data/articles";

interface Props {
  article: ArticleItem;
}

export default function ArticleCard({ article }: Props) {
  return (
    <a
      href={article.url ?? "#"}
      className="group block bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/12 hover:bg-[#161616] transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[#666]">{article.category}</span>
        <span className="text-xs text-[#444]">{article.date}</span>
        <span className="text-xs text-[#444] ml-auto">{article.readTime} 읽기</span>
      </div>
      <h3 className="font-['Instrument_Sans'] font-semibold text-sm text-white mb-2 group-hover:text-[#2dd4bf] transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="text-xs text-[#888] leading-relaxed">{article.summary}</p>
    </a>
  );
}
