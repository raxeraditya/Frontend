export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  link?: string;
}

export const announcements: Announcement[] = [
  {
    id: 'a001',
    title: 'Admissions Open for 2025-26 Academic Session',
    description:
      'Applications are now open for all undergraduate and postgraduate programs. Last date to apply: May 31, 2025. Apply online through the admission portal.',
    date: '2025-01-15',
    category: 'Admission',
    link: '/admission',
  },
  {
    id: 'a002',
    title: 'JEE Main 2025 Counselling Schedule Released',
    description:
      'The counselling schedule for JEE Main qualified candidates has been published. Please check the admission portal for slot booking.',
    date: '2025-06-20',
    category: 'Admission',
    link: '/admission',
  },
  {
    id: 'a003',
    title: 'Scholarship Applications Now Open',
    description:
      'Merit-based and need-based scholarships for the 2025-26 session are now open for application. Visit the scholarships page for details.',
    date: '2025-02-01',
    category: 'Scholarship',
    link: '/scholarships',
  },
  {
    id: 'a004',
    title: 'Mid-Semester Examinations Postponed',
    description:
      'Due to unforeseen circumstances, the mid-semester examinations scheduled for March 10-15 have been postponed to March 17-22. New timetable available on the downloads page.',
    date: '2025-03-05',
    category: 'Examination',
    link: '/downloads',
  },
  {
    id: 'a005',
    title: 'Industry Visit to TCS Campus — Registration Open',
    description:
      'CSE and IT students (3rd year) can register for an industrial visit to the TCS campus on April 8, 2025. Limited seats available.',
    date: '2025-03-20',
    category: 'Academic',
    link: '/events',
  },
  {
    id: 'a006',
    title: 'Guest Lecture by Dr. Anil Kakodkar',
    description:
      'Eminent scientist Dr. Anil Kakodkar will deliver a guest lecture on "Nuclear Energy and Sustainable Development" on April 12, 2025.',
    date: '2025-03-28',
    category: 'Academic',
    link: '/events',
  },
  {
    id: 'a007',
    title: 'New Collaborative Research Program with IIT Bombay',
    description:
      'SXIT has signed an MoU with IIT Bombay for joint research in AI and Machine Learning. Faculty and students can apply for collaborative projects.',
    date: '2025-02-15',
    category: 'Research',
    link: '/research',
  },
  {
    id: 'a008',
    title: 'Sports Day Registration — Last Week',
    description:
      'Students interested in participating in the Annual Sports Day can register at the Sports Office. Last date: March 10, 2025.',
    date: '2025-03-01',
    category: 'Event',
    link: '/events',
  },
  {
    id: 'a009',
    title: 'Library Timings Extended During Exams',
    description:
      'The central library will remain open 24/7 from March 15 to April 15 to support students during the examination period.',
    date: '2025-03-12',
    category: 'Facility',
  },
  {
    id: 'a010',
    title: 'Bus Route Changes for Next Semester',
    description:
      'New bus routes and stops have been added for the next semester. Please check the transportation page for updated schedules.',
    date: '2025-04-25',
    category: 'Facility',
  },
];
