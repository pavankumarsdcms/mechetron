interface FeatureCardProps {
  icon: string;
  title: string;
  value?: string;
  dark?: boolean;
}

export default function FeatureCard({ icon, title, value, dark }: FeatureCardProps) {
  if (dark) {
    return (
      <div className="card-glass flex items-start gap-3">
        <div className="text-2xl flex-shrink-0">{icon}</div>
        <div>
          {value && (
            <div className="font-display font-bold text-brand-orange text-lg leading-none mb-0.5">
              {value}
            </div>
          )}
          <div className="text-sm text-white/60">{title}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card flex items-start gap-3">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div>
        {value && (
          <div className="font-display font-bold text-brand-orange text-lg leading-none mb-0.5">
            {value}
          </div>
        )}
        <div className="text-sm text-brand-muted">{title}</div>
      </div>
    </div>
  );
}
