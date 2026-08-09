import type { TestimonialItem } from "../data/testimonials";

interface Props {
  item: TestimonialItem;
}

export default function TestimonialCard({ item }: Props) {
  return (
    <div className="shrink-0 w-80 bg-[#111] border border-white/5 rounded-2xl p-6">
      <p className="text-sm text-[#aaa] leading-relaxed mb-5">"{item.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#2dd4bf]/15 border border-[#2dd4bf]/20 flex items-center justify-center text-sm font-semibold text-[#2dd4bf]">
          {item.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{item.name}</p>
          <p className="text-xs text-[#888]">{item.role} · {item.company}</p>
        </div>
      </div>
    </div>
  );
}
