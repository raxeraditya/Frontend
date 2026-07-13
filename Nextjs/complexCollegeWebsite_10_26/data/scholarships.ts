export interface Scholarship {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  amount: string;
  category: string;
  deadline: string;
}

export const scholarships: Scholarship[] = [
  {
    id: 'sch001',
    name: 'Merit Scholarship',
    description:
      'Awarded to students who secure top ranks in the entrance examination. Covers 100% of tuition fees for the first year.',
    eligibility: 'Top 1% in JEE Main / CAT / qualifying exam',
    amount: '100% Tuition Waiver (1st Year)',
    category: 'Merit',
    deadline: '2025-07-31',
  },
  {
    id: 'sch002',
    name: 'Excellence Scholarship',
    description:
      'For students with outstanding academic performance. 50% tuition waiver renewable every year based on CGPA.',
    eligibility: 'CGPA 9.0+ in previous semester',
    amount: '50% Tuition Waiver (Renewable)',
    category: 'Merit',
    deadline: '2025-08-15',
  },
  {
    id: 'sch003',
    name: 'Need-Based Financial Aid',
    description:
      'Financial assistance for students from economically weaker sections. Covers up to 75% of tuition fees.',
    eligibility: 'Family income below ₹3 LPA, valid income certificate',
    amount: 'Up to 75% Tuition Waiver',
    category: 'Need-Based',
    deadline: '2025-07-15',
  },
  {
    id: 'sch004',
    name: 'Sports Scholarship',
    description:
      'For students who have represented state/national level in sports. Includes tuition waiver and sports kit allowance.',
    eligibility: 'State/National level sports participation certificate',
    amount: '₹50,000/year + Kit Allowance',
    category: 'Sports',
    deadline: '2025-08-01',
  },
  {
    id: 'sch005',
    name: 'Girl Child Scholarship',
    description:
      'Special scholarship to promote education for girls. 25% tuition waiver for all eligible female students.',
    eligibility: 'Female students with 60%+ in qualifying exam',
    amount: '25% Tuition Waiver',
    category: 'Special',
    deadline: '2025-07-31',
  },
  {
    id: 'sch006',
    name: 'SC/ST/OBC Scholarship',
    description:
      'Government scholarship for students from reserved categories. Full tuition reimbursement as per government norms.',
    eligibility: 'Valid caste certificate, family income below ₹8 LPA',
    amount: 'Full Tuition Reimbursement',
    category: 'Government',
    deadline: '2025-09-30',
  },
  {
    id: 'sch007',
    name: 'Differently-Abled Scholarship',
    description:
      'Financial support for students with disabilities. Includes tuition waiver and assistive device allowance.',
    eligibility: 'Disability certificate with 40%+ disability',
    amount: '100% Tuition Waiver + ₹25,000/year',
    category: 'Special',
    deadline: '2025-08-15',
  },
  {
    id: 'sch008',
    name: 'Ward of Defence Personnel Scholarship',
    description:
      'Scholarship for children of serving/retired defence personnel as a token of gratitude for their service.',
    eligibility: 'Parent\'s defence service certificate',
    amount: '₹40,000/year',
    category: 'Special',
    deadline: '2025-07-31',
  },
  {
    id: 'sch009',
    name: 'Research Fellowship (Ph.D.)',
    description:
      'Monthly stipend for full-time Ph.D. scholars. Includes contingency grant for research expenses.',
    eligibility: 'Full-time Ph.D. admission, valid NET/GATE',
    amount: '₹31,000/month + Contingency',
    category: 'Research',
    deadline: '2025-06-30',
  },
  {
    id: 'sch010',
    name: 'Alumni Endowment Scholarship',
    description:
      'Funded by SXIT alumni network for deserving students facing financial hardship during their studies.',
    eligibility: 'CGPA 7.0+, financial need, recommendation from HOD',
    amount: '₹30,000/year',
    category: 'Need-Based',
    deadline: '2025-08-01',
  },
];
