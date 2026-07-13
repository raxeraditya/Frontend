import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sxit.edu.in"),
  title: {
    default: "St. Xavier Institute of Technology — Excellence in Education",
    template: "%s | St. Xavier Institute of Technology",
  },
  description:
    "A premier institution of higher learning committed to academic excellence, research, and holistic development. Explore our departments, faculty, courses, admissions, and placements.",
  keywords: [
    "college",
    "engineering college",
    "university",
    "admissions",
    "placements",
    "higher education",
    "research",
    "courses",
    "faculty",
    "St. Xavier Institute of Technology",
  ],
  authors: [{ name: "St. Xavier Institute of Technology" }],
  openGraph: {
    title: "St. Xavier Institute of Technology — Excellence in Education",
    description:
      "A premier institution committed to academic excellence, research, and holistic development.",
    type: "website",
    locale: "en_US",
    siteName: "St. Xavier Institute of Technology",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop",
        width: 1200,
        height: 630,
        alt: "St. Xavier Institute of Technology Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Xavier Institute of Technology",
    description:
      "A premier institution committed to academic excellence, research, and holistic development.",
    images: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
