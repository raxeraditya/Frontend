// components/CategoryGrid.tsx
import Link from "next/link";
import { Headphones, Keyboard, Watch, Laptop } from "lucide-react";

const categories = [
  {
    name: "Audio Gear",
    icon: Headphones,
    href: "/shop?category=audio",
    count: "12 Items",
  },
  {
    name: "Keyboards",
    icon: Keyboard,
    href: "/shop?category=keyboards",
    count: "8 Items",
  },
  {
    name: "Wearables",
    icon: Watch,
    href: "/shop?category=wearables",
    count: "15 Items",
  },
  {
    name: "Accessories",
    icon: Laptop,
    href: "/shop?category=accessories",
    count: "24 Items",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.name} href={cat.href}>
              <div className="p-6 rounded-xl border border-border/60 bg-card hover:bg-muted/50 transition-all group cursor-pointer space-y-3">
                <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cat.count}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
