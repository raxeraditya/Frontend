export interface CollegeInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  established: number;
  motto: string;
  vision: string;
  mission: string[];
  about: string[];
  logo: string;
  accreditation: string[];
  approvals: string[];
  campus: {
    area: string;
    location: string;
    buildings: number;
    facilities: string[];
  };
  principal: {
    name: string;
    message: string;
    image: string;
    qualification: string;
    experience: string;
  };
  statistics: {
    label: string;
    value: string;
    icon: string;
  }[];
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}

export const college: CollegeInfo = {
  name: 'St. Xavier Institute of Technology',
  shortName: 'SXIT',
  tagline: 'Excellence in Education, Leadership in Innovation',
  description:
    'A premier institution of higher learning committed to academic excellence, cutting-edge research, and the holistic development of every student.',
  established: 1987,
  motto: 'Knowledge • Integrity • Service',
  vision:
    'To be a globally recognized institution that nurtures innovative thinkers, ethical leaders, and lifelong learners who transform society through knowledge and compassion.',
  mission: [
    'Provide quality education that blends theoretical knowledge with practical application.',
    'Foster a culture of research, innovation, and entrepreneurship.',
    'Develop socially responsible professionals with strong ethical values.',
    'Create an inclusive learning environment that celebrates diversity and individual growth.',
    'Build strong industry partnerships for placements, internships, and collaborative research.',
  ],
  about: [
    'Founded in 1987, St. Xavier Institute of Technology has grown from a modest engineering college into one of the region\'s most respected institutions of higher learning. Over three decades, we have built a reputation for academic rigor, cutting-edge research, and a commitment to producing graduates who are ready to lead in their fields.',
    'Our 45-acre campus is home to state-of-the-art laboratories, a digital library with over 80,000 volumes, modern smart classrooms, and dedicated research centers. We offer undergraduate and postgraduate programs across engineering, management, computer applications, and sciences.',
    'With a distinguished faculty of over 180 members, partnerships with 40+ global universities, and a thriving alumni network of 12,000+ graduates, SXIT provides an ecosystem where students are empowered to explore, innovate, and excel.',
  ],
  logo: '/logo.svg',
  accreditation: [
    'NAAC A+ Accredited',
    'NBA Accredited Programs',
    'ISO 9001:2015 Certified',
  ],
  approvals: [
    'Approved by AICTE',
    'Affiliated to State Technical University',
    'Recognized by UGC under Section 2(f) & 12(B)',
  ],
  campus: {
    area: '45 Acres',
    location: 'MG Road, Sector 21, New Delhi - 110021',
    buildings: 18,
    facilities: [
      'Central Digital Library',
      '24/7 Computer Labs',
      'Sports Complex with Olympic Pool',
      'Auditorium (1200 seats)',
      'Innovation & Incubation Center',
      'On-Campus Hostels (Boys & Girls)',
      'Medical Center',
      'Cafeteria & Food Court',
      'Gymnasium & Fitness Center',
      'Transportation Fleet',
    ],
  },
  principal: {
    name: 'Dr. Rajesh Kumar Sharma',
    message:
      'At St. Xavier Institute of Technology, we believe education is not merely about acquiring knowledge but about transforming lives. Our mission is to create an environment where curiosity thrives, innovation is celebrated, and every student discovers their unique potential. We are committed to nurturing not just skilled professionals, but responsible global citizens who will shape the future with integrity and compassion. I warmly welcome you to join our vibrant academic community.',
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    qualification: 'Ph.D. (Computer Science), IIT Bombay',
    experience: '28 years in Academia & Research',
  },
  statistics: [
    { label: 'Years of Excellence', value: '37+', icon: 'Award' },
    { label: 'Students Enrolled', value: '6,500+', icon: 'Users' },
    { label: 'Faculty Members', value: '180+', icon: 'GraduationCap' },
    { label: 'Placement Rate', value: '94%', icon: 'TrendingUp' },
    { label: 'Research Papers', value: '1,200+', icon: 'BookOpen' },
    { label: 'Alumni Worldwide', value: '12,000+', icon: 'Globe' },
  ],
  social: {
    facebook: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    twitter: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    instagram: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    linkedin: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    youtube: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
  },
};
