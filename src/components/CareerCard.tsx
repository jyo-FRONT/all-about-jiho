import type { CareerItem } from "../data/career";

interface Props {
  item: CareerItem;
}

export default function CareerCard({ item }: Props) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#111] overflow-hidden">
      <div className="flex gap-5 p-5">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-white overflow-hidden flex items-center justify-center">
          <img src={item.logo} alt={item.company} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-1">
            <div>
              <h3 className="font-['Instrument_Sans'] font-semibold text-white text-sm">
                {item.company}
              </h3>
              <p className="text-xs text-[#888]">{item.role}</p>
            </div>
            <span className="shrink-0 text-xs text-[#888]">{item.period}</span>
          </div>
          <p className="text-xs text-[#888] leading-relaxed mt-2">{item.description}</p>
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {item.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#888]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {item.duties && item.duties.length > 0 && (
        <div className="border-t border-white/5 px-5 py-4">
          <p className="text-xs text-[#888] uppercase tracking-widest mb-4">담당업무</p>
          <div className="border-l border-white/10 flex flex-col gap-4">
            {item.duties.map((duty) => (
              <div key={duty.title} className="pl-4">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm text-white/90 font-medium">{duty.title}</p>
                  <span className="shrink-0 text-xs text-[#888]">{duty.period}</span>
                </div>
                <p className="text-xs text-[#666] mt-0.5 mb-2">{duty.summary}</p>
                <ul className="flex flex-col gap-1">
                  {duty.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-xs text-[#666] leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
