import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const departments = [
      { id: 1, name: "HR" },
      { id: 2, name: "Engineering" },
    ];
    const employees = [
      { id: 1, name: "Alice", departmentId: 1, jobId: 1, salaryId: 1 },
    ];
    const jobs = [{ id: 1, title: "Software Engineer" }];
    const salaries = [{ id: 1, amount: 60000 }];
    const candidates = [{ id: 1, name: "John Doe" }];
    const jobApplications = [{ id: 1, candidateId: 1, jobId: 1 }];
    const leaveRequests = [
      { id: 1, employeeId: 1, fromDate: "2025-01-01", toDate: "2025-01-05" },
    ];
    const attendance = [
      { id: 1, employeeId: 1, date: "2025-05-01", status: "Present" },
    ];
    const users = [{ id: 1, username: "admin", password: "admin123" }];
    const performanceReviews = [
      { id: 1, employeeId: 1, rating: 5, comment: "Excellent" },
    ];
    const companies = [{ id: 1, name: "Tech Corp" }];

    return {
      departments,
      employees,
      jobs,
      salaries,
      candidates,
      jobApplications,
      leaveRequests,
      attendance,
      users,
      performanceReviews,
      companies,
    };
  }
}
