import { Link } from "react-router-dom";
import type { ProjectItem } from "../data/projects";

interface Props {
  project: ProjectItem;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/12 hover:bg-[#161616] transition-all duration-300"
    >
      <div className="aspect-video w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[linear-gradient(135deg,#161616_0%,#1a1a1a_100%)]">
            <img src={project.companyLogo} alt={project.company} className="w-12 h-12 rounded-lg opacity-30 object-cover" />
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <img src={project.companyLogo} alt={project.company} className="w-8 h-8 rounded-lg object-cover bg-white" />
          <div>
            <p className="text-xs text-[#888]">{project.company}</p>
            <p className="text-xs text-[#888]">{project.period}</p>
          </div>
        </div>

        <h3 className="font-['Instrument_Sans'] font-semibold text-base text-white mb-2 group-hover:text-[#2dd4bf] transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-[#666] leading-relaxed mb-4">{project.summary}</p>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#666]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
