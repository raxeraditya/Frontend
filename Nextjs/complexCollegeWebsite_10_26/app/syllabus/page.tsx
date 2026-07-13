import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { downloads } from '@/data/downloads';
import { courses } from '@/data/courses';

export const metadata: Metadata = {
  title: 'Syllabus',
  description: 'Download program syllabi for all courses at St. Xavier Institute of Technology.',
};

export default function SyllabusPage() {
  const syllabusDownloads = downloads.filter((d) => d.category === 'Syllabus');

  return (
    <>
      <PageHeader
        title="Syllabus"
        subtitle="Academic Curriculum"
        description="Download the complete syllabus for all our programs and courses."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Syllabus' }]} />

        {/* Course syllabus downloads */}
        <div className="mt-8">
          <h2 className="font-serif text-2xl font-bold">Download Syllabus by Program</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {syllabusDownloads.map((file) => (
              <Card key={file.id} className="group flex items-center gap-4 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{file.title}</h3>
                  <p className="text-xs text-muted-foreground">{file.size} • {file.year}</p>
                </div>
                <Button asChild variant="ghost" size="icon">
                  <a href={file.pdf}><Download className="h-5 w-5" /></a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Course subjects */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold">Subjects by Program</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <Card key={course.id} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold">{course.shortName}</h3>
                    <Badge variant="secondary">{course.duration}</Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{course.name}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.subjects.map((s) => (
                      <Badge key={s} variant="outline" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
