import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  bgImage?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  description,
  bgImage = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
  className,
  children,
}: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/75 to-accent/50" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        {subtitle && (
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-white/80">
            {subtitle}
          </span>
        )}
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
