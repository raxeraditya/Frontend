import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { college } from "@/data/college";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
          alt="Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-4 py-20 lg:min-h-[700px]">
        <div className="max-w-3xl">
          <Badge className="mb-4 gap-1.5 bg-white/15 text-white backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" /> {college.accreditation[0]}
          </Badge>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {college.name}
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl md:text-2xl">
            {college.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
            {college.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/admission">
                <GraduationCap className="h-5 w-5" /> Admissions 2025-26
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="/about">
                Explore Campus <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-6">
            {college.statistics.slice(0, 4).map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <Award className="h-5 w-5 text-white/70" />
                <div>
                  <div className="font-serif text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
