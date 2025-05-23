// import { Injectable } from "@angular/core";
// import { InMemoryDbService } from "angular-in-memory-web-api";
// import { Employee } from "../models/employee.model";

// @Injectable({
//   providedIn: "root",
// })
// export class MockDataService implements InMemoryDbService {
//   createDb() {
//     const employees: Employee[] = [
//       { id: 1, name: "Abebe Melkamu", departmentId: 1, jobId: 1, salaryId: 1 },
//       { id: 2, name: "Kebede Yared", departmentId: 2, jobId: 2, salaryId: 2 },
//     ];
//     return { employees };
//   }

//   genId(employees: Employee[]): number {
//     return employees.length > 0
//       ? Math.max(...employees.map((emp) => emp.id)) + 1
//       : 1;
//   }
// }

import { InMemoryDbService } from "angular-in-memory-web-api";
import { Employee } from "../models/hrms.model";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // Sample data for all your HRMS entities

    const companies = [
      {
        id: 1,
        name: "Tech Innovators Inc.",
        location: "London, UK",
        industry: "Software Development",
        description: "Innovative software and tech solutions.",
        founded: 2010,
        website: "https://techinnovators.com",
        email: "contact@techinnovators.com",
        phone: "0123456789",
      },
    ];

    const users = [
      {
        id: 1,
        username: "admin",
        email: "admin@hrms.com",
        password: "admin123",
        role: "admin",
        isActive: true,
        employeeId: 1,
      },
      {
        id: 2,
        username: "manager",
        email: "manager@hrms.com",
        password: "manager123",
        role: "manager",
        isActive: true,
        employeeId: 2,
      },
    ];

    const employees = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@hrms.com",
        phone: "1234567890",
        dateOfBirth: new Date("1985-05-15"), // Added to match interface
        gender: "male", // Added to match interface
        position: "Senior Developer", // Changed from jobTitle to position
        departmentId: 1, // Assuming IT department has ID 1
        hireDate: new Date("2020-01-15"),
        salary: 75000,
        managerId: 2,
        isActive: true, // Changed from status to isActive
        // Optional fields can be omitted or included as needed
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@hrms.com",
        phone: "9876543210",
        dateOfBirth: new Date("1980-08-22"), // Added to match interface
        gender: "female", // Added to match interface
        position: "IT Manager", // Changed from jobTitle to position
        departmentId: 1, // Assuming IT department has ID 1
        hireDate: new Date("2018-05-20"),
        salary: 95000,
        managerId: null,
        isActive: true, // Changed from status to isActive
      },
    ];

    const departments = [
      {
        id: 1,
        name: "Engineering",
        description: "Handles all tech development",
        location: "HQ 1st Floor",
        budget: 1000000,
        headId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        companyId: 1,
      },
    ];

    const jobs = [
      {
        id: 1,
        title: "Software Developer",
        departmentId: 2,
        minSalary: 60000,
        maxSalary: 90000,
      },
      {
        id: 2,
        title: "HR Specialist",
        departmentId: 1,
        minSalary: 50000,
        maxSalary: 70000,
      },
    ];

    const candidates = [
      {
        id: 1,
        name: "Alex Johnson",
        email: "alex@example.com",
        phone: "5551234567",
        appliedFor: 1,
        status: "interview",
      },
    ];

    const attendance = [
      {
        id: 1,
        employeeId: 1,
        date: "2023-05-01",
        status: "present",
        hoursWorked: 8,
      },
    ];

    const leaveRequests = [
      {
        id: 1,
        employeeId: 1,
        startDate: "2023-06-01",
        endDate: "2023-06-05",
        type: "vacation",
        status: "approved",
      },
    ];

    const salaries = [
      {
        id: 1,
        employeeId: 1,
        amount: 75000,
        effectiveDate: "2023-01-01",
        paymentFrequency: "monthly",
      },
    ];

    const performanceReviews = [
      {
        id: 1,
        employeeId: 1,
        reviewerId: 2,
        date: "2023-03-15",
        rating: 4.5,
        comments: "Excellent performance",
      },
    ];

    return {
      users,
      employees,
      departments,
      jobs,
      candidates,
      attendance,
      leaveRequests,
      salaries,
      performanceReviews,
      companies,
    };
  }

  // Override genId to ensure entities always have an id
  genId<T extends { id: number }>(
    collection: T[],
    collectionName: string
  ): number {
    return collection.length > 0
      ? Math.max(...collection.map((item) => item.id)) + 1
      : 1;
  }

  // Optional: Add request interception for custom behavior
  responseInterceptor(responseOptions, requestInfo) {
    // You can modify responses here if needed
    return responseOptions;
  }
}
