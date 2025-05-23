export interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // Optional because we might not want to expose this in all responses
  role: "admin" | "manager" | "employee" | "hr";
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  employeeId?: number; // Link to employee profile if applicable
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  dateOfBirth: Date;
  gender: "male" | "female" | "other";
  maritalStatus?: "single" | "married" | "divorced" | "widowed";
  position: string;
  departmentId: number;
  hireDate: Date;
  salary?: number;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  bankAccountNumber?: string;
  taxId?: string;
  isActive: boolean;
  userId?: number; // Associated user account
  managerId?: number; // Reference to another employee
}

export interface Department {
  id: number;
  name: string;
  description?: string;
  location?: string;
  budget?: number;
  headId?: number; // Employee ID of department head
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl?: string;
  coverLetter?: string;
  appliedPosition: string;
  applicationDate: Date;
  status: "applied" | "interviewing" | "offered" | "hired" | "rejected";
  interviewDate?: Date;
  feedback?: string;
  referredBy?: string;
  source?: "website" | "linkedin" | "referral" | "indeed" | "other";
  skills?: string[];
  experience?: number;
  education?: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  departmentId: number;
  requirements: string[];
  responsibilities: string[];
  location: string;
  type: "full-time" | "part-time" | "contract" | "temporary" | "internship";
  salaryRangeMin?: number;
  salaryRangeMax?: number;
  isRemote: boolean;
  experienceLevel: "entry" | "mid" | "senior" | "executive";
  educationLevel?: "high-school" | "bachelor" | "master" | "phd";
  postedDate: Date;
  closingDate?: Date;
  isActive: boolean;
  hiringManagerId?: number;
}

export interface JobApplication {
  id: number;
  jobId: number;
  candidateId: number;
  applicationDate: Date;
  status:
    | "submitted"
    | "under-review"
    | "interview"
    | "offer"
    | "hired"
    | "rejected";
  notes?: string;
  interviewDate?: Date;
  interviewNotes?: string;
  offerDetails?: string;
  hiredDate?: Date;
  rejectionReason?: string;
}

export interface Attendance {
  id: number;
  employeeId: number;
  date: Date;
  checkIn: Date;
  checkOut?: Date; // Optional because employee might forget to check out
  status: "present" | "absent" | "late" | "half-day" | "on-leave";
  hoursWorked?: number;
  notes?: string;
  approvedBy?: number; // Manager ID who approved the record
}

export interface LeaveRequest {
  id: number;
  employeeId: number;
  leaveType:
    | "vacation"
    | "sick"
    | "personal"
    | "maternity"
    | "paternity"
    | "bereavement"
    | "other";
  startDate: Date;
  endDate: Date;
  reason: string;
  status: "pending" | "approved" | "rejected" | "cancelled";
  approvedBy?: number; // Manager ID who approved the request
  comments?: string;
  daysRequested: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Salary {
  id: number;
  employeeId: number;
  baseSalary: number;
  bonus?: number;
  allowances?: number;
  deductions?: number;
  tax?: number;
  effectiveDate: Date;
  paymentFrequency: "monthly" | "bi-weekly" | "weekly" | "annual";
  bankAccountNumber?: string;
  bankName?: string;
  notes?: string;
  isActive: boolean;
}

export interface PerformanceReview {
  id: number;
  employeeId: number;
  reviewerId: number; // Usually manager ID
  reviewDate: Date;
  performancePeriodStart: Date;
  performancePeriodEnd: Date;
  overallRating: number; // 1-5 scale
  technicalSkillsRating?: number;
  communicationRating?: number;
  teamworkRating?: number;
  initiativeRating?: number;
  attendanceRating?: number;
  strengths?: string[];
  areasForImprovement?: string[];
  comments?: string;
  goals?: string[];
  isApproved: boolean;
  nextReviewDate?: Date;
}
