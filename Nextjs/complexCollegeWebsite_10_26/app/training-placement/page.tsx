import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, GraduationCap } from 'lucide-react';
import { trainingPrograms, topRecruiters } from '@/data/placement';

export const metadata: Metadata = {
  title: 'Training & Placement',
  description: 'Training programs and placement cell information at St. Xavier Institute of Technology.',
};

export default function TrainingPlacementPage() {
  return (
    <>
      <PageHeader
        title="Training & Placement Cell"
        subtitle="Career Readiness"
        description="Comprehensive training programs designed to make students industry-ready from day one."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Training & Placement' }]} />

        {/* Training Programs */}
        <div className="mt-8">
          <SectionHeading
            title="Training Programs"
            subtitle="Industry Readiness"
            description="A structured training curriculum integrated across all semesters."
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((p) => (
              <Card key={p.id} className="glass-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="space-y-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {p.duration}
                    </span>
                    <Badge variant="outline">{p.semester}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <div className="mt-16">
          <SectionHeading title="Placement Process" subtitle="How It Works" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { step: 1, title: 'Registration', desc: 'Students register with the T&P cell at the beginning of their final year.' },
              { step: 2, title: 'Pre-Placement Training', desc: 'Intensive training on aptitude, coding, and soft skills.' },
              { step: 3, title: 'Company Visits', desc: 'Companies visit campus for pre-placement talks and tests.' },
              { step: 4, title: 'Interviews & Offers', desc: 'Interview rounds conducted, offers rolled out to selected students.' },
            ].map((s) => (
              <Card key={s.step} className="glass-card text-center">
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-serif text-xl font-bold text-primary-foreground">
                    {s.step}
                  </div>
                  <h3 className="font-serif text-base font-bold">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recruiter Logos */}
        <div className="mt-16">
          <SectionHeading title="Our Recruiting Partners" subtitle="40+ Companies" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {topRecruiters.map((r) => (
              <Card key={r.id} className="flex items-center justify-center p-6">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{r.logo}</span>
                  <span className="text-xs font-medium">{r.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
