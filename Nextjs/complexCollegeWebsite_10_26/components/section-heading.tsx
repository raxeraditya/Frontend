import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  icon: Icon,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      {subtitle && (
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base text-muted-foreground sm:text-lg',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          'mt-2 h-1 rounded-full bg-gradient-to-r from-primary to-accent',
          align === 'center' ? 'w-20' : 'w-16'
        )}
      />
    </div>
  );
}
