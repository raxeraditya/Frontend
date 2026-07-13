export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

export const news: NewsItem[] = [
  {
    id: "nw001",
    title: "SXIT Signs MoU with IIT Bombay for Joint Research in AI",
    excerpt:
      "A landmark MoU was signed to establish a joint research center focusing on artificial intelligence and machine learning applications.",
    content:
      "St. Xavier Institute of Technology has signed a historic Memorandum of Understanding with IIT Bombay to establish a joint research center for artificial intelligence and machine learning. The collaboration will enable faculty and students from both institutions to work on cutting-edge research projects, share resources, and co-author publications. The MoU was signed by the principals of both institutions in a ceremony attended by dignitaries from academia and industry.",
    date: "2025-02-15",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Research",
    author: "Media Cell",
  },
  {
    id: "nw002",
    title: "Record Placements: 94% Students Placed in 2024 Batch",
    excerpt:
      "The 2024 placement season concluded with a record 94% placement rate and the highest package of ₹42 LPA.",
    content:
      "The Training and Placement Cell at SXIT has announced the results of the 2024 placement season, achieving a record-breaking 94% placement rate. A total of 612 offers were made by 40+ companies including Amazon, Google, Microsoft, TCS, Infosys, and Accenture. The highest package stood at ₹42 LPA, while the average package was ₹8.5 LPA. The placement cell attributes this success to the rigorous training programs and industry-aligned curriculum.",
    date: "2025-01-20",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Placement",
    author: "Placement Cell",
  },
  {
    id: "nw003",
    title: "SXIT Team Wins National Hackathon CodeFest 2025",
    excerpt:
      "A team of 4 CSE students won the first prize at the national-level 24-hour hackathon with their AI-powered healthcare app.",
    content:
      "A team of four final-year CSE students from SXIT emerged victorious at the national-level CodeFest 2025 hackathon, winning the first prize of ₹1,00,000. The team developed an AI-powered healthcare application that uses machine learning to predict disease risk based on patient symptoms and medical history. The app was praised by judges for its innovation, usability, and social impact. The team will now represent SXIT at the international round.",
    date: "2025-03-17",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Achievement",
    author: "Coding Club",
  },
  {
    id: "nw004",
    title: "New Innovation & Incubation Center Inaugurated",
    excerpt:
      "A state-of-the-art innovation center was inaugurated to support student startups and entrepreneurial ventures.",
    content:
      "The newly established Innovation and Incubation Center at SXIT was inaugurated by the Chief Guest, a prominent industry leader. The 10,000 sq ft facility includes co-working spaces, maker labs, 3D printing facilities, and mentorship rooms. The center aims to nurture student startups, provide seed funding, and connect young entrepreneurs with investors and industry mentors. Five student startups have already been selected for the first cohort.",
    date: "2025-02-28",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Campus",
    author: "Media Cell",
  },
  {
    id: "nw005",
    title: "Faculty Research Paper Published in IEEE Journal",
    excerpt:
      "Dr. Anjali Mehta's research on federated learning was published in the prestigious IEEE Transactions on Pattern Analysis.",
    content:
      'Dr. Anjali Mehta, Professor and HOD of the CSE department, has published a research paper titled "Federated Learning for Privacy-Preserving Healthcare Analytics" in the prestigious IEEE Transactions on Pattern Analysis and Machine Intelligence. The paper presents a novel approach to training machine learning models on distributed healthcare data without compromising patient privacy. This is a significant achievement for the institution\'s research portfolio.',
    date: "2025-01-10",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Research",
    author: "Research Office",
  },
  {
    id: "nw006",
    title: "SXIT Receives NAAC A+ Accreditation",
    excerpt:
      "The college has been awarded the prestigious NAAC A+ grade with a CGPA of 3.51, reflecting academic excellence.",
    content:
      "St. Xavier Institute of Technology has been awarded the prestigious NAAC A+ accreditation with a CGPA of 3.51 out of 4.0. The accreditation is a testament to the institution's commitment to academic excellence, quality infrastructure, research output, and student support services. The NAAC peer team visited the campus for a comprehensive assessment covering curricular aspects, teaching-learning, research, infrastructure, and governance.",
    date: "2024-12-15",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Achievement",
    author: "Administration",
  },
  {
    id: "nw007",
    title: "International Student Exchange Program Launched",
    excerpt:
      "SXIT launches a semester-long exchange program with 5 partner universities in the US, UK, and Australia.",
    content:
      "SXIT has launched an international student exchange program in collaboration with 5 partner universities across the United States, United Kingdom, and Australia. Under this program, selected students can spend one semester abroad, attending classes and working on research projects at the partner university. Credits earned during the exchange will be fully transferable. The first cohort of 12 students will depart in Fall 2025.",
    date: "2025-03-01",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Academic",
    author: "International Office",
  },
  {
    id: "nw008",
    title: "Annual Sports Meet Concludes with Grand Ceremony",
    excerpt:
      "The week-long sports meet saw participation from 1,500+ students across 15 events. CSE emerged as the overall champion.",
    content:
      "The annual inter-department sports meet at SXIT concluded with a grand closing ceremony. Over 1,500 students participated in 15 sporting events including cricket, football, basketball, athletics, swimming, and indoor games. The CSE department emerged as the overall champion, followed by ECE and Mechanical departments. The Chief Guest, a former Olympian, distributed medals and trophies to the winners.",
    date: "2025-02-25",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Sports",
    author: "Sports Department",
  },
  {
    id: "nw009",
    title: "Industry Experts Deliver Guest Lectures on Emerging Technologies",
    excerpt:
      "A series of guest lectures by industry leaders covered topics including quantum computing, edge AI, and Web3.",
    content:
      "The CSE and IT departments organized a series of guest lectures by industry experts from leading tech companies. The lecture series covered emerging technologies including quantum computing, edge AI, Web3, and the metaverse. Speakers included senior engineers from Google, Microsoft, and Amazon. The sessions were attended by over 800 students and faculty members, providing valuable industry insights.",
    date: "2025-03-10",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Academic",
    author: "CSE Department",
  },
  {
    id: "nw010",
    title: "SXIT Alumni Launch Startup with ₹5 Crore Seed Funding",
    excerpt:
      "Three SXIT alumni co-founded an AI logistics startup that has raised ₹5 crore in seed funding from leading VCs.",
    content:
      'Three alumni from the 2022 batch of SXIT have co-founded "LogiSmart AI", a startup that uses artificial intelligence to optimize logistics and supply chain operations. The startup has successfully raised ₹5 crore in seed funding from leading venture capital firms. The founders credit SXIT\'s innovation center and entrepreneurship mentorship for helping them turn their idea into a viable business.',
    date: "2025-01-05",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    category: "Alumni",
    author: "Alumni Association",
  },
];

export const newsCategories = [
  "All",
  "Academic",
  "Research",
  "Placement",
  "Achievement",
  "Campus",
  "Sports",
  "Alumni",
];
