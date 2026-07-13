import Link from 'next/link';
import { Home, Search, GraduationCap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-6 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <GraduationCap className="h-10 w-10" />
          </div>
        </div>
        <h1 className="font-serif text-8xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 font-serif text-2xl font-bold">Page Not Found</h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/"><Home className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact"><Search className="mr-2 h-4 w-4" /> Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
