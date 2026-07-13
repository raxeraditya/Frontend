import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { Timeline } from '@/components/timeline';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { importantDates } from '@/data/importantDates';
import { downloads } from '@/data/downloads';

export const metadata: Metadata = {
  title: 'Academic Calendar',
  description: 'Important academic dates and calendar for St. Xavier Institute of Technology.',
};

export default function AcademicCalendarPage() {
  const calendarDownloads = downloads.filter((d) => d.category === 'Academic Calendar');
  const sortedDates = [...importantDates].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <PageHeader
        title="Academic Calendar"
        subtitle="Important Dates"
        description="Stay on track with all important academic dates, events, and deadlines."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Academic Calendar' }]} />

        {/* Download calendar */}
        <div className="mt-8 flex flex-wrap gap-3">
          {calendarDownloads.map((file) => (
            <Button key={file.id} asChild variant="outline">
              <a href={file.pdf}><Download className="mr-2 h-4 w-4" /> {file.title}</a>
            </Button>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12">
          <SectionHeading title="Important Dates 2025" subtitle="Timeline" align="left" />
          <div className="mt-8">
            <Timeline items={sortedDates.map((d) => ({
              id: d.id,
              title: d.title,
              date: d.date,
              description: d.description,
              category: d.category,
            }))} />
          </div>
        </div>

        {/* Category legend */}
        <div className="mt-12">
          <h3 className="mb-4 text-sm font-semibold uppercase text-muted-foreground">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {['Admissions', 'Examination', 'Holiday', 'Result', 'Event', 'Convocation', 'Fee', 'Academic'].map((cat) => (
              <Badge key={cat} variant="outline">{cat}</Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
