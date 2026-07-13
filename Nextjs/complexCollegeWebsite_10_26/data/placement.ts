export interface PlacementRecord {
  id: string;
  studentName: string;
  company: string;
  package: string;
  role: string;
  year: string;
  department: string;
  image: string;
}

export interface Recruiter {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

export interface PlacementStat {
  year: string;
  rate: string;
  highestPackage: string;
  averagePackage: string;
  totalOffers: number;
}

export const placementStats: PlacementStat[] = [
  { year: '2024', rate: '94%', highestPackage: '₹42 LPA', averagePackage: '₹8.5 LPA', totalOffers: 612 },
  { year: '2023', rate: '91%', highestPackage: '₹38 LPA', averagePackage: '₹7.8 LPA', totalOffers: 580 },
  { year: '2022', rate: '89%', highestPackage: '₹35 LPA', averagePackage: '₹7.2 LPA', totalOffers: 545 },
  { year: '2021', rate: '87%', highestPackage: '₹32 LPA', averagePackage: '₹6.8 LPA', totalOffers: 510 },
  { year: '2020', rate: '85%', highestPackage: '₹28 LPA', averagePackage: '₹6.2 LPA', totalOffers: 475 },
];

export const topRecruiters: Recruiter[] = [
  { id: 'r001', name: 'TCS', logo: '🏢', industry: 'IT Services' },
  { id: 'r002', name: 'Infosys', logo: '🏢', industry: 'IT Services' },
  { id: 'r003', name: 'Wipro', logo: '🏢', industry: 'IT Services' },
  { id: 'r004', name: 'Accenture', logo: '🏢', industry: 'Consulting' },
  { id: 'r005', name: 'Amazon', logo: '📦', industry: 'E-Commerce' },
  { id: 'r006', name: 'Microsoft', logo: '💻', industry: 'Technology' },
  { id: 'r007', name: 'Google', logo: '🔍', industry: 'Technology' },
  { id: 'r008', name: 'IBM', logo: '🏢', industry: 'Technology' },
  { id: 'r009', name: 'Capgemini', logo: '🏢', industry: 'Consulting' },
  { id: 'r010', name: 'Cognizant', logo: '🏢', industry: 'IT Services' },
  { id: 'r011', name: 'Deloitte', logo: '📊', industry: 'Consulting' },
  { id: 'r012', name: 'HCL', logo: '🏢', industry: 'IT Services' },
  { id: 'r013', name: 'Tech Mahindra', logo: '🏢', industry: 'IT Services' },
  { id: 'r014', name: 'L&T', logo: '🏗️', industry: 'Engineering' },
  { id: 'r015', name: 'Flipkart', logo: '🛒', industry: 'E-Commerce' },
  { id: 'r016', name: 'Samsung', logo: '📱', industry: 'Electronics' },
  { id: 'r017', name: 'Oracle', logo: '🗄️', industry: 'Technology' },
  { id: 'r018', name: 'JP Morgan', logo: '🏦', industry: 'Finance' },
];

export const placementRecords: PlacementRecord[] = [
  { id: 'p001', studentName: 'Aarav Sharma', company: 'Amazon', package: '₹42 LPA', role: 'SDE-1', year: '2024', department: 'CSE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p002', studentName: 'Priya Patel', company: 'Google', package: '₹38 LPA', role: 'Software Engineer', year: '2024', department: 'CSE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p003', studentName: 'Rohan Verma', company: 'Microsoft', package: '₹35 LPA', role: 'Software Engineer', year: '2024', department: 'CSE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p004', studentName: 'Ananya Iyer', company: 'TCS Digital', package: '₹12 LPA', role: 'System Engineer', year: '2024', department: 'IT', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p005', studentName: 'Karan Mehta', company: 'Accenture', package: '₹10 LPA', role: 'Associate Software Engineer', year: '2024', department: 'ECE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p006', studentName: 'Sneha Reddy', company: 'Infosys', package: '₹8 LPA', role: 'Systems Engineer', year: '2024', department: 'CSE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p007', studentName: 'Vikrant Singh', company: 'Wipro', package: '₹7.5 LPA', role: 'Project Engineer', year: '2024', department: 'EEE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p008', studentName: 'Divya Nair', company: 'Capgemini', package: '₹8 LPA', role: 'Analyst', year: '2024', department: 'ECE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p009', studentName: 'Arjun Pillai', company: 'Cognizant', package: '₹7 LPA', role: 'Programmer Analyst', year: '2024', department: 'MECH', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p010', studentName: 'Ishita Gupta', company: 'Deloitte', package: '₹9 LPA', role: 'Business Analyst', year: '2024', department: 'MBA', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p011', studentName: 'Nikhil Rao', company: 'IBM', package: '₹11 LPA', role: 'Associate Developer', year: '2024', department: 'IT', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p012', studentName: 'Pooja Desai', company: 'Samsung', package: '₹14 LPA', role: 'R&D Engineer', year: '2024', department: 'ECE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p013', studentName: 'Manish Kumar', company: 'Oracle', package: '₹16 LPA', role: 'Software Developer', year: '2024', department: 'CSE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p014', studentName: 'Ritu Agarwal', company: 'JP Morgan', package: '₹18 LPA', role: 'Quantitative Analyst', year: '2024', department: 'CSE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p015', studentName: 'Saurabh Jain', company: 'Flipkart', package: '₹22 LPA', role: 'SDE-1', year: '2024', department: 'CSE', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
  { id: 'p016', studentName: 'Kavya Menon', company: 'L&T', package: '₹6.5 LPA', role: 'Graduate Engineer Trainee', year: '2024', department: 'CIVIL', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop' },
];

export const trainingPrograms = [
  {
    id: 't001',
    title: 'Soft Skills & Communication Training',
    description: 'Comprehensive training on communication, presentation, and interpersonal skills.',
    duration: '40 hours',
    semester: 'Semester 3 & 4',
  },
  {
    id: 't002',
    title: 'Technical Aptitude & Problem Solving',
    description: 'Training on quantitative aptitude, logical reasoning, and technical problem-solving.',
    duration: '60 hours',
    semester: 'Semester 5',
  },
  {
    id: 't003',
    title: 'Coding & DSA Bootcamp',
    description: 'Intensive bootcamp on data structures, algorithms, and competitive programming.',
    duration: '80 hours',
    semester: 'Semester 5 & 6',
  },
  {
    id: 't004',
    title: 'Mock Interviews & Group Discussions',
    description: 'Simulated interview sessions and GD practice with industry mentors.',
    duration: '30 hours',
    semester: 'Semester 7 & 8',
  },
  {
    id: 't005',
    title: 'Resume Building Workshop',
    description: 'Professional resume building and LinkedIn profile optimization workshop.',
    duration: '10 hours',
    semester: 'Semester 7',
  },
  {
    id: 't006',
    title: 'Industry Readiness Program',
    description: 'Capstone training covering corporate etiquette, workplace skills, and industry tools.',
    duration: '50 hours',
    semester: 'Semester 8',
  },
];
