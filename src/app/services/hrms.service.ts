import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HrmsService {
  private apiUrl = "api";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  // Companies
  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/company`);
  }

  getCompanyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/company/${id}`);
  }

  addCompany(company: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/company`,
      company,
      this.httpOptions
    );
  }

  updateCompany(company: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/company/${company.id}`,
      company,
      this.httpOptions
    );
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/company/${id}`,
      this.httpOptions
    );
  }

  // Users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }
  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user, this.httpOptions);
  }
  updateUser(user: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/users/${user.id}`,
      user,
      this.httpOptions
    );
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/users/${id}`,
      this.httpOptions
    );
  }

  // Employees
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }
  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/employees`,
      employee,
      this.httpOptions
    );
  }
  updateEmployee(employee: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/employees/${employee.id}`,
      employee,
      this.httpOptions
    );
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/employees/${id}`,
      this.httpOptions
    );
  }

  // Departments
  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/departments`);
  }
  addDepartment(dept: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/departments`,
      dept,
      this.httpOptions
    );
  }
  updateDepartment(dept: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/departments/${dept.id}`,
      dept,
      this.httpOptions
    );
  }
  deleteDepartment(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/departments/${id}`,
      this.httpOptions
    );
  }

  // Candidates
  getCandidates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/candidates`);
  }
  addCandidate(candidate: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/candidates`,
      candidate,
      this.httpOptions
    );
  }
  updateCandidate(candidate: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/candidates/${candidate.id}`,
      candidate,
      this.httpOptions
    );
  }
  deleteCandidate(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/candidates/${id}`,
      this.httpOptions
    );
  }

  // Jobs
  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/jobs`);
  }
  addJob(job: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/jobs`, job, this.httpOptions);
  }
  updateJob(job: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/jobs/${job.id}`,
      job,
      this.httpOptions
    );
  }
  deleteJob(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/jobs/${id}`, this.httpOptions);
  }

  // Job Applications
  getJobApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/jobApplications`);
  }
  addJobApplication(app: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/jobApplications`,
      app,
      this.httpOptions
    );
  }
  updateJobApplication(app: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/jobApplications/${app.id}`,
      app,
      this.httpOptions
    );
  }
  deleteJobApplication(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/jobApplications/${id}`,
      this.httpOptions
    );
  }

  // Attendance
  getAttendance(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/attendance`);
  }
  addAttendance(record: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/attendance`,
      record,
      this.httpOptions
    );
  }
  updateAttendance(record: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/attendance/${record.id}`,
      record,
      this.httpOptions
    );
  }
  deleteAttendance(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/attendance/${id}`,
      this.httpOptions
    );
  }

  // Leave Requests
  getLeaveRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/leaveRequests`);
  }
  addLeaveRequest(request: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/leaveRequests`,
      request,
      this.httpOptions
    );
  }
  updateLeaveRequest(request: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/leaveRequests/${request.id}`,
      request,
      this.httpOptions
    );
  }
  deleteLeaveRequest(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/leaveRequests/${id}`,
      this.httpOptions
    );
  }

  // Salaries
  getSalaries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/salaries`);
  }
  addSalary(salary: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/salaries`,
      salary,
      this.httpOptions
    );
  }
  updateSalary(salary: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/salaries/${salary.id}`,
      salary,
      this.httpOptions
    );
  }
  deleteSalary(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/salaries/${id}`,
      this.httpOptions
    );
  }

  // Performance Reviews
  getPerformanceReviews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/performanceReviews`);
  }
  addPerformanceReview(review: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/performanceReviews`,
      review,
      this.httpOptions
    );
  }
  updatePerformanceReview(review: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/performanceReviews/${review.id}`,
      review,
      this.httpOptions
    );
  }
  deletePerformanceReview(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/performanceReviews/${id}`,
      this.httpOptions
    );
  }

  // Generic methods (optional if above specific ones are used)
  getCollection(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${name}`);
  }
  addItem(name: string, item: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/${name}`,
      item,
      this.httpOptions
    );
  }
  updateItem(name: string, item: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/${name}/${item.id}`,
      item,
      this.httpOptions
    );
  }
  deleteItem(name: string, id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/${name}/${id}`,
      this.httpOptions
    );
  }
}
