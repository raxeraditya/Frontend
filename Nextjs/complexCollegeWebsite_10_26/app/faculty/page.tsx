'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { FacultyCard } from '@/components/cards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { departments } from '@/data/departments';
import { faculty } from '@/data/faculty';

export default function FacultyPage() {
  const [department, setDepartment] = useState('all');

  const filtered = useMemo(() => {
    if (department === 'all') return faculty;
    return faculty.filter((f) => f.departmentId === department);
  }, [department]);

  return (
    <>
      <PageHeader
        title="Our Faculty"
        subtitle="Academic Excellence"
        description="Meet our distinguished faculty members — educators, researchers, and mentors who shape the future."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Faculty' }]} />

        {/* Filters */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">Filter by Department:</span>
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((d) => (
                <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">{filtered.length} members</span>
        </div>

        {/* Faculty grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </>
  );
}
