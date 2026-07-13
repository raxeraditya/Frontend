import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, FileText, Upload, CreditCard, ClipboardCheck, CheckCircle } from 'lucide-react';
import { admissionSteps, admissionRequirements, admissionInfo } from '@/data/admission';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admission',
  description: 'Learn about the admission process, eligibility, and requirements at St. Xavier Institute of Technology.',
};

const stepIcons = { FileText, Upload, CreditCard, ClipboardCheck, CheckCircle };

export default function AdmissionPage() {
  return (
    <>
      <PageHeader
        title="Admissions 2025-26"
        subtitle="Admission Open"
        description="Join a community of innovators, thinkers, and leaders. Your journey to excellence starts here."
      >
        <div className="flex flex-wrap gap-3">
          <Button size="lg">Apply Online</Button>
          <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white">
            Download Prospectus
          </Button>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Admission' }]} />

        {/* Key Info */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Application Fee', value: admissionInfo.applicationFee },
            { label: 'Application Deadline', value: admissionInfo.applicationDeadline },
            { label: 'Counselling Date', value: admissionInfo.counsellingDate },
            { label: 'Classes Begin', value: admissionInfo.classesBegin },
          ].map((item) => (
            <Card key={item.label} className="glass-card text-center">
              <CardContent className="p-5">
                <p className="font-serif text-xl font-bold text-primary">{item.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Steps */}
        <div className="mt-16">
          <SectionHeading title="Admission Process" subtitle="Step by Step" description="Follow these simple steps to secure your admission." />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
            {admissionSteps.map((step) => {
              const Icon = stepIcons[step.icon as keyof typeof stepIcons] || FileText;
              return (
                <Card key={step.id} className="glass-card text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="flex flex-col items-center gap-3 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-sm font-bold text-primary">
                      {step.step}
                    </div>
                    <h3 className="font-serif text-base font-bold">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-16">
          <SectionHeading title="Required Documents" subtitle="Checklist" description="Prepare these documents before starting your application." />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {admissionRequirements.map((req) => (
              <Card key={req.id} className="glass-card p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold">{req.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="mt-16 overflow-hidden border-0 bg-gradient-to-br from-primary to-accent">
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center text-primary-foreground">
            <h2 className="font-serif text-3xl font-bold">Ready to Begin Your Journey?</h2>
            <p className="max-w-xl text-primary-foreground/80">
              For admission queries, contact our admission helpline at {admissionInfo.helpline} or email {admissionInfo.helplineEmail}
            </p>
            <Button size="lg" variant="secondary">Start Application</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
