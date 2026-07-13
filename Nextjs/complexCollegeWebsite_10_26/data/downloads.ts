export interface DownloadFile {
  id: string;
  title: string;
  category: string;
  year: string;
  size: string;
  pdf: string;
}

export const downloads: DownloadFile[] = [
  // Prospectus & Brochure
  {
    id: 'dl001',
    title: 'College Prospectus 2025-26',
    category: 'Prospectus',
    year: '2025',
    size: '4.2 MB',
    pdf: '/pdfs/prospectus-2025.pdf',
  },
  {
    id: 'dl002',
    title: 'Admission Brochure',
    category: 'Brochure',
    year: '2025',
    size: '2.8 MB',
    pdf: '/pdfs/admission-brochure.pdf',
  },
  {
    id: 'dl003',
    title: 'Department Brochure — CSE',
    category: 'Brochure',
    year: '2025',
    size: '1.5 MB',
    pdf: '/pdfs/cse-brochure.pdf',
  },
  {
    id: 'dl004',
    title: 'Department Brochure — ECE',
    category: 'Brochure',
    year: '2025',
    size: '1.3 MB',
    pdf: '/pdfs/ece-brochure.pdf',
  },
  // Admission Forms
  {
    id: 'dl005',
    title: 'Admission Application Form',
    category: 'Admission Forms',
    year: '2025',
    size: '0.8 MB',
    pdf: '/pdfs/admission-form.pdf',
  },
  {
    id: 'dl006',
    title: 'Hostel Application Form',
    category: 'Forms',
    year: '2025',
    size: '0.5 MB',
    pdf: '/pdfs/hostel-form.pdf',
  },
  {
    id: 'dl007',
    title: 'Scholarship Application Form',
    category: 'Forms',
    year: '2025',
    size: '0.6 MB',
    pdf: '/pdfs/scholarship-form.pdf',
  },
  {
    id: 'dl008',
    title: 'Library Membership Form',
    category: 'Forms',
    year: '2025',
    size: '0.4 MB',
    pdf: '/pdfs/library-form.pdf',
  },
  {
    id: 'dl009',
    title: 'Transfer Certificate Request Form',
    category: 'Forms',
    year: '2025',
    size: '0.3 MB',
    pdf: '/pdfs/tc-form.pdf',
  },
  {
    id: 'dl010',
    title: 'Bonafide Certificate Form',
    category: 'Forms',
    year: '2025',
    size: '0.3 MB',
    pdf: '/pdfs/bonafide-form.pdf',
  },
  // Fee Structure
  {
    id: 'dl011',
    title: 'Fee Structure 2025-26 — All Programs',
    category: 'Fee Structure',
    year: '2025',
    size: '1.1 MB',
    pdf: '/pdfs/fee-structure-2025.pdf',
  },
  {
    id: 'dl012',
    title: 'Hostel Fee Structure',
    category: 'Fee Structure',
    year: '2025',
    size: '0.7 MB',
    pdf: '/pdfs/hostel-fee.pdf',
  },
  // Academic Calendar
  {
    id: 'dl013',
    title: 'Academic Calendar 2025-26',
    category: 'Academic Calendar',
    year: '2025',
    size: '0.9 MB',
    pdf: '/pdfs/academic-calendar-2025.pdf',
  },
  {
    id: 'dl014',
    title: 'Academic Calendar 2024-25',
    category: 'Academic Calendar',
    year: '2024',
    size: '0.9 MB',
    pdf: '/pdfs/academic-calendar-2024.pdf',
  },
  // Exam Schedule
  {
    id: 'dl015',
    title: 'End-Semester Exam Schedule — May 2025',
    category: 'Exam Schedule',
    year: '2025',
    size: '0.8 MB',
    pdf: '/pdfs/exam-schedule-may2025.pdf',
  },
  {
    id: 'dl016',
    title: 'Mid-Semester Exam Schedule — Sep 2025',
    category: 'Exam Schedule',
    year: '2025',
    size: '0.7 MB',
    pdf: '/pdfs/exam-schedule-sep2025.pdf',
  },
  // Holiday List
  {
    id: 'dl017',
    title: 'Holiday List 2025',
    category: 'Holiday List',
    year: '2025',
    size: '0.5 MB',
    pdf: '/pdfs/holiday-list-2025.pdf',
  },
  // Rules
  {
    id: 'dl018',
    title: 'College Rules & Regulations',
    category: 'Rules',
    year: '2025',
    size: '1.2 MB',
    pdf: '/pdfs/rules-regulations.pdf',
  },
  {
    id: 'dl019',
    title: 'Hostel Rules & Regulations',
    category: 'Rules',
    year: '2025',
    size: '0.9 MB',
    pdf: '/pdfs/hostel-rules.pdf',
  },
  {
    id: 'dl020',
    title: 'Library Rules',
    category: 'Rules',
    year: '2025',
    size: '0.6 MB',
    pdf: '/pdfs/library-rules.pdf',
  },
  // Syllabus
  {
    id: 'dl021',
    title: 'B.Tech CSE Syllabus — All Semesters',
    category: 'Syllabus',
    year: '2025',
    size: '3.5 MB',
    pdf: '/pdfs/syllabus-btech-cse.pdf',
  },
  {
    id: 'dl022',
    title: 'B.Tech ECE Syllabus — All Semesters',
    category: 'Syllabus',
    year: '2025',
    size: '3.2 MB',
    pdf: '/pdfs/syllabus-btech-ece.pdf',
  },
  {
    id: 'dl023',
    title: 'B.Tech Mechanical Syllabus — All Semesters',
    category: 'Syllabus',
    year: '2025',
    size: '3.0 MB',
    pdf: '/pdfs/syllabus-btech-mech.pdf',
  },
  {
    id: 'dl024',
    title: 'B.Tech Civil Syllabus — All Semesters',
    category: 'Syllabus',
    year: '2025',
    size: '2.8 MB',
    pdf: '/pdfs/syllabus-btech-civil.pdf',
  },
  {
    id: 'dl025',
    title: 'MCA Syllabus — All Semesters',
    category: 'Syllabus',
    year: '2025',
    size: '2.5 MB',
    pdf: '/pdfs/syllabus-mca.pdf',
  },
  {
    id: 'dl026',
    title: 'MBA Syllabus — All Semesters',
    category: 'Syllabus',
    year: '2025',
    size: '2.7 MB',
    pdf: '/pdfs/syllabus-mba.pdf',
  },
];

export const downloadCategories = [
  'All',
  'Prospectus',
  'Brochure',
  'Admission Forms',
  'Forms',
  'Fee Structure',
  'Academic Calendar',
  'Exam Schedule',
  'Holiday List',
  'Rules',
  'Syllabus',
];
