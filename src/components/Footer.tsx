import { contactEmail, contactPhone } from "../data/about";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-white/5 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#888] text-sm">© {year} 이지호. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-sm text-[#888]">{contactEmail}</span>
          <span className="text-sm text-[#888]">{contactPhone}</span>
        </div>
      </div>
    </footer>
  );
}
