export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  department: string;
  faculty: string[];
  publications: number;
  projects: number;
  funding: string;
}

export interface ResearchPublication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  department: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'ra001',
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Research focusing on deep learning, natural language processing, computer vision, and federated learning. The lab has published 120+ papers in top-tier journals and conferences.',
    department: 'Computer Science & Engineering',
    faculty: ['Dr. Anjali Mehta', 'Dr. Megha Joshi', 'Dr. Vivek Sharma'],
    publications: 120,
    projects: 8,
    funding: '₹1.2 Crore from DST & Industry',
  },
  {
    id: 'ra002',
    title: 'Cybersecurity & Cryptography',
    description:
      'Research on network security, cryptographic protocols, blockchain security, and zero-trust architectures. Collaborations with national security agencies.',
    department: 'Computer Science & Engineering',
    faculty: ['Dr. Sneha Kapoor', 'Prof. Arjun Reddy'],
    publications: 65,
    projects: 5,
    funding: '₹85 Lakhs from DRDO',
  },
  {
    id: 'ra003',
    title: 'VLSI Design & Embedded Systems',
    description:
      'Research on low-power VLSI design, mixed-signal circuits, FPGA-based systems, and System-on-Chip design. Industry partnership with semiconductor companies.',
    department: 'Electronics & Communication Engineering',
    faculty: ['Dr. Suresh Nair', 'Dr. Lakshmi Pillai', 'Prof. Karthik Rao'],
    publications: 80,
    projects: 6,
    funding: '₹95 Lakhs from MeitY',
  },
  {
    id: 'ra004',
    title: 'Renewable Energy & Smart Grids',
    description:
      'Research on solar energy systems, wind power integration, smart grid technologies, and electric vehicle charging infrastructure.',
    department: 'Electrical & Electronics Engineering',
    faculty: ['Dr. Ramesh Gupta', 'Dr. Sunita Sharma'],
    publications: 55,
    projects: 4,
    funding: '₹70 Lakhs from MNRE',
  },
  {
    id: 'ra005',
    title: 'Robotics & Industrial Automation',
    description:
      'Research on autonomous robots, industrial manipulators, computer vision for robotics, and Industry 4.0 technologies.',
    department: 'Mechanical Engineering',
    faculty: ['Dr. Rohit Agarwal', 'Dr. Vikram Singh'],
    publications: 45,
    projects: 3,
    funding: '₹50 Lakhs from AICTE',
  },
  {
    id: 'ra006',
    title: 'Sustainable Construction & Smart Infrastructure',
    description:
      'Research on green building materials, earthquake-resistant structures, and IoT-enabled smart infrastructure monitoring.',
    department: 'Civil Engineering',
    faculty: ['Dr. Priya Iyer', 'Dr. Amit Khanna'],
    publications: 40,
    projects: 3,
    funding: '₹45 Lakhs from DST',
  },
  {
    id: 'ra007',
    title: 'Big Data Analytics & Cloud Computing',
    description:
      'Research on distributed data processing, cloud-native architectures, serverless computing, and data privacy in cloud environments.',
    department: 'Information Technology',
    faculty: ['Dr. Kavita Reddy', 'Prof. Manish Tiwari'],
    publications: 35,
    projects: 4,
    funding: '₹60 Lakhs from Industry',
  },
  {
    id: 'ra008',
    title: 'Business Analytics & Entrepreneurship',
    description:
      'Research on consumer behavior analytics, market prediction models, startup ecosystems, and social entrepreneurship.',
    department: 'Department of Management Studies',
    faculty: ['Dr. Anita Deshpande', 'Dr. Rajeev Menon'],
    publications: 30,
    projects: 2,
    funding: '₹35 Lakhs from Industry',
  },
];

export const researchPublications: ResearchPublication[] = [
  { id: 'rp001', title: 'Federated Learning for Privacy-Preserving Healthcare Analytics', authors: 'Dr. Anjali Mehta et al.', journal: 'IEEE Transactions on PAMI', year: '2024', department: 'CSE' },
  { id: 'rp002', title: 'Deep Reinforcement Learning for Autonomous Navigation', authors: 'Dr. Megha Joshi et al.', journal: 'NeurIPS', year: '2024', department: 'CSE' },
  { id: 'rp003', title: 'Zero-Trust Architecture for IoT Networks', authors: 'Dr. Sneha Kapoor et al.', journal: 'ACM CCS', year: '2024', department: 'CSE' },
  { id: 'rp004', title: 'Low-Power VLSI Design for Edge AI', authors: 'Dr. Suresh Nair et al.', journal: 'IEEE TCAD', year: '2024', department: 'ECE' },
  { id: 'rp005', title: '5G Network Slicing for IoT Applications', authors: 'Dr. Lakshmi Pillai et al.', journal: 'IEEE Communications', year: '2024', department: 'ECE' },
  { id: 'rp006', title: 'Smart Grid Optimization Using Machine Learning', authors: 'Dr. Ramesh Gupta et al.', journal: 'IEEE Transactions on Smart Grid', year: '2024', department: 'EEE' },
  { id: 'rp007', title: 'Autonomous Robot Path Planning in Dynamic Environments', authors: 'Dr. Rohit Agarwal et al.', journal: 'ICRA', year: '2024', department: 'MECH' },
  { id: 'rp008', title: 'Earthquake-Resistant Concrete with Smart Materials', authors: 'Dr. Priya Iyer et al.', journal: 'Engineering Structures', year: '2024', department: 'CIVIL' },
  { id: 'rp009', title: 'Serverless Data Processing at Scale', authors: 'Dr. Kavita Reddy et al.', journal: 'IEEE Cloud Computing', year: '2024', department: 'IT' },
  { id: 'rp010', title: 'Consumer Sentiment Analysis Using Transformer Models', authors: 'Dr. Anita Deshpande et al.', journal: 'Journal of Business Research', year: '2024', department: 'MBA' },
];

export const researchCenters = [
  { id: 'rc1', name: 'AI & Machine Learning Research Center', established: 2019, director: 'Dr. Anjali Mehta' },
  { id: 'rc2', name: 'Cybersecurity Research Lab', established: 2020, director: 'Dr. Sneha Kapoor' },
  { id: 'rc3', name: 'VLSI & Embedded Systems Lab', established: 2018, director: 'Dr. Suresh Nair' },
  { id: 'rc4', name: 'Renewable Energy Research Center', established: 2021, director: 'Dr. Ramesh Gupta' },
  { id: 'rc5', name: 'Robotics & Automation Lab', established: 2020, director: 'Dr. Rohit Agarwal' },
  { id: 'rc6', name: 'Innovation & Incubation Center', established: 2023, director: 'Dr. Anita Deshpande' },
];
