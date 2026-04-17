import { cn } from "@/lib/utils";

const Plus = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

type TechItem = {
  name: string;
  icon: string;
  desc: string;
};

type TechCloudProps = React.ComponentProps<"div"> & {
  items: TechItem[];
};

export function TechCloud({ items, className, ...props }: TechCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4 lg:grid-cols-6",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-brand-blue/10" />

      {items.map((item, idx) => {
        // We can add some logic to vary the background like the original design
        const isSecondary = [0, 2, 4, 7, 10].includes(idx); // Mimic the secondary pattern
        
        return (
          <TechCard
            key={item.name}
            className={cn(
              "relative border-r border-b",
              isSecondary ? "bg-brand-surface/50" : "bg-white",
              idx >= items.length - (items.length % 6 || 6) ? "md:border-b-0" : "" // Last row border logic simplified
            )}
            item={item}
          >
            {/* Randomly place PlusIcons specifically like the design or on all corners */}
            {/* To exactly match the design's "random but intentional" feel: */}
            {idx === 0 && (
                 <Plus
                    className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-brand-blue/30"
                />
            )}
            {idx === 2 && (
                 <>
                    <Plus
                        className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-brand-blue/30"
                    />
                    <Plus
                        className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-brand-blue/30"
                    />
                 </>
            )}
          </TechCard>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-brand-blue/10" />
    </div>
  );
}

type TechCardProps = React.ComponentProps<"div"> & {
  item: TechItem;
};

function TechCard({ item, className, children, ...props }: TechCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-6 text-center transition-all hover:bg-brand-blue/[0.02] group",
        className
      )}
      {...props}
    >
      <div className="text-4xl mb-3 transition-transform group-hover:scale-110 duration-300 pointer-events-none select-none">
        {item.icon}
      </div>
      <div className="font-display font-semibold text-brand-ink text-sm">
        {item.name}
      </div>
      <div className="text-brand-muted text-[10px] mt-1 leading-snug opacity-80">
        {item.desc}
      </div>
      {children}
    </div>
  );
}
