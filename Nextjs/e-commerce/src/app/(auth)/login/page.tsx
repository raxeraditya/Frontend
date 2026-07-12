"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // or 'next/navigation' for App Router
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  Loader2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate API Login Request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Add your actual NestJS / Backend Login logic here
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* flex-1 expands to cover all available space between top navbar and bottom */
    <div className="flex-1 grid lg:grid-cols-2 w-full bg-background">
      {/* Left Column: Interactive Form */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          {/* Brand Logo & Back to Home */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/Images/logo.png"
                alt="Logo"
                width={40}
                height={28}
                priority
              />
              <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                STORE
              </span>
            </Link>
            <Link
              href="/signup"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Need an account?
            </Link>
          </div>

          {/* Form Card */}
          <Card className="border-border/60 shadow-xl backdrop-blur-sm bg-card/95">
            <CardHeader className="space-y-1 text-center sm:text-left">
              <CardTitle className="text-2xl font-extrabold tracking-tight">
                Welcome back
              </CardTitle>
              <CardDescription className="text-xs">
                Enter your credentials to access your store account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Banner */}
                {error && (
                  <div className="rounded-md bg-destructive/15 border border-destructive/20 p-3 text-xs text-destructive font-medium">
                    {error}
                  </div>
                )}

                {/* Email Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-9 text-xs h-10 bg-background/50 focus:bg-background"
                      required
                    />
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-xs font-medium text-foreground"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-9 pr-9 text-xs h-10 bg-background/50 focus:bg-background"
                      required
                    />
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full font-semibold h-10 gap-2 text-xs"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Sign In <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border/60" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground text-[10px] font-semibold">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  type="button"
                  className="text-xs font-normal h-9"
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="text-xs font-normal h-9"
                >
                  <svg
                    className="mr-2 h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </div>
            </CardContent>

            <CardFooter className="justify-center border-t border-border/40 py-4">
              <p className="text-xs text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-primary hover:underline"
                >
                  Sign up now
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Right Column: Visual Showcase Section */}
      {/* over hidden remove scroll when relative to body */}
      <div className="hidden lg:flex relative bg-muted/40 items-center justify-center p-12 overflow-hidden">
        <div className="relative z-10 max-w-lg space-y-6 text-center">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs gap-1.5 backdrop-blur-md bg-background/50 border-primary/30"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Premium Experience
          </Badge>

          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Upgrade Your Daily Setup
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Discover carefully curated tech products, ergonomic accessories, and
            minimalist gear designed to elevate your workflow.
          </p>

          {/* Floating Product Preview Card */}
          <div className="pt-6">
            <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-border/60 bg-background/80 p-4 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-muted shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop"
                    alt="Product preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left space-y-1">
                  <p className="text-xs font-semibold line-clamp-1">
                    Minimalist Wireless Earbuds
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Active Noise Canceling • 30h Battery
                  </p>
                  <p className="text-xs font-bold text-primary">$129.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
