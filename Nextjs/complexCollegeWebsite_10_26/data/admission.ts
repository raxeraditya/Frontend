export interface AdmissionStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface AdmissionRequirement {
  id: string;
  title: string;
  description: string;
}

export const admissionSteps: AdmissionStep[] = [
  {
    id: 'as001',
    step: 1,
    title: 'Online Application',
    description: 'Fill out the online application form on our admission portal with your personal and academic details.',
    icon: 'FileText',
  },
  {
    id: 'as002',
    step: 2,
    title: 'Document Upload',
    description: 'Upload required documents including mark sheets, ID proof, photograph, and entrance exam scorecard.',
    icon: 'Upload',
  },
  {
    id: 'as003',
    step: 3,
    title: 'Application Fee',
    description: 'Pay the non-refundable application fee of ₹1,500 online via net banking, UPI, or credit/debit card.',
    icon: 'CreditCard',
  },
  {
    id: 'as004',
    step: 4,
    title: 'Merit List & Counselling',
    description: 'Check the merit list on our website. Shortlisted candidates will be called for counselling and document verification.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'as005',
    step: 5,
    title: 'Admission Confirmation',
    description: 'Pay the first installment of tuition fees to confirm your seat. Complete the enrollment process.',
    icon: 'CheckCircle',
  },
];

export const admissionRequirements: AdmissionRequirement[] = [
  {
    id: 'ar001',
    title: '10+2 Mark Sheet',
    description: 'Original and photocopy of 10+2 mark sheet from a recognized board (for UG programs)',
  },
  {
    id: 'ar002',
    title: 'Graduation Certificate',
    description: 'Bachelor\'s degree certificate and mark sheets (for PG programs)',
  },
  {
    id: 'ar003',
    title: 'Entrance Exam Scorecard',
    description: 'Valid JEE Main score (B.Tech), CAT/MAT score (MBA), or GATE score (M.Tech)',
  },
  {
    id: 'ar004',
    title: 'Transfer Certificate',
    description: 'Transfer Certificate from the previous institution',
  },
  {
    id: 'ar005',
    title: 'Migration Certificate',
    description: 'Migration Certificate (if applicable, for students from other universities)',
  },
  {
    id: 'ar006',
    title: 'Caste/Income Certificate',
    description: 'Valid caste and income certificate (for scholarship/reservation benefits)',
  },
  {
    id: 'ar007',
    title: 'Passport Photos',
    description: '6 recent passport-size photographs',
  },
  {
    id: 'ar008',
    title: 'ID Proof',
    description: 'Aadhaar Card / PAN Card / Passport (original and photocopy)',
  },
];

export const admissionInfo = {
  applicationFee: '₹1,500',
  applicationDeadline: 'May 31, 2025',
  counsellingDate: 'June 15, 2025',
  classesBegin: 'August 1, 2025',
  totalSeats: 1800,
  programsOffered: 12,
  helpline: '+91-11-2456-7892',
  helplineEmail: 'admissions@sxit.edu.in',
};
