export interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  pdf?: string;
}

export const notices: Notice[] = [
  {
    id: 'n001',
    title: 'Last Date for Semester Fee Submission',
    description:
      'All students are informed that the last date for odd semester fee submission is July 15, 2025. A late fee of ₹500/day will be charged after the deadline.',
    date: '2025-06-25',
    priority: 'high',
    pdf: '/pdfs/notice-fee-submission.pdf',
  },
  {
    id: 'n002',
    title: 'Revised Academic Calendar for 2025-26',
    description:
      'The academic calendar for the 2025-26 session has been revised. Classes for the odd semester will commence on August 1, 2025. Please download the updated calendar.',
    date: '2025-06-20',
    priority: 'high',
    pdf: '/pdfs/notice-revised-calendar.pdf',
  },
  {
    id: 'n003',
    title: 'Internal Assessment Marks Published',
    description:
      'Internal assessment marks for the even semester have been published on the student portal. Students can check their marks and report discrepancies by July 5.',
    date: '2025-06-18',
    priority: 'medium',
  },
  {
    id: 'n004',
    title: 'Campus Wi-Fi Maintenance Notice',
    description:
      'The campus Wi-Fi network will be under maintenance on July 3, 2025, from 2:00 AM to 6:00 AM. Internet services will be unavailable during this period.',
    date: '2025-06-22',
    priority: 'low',
  },
  {
    id: 'n005',
    title: 'Industrial Visit to BHEL — CSE Department',
    description:
      'The CSE department is organizing an industrial visit to BHEL on July 12, 2025. Interested students should register with their class representatives by July 8.',
    date: '2025-06-28',
    priority: 'medium',
    pdf: '/pdfs/notice-bhel-visit.pdf',
  },
  {
    id: 'n006',
    title: 'Scholarship Renewal — Document Submission',
    description:
      'Students availing scholarships must submit renewal documents (income certificate, mark sheets) to the scholarship office by July 10, 2025.',
    date: '2025-06-15',
    priority: 'high',
    pdf: '/pdfs/notice-scholarship-renewal.pdf',
  },
  {
    id: 'n007',
    title: 'Guest Lecture on Data Science Career Opportunities',
    description:
      'A guest lecture on "Career Opportunities in Data Science" will be delivered by Mr. Rajesh Kumar, Senior Data Scientist at Google, on July 5, 2025, at 3:00 PM in Seminar Hall 2.',
    date: '2025-06-30',
    priority: 'medium',
  },
  {
    id: 'n008',
    title: 'Library Books Return Reminder',
    description:
      'All students are requested to return borrowed library books before the semester break. Late returns will incur a fine of ₹10/day per book.',
    date: '2025-06-12',
    priority: 'low',
  },
  {
    id: 'n009',
    title: 'Hostel Room Allotment for New Students',
    description:
      'Hostel room allotment for first-year students will be done on July 20, 2025. Students must bring their admission letter and ID proof for verification.',
    date: '2025-07-01',
    priority: 'high',
    pdf: '/pdfs/notice-hostel-allotment.pdf',
  },
  {
    id: 'n010',
    title: 'Anti-Ragging Committee — Contact Numbers',
    description:
      'The Anti-Ragging Committee is available 24/7. Students can report any ragging incidents to the helpline numbers listed in this notice. Strict action will be taken against offenders.',
    date: '2025-06-05',
    priority: 'high',
    pdf: '/pdfs/notice-anti-ragging.pdf',
  },
  {
    id: 'n011',
    title: 'Sports Trials for Inter-College Tournament',
    description:
      'Trials for the inter-college cricket, football, and basketball teams will be held on July 8-9, 2025, at the sports complex. Interested students should report by 7:00 AM.',
    date: '2025-06-27',
    priority: 'medium',
  },
  {
    id: 'n012',
    title: 'Examination Form Submission — Supplementary Exams',
    description:
      'Students who need to appear for supplementary examinations must submit their exam forms by July 15, 2025. Forms are available at the examination cell.',
    date: '2025-06-10',
    priority: 'high',
    pdf: '/pdfs/notice-supplementary-exam.pdf',
  },
  {
    id: 'n013',
    title: 'Research Paper Submission — National Conference',
    description:
      'Faculty and PG students are invited to submit research papers for the National Conference on Emerging Technologies. Last date for submission: August 15, 2025.',
    date: '2025-06-08',
    priority: 'medium',
  },
  {
    id: 'n014',
    title: 'Bus Route and Timing Update',
    description:
      'New bus routes have been added for the upcoming semester. Updated routes and timings are available on the transportation notice board and website.',
    date: '2025-07-02',
    priority: 'low',
  },
  {
    id: 'n015',
    title: 'Medical Camp — Free Health Check-up',
    description:
      'A free medical camp will be organized on July 15, 2025, at the medical center. All students and staff can avail of free health check-ups and consultations.',
    date: '2025-06-29',
    priority: 'low',
  },
];
