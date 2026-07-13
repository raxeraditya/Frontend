export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  established: number;
  hod: string;
  facultyCount: number;
  studentsCount: number;
  courses: string[];
  labs: string[];
  researchAreas: string[];
  image: string;
  color: string;
}

export const departments: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    description:
      'A leading department focused on computing fundamentals, software engineering, AI/ML, and emerging technologies. We prepare students for the rapidly evolving tech industry through hands-on projects and research.',
    icon: 'Cpu',
    established: 1989,
    hod: 'Dr. Anjali Mehta',
    facultyCount: 32,
    studentsCount: 960,
    courses: ['B.Tech CSE', 'M.Tech CSE', 'Ph.D. Computer Science'],
    labs: [
      'AI & Machine Learning Lab',
      'Cloud Computing Lab',
      'Cybersecurity Lab',
      'IoT & Embedded Systems Lab',
      'Data Science Lab',
    ],
    researchAreas: [
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Computing',
      'Cybersecurity',
      'Blockchain Technology',
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    description:
      'Bridging hardware and software, the ECE department excels in VLSI design, signal processing, wireless communication, and embedded systems. Our graduates power the semiconductor and telecom industries.',
    icon: 'Radio',
    established: 1990,
    hod: 'Dr. Suresh Nair',
    facultyCount: 28,
    studentsCount: 720,
    courses: ['B.Tech ECE', 'M.Tech VLSI Design', 'Ph.D. Electronics'],
    labs: [
      'VLSI Design Lab',
      'Digital Signal Processing Lab',
      'RF & Microwave Lab',
      'Microcontroller Lab',
      'Optical Communication Lab',
    ],
    researchAreas: [
      'VLSI Design',
      '5G & 6G Communication',
      'Signal Processing',
      'Embedded Systems',
      'IoT Sensors',
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    color: 'from-emerald-600 to-teal-500',
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    description:
      'One of the oldest and most respected departments, focusing on thermal sciences, manufacturing, robotics, and automotive engineering. We combine traditional principles with modern CAD/CAM technologies.',
    icon: 'Cog',
    established: 1987,
    hod: 'Dr. Vikram Singh',
    facultyCount: 24,
    studentsCount: 600,
    courses: ['B.Tech Mechanical', 'M.Tech Thermal Engineering', 'Ph.D. Mechanical'],
    labs: [
      'Thermal Engineering Lab',
      'CAD/CAM Lab',
      'Robotics & Automation Lab',
      'Fluid Mechanics Lab',
      'Manufacturing Process Lab',
    ],
    researchAreas: [
      'Robotics & Automation',
      'Thermal Engineering',
      'Advanced Manufacturing',
      'Automotive Design',
      'Renewable Energy Systems',
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    color: 'from-orange-600 to-amber-500',
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortName: 'CIVIL',
    description:
      'Shaping the infrastructure of tomorrow through structural engineering, environmental engineering, and smart city technologies. Our students work on real-world projects from design to execution.',
    icon: 'Building2',
    established: 1988,
    hod: 'Dr. Priya Iyer',
    facultyCount: 20,
    studentsCount: 480,
    courses: ['B.Tech Civil', 'M.Tech Structural Engineering', 'Ph.D. Civil'],
    labs: [
      'Structural Engineering Lab',
      'Geotechnical Lab',
      'Environmental Engineering Lab',
      'Surveying Lab',
      'Concrete Technology Lab',
    ],
    researchAreas: [
      'Structural Engineering',
      'Smart Infrastructure',
      'Environmental Engineering',
      'Geotechnical Engineering',
      'Sustainable Construction',
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    color: 'from-slate-600 to-gray-500',
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EEE',
    description:
      'Powering the future through electrical machines, power systems, renewable energy, and smart grids. Our department is at the forefront of the green energy transition.',
    icon: 'Zap',
    established: 1991,
    hod: 'Dr. Ramesh Gupta',
    facultyCount: 22,
    studentsCount: 540,
    courses: ['B.Tech EEE', 'M.Tech Power Systems', 'Ph.D. Electrical'],
    labs: [
      'Power Systems Lab',
      'Electrical Machines Lab',
      'Renewable Energy Lab',
      'Control Systems Lab',
      'High Voltage Lab',
    ],
    researchAreas: [
      'Renewable Energy',
      'Smart Grids',
      'Power Electronics',
      'Electric Vehicles',
      'Control Systems',
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    color: 'from-yellow-600 to-orange-500',
  },
  {
    id: 'it',
    name: 'Information Technology',
    shortName: 'IT',
    description:
      'Bridging business and technology, the IT department specializes in enterprise systems, data analytics, cloud infrastructure, and IT management. Graduates are industry-ready from day one.',
    icon: 'Network',
    established: 1999,
    hod: 'Dr. Kavita Reddy',
    facultyCount: 18,
    studentsCount: 420,
    courses: ['B.Tech IT', 'M.Tech IT', 'Ph.D. Information Systems'],
    labs: [
      'Enterprise Systems Lab',
      'Data Analytics Lab',
      'Networking Lab',
      'DevOps Lab',
      'Blockchain Lab',
    ],
    researchAreas: [
      'Big Data Analytics',
      'Cloud Architecture',
      'DevOps & Automation',
      'Enterprise Systems',
      'Information Security',
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    color: 'from-indigo-600 to-blue-500',
  },
  {
    id: 'mca',
    name: 'Master of Computer Applications',
    shortName: 'MCA',
    description:
      'A premier postgraduate program developing software professionals with strong foundations in programming, system design, and application development. Industry-aligned curriculum with live projects.',
    icon: 'Code2',
    established: 1995,
    hod: 'Dr. Sanjay Verma',
    facultyCount: 12,
    studentsCount: 240,
    courses: ['MCA (3-year)', 'MCA (2-year Lateral)'],
    labs: [
      'Programming Lab',
      'Web Technologies Lab',
      'Mobile App Development Lab',
      'Database Lab',
    ],
    researchAreas: [
      'Software Engineering',
      'Mobile Computing',
      'Web Technologies',
      'Database Systems',
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    color: 'from-purple-600 to-violet-500',
  },
  {
    id: 'mba',
    name: 'Department of Management Studies',
    shortName: 'MBA',
    description:
      'Cultivating future business leaders through a rigorous curriculum in finance, marketing, HR, and operations. Case-study methodology with industry internships and entrepreneurial mentorship.',
    icon: 'Briefcase',
    established: 2001,
    hod: 'Dr. Anita Deshpande',
    facultyCount: 15,
    studentsCount: 300,
    courses: ['MBA (2-year)', 'Executive MBA'],
    labs: [
      'Business Analytics Lab',
      'Finance Lab',
      'Simulation Lab',
    ],
    researchAreas: [
      'Business Analytics',
      'Marketing Strategy',
      'Organizational Behavior',
      'Financial Management',
      'Entrepreneurship',
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    color: 'from-rose-600 to-pink-500',
  },
];
