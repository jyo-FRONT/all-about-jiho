import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import CareerCard from "../components/CareerCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import ArticleCard from "../components/ArticleCard";
import { careerData } from "../data/career";
import { educationData } from "../data/education";
import { certificationsData } from "../data/certifications";
import { skillsData } from "../data/skills";
import { projectsData } from "../data/projects";
import { testimonialsData } from "../data/testimonials";
import { articlesData } from "../data/articles";
import {
  introHeadline,
  introText,
  introHighlights,
  contactEmail,
  contactPhone,
  strongPoints,
  howIWork,
  whatILove,
  experienceList,
} from "../data/about";

const galleryImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=280&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=280&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=280&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=280&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=280&fit=crop&auto=format",
];

const howGallery = [
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=260&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=260&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=260&fit=crop&auto=format",
];

const featuredProjects = projectsData.filter((p) => p.featured);

export default function Home() {
  return (
    <div className="bg-[#080808] min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute -top-40 -right-32 w-[34rem] h-[34rem] rounded-full bg-[#2dd4bf]/20 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/4 -left-40 w-[26rem] h-[26rem] rounded-full bg-[#2dd4bf]/10 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-[26rem] h-[26rem] rounded-full bg-[#5eead4]/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.05)_0%,transparent_70%)] pointer-events-none" />

        {/* Subtle geometric shapes */}
        <div className="absolute top-[8%] right-[10%] w-[30rem] h-[30rem] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-[18%] right-[16%] w-[20rem] h-[20rem] rounded-full border border-[#2dd4bf]/10 pointer-events-none" />
        <div className="absolute bottom-[6%] left-[8%] w-[22rem] h-[22rem] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full border border-white/[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
            <span className="text-xs text-[#2dd4bf]">UX/UI 기획자 · AI Native</span>
          </div>

          <h1 className="font-['Instrument_Sans'] font-bold text-5xl md:text-7xl text-white mb-4 leading-none tracking-tight">
            이지호
          </h1>
          <p className="text-lg md:text-xl text-[#888] mb-10 leading-relaxed max-w-2xl mx-auto">
            사용자를 공감하며 문제를 찾고, 검증하며 개선하는 5년차 서비스 기획자.<br />
            AI를 도구가 아닌 기획의 언어로 사용합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-6 py-3 rounded-full bg-[#2dd4bf] text-[#080808] font-semibold text-sm hover:bg-[#5eead4] transition-colors"
            >
              포트폴리오 보기
            </a>
            <a
              href="#career"
              onClick={(e) => { e.preventDefault(); document.getElementById("career")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-6 py-3 rounded-full border border-white/10 text-[#888] text-sm hover:border-white/20 hover:text-white transition-all"
            >
              경력 보기
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-0.5 h-12 bg-gradient-to-b from-transparent to-white" />
        </div>
      </section>

      {/* Profile: About */}
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper className="py-24">
          <p className="text-xs text-[#2dd4bf] uppercase tracking-widest mb-2">Profile</p>
          <h2 className="font-['Instrument_Sans'] font-bold text-3xl md:text-4xl text-white mb-8">About</h2>

          <p className="font-['Instrument_Sans'] font-bold text-xl md:text-3xl text-white leading-snug mb-8">
            {introHeadline}
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {introText.map((paragraph, idx) => (
              <p key={idx} className="text-sm md:text-base text-[#888] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3 mb-10">
            {introHighlights.map((highlight, idx) => (
              <p key={idx} className="text-sm md:text-base text-[#888] leading-relaxed pl-5 relative before:content-['-'] before:absolute before:left-0 before:text-[#2dd4bf]">
                {highlight}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#888]">
            <span>{contactEmail}</span>
            <span>{contactPhone}</span>
          </div>
        </SectionWrapper>

        {/* Career */}
        <SectionWrapper id="career" className="py-24 border-t border-white/5">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-['Instrument_Sans'] font-bold text-3xl md:text-4xl text-white">Career</h2>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {careerData.map((item) => (
              <CareerCard key={item.id} item={item} />
            ))}
          </div>
        </SectionWrapper>

        {/* Education */}
        <SectionWrapper className="py-16 border-t border-white/5">
          <h2 className="font-['Instrument_Sans'] font-bold text-2xl text-white mb-8">Education</h2>
          <div className="flex flex-col gap-4">
            {educationData.map((edu) => (
              <div key={edu.id} className="bg-[#111] border border-white/5 rounded-2xl p-5 w-full">
                <p className="text-xs text-[#888] mb-1">{edu.period}</p>
                <h3 className="font-['Instrument_Sans'] font-semibold text-white text-sm mb-0.5">{edu.school}</h3>
                <p className="text-xs text-[#888]">{edu.degree} · {edu.major}</p>
                {edu.description && <p className="text-xs text-[#888] mt-2 leading-relaxed">{edu.description}</p>}
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Certifications */}
        <SectionWrapper className="py-16 border-t border-white/5">
          <h2 className="font-['Instrument_Sans'] font-bold text-2xl text-white mb-8">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="bg-[#111] border border-white/5 rounded-2xl p-5">
                <p className="text-xs text-[#888] mb-1">{cert.date}</p>
                <h3 className="font-['Instrument_Sans'] font-semibold text-white text-sm mb-0.5">{cert.name}</h3>
                <p className="text-xs text-[#888]">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper id="projects" className="py-24 border-t border-white/5">
          <div className="mb-12">
            <p className="text-xs text-[#2dd4bf] uppercase tracking-widest mb-2">Work</p>
            <h2 className="font-['Instrument_Sans'] font-bold text-3xl md:text-4xl text-white">Projects</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {featuredProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>

          <div className="flex justify-center">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full border border-white/15 text-sm text-white hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] transition-all"
            >
              전체보기 →
            </Link>
          </div>
        </SectionWrapper>
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper id="skills" className="py-24 border-t border-white/5">
          <div className="mb-12">
            <p className="text-xs text-[#2dd4bf] uppercase tracking-widest mb-2">Expertise</p>
            <h2 className="font-['Instrument_Sans'] font-bold text-3xl md:text-4xl text-white">Skills</h2>
          </div>

          {skillsData.map((category) => (
            <div key={category.id} className="mb-14">
              <h3 className="font-['Instrument_Sans'] font-semibold text-lg text-white mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-[#2dd4bf]" />
                {category.name}
              </h3>

              {category.subCategories
                ? category.subCategories.map((sub) => (
                    <div key={sub.label} className="mb-8">
                      <p className="text-xs text-[#888] uppercase tracking-widest mb-4">{sub.label}</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {sub.items.map((skill) => (
                          <div key={skill.title} className="bg-[#111] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
                            <div className="text-xl mb-2">{skill.icon}</div>
                            <p className="font-['Instrument_Sans'] font-medium text-sm text-white mb-1">{skill.title}</p>
                            <p className="text-xs text-[#888] leading-relaxed">{skill.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.items?.map((skill) => (
                      <div key={skill.title} className="bg-[#111] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
                        <div className="text-xl mb-2">{skill.icon}</div>
                        <p className="font-['Instrument_Sans'] font-medium text-sm text-white mb-1">{skill.title}</p>
                        <p className="text-xs text-[#888] leading-relaxed">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </SectionWrapper>
      </div>

      {/* About / Strong Point */}
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper id="about" className="py-24 border-t border-white/5">
          <div className="mb-12">
            <p className="text-xs text-[#2dd4bf] uppercase tracking-widest mb-2">About</p>
            <h2 className="font-['Instrument_Sans'] font-bold text-3xl md:text-4xl text-white">Strong Points</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strongPoints.map((sp) => (
              <div key={sp.id} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                <div className="text-2xl mb-3">{sp.icon}</div>
                <h3 className="font-['Instrument_Sans'] font-semibold text-white text-sm mb-2">{sp.title}</h3>
                <p className="text-xs text-[#888] leading-relaxed">{sp.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>


    </div>
  );
}
