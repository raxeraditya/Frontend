"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { Breadcrumb } from "@/components/breadcrumb";
import { DownloadCard } from "@/components/cards";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { downloads, downloadCategories } from "@/data/downloads";
import { cn } from "@/lib/utils";

export default function DownloadsPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = downloads;
    if (category !== "All")
      result = result.filter((d) => d.category === category);
    if (search)
      result = result.filter((d) =>
        d.title.toLowerCase().includes(search.toLowerCase()),
      );
    return result;
  }, [category, search]);

  return (
    <>
      <PageHeader
        title="Downloads"
        subtitle="Resources"
        description="Download forms, prospectus, syllabus, fee structure, and other important documents."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Downloads" }]}
        />

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1 md:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search downloads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-220px">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {downloadCategories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            {filtered.length} files
          </span>
        </div>

        {/* Category pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {downloadCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent/10",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Downloads grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((file) => (
            <DownloadCard key={file.id} file={file} />
          ))}
        </div>
      </div>
    </>
  );
}
