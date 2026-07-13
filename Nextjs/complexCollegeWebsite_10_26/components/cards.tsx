import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Calendar, User, Download, FileText, Star, Mail, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Department } from '@/data/departments';
import type { FacultyMember } from '@/data/faculty';
import type { Course } from '@/data/courses';
import type { Notice } from '@/data/notices';
import type { DownloadFile } from '@/data/downloads';
import type { Event } from '@/data/events';
import type { GalleryItem } from '@/data/gallery';
import type { NewsItem } from '@/data/news';
import type { Testimonial } from '@/data/testimonials';

const priorityColors: Record<Notice['priority'], string> = {
  high: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  medium: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  low: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
};

export function DepartmentCard({ dept }: { dept: Department }) {
  return (
    <Link href={`/departments#${dept.id}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className={cn('relative h-40 bg-gradient-to-br', dept.color)}>
          <div className="absolute inset-0 flex items-center justify-center text-white/90">
            <span className="font-serif text-5xl font-bold opacity-30">{dept.shortName}</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="font-serif text-lg font-bold text-white">{dept.name}</h3>
          </div>
        </div>
        <CardContent className="p-5">
          <p className="line-clamp-2 text-sm text-muted-foreground">{dept.description}</p>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>{dept.facultyCount} Faculty</span>
            <span>{dept.studentsCount} Students</span>
            <span>Est. {dept.established}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Badge variant="secondary" className="mb-1">
            {member.designation}
          </Badge>
          <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
          <p className="text-xs text-white/80">{member.department}</p>
        </div>
      </div>
      <CardContent className="space-y-3 p-5">
        <div className="space-y-1.5 text-sm">
          <p className="flex items-start gap-2 text-muted-foreground">
            <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {member.qualification}
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="h-4 w-4 shrink-0 text-primary" />
            {member.experience}
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">{member.email}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {member.researchInterests.slice(0, 3).map((ri) => (
            <Badge key={ri} variant="outline" className="text-xs">
              {ri}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
          <span>{member.publications} Publications</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="group flex h-full flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Badge variant="secondary" className="mb-2">
              {course.level}
            </Badge>
            <h3 className="font-serif text-lg font-bold leading-tight">{course.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{course.department}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-xs text-muted-foreground">Duration</dt>
            <dd className="font-medium">{course.duration}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Seats</dt>
            <dd className="font-medium">{course.seats}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Fees</dt>
            <dd className="font-medium">{course.fees}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Level</dt>
            <dd className="font-medium">{course.level}</dd>
          </div>
        </div>
        <div>
          <dt className="mb-1 text-xs text-muted-foreground">Eligibility</dt>
          <dd className="text-xs">{course.eligibility}</dd>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border pt-4">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href="/admission">Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function NoticeCard({ notice }: { notice: Notice }) {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Badge className={cn('border', priorityColors[notice.priority])}>
                {notice.priority}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {new Date(notice.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>
            <h3 className="font-semibold leading-tight transition-colors group-hover:text-primary">
              {notice.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
              {notice.description}
            </p>
          </div>
        </div>
        {notice.pdf && (
          <div className="mt-3 flex justify-end">
            <Button asChild variant="ghost" size="sm">
              <Link href={notice.pdf}>
                <Download className="mr-1.5 h-4 w-4" /> Download
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function DownloadCard({ file }: { file: DownloadFile }) {
  return (
    <Card className="group flex flex-row items-center gap-4 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <FileText className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium leading-tight">{file.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="text-xs">{file.category}</Badge>
          <span>{file.year}</span>
          <span>•</span>
          <span>{file.size}</span>
        </div>
      </div>
      <Button asChild variant="ghost" size="icon" className="shrink-0">
        <Link href={file.pdf} aria-label={`Download ${file.title}`}>
          <Download className="h-5 w-5" />
        </Link>
      </Button>
    </Card>
  );
}

export function EventCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date);
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col items-center rounded-xl bg-background/90 px-3 py-2 backdrop-blur-sm">
          <span className="text-lg font-bold leading-none text-primary">
            {eventDate.getDate()}
          </span>
          <span className="text-xs uppercase text-muted-foreground">
            {eventDate.toLocaleDateString('en-US', { month: 'short' })}
          </span>
        </div>
        <Badge className="absolute right-3 top-3">{event.category}</Badge>
      </div>
      <CardContent className="space-y-3 p-5">
        <h3 className="font-serif text-lg font-bold leading-tight transition-colors group-hover:text-primary">
          {event.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
        <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-primary" /> {event.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" /> {event.location}
          </span>
          <span className="flex items-center gap-2">
            <User className="h-3.5 w-3.5 text-primary" /> {event.organizer}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Badge variant="secondary" className="mb-1.5">{item.category}</Badge>
        <h3 className="font-serif text-sm font-bold text-white">{item.title}</h3>
      </div>
    </div>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.id}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute left-3 top-3">{item.category}</Badge>
        </div>
        <CardContent className="space-y-3 p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(item.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <h3 className="font-serif text-lg font-bold leading-tight transition-colors group-hover:text-primary">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{item.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export function StatisticCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Award;
}) {
  return (
    <Card className="glass-card border-primary/10 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex flex-col items-center gap-2 p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>
        <div className="font-serif text-3xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < testimonial.rating
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-muted text-muted'
              )}
            />
          ))}
        </div>
        <p className="flex-1 text-sm italic text-muted-foreground">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 border-t border-border pt-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-xs text-muted-foreground">
              {testimonial.role} at {testimonial.company} • Batch {testimonial.batch}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
