import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { news } from '@/data/news';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'News Article',
  description: 'Read the latest news from St. Xavier Institute of Technology.',
};

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const item = news.find((n) => n.id === params.id);
  if (!item) notFound();

  return (
    <>
      <PageHeader
        title={item.title}
        subtitle={item.category}
        bgImage={item.image}
      />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'News', href: '/news' }, { label: item.category }]} />

        <div className="mt-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {item.author}
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl">
            <img src={item.image} alt={item.title} className="w-full object-cover" />
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-lg font-medium text-foreground">{item.excerpt}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{item.content}</p>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <Button asChild variant="outline">
              <Link href="/news"><ArrowLeft className="mr-2 h-4 w-4" /> Back to News</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
