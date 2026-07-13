'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { NewsCard } from '@/components/cards';
import { news, newsCategories } from '@/data/news';
import { cn } from '@/lib/utils';

export default function NewsPage() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    if (category === 'All') return news;
    return news.filter((n) => n.category === category);
  }, [category]);

  return (
    <>
      <PageHeader
        title="News & Updates"
        subtitle="News Room"
        description="Stay informed about the latest happenings, achievements, and announcements."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'News' }]} />

        <div className="mt-8 flex flex-wrap gap-2">
          {newsCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                category === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent/10'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
