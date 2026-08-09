import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({ id, children, className = "", delay = 0 }: Props) {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}
