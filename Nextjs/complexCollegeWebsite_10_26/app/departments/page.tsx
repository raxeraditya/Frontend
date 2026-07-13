import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { DepartmentCard } from '@/components/cards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { departments } from '@/data/departments';

export const metadata: Metadata = {
  title: 'Departments',
  description: 'Explore the academic departments at St. Xavier Institute of Technology.',
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="Academic Departments"
        subtitle="Departments"
        description="World-class departments offering cutting-edge programs in engineering, technology, and management."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Departments' }]} />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>

        {/* Department Details */}
        <div className="mt-16 space-y-12">
          {departments.map((dept) => (
            <div key={dept.id} id={dept.id} className="scroll-mt-32">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="relative h-64 lg:col-span-2">
                    <img src={dept.image} alt={dept.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{dept.shortName}</Badge>
                      <span className="text-xs text-muted-foreground">Est. {dept.established}</span>
                    </div>
                    <h2 className="mt-2 font-serif text-2xl font-bold">{dept.name}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{dept.description}</p>

                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <dt className="text-xs text-muted-foreground">Head of Department</dt>
                        <dd className="font-medium">{dept.hod}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-muted-foreground">Faculty</dt>
                        <dd className="font-medium">{dept.facultyCount} Members</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-muted-foreground">Students</dt>
                        <dd className="font-medium">{dept.studentsCount}</dd>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold">Courses Offered</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {dept.courses.map((c) => (
                          <Badge key={c} variant="outline">{c}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold">Research Areas</h4>
                        <ul className="mt-2 space-y-1">
                          {dept.researchAreas.map((r) => (
                            <li key={r} className="text-xs text-muted-foreground">• {r}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Laboratories</h4>
                        <ul className="mt-2 space-y-1">
                          {dept.labs.map((l) => (
                            <li key={l} className="text-xs text-muted-foreground">• {l}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
