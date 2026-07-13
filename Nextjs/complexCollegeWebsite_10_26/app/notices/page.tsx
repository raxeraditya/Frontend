'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { NoticeCard } from '@/components/cards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { notices } from '@/data/notices';

export default function NoticesPage() {
  const [priority, setPriority] = useState('all');

  const filtered = useMemo(() => {
    const sorted = [...notices].sort((a, b) => b.date.localeCompare(a.date));
    if (priority === 'all') return sorted;
    return sorted.filter((n) => n.priority === priority);
  }, [priority]);

  return (
    <>
      <PageHeader
        title="Notice Board"
        subtitle="Official Notices"
        description="Stay updated with the latest official notices and announcements."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Notice Board' }]} />

        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">Filter by Priority:</span>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Priorities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">{filtered.length} notices</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>
    </>
  );
}
