'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/page-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { timetableEntries, timetableDays, timetablePeriods, timetableDepartments, timetableYears } from '@/data/timetable';

export default function TimetablePage() {
  const [department, setDepartment] = useState('CSE');
  const [year, setYear] = useState('2nd Year');

  const entries = useMemo(() => {
    return timetableEntries.filter((e) => e.department === department && e.year === year);
  }, [department, year]);

  const getEntry = (day: string, period: string) => {
    return entries.find((e) => e.day === day && e.period === period);
  };

  return (
    <>
      <PageHeader
        title="Time Table"
        subtitle="Class Schedule"
        description="View the weekly class schedule for your department and year."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Time Table' }]} />

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-full sm:w-[280px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              {timetableDepartments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-full sm:w-[200px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              {timetableYears.map((y) => <SelectItem key={y} value={y}>{y}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Timetable grid */}
        <Card className="mt-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 text-left font-semibold">Day / Time</th>
                  {timetablePeriods.map((p) => (
                    <th key={p.period} className="p-4 text-center font-semibold">
                      <div className="text-xs">{p.period}</div>
                      <div className="text-xs font-normal text-muted-foreground">{p.time}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetableDays.map((day) => (
                  <tr key={day} className="border-b border-border/50">
                    <td className="p-4 font-medium">{day}</td>
                    {timetablePeriods.map((p) => {
                      const entry = getEntry(day, p.period);
                      return (
                        <td key={p.period} className="p-2 text-center">
                          {entry ? (
                            <div className="rounded-lg bg-primary/5 p-2">
                              <p className="text-xs font-semibold text-primary">{entry.subject}</p>
                              <p className="text-xs text-muted-foreground">{entry.room}</p>
                            </div>
                          ) : (
                            <div className="rounded-lg bg-muted/30 p-2 text-xs text-muted-foreground">—</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <p className="mt-4 text-xs text-muted-foreground">
          Note: This is a sample timetable. Actual timetables may vary. Please check with your department for the most up-to-date schedule.
        </p>
      </div>
    </>
  );
}
