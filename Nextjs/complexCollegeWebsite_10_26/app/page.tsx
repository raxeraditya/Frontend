import Link from 'next/link';
import { Award, Users, GraduationCap, TrendingUp, BookOpen, Globe, ArrowRight, Quote, Bell, Calendar, Newspaper, ChevronRight } from 'lucide-react';
import { Hero } from '@/components/hero';
import { SectionHeading } from '@/components/section-heading';
import { StatisticCard, DepartmentCard, NoticeCard, EventCard, NewsCard, TestimonialCard, GalleryCard } from '@/components/cards';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { college } from '@/data/college';
import { departments } from '@/data/departments';
import { notices } from '@/data/notices';
import { events } from '@/data/events';
import { news } from '@/data/news';
import { gallery } from '@/data/gallery';
import { testimonials } from '@/data/testimonials';
import { topRecruiters } from '@/data/placement';

const iconMap: Record<string, typeof Award> = {
  Award, Users, GraduationCap, TrendingUp, BookOpen, Globe,
};

export default function HomePage() {
  const latestNotices = [...notices].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  const upcomingEvents = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);
  const latestNews = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const galleryPreview = gallery.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Statistics */}
      <section className="border-b border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Our Impact in Numbers"
            subtitle="By the Numbers"
            description="Three decades of excellence in education, research, and community impact."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {college.statistics.map((stat) => {
              const Icon = iconMap[stat.icon] || Award;
              return (
                <StatisticCard key={stat.label} label={stat.label} value={stat.value} icon={Icon} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Explore Our Departments"
            subtitle="Academic Departments"
            description="World-class departments offering cutting-edge programs in engineering, technology, and management."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.slice(0, 8).map((dept) => (
              <DepartmentCard key={dept.id} dept={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notices & Upcoming Events */}
      <section className="border-y border-border bg-card/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Notices */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-serif text-2xl font-bold">
                  <Bell className="h-6 w-6 text-primary" /> Latest Notices
                </h2>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/notices">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="flex flex-col gap-3">
                {latestNotices.map((notice) => (
                  <NoticeCard key={notice.id} notice={notice} />
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-serif text-2xl font-bold">
                  <Calendar className="h-6 w-6 text-primary" /> Upcoming Events
                </h2>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/events">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="flex flex-col gap-4">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Latest News & Updates"
            subtitle="News Room"
            description="Stay informed about the latest happenings, achievements, and announcements."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="border-y border-border bg-card/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Our Top Recruiters"
            subtitle="Placement Partners"
            description="Leading companies from across the globe recruit our graduates year after year."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {topRecruiters.slice(0, 12).map((recruiter) => (
              <Card key={recruiter.id} className="flex items-center justify-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{recruiter.logo}</span>
                  <span className="text-sm font-semibold">{recruiter.name}</span>
                  <span className="text-xs text-muted-foreground">{recruiter.industry}</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/placements">View Placement Records <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Campus Life in Pictures"
            subtitle="Gallery"
            description="A glimpse into the vibrant life at our campus — events, facilities, and moments."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {galleryPreview.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/gallery">View Full Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="border-y border-border bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            title="Principal's Message"
            subtitle="Leadership"
          />
          <Card className="mt-10 overflow-hidden glass-card">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={college.principal.image}
                  alt={college.principal.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center p-6 md:p-8">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 text-base italic text-muted-foreground md:text-lg">
                  {college.principal.message}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <h3 className="font-serif text-xl font-bold">{college.principal.name}</h3>
                  <p className="text-sm text-primary">Principal, {college.shortName}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{college.principal.qualification}</p>
                  <p className="text-xs text-muted-foreground">{college.principal.experience}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="mt-4 w-fit">
                  <Link href="/principal-message">Read Full Message <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="What Our Students Say"
            subtitle="Testimonials"
            description="Hear from our alumni who are making their mark at leading companies worldwide."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.slice(0, 4).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Quick Links" subtitle="Explore" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              { label: 'Admissions', href: '/admission', icon: GraduationCap },
              { label: 'Courses', href: '/courses', icon: BookOpen },
              { label: 'Faculty', href: '/faculty', icon: Users },
              { label: 'Placements', href: '/placements', icon: TrendingUp },
              { label: 'Gallery', href: '/gallery', icon: Award },
              { label: 'News & Events', href: '/news', icon: Newspaper },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="group flex flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <link.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
