import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Calendar } from 'lucide-react';
import { scholarships } from '@/data/scholarships';

export const metadata: Metadata = {
  title: 'Scholarships',
  description: 'Scholarship opportunities available at St. Xavier Institute of Technology.',
};

export default function ScholarshipsPage() {
  return (
    <>
      <PageHeader
        title="Scholarships"
        subtitle="Financial Aid"
        description="We believe financial constraints should never come between you and quality education."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Scholarships' }]} />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.map((s) => (
            <Card key={s.id} className="glass-card flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{s.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> Deadline: {new Date(s.deadline).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
                <div className="mt-auto space-y-2 border-t border-border pt-4">
                  <div>
                    <dt className="text-xs text-muted-foreground">Eligibility</dt>
                    <dd className="text-sm">{s.eligibility}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Amount</dt>
                    <dd className="font-serif text-lg font-bold text-primary">{s.amount}</dd>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-12 overflow-hidden border-0 bg-gradient-to-br from-primary to-accent">
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center text-primary-foreground">
            <h2 className="font-serif text-2xl font-bold">Need Help with Scholarships?</h2>
            <p className="max-w-xl text-primary-foreground/80">
              Our scholarship office can help you find the right financial aid. Visit the scholarship office or contact us for guidance.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
