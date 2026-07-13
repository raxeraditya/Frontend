import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import { administration } from '@/data/administration';

export const metadata: Metadata = {
  title: 'Administration',
  description: 'Meet the administrative team of St. Xavier Institute of Technology.',
};

export default function AdministrationPage() {
  return (
    <>
      <PageHeader
        title="Administration"
        subtitle="Leadership Team"
        description="Meet the dedicated team that leads our institution towards excellence."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Administration' }]} />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {administration.map((member) => (
            <Card key={member.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.designation}</p>
                </div>
              </div>
              <CardContent className="space-y-2 p-5">
                <p className="text-xs text-muted-foreground">{member.qualification}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  {member.phone}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
