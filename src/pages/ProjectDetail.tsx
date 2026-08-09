import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-[#888]">
        <p className="text-lg mb-4">프로젝트를 찾을 수 없습니다.</p>
        <Link to="/" className="text-sm text-[#2dd4bf] hover:underline">← 홈으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs text-[#888] hover:text-white transition-colors mb-12"
        >
          ← 뒤로
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img src={project.companyLogo} alt={project.company} className="w-10 h-10 rounded-lg object-cover bg-white" />
          <p className="text-xs text-[#888]">{project.company} · {project.period}</p>
        </div>

        <h1 className="font-['Instrument_Sans'] font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-base text-[#888] mb-8 leading-relaxed">{project.summary}</p>

        <div className="flex gap-2 mb-8 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#666] border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {project.highlight && (
          <div className="mb-10 px-5 py-4 rounded-2xl bg-[#2dd4bf]/10 border border-[#2dd4bf]/20">
            <p className="text-sm text-[#2dd4bf] font-medium">{project.highlight}</p>
          </div>
        )}

        {(project.role || project.team) && (
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {project.role && (
              <div className="bg-[#111] border border-white/5 rounded-2xl p-5">
                <p className="text-xs text-[#888] uppercase tracking-widest mb-2">역할</p>
                <p className="text-sm text-[#888] leading-relaxed">{project.role}</p>
              </div>
            )}
            {project.team && (
              <div className="bg-[#111] border border-white/5 rounded-2xl p-5">
                <p className="text-xs text-[#888] uppercase tracking-widest mb-2">참여인원</p>
                <p className="text-sm text-[#888] leading-relaxed">{project.team}</p>
              </div>
            )}
          </div>
        )}

        {project.process && project.process.length > 0 && (
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
            <h2 className="font-['Instrument_Sans'] font-semibold text-lg text-white mb-6">과정</h2>
            <ol className="flex flex-col gap-6">
              {project.process.map((step, idx) => {
                const text = typeof step === "string" ? step : step.text;
                const image = typeof step === "string" ? undefined : step.image;
                return (
                  <li key={idx} className="flex gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#2dd4bf]/10 text-[#2dd4bf] text-xs flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1 flex flex-col gap-3 min-w-0">
                      <p className="text-sm text-[#888] leading-relaxed">{text}</p>
                      {image && (
                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                          className="w-full rounded-xl border border-white/5"
                        />
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>

      {project.images && project.images.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 mt-10 flex flex-col gap-6">
          <h2 className="font-['Instrument_Sans'] font-semibold text-lg text-white">포트폴리오 상세</h2>
          {project.images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} 상세 이미지 ${idx + 1}`}
              loading="lazy"
              className="w-full rounded-2xl border border-white/5"
            />
          ))}
        </div>
      )}
    </div>
  );
}
