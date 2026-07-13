export interface AdminMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  image: string;
  email: string;
  phone: string;
}

export const administration: AdminMember[] = [
  {
    id: 'admin001',
    name: 'Dr. Rajesh Kumar Sharma',
    designation: 'Principal',
    department: 'Administration',
    qualification: 'Ph.D. (Computer Science), IIT Bombay',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'principal@sxit.edu.in',
    phone: '+91-11-2456-7890',
  },
  {
    id: 'admin002',
    name: 'Dr. Meera Krishnan',
    designation: 'Vice Principal',
    department: 'Administration',
    qualification: 'Ph.D. (Electronics), IIT Madras',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'vp@sxit.edu.in',
    phone: '+91-11-2456-7891',
  },
  {
    id: 'admin003',
    name: 'Mr. Suresh Bhat',
    designation: 'Registrar',
    department: 'Administration',
    qualification: 'M.A., LLB',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'registrar@sxit.edu.in',
    phone: '+91-11-2456-7892',
  },
  {
    id: 'admin004',
    name: 'Dr. Anjali Mehta',
    designation: 'Dean (Academics)',
    department: 'CSE',
    qualification: 'Ph.D. (Computer Science), IIT Bombay',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'dean.academics@sxit.edu.in',
    phone: '+91-11-2456-7893',
  },
  {
    id: 'admin005',
    name: 'Dr. Suresh Nair',
    designation: 'Dean (Research)',
    department: 'ECE',
    qualification: 'Ph.D. (Electronics), IIT Delhi',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'dean.research@sxit.edu.in',
    phone: '+91-11-2456-7894',
  },
  {
    id: 'admin006',
    name: 'Mr. Rakesh Pandey',
    designation: 'Dean (Student Welfare)',
    department: 'Administration',
    qualification: 'M.A. (Psychology), MSW',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'dean.sw@sxit.edu.in',
    phone: '+91-11-2456-7895',
  },
  {
    id: 'admin007',
    name: 'Dr. Anita Deshpande',
    designation: 'Dean (Industry Relations)',
    department: 'MBA',
    qualification: 'Ph.D. (Management), IIM Ahmedabad',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'dean.ir@sxit.edu.in',
    phone: '+91-11-2456-7896',
  },
  {
    id: 'admin008',
    name: 'Mr. Devendra Kumar',
    designation: 'Finance Officer',
    department: 'Administration',
    qualification: 'M.Com, CA',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'finance@sxit.edu.in',
    phone: '+91-11-2456-7897',
  },
  {
    id: 'admin009',
    name: 'Mrs. Lakshmi Iyer',
    designation: 'Librarian',
    department: 'Library',
    qualification: 'M.Lib, Ph.D. (Library Science)',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'librarian@sxit.edu.in',
    phone: '+91-11-2456-7898',
  },
  {
    id: 'admin010',
    name: 'Mr. Arun Prakash',
    designation: 'Placement Officer',
    department: 'Training & Placement',
    qualification: 'M.Tech, MBA',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    email: 'placement@sxit.edu.in',
    phone: '+91-11-2456-7899',
  },
];
