interface PageHeroProps {
  eyebrow?: string;
  badge?: string; // alias for eyebrow
  title: string;
  titleAccent?: string;   // word(s) to render in gradient
  subtitle?: string;
  children?: React.ReactNode; // extra CTAs / badges
}

export default function PageHero({
  eyebrow,
  badge,
  title,
  titleAccent,
  subtitle,
  children,
}: PageHeroProps) {
  const displayEyebrow = eyebrow || badge;
  
  // Split title so we can inject gradient on the accent phrase
  const titleParts = titleAccent
    ? title.split(titleAccent)
    : [title];

  return (
    <section className="relative bg-brand-ink overflow-hidden border-b border-white/5">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 circuit-bg pointer-events-none opacity-40" />
      <div className="glow-orb w-[500px] h-[500px] bg-brand-blue/15 -top-40 -right-40" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-deep/20 -bottom-20 -left-20" />

      {/* Decorative corner brackets */}
      <div className="absolute bottom-4 right-8 w-12 h-12 border-b-2 border-r-2 border-brand-blue/20 rounded-br-lg pointer-events-none" />
      <div className="absolute top-4 left-8 w-12 h-12 border-t-2 border-l-2 border-brand-blue/20 rounded-tl-lg pointer-events-none" />

      <div className="relative container-x py-24 lg:py-32 max-w-4xl">
        {displayEyebrow && (
          <div className="badge-dark mb-5 inline-flex">{displayEyebrow}</div>
        )}
        <h1 className="text-4xl lg:text-6xl font-display font-bold text-white leading-[1.06] animate-fade-in-up">
          {titleAccent ? (
            <>
              {titleParts[0]}
              <span className="gradient-text">{titleAccent}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 text-xl text-white/55 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-100">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">{children}</div>}
      </div>
    </section>
  );
}
