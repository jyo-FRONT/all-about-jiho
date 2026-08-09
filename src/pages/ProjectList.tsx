import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";

function periodStartValue(period: string) {
  const [start] = period.split("—").map((s) => s.trim());
  const [year, month] = start.split(".").map(Number);
  return year * 100 + (month || 0);
}

const sortedProjects = [...projectsData].sort(
  (a, b) => periodStartValue(b.period) - periodStartValue(a.period)
);

export default function ProjectList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080808] pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs text-[#888] hover:text-white transition-colors mb-12"
        >
          ← 홈으로
        </button>

        <div className="mb-12">
          <p className="text-xs text-[#2dd4bf] uppercase tracking-widest mb-2">Work</p>
          <h1 className="font-['Instrument_Sans'] font-bold text-4xl text-white">All Projects</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {sortedProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </div>
  );
}
