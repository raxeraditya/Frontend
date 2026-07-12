// components/Hero.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/40 border-b border-border/40 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Copy */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> Next-Gen Workspace Setup
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
            Upgrade Your Setup With{" "}
            <span className="text-primary">Minimal Tech</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            Discover premium audio gear, ergonomic accessories, and minimalist
            desktop gadgets engineered for maximum productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <Link href="/shop">
              <Button
                size="lg"
                className="w-full sm:w-auto font-semibold gap-2"
              >
                Shop Collection <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="relative aspect-square sm:aspect-4/3 rounded-2xl overflow-hidden border border-border/60 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop"
            alt="Minimalist Desk Setup Showcase"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
