import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, BookOpen, Users, DollarSign } from 'lucide-react';
import { researchAreas, researchPublications, researchCenters } from '@/data/research';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research areas, publications, and centers at St. Xavier Institute of Technology.',
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research & Innovation"
        subtitle="Research"
        description="Advancing knowledge through cutting-edge research in engineering, technology, and management."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Research' }]} />

        {/* Research Centers */}
        <div className="mt-8">
          <SectionHeading title="Research Centers" subtitle="Facilities" description="State-of-the-art research centers driving innovation." />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchCenters.map((c) => (
              <Card key={c.id} className="glass-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="space-y-2 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FlaskConical className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">Director: {c.director}</p>
                  <Badge variant="outline">Est. {c.established}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mt-16">
          <SectionHeading title="Research Areas" subtitle="Domains" description="Explore the diverse research domains across our departments." />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {researchAreas.map((ra) => (
              <Card key={ra.id} className="glass-card transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{ra.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{ra.department}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{ra.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ra.faculty.map((f) => (
                      <Badge key={f} variant="secondary" className="text-xs">{f}</Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-border pt-4 text-center">
                    <div>
                      <BookOpen className="mx-auto h-5 w-5 text-primary" />
                      <p className="mt-1 font-serif text-lg font-bold">{ra.publications}</p>
                      <p className="text-xs text-muted-foreground">Papers</p>
                    </div>
                    <div>
                      <FlaskConical className="mx-auto h-5 w-5 text-primary" />
                      <p className="mt-1 font-serif text-lg font-bold">{ra.projects}</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                    <div>
                      <DollarSign className="mx-auto h-5 w-5 text-primary" />
                      <p className="mt-1 text-xs font-bold">{ra.funding}</p>
                      <p className="text-xs text-muted-foreground">Funding</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mt-16">
          <SectionHeading title="Recent Publications" subtitle="Research Output" description="Selected publications from our faculty in top-tier journals." />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {researchPublications.map((p) => (
              <Card key={p.id} className="glass-card p-5">
                <Badge variant="outline" className="mb-2">{p.department} • {p.year}</Badge>
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.authors}</p>
                <p className="mt-1 text-xs italic text-primary">{p.journal}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
