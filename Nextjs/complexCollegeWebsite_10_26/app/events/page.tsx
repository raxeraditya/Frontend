"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { Breadcrumb } from "@/components/breadcrumb";
import { EventCard } from "@/components/cards";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { events } from "@/data/events";

export default function EventsPage() {
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const cats = new Set(events.map((e) => e.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const filtered = useMemo(() => {
    const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
    if (category === "all") return sorted;
    return sorted.filter((e) => e.category === category);
  }, [category]);

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Campus Events"
        description="Discover upcoming and past events — from tech fests to cultural celebrations."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Events" }]}
        />

        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">
            Filter by Category:
          </span>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-200px">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c === "all" ? "All Categories" : c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            {filtered.length} events
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}
