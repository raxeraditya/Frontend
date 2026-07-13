'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { GalleryCard } from '@/components/cards';
import { gallery, galleryCategories } from '@/data/gallery';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    if (category === 'All') return gallery;
    return gallery.filter((g) => g.category === category);
  }, [category]);

  return (
    <>
      <PageHeader
        title="Campus Gallery"
        subtitle="Gallery"
        description="A visual journey through our campus, events, and student life."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
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

        {/* Gallery grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
