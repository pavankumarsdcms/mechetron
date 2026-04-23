import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  short: string;
  image: string;
  href: string;
  category?: string;
  tag?: string;
  icon?: string;
}

export default function CourseCard({
  title, short, image, href, category, tag, icon,
}: CourseCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-card overflow-hidden bg-brand-ink border border-white/8 hover:border-brand-blue/40 shadow-card hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/30 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {category && (
            <span className="badge-dark text-[10px]">{category}</span>
          )}
          {tag && (
            <span className="badge-brand text-[10px]">{tag}</span>
          )}
        </div>

        {/* Icon overlay (bottom-right) */}
        {icon && (
          <div className="absolute bottom-3 right-3 text-2xl opacity-80 group-hover:opacity-100 transition">
            {icon}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-white text-base leading-snug group-hover:text-brand-blue transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/45 leading-relaxed line-clamp-2">{short}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-brand-blue inline-flex items-center gap-1">
            Learn more
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
          {/* Decorative line */}
          <div className="w-8 h-px bg-brand-blue/30 group-hover:w-12 group-hover:bg-brand-blue/60 transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}
