'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, FileText, BookOpen, Calendar, Download, Bell, Image as ImageIcon, GraduationCap, Users, MapPin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { courses } from '@/data/courses';
import { departments } from '@/data/departments';
import { notices } from '@/data/notices';
import { events } from '@/data/events';
import { downloads } from '@/data/downloads';
import { news } from '@/data/news';
import { faculty } from '@/data/faculty';
import { gallery } from '@/data/gallery';
import { importantDates } from '@/data/importantDates';
import { faqs } from '@/data/faq';

interface SearchResult {
  title: string;
  href: string;
  type: string;
  icon: typeof Search;
}

interface GlobalSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const results = useMemo<SearchResult[]>(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results: SearchResult[] = [];

    courses.forEach((c) => {
      if (c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q))
        results.push({ title: c.name, href: '/courses', type: 'Course', icon: BookOpen });
    });
    departments.forEach((d) => {
      if (d.name.toLowerCase().includes(q) || d.shortName.toLowerCase().includes(q))
        results.push({ title: d.name, href: `/departments#${d.id}`, type: 'Department', icon: GraduationCap });
    });
    faculty.forEach((f) => {
      if (f.name.toLowerCase().includes(q))
        results.push({ title: f.name, href: '/faculty', type: 'Faculty', icon: Users });
    });
    notices.forEach((n) => {
      if (n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q))
        results.push({ title: n.title, href: '/notices', type: 'Notice', icon: Bell });
    });
    events.forEach((e) => {
      if (e.title.toLowerCase().includes(q))
        results.push({ title: e.title, href: '/events', type: 'Event', icon: Calendar });
    });
    downloads.forEach((d) => {
      if (d.title.toLowerCase().includes(q))
        results.push({ title: d.title, href: '/downloads', type: 'Download', icon: Download });
    });
    news.forEach((n) => {
      if (n.title.toLowerCase().includes(q))
        results.push({ title: n.title, href: '/news', type: 'News', icon: FileText });
    });
    gallery.forEach((g) => {
      if (g.title.toLowerCase().includes(q))
        results.push({ title: g.title, href: '/gallery', type: 'Gallery', icon: ImageIcon });
    });
    importantDates.forEach((d) => {
      if (d.title.toLowerCase().includes(q))
        results.push({ title: d.title, href: '/academic-calendar', type: 'Date', icon: Calendar });
    });
    faqs.forEach((f) => {
      if (f.question.toLowerCase().includes(q))
        results.push({ title: f.question, href: '/faq', type: 'FAQ', icon: FileText });
    });
    if ('contact'.includes(q) || 'address'.includes(q) || 'phone'.includes(q))
      results.push({ title: 'Contact Us', href: '/contact', type: 'Page', icon: MapPin });

    return results.slice(0, 12);
  }, [query]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const handleSelect = (href: string) => {
    router.push(href);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 p-0">
        <DialogHeader className="border-b border-border px-4 py-3">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              autoFocus
              placeholder="Search courses, departments, faculty, notices, events..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
            />
          </div>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto p-2">
          {query.length < 2 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              Start typing to search across the entire site...
            </p>
          ) : results.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No results found for &quot;{query}&quot;
            </p>
          ) : (
            <div className="flex flex-col gap-1">
              {results.map((r, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(r.href)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-accent/10"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <r.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{r.title}</div>
                    <div className="text-xs text-muted-foreground">{r.type}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
