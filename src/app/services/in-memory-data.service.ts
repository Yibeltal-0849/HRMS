// import { Injectable } from "@angular/core";
// import { InMemoryDbService } from "angular-in-memory-web-api";
// import {
//   Company,
//   Department,
//   User,
//   Employee,
//   Candidate,
//   Job,
//   Attendance,
//   LeaveRequest,
//   Salary,
//   PerformanceReview,
// } from "../models/hrms.model";

// @Injectable({
//   providedIn: "root",
// })
// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//     // ========== Companies ==========
//     const companies: Company[] = [
//       {
//         id: 1,
//         name: "Tech Solutions Inc.",
//         description: "Leading technology provider",
//         industry: "Information Technology",
//         location: "San Francisco, CA",
//         email: "info@techsolutions.com",
//         phone: "415-555-1000",
//         website: "https://techsolutions.com",
//         establishedDate: new Date("2010-05-15"),
//         isActive: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ];

//     // ========== Departments ==========
//     const departments: Department[] = [
//       {
//         id: 1,
//         name: "Engineering",
//         description: "Software development team",
//         location: "Building A, 3rd Floor",
//         budget: 5000000,
//         headId: 101,
//         companyId: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         id: 2,
//         name: "Human Resources",
//         description: "HR and talent management",
//         location: "Building B, 1st Floor",
//         budget: 1000000,
//         headId: 102,
//         companyId: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ];

//     // ========== Users ==========
//     const users: User[] = [
//       {
//         id: 1,
//         username: "admin",
//         email: "admin@company.com",
//         password: "admin123",
//         role: "admin",
//         isActive: true,
//         employeeId: 101,
//         companyId: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         id: 2,
//         username: "manager",
//         email: "manager@company.com",
//         password: "manager123",
//         role: "manager",
//         isActive: true,
//         employeeId: 102,
//         companyId: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ];

//     // ========== Employees ==========
//     const employees: Employee[] = [
//       {
//         id: 101,
//         firstName: "John",
//         lastName: "Doe",
//         email: "john.doe@company.com",
//         phone: "555-0101",
//         address: "123 Main St, San Francisco",
//         dateOfBirth: new Date("1985-05-15"),
//         gender: "male",
//         maritalStatus: "married",
//         position: "Senior Software Engineer",
//         departmentId: 1,
//         hireDate: new Date("2018-06-01"),
//         salary: 120000,
//         emergencyContactName: "Jane Doe",
//         emergencyContactPhone: "555-0102",
//         bankAccountNumber: "123456789",
//         taxId: "TAX-101",
//         isActive: true,
//         userId: 1,
//         managerId: 102,
//         companyId: 1,
//       },
//       {
//         id: 102,
//         firstName: "Jane",
//         lastName: "Smith",
//         email: "jane.smith@company.com",
//         phone: "555-0202",
//         address: "456 Oak Ave, San Francisco",
//         dateOfBirth: new Date("1980-08-22"),
//         gender: "female",
//         maritalStatus: "single",
//         position: "Engineering Manager",
//         departmentId: 1,
//         hireDate: new Date("2015-03-15"),
//         salary: 150000,
//         emergencyContactName: "John Smith",
//         emergencyContactPhone: "555-0203",
//         bankAccountNumber: "987654321",
//         taxId: "TAX-102",
//         isActive: true,
//         userId: 2,
//         managerId: null,
//         companyId: 1,
//       },
//     ];

//     // ========== Candidates ==========
//     const candidates: Candidate[] = [
//       {
//         id: 1,
//         firstName: "Alex",
//         lastName: "Johnson",
//         email: "alex.johnson@example.com",
//         phone: "555-0303",
//         resumeUrl: "http://example.com/resumes/alex.pdf",
//
//         appliedPosition: "Software Engineer",
//         applicationDate: new Date("2023-05-01"),
//
//         source: "linkedin",
//         skills: ["JavaScript", "Angular", "Node.js"],
//         experience: 5,
//         education: "BS Computer Science",
//       },
//     ];

