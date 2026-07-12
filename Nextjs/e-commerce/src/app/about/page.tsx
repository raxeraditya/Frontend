import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Zap, Heart, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | STORE",
  description:
    "Learn more about our mission to bring modern products & gadgets built with heart and feel.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-background min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative px-4 py-20 max-w-5xl mx-auto text-center space-y-6">
        <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold">
          Our Story
        </Badge>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
          Modern Products & Gadgets Built with{" "}
          <span className="text-primary">❤️ & Feel</span>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We believe technology shouldn&apos;t feel cold or complex. Our mission
          is to curate sleek, minimalist products that blend seamlessly into
          your daily lifestyle with tactile comfort and intuitive design.
        </p>
      </section>

      {/* 2. Visual Banner Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Team collaborating on tech products"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-border/40">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold">Why We Stand Out</h2>
          <p className="text-muted-foreground text-sm">
            Crafted with precision for tech lovers and daily creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/60 bg-card/50">
            <CardContent className="p-6 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Human-Centric Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every gadget we offer is selected for its ergonomic comfort,
                materials, and emotional resonance in hand.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/50">
            <CardContent className="p-6 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Next-Gen Performance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We combine minimal aesthetic appeal with uncompromising speed,
                battery efficiency, and reliable hardware.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/50">
            <CardContent className="p-6 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Guaranteed Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Backed by 30-day risk-free returns and dedicated customer care
                to ensure total satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="bg-muted/30 border-y border-border/40 py-12 my-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-foreground">
              50k+
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Happy Customers
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-foreground">
              120+
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Curated Products
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-foreground">
              99.4%
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Positive Reviews
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-foreground">
              24/7
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Dedicated Care
            </span>
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="p-3 w-fit mx-auto rounded-full bg-primary/10 text-primary">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold">Ready to Upgrade Your Setup?</h2>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          Explore our collection of modern tech, minimal audio gear, and tactile
          accessories today.
        </p>
        <div className="pt-2">
          <Link href="/shop">
            <Button size="lg" className="gap-2 font-semibold">
              Explore Store <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
