export interface ContactInfo {
  phone: string[];
  email: string[];
  address: string;
  googleMapIframe: string;
  officeHours: string;
  departments: {
    name: string;
    phone: string;
    email: string;
    hours: string;
  }[];
}

export const contact: ContactInfo = {
  phone: ['+91-11-2456-7890', '+91-11-2456-7891'],
  email: ['info@sxit.edu.in', 'admissions@sxit.edu.in'],
  address:
    'St. Xavier Institute of Technology, MG Road, Sector 21, New Delhi - 110021, India',
  googleMapIframe:
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
  officeHours: 'Monday to Friday: 9:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM',
  departments: [
    {
      name: 'Admission Office',
      phone: '+91-11-2456-7892',
      email: 'admissions@sxit.edu.in',
      hours: 'Mon-Sat: 9 AM - 5 PM',
    },
    {
      name: 'Examination Cell',
      phone: '+91-11-2456-7893',
      email: 'exams@sxit.edu.in',
      hours: 'Mon-Fri: 10 AM - 4 PM',
    },
    {
      name: 'Training & Placement Cell',
      phone: '+91-11-2456-7894',
      email: 'placements@sxit.edu.in',
      hours: 'Mon-Fri: 9 AM - 5 PM',
    },
    {
      name: 'Library',
      phone: '+91-11-2456-7895',
      email: 'library@sxit.edu.in',
      hours: 'Mon-Sat: 8 AM - 10 PM',
    },
    {
      name: 'Hostel Office',
      phone: '+91-11-2456-7896',
      email: 'hostel@sxit.edu.in',
      hours: 'Mon-Sat: 9 AM - 6 PM',
    },
    {
      name: 'Sports Office',
      phone: '+91-11-2456-7897',
      email: 'sports@sxit.edu.in',
      hours: 'Mon-Sat: 7 AM - 8 PM',
    },
  ],
};
