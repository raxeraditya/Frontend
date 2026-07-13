export interface NavLink {
  title: string;
  href: string;
  children?: { title: string; href: string; description?: string }[];
}

export const navLinks: NavLink[] = [
  { title: 'Home', href: '/' },
  {
    title: 'About',
    href: '/about',
    children: [
      { title: 'About College', href: '/about', description: 'Learn about our history and vision' },
      { title: 'Principal Message', href: '/principal-message', description: 'A message from our Principal' },
      { title: 'Administration', href: '/administration', description: 'Meet our administrative team' },
    ],
  },
  {
    title: 'Academics',
    href: '/departments',
    children: [
      { title: 'Departments', href: '/departments', description: 'Explore our academic departments' },
      { title: 'Faculty', href: '/faculty', description: 'Meet our distinguished faculty' },
      { title: 'Courses', href: '/courses', description: 'View all programs offered' },
      { title: 'Research', href: '/research', description: 'Discover our research initiatives' },
    ],
  },
  {
    title: 'Admissions',
    href: '/admission',
    children: [
      { title: 'Admission', href: '/admission', description: 'Admission process and criteria' },
      { title: 'Scholarships', href: '/scholarships', description: 'Scholarship opportunities' },
      { title: 'Fee Structure', href: '/downloads', description: 'Download fee details' },
    ],
  },
  {
    title: 'Placements',
    href: '/placements',
    children: [
      { title: 'Placements', href: '/placements', description: 'Placement records and statistics' },
      { title: 'Training & Placement', href: '/training-placement', description: 'Training programs and cell info' },
    ],
  },
  {
    title: 'Resources',
    href: '/downloads',
    children: [
      { title: 'Downloads', href: '/downloads', description: 'Forms, prospectus, and documents' },
      { title: 'Previous Year Papers', href: '/previous-papers', description: 'Past examination papers' },
      { title: 'Syllabus', href: '/syllabus', description: 'Program syllabi' },
      { title: 'Academic Calendar', href: '/academic-calendar', description: 'Important academic dates' },
      { title: 'Time Table', href: '/timetable', description: 'Class schedules' },
    ],
  },
  {
    title: 'Campus Life',
    href: '/gallery',
    children: [
      { title: 'Gallery', href: '/gallery', description: 'Photos from campus and events' },
      { title: 'News', href: '/news', description: 'Latest news and updates' },
      { title: 'Events', href: '/events', description: 'Upcoming and past events' },
      { title: 'Notice Board', href: '/notices', description: 'Important notices' },
    ],
  },
  { title: 'Contact', href: '/contact' },
  { title: 'FAQ', href: '/faq' },
];
