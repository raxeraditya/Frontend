import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { StatisticCard } from '@/components/cards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, GraduationCap, TrendingUp, BookOpen, Globe, Target, Eye, CheckCircle2 } from 'lucide-react';
import { college } from '@/data/college';

export const metadata: Metadata = {
  title: 'About College',
  description: 'Learn about St. Xavier Institute of Technology — our history, vision, mission, campus, and accreditations.',
};

const iconMap: Record<string, typeof Award> = {
  Award, Users, GraduationCap, TrendingUp, BookOpen, Globe,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Our College"
        subtitle="Established 1987"
        description="A premier institution of higher learning committed to academic excellence, research, and holistic development."
      />

      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

        {/* About content */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <SectionHeading
              title="Our Story"
              align="left"
            />
            {college.about.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Accreditations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {college.accreditation.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {a}
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Approvals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {college.approvals.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {a}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <CardTitle className="mt-3 font-serif text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{college.vision}</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-accent/20">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle className="mt-3 font-serif text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {college.mission.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {m}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <SectionHeading title="By the Numbers" subtitle="Our Impact" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {college.statistics.map((stat) => {
              const Icon = iconMap[stat.icon] || Award;
              return (
                <StatisticCard key={stat.label} label={stat.label} value={stat.value} icon={Icon} />
              );
            })}
          </div>
        </div>

        {/* Campus Facilities */}
        <div className="mt-16">
          <SectionHeading
            title="Campus Facilities"
            subtitle="Our Infrastructure"
            description={`A ${college.campus.area} campus with ${college.campus.buildings} buildings and world-class facilities.`}
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {college.campus.facilities.map((f) => (
              <Card key={f} className="glass-card p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
