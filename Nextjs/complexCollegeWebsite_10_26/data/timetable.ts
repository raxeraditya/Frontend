export interface TimeTableEntry {
  id: string;
  day: string;
  period: string;
  time: string;
  subject: string;
  faculty: string;
  room: string;
  department: string;
  year: string;
}

export interface TimeTableInfo {
  department: string;
  year: string;
  semester: string;
  entries: TimeTableEntry[];
}

export const timetableEntries: TimeTableEntry[] = [
  // Monday
  { id: 'tt001', day: 'Monday', period: 'P1', time: '09:00 - 10:00', subject: 'Data Structures', faculty: 'Dr. Anjali Mehta', room: 'CS-101', department: 'CSE', year: '2nd Year' },
  { id: 'tt002', day: 'Monday', period: 'P2', time: '10:00 - 11:00', subject: 'Operating Systems', faculty: 'Dr. Prakash Nair', room: 'CS-102', department: 'CSE', year: '2nd Year' },
  { id: 'tt003', day: 'Monday', period: 'P3', time: '11:00 - 12:00', subject: 'DBMS Lab', faculty: 'Dr. Megha Joshi', room: 'CS-Lab-1', department: 'CSE', year: '2nd Year' },
  { id: 'tt004', day: 'Monday', period: 'P4', time: '12:00 - 01:00', subject: 'DBMS Lab', faculty: 'Dr. Megha Joshi', room: 'CS-Lab-1', department: 'CSE', year: '2nd Year' },
  { id: 'tt005', day: 'Monday', period: 'P5', time: '02:00 - 03:00', subject: 'Computer Networks', faculty: 'Prof. Arjun Reddy', room: 'CS-103', department: 'CSE', year: '2nd Year' },
  { id: 'tt006', day: 'Monday', period: 'P6', time: '03:00 - 04:00', subject: 'Theory of Computation', faculty: 'Dr. Sneha Kapoor', room: 'CS-104', department: 'CSE', year: '2nd Year' },
  // Tuesday
  { id: 'tt007', day: 'Tuesday', period: 'P1', time: '09:00 - 10:00', subject: 'Operating Systems', faculty: 'Dr. Prakash Nair', room: 'CS-102', department: 'CSE', year: '2nd Year' },
  { id: 'tt008', day: 'Tuesday', period: 'P2', time: '10:00 - 11:00', subject: 'Theory of Computation', faculty: 'Dr. Sneha Kapoor', room: 'CS-104', department: 'CSE', year: '2nd Year' },
  { id: 'tt009', day: 'Tuesday', period: 'P3', time: '11:00 - 12:00', subject: 'Data Structures', faculty: 'Dr. Anjali Mehta', room: 'CS-101', department: 'CSE', year: '2nd Year' },
  { id: 'tt010', day: 'Tuesday', period: 'P4', time: '12:00 - 01:00', subject: 'Programming Lab', faculty: 'Dr. Vivek Sharma', room: 'CS-Lab-2', department: 'CSE', year: '2nd Year' },
  { id: 'tt011', day: 'Tuesday', period: 'P5', time: '02:00 - 03:00', subject: 'Programming Lab', faculty: 'Dr. Vivek Sharma', room: 'CS-Lab-2', department: 'CSE', year: '2nd Year' },
  { id: 'tt012', day: 'Tuesday', period: 'P6', time: '03:00 - 04:00', subject: 'Computer Networks', faculty: 'Prof. Arjun Reddy', room: 'CS-103', department: 'CSE', year: '2nd Year' },
  // Wednesday
  { id: 'tt013', day: 'Wednesday', period: 'P1', time: '09:00 - 10:00', subject: 'DBMS', faculty: 'Dr. Megha Joshi', room: 'CS-105', department: 'CSE', year: '2nd Year' },
  { id: 'tt014', day: 'Wednesday', period: 'P2', time: '10:00 - 11:00', subject: 'Data Structures', faculty: 'Dr. Anjali Mehta', room: 'CS-101', department: 'CSE', year: '2nd Year' },
  { id: 'tt015', day: 'Wednesday', period: 'P3', time: '11:00 - 12:00', subject: 'OS Lab', faculty: 'Dr. Prakash Nair', room: 'CS-Lab-3', department: 'CSE', year: '2nd Year' },
  { id: 'tt016', day: 'Wednesday', period: 'P4', time: '12:00 - 01:00', subject: 'OS Lab', faculty: 'Dr. Prakash Nair', room: 'CS-Lab-3', department: 'CSE', year: '2nd Year' },
  { id: 'tt017', day: 'Wednesday', period: 'P5', time: '02:00 - 03:00', subject: 'Theory of Computation', faculty: 'Dr. Sneha Kapoor', room: 'CS-104', department: 'CSE', year: '2nd Year' },
  { id: 'tt018', day: 'Wednesday', period: 'P6', time: '03:00 - 04:00', subject: 'Library/Self Study', faculty: '—', room: 'Library', department: 'CSE', year: '2nd Year' },
  // Thursday
  { id: 'tt019', day: 'Thursday', period: 'P1', time: '09:00 - 10:00', subject: 'Computer Networks', faculty: 'Prof. Arjun Reddy', room: 'CS-103', department: 'CSE', year: '2nd Year' },
  { id: 'tt020', day: 'Thursday', period: 'P2', time: '10:00 - 11:00', subject: 'DBMS', faculty: 'Dr. Megha Joshi', room: 'CS-105', department: 'CSE', year: '2nd Year' },
  { id: 'tt021', day: 'Thursday', period: 'P3', time: '11:00 - 12:00', subject: 'Networks Lab', faculty: 'Prof. Arjun Reddy', room: 'CS-Lab-4', department: 'CSE', year: '2nd Year' },
  { id: 'tt022', day: 'Thursday', period: 'P4', time: '12:00 - 01:00', subject: 'Networks Lab', faculty: 'Prof. Arjun Reddy', room: 'CS-Lab-4', department: 'CSE', year: '2nd Year' },
  { id: 'tt023', day: 'Thursday', period: 'P5', time: '02:00 - 03:00', subject: 'Operating Systems', faculty: 'Dr. Prakash Nair', room: 'CS-102', department: 'CSE', year: '2nd Year' },
  { id: 'tt024', day: 'Thursday', period: 'P6', time: '03:00 - 04:00', subject: 'Data Structures', faculty: 'Dr. Anjali Mehta', room: 'CS-101', department: 'CSE', year: '2nd Year' },
  // Friday
  { id: 'tt025', day: 'Friday', period: 'P1', time: '09:00 - 10:00', subject: 'Data Structures', faculty: 'Dr. Anjali Mehta', room: 'CS-101', department: 'CSE', year: '2nd Year' },
  { id: 'tt026', day: 'Friday', period: 'P2', time: '10:00 - 11:00', subject: 'Computer Networks', faculty: 'Prof. Arjun Reddy', room: 'CS-103', department: 'CSE', year: '2nd Year' },
  { id: 'tt027', day: 'Friday', period: 'P3', time: '11:00 - 12:00', subject: 'DBMS', faculty: 'Dr. Megha Joshi', room: 'CS-105', department: 'CSE', year: '2nd Year' },
  { id: 'tt028', day: 'Friday', period: 'P4', time: '12:00 - 01:00', subject: 'Theory of Computation', faculty: 'Dr. Sneha Kapoor', room: 'CS-104', department: 'CSE', year: '2nd Year' },
  { id: 'tt029', day: 'Friday', period: 'P5', time: '02:00 - 03:00', subject: 'Seminar/Project', faculty: 'Dr. Vivek Sharma', room: 'CS-Seminar', department: 'CSE', year: '2nd Year' },
  { id: 'tt030', day: 'Friday', period: 'P6', time: '03:00 - 04:00', subject: 'Seminar/Project', faculty: 'Dr. Vivek Sharma', room: 'CS-Seminar', department: 'CSE', year: '2nd Year' },
];

export const timetableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
export const timetablePeriods = [
  { period: 'P1', time: '09:00 - 10:00' },
  { period: 'P2', time: '10:00 - 11:00' },
  { period: 'P3', time: '11:00 - 12:00' },
  { period: 'P4', time: '12:00 - 01:00' },
  { period: 'P5', time: '02:00 - 03:00' },
  { period: 'P6', time: '03:00 - 04:00' },
];

export const timetableDepartments = ['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT', 'MCA', 'MBA'];
export const timetableYears = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
