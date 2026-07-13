'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { CourseCard } from '@/components/cards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  const [level, setLevel] = useState('all');

  const filtered = useMemo(() => {
    if (level === 'all') return courses;
    return courses.filter((c) => c.level === level);
  }, [level]);

  return (
    <>
      <PageHeader
        title="Courses & Programs"
        subtitle="Academic Programs"
        description="Explore our undergraduate, postgraduate, and doctoral programs designed to shape future leaders."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Courses' }]} />

        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">Filter by Level:</span>
          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Undergraduate">Undergraduate</SelectItem>
              <SelectItem value="Postgraduate">Postgraduate</SelectItem>
              <SelectItem value="Doctoral">Doctoral</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">{filtered.length} programs</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}
