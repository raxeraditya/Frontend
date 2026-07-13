import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Award, Users, Briefcase } from 'lucide-react';
import { placementStats, topRecruiters, placementRecords } from '@/data/placement';

export const metadata: Metadata = {
  title: 'Placements',
  description: 'Placement records, statistics, and top recruiters at St. Xavier Institute of Technology.',
};

export default function PlacementsPage() {
  return (
    <>
      <PageHeader
        title="Placements"
        subtitle="Career Success"
        description="Our students are placed at leading companies across the globe with competitive packages."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Placements' }]} />

        {/* Stats overview */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: TrendingUp, label: 'Placement Rate', value: '94%' },
            { icon: Award, label: 'Highest Package', value: '₹42 LPA' },
            { icon: Briefcase, label: 'Average Package', value: '₹8.5 LPA' },
            { icon: Users, label: 'Total Offers', value: '612+' },
          ].map((s) => (
            <Card key={s.label} className="glass-card text-center">
              <CardContent className="flex flex-col items-center gap-2 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="font-serif text-2xl font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Year-wise stats */}
        <div className="mt-16">
          <SectionHeading title="Year-wise Placement Statistics" subtitle="Track Record" />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-semibold">Year</th>
                  <th className="p-4 text-center font-semibold">Placement Rate</th>
                  <th className="p-4 text-center font-semibold">Highest Package</th>
                  <th className="p-4 text-center font-semibold">Average Package</th>
                  <th className="p-4 text-center font-semibold">Total Offers</th>
                </tr>
              </thead>
              <tbody>
                {placementStats.map((s) => (
                  <tr key={s.year} className="border-b border-border/50 transition-colors hover:bg-accent/5">
                    <td className="p-4 font-medium">{s.year}</td>
                    <td className="p-4 text-center"><Badge variant="secondary">{s.rate}</Badge></td>
                    <td className="p-4 text-center font-semibold text-primary">{s.highestPackage}</td>
                    <td className="p-4 text-center">{s.averagePackage}</td>
                    <td className="p-4 text-center">{s.totalOffers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="mt-16">
          <SectionHeading title="Our Top Recruiters" subtitle="Placement Partners" description="Leading companies trust our graduates." />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {topRecruiters.map((r) => (
              <Card key={r.id} className="flex items-center justify-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{r.logo}</span>
                  <span className="text-sm font-semibold">{r.name}</span>
                  <span className="text-xs text-muted-foreground">{r.industry}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent placements */}
        <div className="mt-16">
          <SectionHeading title="Recent Placements" subtitle="Class of 2024" description="Celebrating the success of our students." />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {placementRecords.slice(0, 8).map((p) => (
              <Card key={p.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.image} alt={p.studentName} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge variant="secondary" className="mb-1">{p.package}</Badge>
                    <h3 className="font-serif text-base font-bold text-white">{p.studentName}</h3>
                    <p className="text-xs text-white/80">{p.role} • {p.company}</p>
                    <p className="text-xs text-white/60">{p.department} • {p.year}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
