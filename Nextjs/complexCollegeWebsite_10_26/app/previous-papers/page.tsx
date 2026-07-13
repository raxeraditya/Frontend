'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Download, Search, FileText } from 'lucide-react';
import { previousYearPapers, paperDepartments, paperYears, paperSemesters } from '@/data/previousYearPapers';

export default function PreviousPapersPage() {
  const [department, setDepartment] = useState('All');
  const [year, setYear] = useState('All');
  const [semester, setSemester] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result = previousYearPapers;
    if (department !== 'All') result = result.filter((p) => p.department === department);
    if (year !== 'All') result = result.filter((p) => p.year === year);
    if (semester !== 'All') result = result.filter((p) => p.semester === semester);
    if (search) result = result.filter((p) => p.subject.toLowerCase().includes(search.toLowerCase()));
    return result;
  }, [department, year, semester, search]);

  return (
    <>
      <PageHeader
        title="Previous Year Papers"
        subtitle="Examination Resources"
        description="Access previous year examination papers to help you prepare effectively."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Previous Year Papers' }]} />

        {/* Filters */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              {paperDepartments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
            <SelectContent>
              {paperYears.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={semester} onValueChange={setSemester}>
            <SelectTrigger><SelectValue placeholder="Semester" /></SelectTrigger>
            <SelectContent>
              {paperSemesters.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by subject..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">{filtered.length} papers found</div>

        {/* Papers list */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((paper) => (
            <Card key={paper.id} className="group flex items-center gap-4 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-tight">{paper.subject}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                  <Badge variant="outline" className="text-xs">{paper.department}</Badge>
                  <span>{paper.semester}</span>
                  <span>•</span>
                  <span>{paper.year}</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{paper.course}</p>
              </div>
              <Button asChild variant="ghost" size="icon" className="shrink-0">
                <a href={paper.pdf} aria-label={`Download ${paper.subject}`}>
                  <Download className="h-5 w-5" />
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <p className="mt-4 text-muted-foreground">No papers found matching your filters.</p>
          </div>
        )}
      </div>
    </>
  );
}
