"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border/60">
      {/* 1. Value Proposition Features Bar */}
      <div className="border-b border-border/40 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Truck className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h4 className="font-semibold text-sm">Free Shipping</h4>
              <p className="text-xs text-muted-foreground">
                On orders over $50
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h4 className="font-semibold text-sm">30 Days Return</h4>
              <p className="text-xs text-muted-foreground">
                Money back guarantee
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h4 className="font-semibold text-sm">Secure Payment</h4>
              <p className="text-xs text-muted-foreground">
                100% protected payments
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h4 className="font-semibold text-sm">24/7 Support</h4>
              <p className="text-xs text-muted-foreground">
                Dedicated support team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Info (Spans 2 cols on desktop) */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Images/logo.png"
              alt="Logo"
              width={50}
              height={35}
              priority
            />
            <span className="font-extrabold text-xl tracking-tight">STORE</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">
            Modern products & gadgets built with ❤️ and feel. Upgrade your daily
            lifestyle with our curated collection.
          </p>

          <div className="space-y-2 text-xs text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Etawah Uttar Pradesh 🇮🇳 India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 8864824612</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>work.aditya.dev@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:text-foreground transition-colors"
              >
                Shop All
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-foreground transition-colors"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/deals"
                className="hover:text-foreground transition-colors"
              >
                Hot Deals
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support Column */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Customer Care</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/faq"
                className="hover:text-foreground transition-colors"
              >
                Help Center / FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="hover:text-foreground transition-colors"
              >
                Track Order
              </Link>
            </li>
            <li>
              <Link
                href="/returns"
                className="hover:text-foreground transition-colors"
              >
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="hover:text-foreground transition-colors"
              >
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup Column */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Stay in the Loop</h3>
          <p className="text-xs text-muted-foreground">
            Subscribe to get 10% off your first order and exclusive access to
            new drops.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="text-xs h-9 bg-background"
              required
            />
            <Button size="sm" className="w-full font-medium h-9">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* 3. Bottom Bar: Copyright & Legal */}
      <div className="border-t border-border/40 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} STORE Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
