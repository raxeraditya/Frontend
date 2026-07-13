import { cn } from '@/lib/utils';

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  category?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const categoryColors: Record<string, string> = {
  Admissions: 'bg-blue-500',
  Examination: 'bg-amber-500',
  Holiday: 'bg-green-500',
  Result: 'bg-purple-500',
  Event: 'bg-rose-500',
  Convocation: 'bg-indigo-500',
  Fee: 'bg-orange-500',
  Academic: 'bg-cyan-500',
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2" />

      {items.map((item, i) => (
        <div
          key={item.id}
          className={cn(
            'relative mb-8 flex gap-6',
            i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row',
            'md:gap-0'
          )}
        >
          {/* Dot */}
          <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2">
            <div
              className={cn(
                'h-2 w-2 rounded-full',
                item.category ? categoryColors[item.category] : 'bg-primary-foreground'
              )}
            />
          </div>

          {/* Content */}
          <div className={cn('ml-12 flex-1 md:ml-0 md:w-1/2', i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12')}>
            <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-lg">
              <div className={cn('mb-2 flex items-center gap-2', i % 2 === 0 ? 'md:justify-end' : '')}>
                {item.category && (
                  <span className="text-xs font-medium text-muted-foreground">{item.category}</span>
                )}
              </div>
              <time className="text-sm font-semibold text-primary">
                {new Date(item.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <h3 className="mt-1 font-serif text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
