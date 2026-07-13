export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'q001',
    question: 'How can I apply for admission to SXIT?',
    answer:
      'You can apply online through our admission portal. Fill out the application form, upload required documents, and pay the application fee. Admissions are based on JEE Main scores for B.Tech programs and CAT/MAT scores for MBA.',
    category: 'Admissions',
  },
  {
    id: 'q002',
    question: 'What is the eligibility criteria for B.Tech programs?',
    answer:
      'Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 60% aggregate marks from a recognized board. A valid JEE Main score is required for admission.',
    category: 'Admissions',
  },
  {
    id: 'q003',
    question: 'Does SXIT provide hostel facilities?',
    answer:
      'Yes, SXIT has separate on-campus hostels for boys and girls with 24/7 security, Wi-Fi, mess facilities, and recreational areas. Hostel allotment is done on a first-come, first-served basis for admitted students.',
    category: 'Facilities',
  },
  {
    id: 'q004',
    question: 'What scholarships are available for students?',
    answer:
      'SXIT offers merit-based scholarships (up to 100% tuition waiver for top rankers), need-based financial aid, sports scholarships, and government scholarships for reserved categories. Visit the scholarships page for details.',
    category: 'Scholarships',
  },
  {
    id: 'q005',
    question: 'What is the placement record of SXIT?',
    answer:
      'SXIT has a consistent placement rate of 90%+. In 2024, 94% of eligible students were placed with the highest package of ₹42 LPA and an average package of ₹8.5 LPA. Over 40 companies visit our campus annually.',
    category: 'Placements',
  },
  {
    id: 'q006',
    question: 'Is there an anti-ragging policy on campus?',
    answer:
      'Yes, SXIT has a strict zero-tolerance policy towards ragging. An Anti-Ragging Committee is available 24/7. Any incident can be reported anonymously. Violators face strict disciplinary action including expulsion.',
    category: 'General',
  },
  {
    id: 'q007',
    question: 'What are the library timings?',
    answer:
      'The central library is open from 8:00 AM to 10:00 PM on regular days. During examination periods, it remains open 24/7. The digital library is accessible online round the clock.',
    category: 'Facilities',
  },
  {
    id: 'q008',
    question: 'Can I change my branch after the first year?',
    answer:
      'Yes, branch change is permitted after the first year based on academic performance and seat availability. Students must maintain a CGPA of 8.5+ to be eligible for a branch change.',
    category: 'Academics',
  },
  {
    id: 'q009',
    question: 'Does SXIT have collaborations with foreign universities?',
    answer:
      'Yes, SXIT has MoUs with 40+ international universities for student exchange programs, joint research, and dual degree programs. Students can spend a semester abroad under these partnerships.',
    category: 'Academics',
  },
  {
    id: 'q010',
    question: 'What sports facilities are available on campus?',
    answer:
      'The campus has a sports complex with cricket, football, and basketball grounds, an Olympic-size swimming pool, indoor games (table tennis, chess, carrom), a gymnasium, and a tennis court.',
    category: 'Facilities',
  },
  {
    id: 'q011',
    question: 'How is the faculty at SXIT?',
    answer:
      'SXIT has 180+ highly qualified faculty members, most with Ph.D. degrees from premier institutions like IITs, IISc, and NITs. Many have significant industry and research experience.',
    category: 'Academics',
  },
  {
    id: 'q012',
    question: 'What is the fee structure for B.Tech programs?',
    answer:
      'The tuition fee for B.Tech programs ranges from ₹95,000 to ₹1,20,000 per year depending on the specialization. Hostel and mess charges are additional. Detailed fee structure is available on the downloads page.',
    category: 'Admissions',
  },
];

export const faqCategories = ['All', 'Admissions', 'Academics', 'Facilities', 'Scholarships', 'Placements', 'General'];
