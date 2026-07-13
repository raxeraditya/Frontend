export interface PreviousYearPaper {
  id: string;
  course: string;
  semester: string;
  subject: string;
  year: string;
  pdf: string;
  department: string;
}

export const previousYearPapers: PreviousYearPaper[] = [
  // CSE
  { id: 'pp001', course: 'B.Tech CSE', semester: 'Sem 1', subject: 'Programming in C', year: '2024', pdf: '/pdfs/bca-sem1.pdf', department: 'CSE' },
  { id: 'pp002', course: 'B.Tech CSE', semester: 'Sem 1', subject: 'Engineering Mathematics', year: '2024', pdf: '/pdfs/cse-math1-2024.pdf', department: 'CSE' },
  { id: 'pp003', course: 'B.Tech CSE', semester: 'Sem 2', subject: 'Data Structures', year: '2024', pdf: '/pdfs/cse-ds-2024.pdf', department: 'CSE' },
  { id: 'pp004', course: 'B.Tech CSE', semester: 'Sem 3', subject: 'Operating Systems', year: '2024', pdf: '/pdfs/cse-os-2024.pdf', department: 'CSE' },
  { id: 'pp005', course: 'B.Tech CSE', semester: 'Sem 3', subject: 'DBMS', year: '2024', pdf: '/pdfs/cse-dbms-2024.pdf', department: 'CSE' },
  { id: 'pp006', course: 'B.Tech CSE', semester: 'Sem 4', subject: 'Computer Networks', year: '2024', pdf: '/pdfs/cse-cn-2024.pdf', department: 'CSE' },
  { id: 'pp007', course: 'B.Tech CSE', semester: 'Sem 4', subject: 'Theory of Computation', year: '2024', pdf: '/pdfs/cse-toc-2024.pdf', department: 'CSE' },
  { id: 'pp008', course: 'B.Tech CSE', semester: 'Sem 5', subject: 'Machine Learning', year: '2024', pdf: '/pdfs/cse-ml-2024.pdf', department: 'CSE' },
  { id: 'pp009', course: 'B.Tech CSE', semester: 'Sem 5', subject: 'Software Engineering', year: '2024', pdf: '/pdfs/cse-se-2024.pdf', department: 'CSE' },
  { id: 'pp010', course: 'B.Tech CSE', semester: 'Sem 6', subject: 'Cloud Computing', year: '2024', pdf: '/pdfs/cse-cloud-2024.pdf', department: 'CSE' },
  { id: 'pp011', course: 'B.Tech CSE', semester: 'Sem 6', subject: 'Artificial Intelligence', year: '2024', pdf: '/pdfs/cse-ai-2024.pdf', department: 'CSE' },
  { id: 'pp012', course: 'B.Tech CSE', semester: 'Sem 7', subject: 'Cybersecurity', year: '2024', pdf: '/pdfs/cse-cyber-2024.pdf', department: 'CSE' },
  { id: 'pp013', course: 'B.Tech CSE', semester: 'Sem 1', subject: 'Programming in C', year: '2023', pdf: '/pdfs/cse-c-2023.pdf', department: 'CSE' },
  { id: 'pp014', course: 'B.Tech CSE', semester: 'Sem 3', subject: 'Operating Systems', year: '2023', pdf: '/pdfs/cse-os-2023.pdf', department: 'CSE' },
  { id: 'pp015', course: 'B.Tech CSE', semester: 'Sem 5', subject: 'Machine Learning', year: '2023', pdf: '/pdfs/cse-ml-2023.pdf', department: 'CSE' },
  // ECE
  { id: 'pp016', course: 'B.Tech ECE', semester: 'Sem 1', subject: 'Digital Electronics', year: '2024', pdf: '/pdfs/ece-digital-2024.pdf', department: 'ECE' },
  { id: 'pp017', course: 'B.Tech ECE', semester: 'Sem 2', subject: 'Analog Circuits', year: '2024', pdf: '/pdfs/ece-analog-2024.pdf', department: 'ECE' },
  { id: 'pp018', course: 'B.Tech ECE', semester: 'Sem 3', subject: 'Signals & Systems', year: '2024', pdf: '/pdfs/ece-signals-2024.pdf', department: 'ECE' },
  { id: 'pp019', course: 'B.Tech ECE', semester: 'Sem 4', subject: 'Communication Systems', year: '2024', pdf: '/pdfs/ece-comm-2024.pdf', department: 'ECE' },
  { id: 'pp020', course: 'B.Tech ECE', semester: 'Sem 5', subject: 'VLSI Design', year: '2024', pdf: '/pdfs/ece-vlsi-2024.pdf', department: 'ECE' },
  { id: 'pp021', course: 'B.Tech ECE', semester: 'Sem 6', subject: 'Digital Signal Processing', year: '2024', pdf: '/pdfs/ece-dsp-2024.pdf', department: 'ECE' },
  { id: 'pp022', course: 'B.Tech ECE', semester: 'Sem 3', subject: 'Signals & Systems', year: '2023', pdf: '/pdfs/ece-signals-2023.pdf', department: 'ECE' },
  { id: 'pp023', course: 'B.Tech ECE', semester: 'Sem 5', subject: 'VLSI Design', year: '2023', pdf: '/pdfs/ece-vlsi-2023.pdf', department: 'ECE' },
  // Mechanical
  { id: 'pp024', course: 'B.Tech Mechanical', semester: 'Sem 1', subject: 'Engineering Mechanics', year: '2024', pdf: '/pdfs/mech-mechanics-2024.pdf', department: 'MECH' },
  { id: 'pp025', course: 'B.Tech Mechanical', semester: 'Sem 2', subject: 'Thermodynamics', year: '2024', pdf: '/pdfs/mech-thermo-2024.pdf', department: 'MECH' },
  { id: 'pp026', course: 'B.Tech Mechanical', semester: 'Sem 3', subject: 'Fluid Mechanics', year: '2024', pdf: '/pdfs/mech-fluid-2024.pdf', department: 'MECH' },
  { id: 'pp027', course: 'B.Tech Mechanical', semester: 'Sem 4', subject: 'Heat Transfer', year: '2024', pdf: '/pdfs/mech-heat-2024.pdf', department: 'MECH' },
  { id: 'pp028', course: 'B.Tech Mechanical', semester: 'Sem 5', subject: 'Machine Design', year: '2024', pdf: '/pdfs/mech-design-2024.pdf', department: 'MECH' },
  { id: 'pp029', course: 'B.Tech Mechanical', semester: 'Sem 6', subject: 'CAD/CAM', year: '2024', pdf: '/pdfs/mech-cadcam-2024.pdf', department: 'MECH' },
  { id: 'pp030', course: 'B.Tech Mechanical', semester: 'Sem 2', subject: 'Thermodynamics', year: '2023', pdf: '/pdfs/mech-thermo-2023.pdf', department: 'MECH' },
  // Civil
  { id: 'pp031', course: 'B.Tech Civil', semester: 'Sem 1', subject: 'Structural Analysis', year: '2024', pdf: '/pdfs/civil-structural-2024.pdf', department: 'CIVIL' },
  { id: 'pp032', course: 'B.Tech Civil', semester: 'Sem 2', subject: 'Geotechnical Engineering', year: '2024', pdf: '/pdfs/civil-geo-2024.pdf', department: 'CIVIL' },
  { id: 'pp033', course: 'B.Tech Civil', semester: 'Sem 3', subject: 'Transportation Engineering', year: '2024', pdf: '/pdfs/civil-transport-2024.pdf', department: 'CIVIL' },
  { id: 'pp034', course: 'B.Tech Civil', semester: 'Sem 4', subject: 'Environmental Engineering', year: '2024', pdf: '/pdfs/civil-env-2024.pdf', department: 'CIVIL' },
  { id: 'pp035', course: 'B.Tech Civil', semester: 'Sem 5', subject: 'Concrete Technology', year: '2024', pdf: '/pdfs/civil-concrete-2024.pdf', department: 'CIVIL' },
  // EEE
  { id: 'pp036', course: 'B.Tech EEE', semester: 'Sem 1', subject: 'Electric Circuits', year: '2024', pdf: '/pdfs/eee-circuits-2024.pdf', department: 'EEE' },
  { id: 'pp037', course: 'B.Tech EEE', semester: 'Sem 2', subject: 'Electrical Machines', year: '2024', pdf: '/pdfs/eee-machines-2024.pdf', department: 'EEE' },
  { id: 'pp038', course: 'B.Tech EEE', semester: 'Sem 3', subject: 'Power Systems', year: '2024', pdf: '/pdfs/eee-power-2024.pdf', department: 'EEE' },
  { id: 'pp039', course: 'B.Tech EEE', semester: 'Sem 4', subject: 'Control Systems', year: '2024', pdf: '/pdfs/eee-control-2024.pdf', department: 'EEE' },
  { id: 'pp040', course: 'B.Tech EEE', semester: 'Sem 5', subject: 'Power Electronics', year: '2024', pdf: '/pdfs/eee-pe-2024.pdf', department: 'EEE' },
  // IT
  { id: 'pp041', course: 'B.Tech IT', semester: 'Sem 1', subject: 'Programming Fundamentals', year: '2024', pdf: '/pdfs/it-prog-2024.pdf', department: 'IT' },
  { id: 'pp042', course: 'B.Tech IT', semester: 'Sem 2', subject: 'Data Structures', year: '2024', pdf: '/pdfs/it-ds-2024.pdf', department: 'IT' },
  { id: 'pp043', course: 'B.Tech IT', semester: 'Sem 3', subject: 'Database Systems', year: '2024', pdf: '/pdfs/it-db-2024.pdf', department: 'IT' },
  { id: 'pp044', course: 'B.Tech IT', semester: 'Sem 4', subject: 'Web Technologies', year: '2024', pdf: '/pdfs/it-web-2024.pdf', department: 'IT' },
  { id: 'pp045', course: 'B.Tech IT', semester: 'Sem 5', subject: 'Cloud Computing', year: '2024', pdf: '/pdfs/it-cloud-2024.pdf', department: 'IT' },
  // MCA
  { id: 'pp046', course: 'MCA', semester: 'Sem 1', subject: 'Programming in C & C++', year: '2024', pdf: '/pdfs/mca-cpp-2024.pdf', department: 'MCA' },
  { id: 'pp047', course: 'MCA', semester: 'Sem 2', subject: 'Object Oriented Programming', year: '2024', pdf: '/pdfs/mca-oop-2024.pdf', department: 'MCA' },
  { id: 'pp048', course: 'MCA', semester: 'Sem 3', subject: 'Database Management Systems', year: '2024', pdf: '/pdfs/mca-dbms-2024.pdf', department: 'MCA' },
  { id: 'pp049', course: 'MCA', semester: 'Sem 4', subject: 'Web Technologies', year: '2024', pdf: '/pdfs/mca-web-2024.pdf', department: 'MCA' },
  { id: 'pp050', course: 'MCA', semester: 'Sem 5', subject: 'Mobile Application Development', year: '2024', pdf: '/pdfs/mca-mobile-2024.pdf', department: 'MCA' },
  // MBA
  { id: 'pp051', course: 'MBA', semester: 'Sem 1', subject: 'Financial Accounting', year: '2024', pdf: '/pdfs/mba-finance-2024.pdf', department: 'MBA' },
  { id: 'pp052', course: 'MBA', semester: 'Sem 2', subject: 'Marketing Management', year: '2024', pdf: '/pdfs/mba-mktg-2024.pdf', department: 'MBA' },
  { id: 'pp053', course: 'MBA', semester: 'Sem 3', subject: 'Business Analytics', year: '2024', pdf: '/pdfs/mba-analytics-2024.pdf', department: 'MBA' },
  { id: 'pp054', course: 'MBA', semester: 'Sem 4', subject: 'Strategic Management', year: '2024', pdf: '/pdfs/mba-strategy-2024.pdf', department: 'MBA' },
];

export const paperDepartments = ['All', 'CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT', 'MCA', 'MBA'];
export const paperYears = ['All', '2024', '2023', '2022'];
export const paperSemesters = ['All', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8'];
