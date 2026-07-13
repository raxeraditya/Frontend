import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { college } from '@/data/college';

export const metadata: Metadata = {
  title: 'Principal Message',
  description: 'A message from the Principal of St. Xavier Institute of Technology.',
};

export default function PrincipalMessagePage() {
  return (
    <>
      <PageHeader
        title="Principal's Message"
        subtitle="Leadership"
        description="Words of inspiration and vision from our esteemed Principal."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Principal Message' }]} />

        <div className="mt-8 mx-auto max-w-4xl">
          <Card className="overflow-hidden glass-card">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={college.principal.image}
                  alt={college.principal.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center p-6 md:p-10">
                <Quote className="h-10 w-10 text-primary/30" />
                <p className="mt-4 text-lg italic leading-relaxed text-muted-foreground">
                  {college.principal.message}
                </p>
                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="font-serif text-2xl font-bold">{college.principal.name}</h3>
                  <p className="text-primary">Principal, {college.shortName}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{college.principal.qualification}</p>
                  <p className="text-sm text-muted-foreground">{college.principal.experience}</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card className="glass-card p-6 text-center">
              <p className="font-serif text-3xl font-bold text-primary">37+</p>
              <p className="text-sm text-muted-foreground">Years of Leadership</p>
            </Card>
            <Card className="glass-card p-6 text-center">
              <p className="font-serif text-3xl font-bold text-primary">85+</p>
              <p className="text-sm text-muted-foreground">Research Publications</p>
            </Card>
            <Card className="glass-card p-6 text-center">
              <p className="font-serif text-3xl font-bold text-primary">12K+</p>
              <p className="text-sm text-muted-foreground">Alumni Network</p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