//     // ========== Jobs ==========
//     const jobs: Job[] = [
//       {
//         id: 1,
//         title: "Senior Software Engineer",
//         description: "Develop and maintain web applications",
//         departmentId: 1,
//         requirements: ["5+ years experience", "JavaScript expertise"],
//         responsibilities: ["Feature development", "Code reviews"],
//         location: "San Francisco",
//         type: "full-time",
//         salaryRangeMin: 100000,
//         salaryRangeMax: 140000,
//         isRemote: false,
//         experienceLevel: "senior",
//         educationLevel: "bachelor",
//         postedDate: new Date("2023-01-15"),
//         closingDate: new Date("2023-06-30"),
//         isActive: true,
//         hiringManagerId: 102,
//       },
//     ];

//     // ========== Attendance ==========
//     const attendance: Attendance[] = [
//       {
//         id: 1,
//         employeeId: 101,
//         date: new Date("2023-05-01"),
//         checkIn: new Date("2023-05-01T09:00:00"),
//         checkOut: new Date("2023-05-01T17:00:00"),
//         status: "present",
//         hoursWorked: 8,
//         notes: "Regular work day",
//         approvedBy: 102,
//       },
//     ];

//     // ========== Leave Requests ==========
//     const leaveRequests: LeaveRequest[] = [
//       {
//         id: 1,
//         employeeId: 101,
//         leaveType: "vacation",
//         startDate: new Date("2023-06-01"),
//         endDate: new Date("2023-06-05"),
//         reason: "Family vacation",
//         status: "approved",
//         approvedBy: 102,
//         comments: "Approved as per policy",
//         daysRequested: 5,
//         createdAt: new Date("2023-05-15"),
//         updatedAt: new Date("2023-05-16"),
//       },
//     ];

//     // ========== Salaries ==========
//     const salaries: Salary[] = [
//       {
//         id: 1,
//         employeeId: 101,
//         baseSalary: 50000,
//         bonus: 5000,
//         allowances: 2000,
//         deductions: 1000,
//         tax: 7500,
//         effectiveDate: new Date("2023-01-01"),
//         paymentFrequency: "monthly",
//         bankAccountNumber: "1234567890",
//         bankName: "Chase Bank",
//         notes: "Regular salary",
//         isActive: true,
//       },
//       {
//         id: 2,
//         employeeId: 102,
//         baseSalary: 65000,
//         bonus: 8000,
//         allowances: 2500,
//         deductions: 1200,
//         tax: 9500,
//         effectiveDate: new Date("2023-01-15"),
//         paymentFrequency: "bi-weekly",
//         bankAccountNumber: "9876543210",
//         bankName: "Bank of America",
//         notes: "Manager salary",
//         isActive: true,
//       },
//     ];

//     // ========== Performance Reviews ==========
//     const performanceReviews: PerformanceReview[] = [
//       {
//         id: 1,
//         employeeId: 101,
//         reviewerId: 102,
//         reviewDate: new Date("2023-03-15"),
//         performancePeriodStart: new Date("2022-01-01"),
//         performancePeriodEnd: new Date("2022-12-31"),
//         overallRating: 4.5,
//         technicalSkillsRating: 5,
//         communicationRating: 4,
//         teamworkRating: 4.5,
//         initiativeRating: 4,
//         attendanceRating: 5,
//         strengths: ["Technical expertise", "Problem solving"],
//         areasForImprovement: ["Documentation", "Mentoring"],
//         comments: "Excellent performer with strong technical skills",
//         goals: ["Improve documentation", "Mentor junior team members"],
//         isApproved: true,
//         nextReviewDate: new Date("2023-12-15"),
//       },
//     ];

//     return {
//       companies,
//       departments,
//       users,
//       employees,
//       candidates,
//       jobs,
//       attendance,
//       leaveRequests,
//       salaries,
//       performanceReviews,
//     };
//   }

//   genId<T extends { id: number }>(
//     collection: T[],
//     collectionName: string
//   ): number {
//     return collection.length > 0
//       ? Math.max(...collection.map((item) => item.id)) + 1
//       : 1;
//   }
// }
