interface SectionProps {
  eyebrow?: string;
  title?: string;
  id?: string;
  subtitle?: string;
  children: React.ReactNode;
  center?: boolean;
  dark?: boolean;
  className?: string;
}

export default function Section({
  eyebrow,
  title,
  id,
  subtitle,
  children,
  center,
  dark,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${dark ? "bg-brand-ink" : ""} ${className}`}>
      <div className="container-x">
        <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
          {eyebrow && (
            <div className={`eyebrow${dark ? "-white" : ""} mb-3`}>
              {eyebrow}
            </div>
          )}
          {title && (
            <h2
              className={`text-h2 font-display font-bold ${
                dark ? "text-white" : "text-brand-ink"
              }`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`mt-4 leading-relaxed ${
                dark ? "text-white/55" : "text-brand-muted"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
