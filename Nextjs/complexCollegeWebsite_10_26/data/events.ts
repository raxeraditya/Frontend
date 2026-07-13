export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  date: string;
  time: string;
  organizer: string;
  category: string;
}

export const events: Event[] = [
  {
    id: "e001",
    title: "Annual Tech Fest — InnovateX 2025",
    description:
      "A 3-day technology festival featuring hackathons, robotics competitions, tech talks by industry leaders, and project exhibitions. Open to students from all departments.",
    location: "Main Auditorium & Tech Block",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-03-15",
    time: "09:00 AM",
    organizer: "Student Technical Committee",
    category: "Technical",
  },
  {
    id: "e002",
    title: "International Conference on AI & Machine Learning",
    description:
      "A premier academic conference bringing together researchers, academicians, and industry experts to discuss the latest advances in AI and ML.",
    location: "Conference Hall, Admin Block",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-04-10",
    time: "10:00 AM",
    organizer: "Department of CSE",
    category: "Conference",
  },
  {
    id: "e003",
    title: "Inter-College Sports Meet 2025",
    description:
      "Annual sports championship featuring cricket, football, basketball, athletics, swimming, and indoor games. 30+ colleges participating.",
    location: "Sports Complex",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-02-20",
    time: "08:00 AM",
    organizer: "Sports Department",
    category: "Sports",
  },
  {
    id: "e004",
    title: "Cultural Night — Rangmanch 2025",
    description:
      "An evening of music, dance, drama, and artistic performances celebrating the cultural diversity of our student community.",
    location: "Open Air Theatre",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-03-25",
    time: "06:00 PM",
    organizer: "Cultural Committee",
    category: "Cultural",
  },
  {
    id: "e005",
    title: "Industry-Academia Placement Drive",
    description:
      "On-campus placement drive with 40+ companies including TCS, Infosys, Wipro, Accenture, and Amazon. Open to final-year students.",
    location: "Placement Cell",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-05-15",
    time: "09:00 AM",
    organizer: "Training & Placement Cell",
    category: "Placement",
  },
  {
    id: "e006",
    title: "Workshop on Cloud Computing & AWS",
    description:
      "A hands-on 2-day workshop on AWS cloud services, covering EC2, S3, Lambda, and serverless architecture. Certification provided.",
    location: "CSE Seminar Hall",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-04-05",
    time: "10:00 AM",
    organizer: "Department of IT",
    category: "Workshop",
  },
  {
    id: "e007",
    title: "Robotics & Automation Expo",
    description:
      "Student-led robotics exhibition featuring autonomous robots, drones, and industrial automation projects developed in-house.",
    location: "Mechanical Block",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-03-18",
    time: "11:00 AM",
    organizer: "Robotics Club",
    category: "Technical",
  },
  {
    id: "e008",
    title: "Entrepreneurship Summit 2025",
    description:
      "A summit for aspiring entrepreneurs featuring startup pitches, investor panels, and mentorship sessions with successful alumni founders.",
    location: "MBA Auditorium",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-04-22",
    time: "09:30 AM",
    organizer: "MBA Department & E-Cell",
    category: "Seminar",
  },
  {
    id: "e009",
    title: "Convocation Ceremony 2025",
    description:
      "The annual convocation for the graduating batch of 2024-25. Degrees will be conferred by the Chief Guest. Academic dress code mandatory.",
    location: "Main Auditorium",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-06-28",
    time: "10:00 AM",
    organizer: "Administration Office",
    category: "Ceremony",
  },
  {
    id: "e010",
    title: "National Science Day Exhibition",
    description:
      "A science exhibition showcasing student research projects, innovative prototypes, and interactive demonstrations for school visitors.",
    location: "Science Block",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-02-28",
    time: "10:00 AM",
    organizer: "Science Departments",
    category: "Exhibition",
  },
  {
    id: "e011",
    title: "Hackathon — CodeFest 2025",
    description:
      "A 24-hour coding marathon where teams build innovative solutions to real-world problems. Prizes worth ₹2,00,000.",
    location: "IT Labs",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-03-16",
    time: "06:00 PM",
    organizer: "Coding Club",
    category: "Technical",
  },
  {
    id: "e012",
    title: "Alumni Meet — Nostalgia 2025",
    description:
      "Annual alumni reunion bringing together graduates from across the globe to reconnect, network, and share their journeys.",
    location: "Campus Lawns",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    date: "2025-12-20",
    time: "05:00 PM",
    organizer: "Alumni Association",
    category: "Reunion",
  },
];
