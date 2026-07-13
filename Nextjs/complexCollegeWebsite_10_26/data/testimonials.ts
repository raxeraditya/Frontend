export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  batch: string;
  image: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't001',
    name: 'Aarav Sharma',
    role: 'Software Development Engineer',
    company: 'Amazon',
    batch: '2024',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    rating: 5,
    quote:
      'SXIT gave me the perfect launchpad for my career. The faculty, the labs, and the placement training were instrumental in helping me secure a role at Amazon. The coding culture here is exceptional.',
  },
  {
    id: 't002',
    name: 'Priya Patel',
    role: 'Software Engineer',
    company: 'Google',
    batch: '2024',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    rating: 5,
    quote:
      'The research-oriented approach at SXIT helped me develop a deep understanding of computer science. The mentorship from professors was invaluable in cracking the Google interview.',
  },
  {
    id: 't003',
    name: 'Rohan Verma',
    role: 'Software Engineer',
    company: 'Microsoft',
    batch: '2023',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    rating: 5,
    quote:
      'From hackathons to industry visits, SXIT provided countless opportunities to learn and grow. The alumni network is incredibly supportive and continues to guide me in my career.',
  },
  {
    id: 't004',
    name: 'Ananya Iyer',
    role: 'System Engineer',
    company: 'TCS Digital',
    batch: '2023',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    rating: 5,
    quote:
      'The soft skills training and mock interview sessions at the T&P cell were a game-changer. I walked into my placement interview with confidence and clarity.',
  },
  {
    id: 't005',
    name: 'Karan Mehta',
    role: 'Associate Software Engineer',
    company: 'Accenture',
    batch: '2024',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    rating: 4,
    quote:
      'The ECE department at SXIT is top-notch. The hands-on lab work and real-world projects gave me practical skills that set me apart during placements.',
  },
  {
    id: 't006',
    name: 'Ishita Gupta',
    role: 'Business Analyst',
    company: 'Deloitte',
    batch: '2023',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    rating: 5,
    quote:
      'The MBA program at SXIT goes beyond textbooks. The case studies, industry interactions, and internship opportunities gave me a real understanding of the corporate world.',
  },
  {
    id: 't007',
    name: 'Nikhil Rao',
    role: 'Associate Developer',
    company: 'IBM',
    batch: '2022',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    rating: 5,
    quote:
      'The IT department curriculum is perfectly aligned with industry needs. Cloud computing and DevOps labs gave me hands-on experience that I use every day at IBM.',
  },
  {
    id: 't008',
    name: 'Saurabh Jain',
    role: 'SDE-1',
    company: 'Flipkart',
    batch: '2024',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    rating: 5,
    quote:
      'The coding clubs and competitive programming culture at SXIT shaped my problem-solving skills. I participated in 15+ hackathons during my time here, and it made all the difference.',
  },
];
