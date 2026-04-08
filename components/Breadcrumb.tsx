import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  crumbs?: Crumb[];
  items?: Crumb[]; // alias to support older usage
}

export default function Breadcrumb({ crumbs, items }: BreadcrumbProps) {
  const list = crumbs || items || [];
  
  if (list.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/35 mb-6 font-sans">
      {list.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-white/20">/</span>}
          {c.href && !c.current ? (
            <Link href={c.href} className="hover:text-white/70 transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className={`transition-colors ${c.current ? "text-brand-blue font-semibold" : "text-white/60"}`}>
              {c.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
