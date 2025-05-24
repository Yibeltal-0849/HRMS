import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Salary } from "../models/hrms.model";

@Injectable({
  providedIn: "root",
})
export class HrmsService {
  private apiUrl = "api";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  // Unified error handler with detailed logging
  private handleError<T>(operation = "operation", result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.group(`Service Error: ${operation}`);
      console.error("Status:", error.status);
      console.error("Message:", error.message);
      console.error("Error Details:", error.error);
      console.groupEnd();

      // Return appropriate fallback based on method type
      return of(result as T);
    };
  }

  // ========== Companies ==========
  getCompanies(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/company`)
      .pipe(catchError(this.handleError<any[]>("getCompanies", [])));
  }

  getCompanyById(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/company/${id}`)
      .pipe(catchError(this.handleError<any>("getCompanyById")));
  }

  addCompany(company: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/company`, company, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addCompany")));
  }

  updateCompany(company: any): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/company/${company.id}`,
        company,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("updateCompany")));
  }

  deleteCompany(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/company/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteCompany")));
  }

  // ========== Users ==========
  getUsers(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/users`)
      .pipe(catchError(this.handleError<any[]>("getUsers", [])));
  }

  addUser(user: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/users`, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addUser")));
  }

  updateUser(user: any): Observable<any> {
    return this.http
      .put<any>(`${this.apiUrl}/users/${user.id}`, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>("updateUser")));
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/users/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteUser")));
  }

  // ========== Employees ==========
  getEmployees(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/employees`)
      .pipe(catchError(this.handleError<any[]>("getEmployees", [])));
  }

  addEmployee(employee: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/employees`, employee, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addEmployee")));
  }

  updateEmployee(employee: any): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/employees/${employee.id}`,
        employee,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("updateEmployee")));
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/employees/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteEmployee")));
  }

  // ========== Departments ==========
  getDepartments(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/departments`)
      .pipe(catchError(this.handleError<any[]>("getDepartments", [])));
  }

  addDepartment(dept: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/departments`, dept, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addDepartment")));
  }

  updateDepartment(dept: any): Observable<any> {
    return this.http
      .put<any>(`${this.apiUrl}/departments/${dept.id}`, dept, this.httpOptions)
      .pipe(catchError(this.handleError<any>("updateDepartment")));
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/departments/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteDepartment")));
  }

  // ========== Candidates ==========
  getCandidates(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/candidates`)
      .pipe(catchError(this.handleError<any[]>("getCandidates", [])));
  }

  addCandidate(candidate: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/candidates`, candidate, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addCandidate")));
  }

  updateCandidate(candidate: any): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/candidates/${candidate.id}`,
        candidate,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("updateCandidate")));
  }

  deleteCandidate(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/candidates/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteCandidate")));
  }

  // ========== Jobs ==========
  getJobs(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/jobs`)
      .pipe(catchError(this.handleError<any[]>("getJobs", [])));
  }

  addJob(job: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/jobs`, job, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addJob")));
  }

  updateJob(job: any): Observable<any> {
    return this.http
      .put<any>(`${this.apiUrl}/jobs/${job.id}`, job, this.httpOptions)
      .pipe(catchError(this.handleError<any>("updateJob")));
  }

  deleteJob(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/jobs/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteJob")));
  }

  // ========== Job Applications ==========
  getJobApplications(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/jobApplications`)
      .pipe(catchError(this.handleError<any[]>("getJobApplications", [])));
  }

  addJobApplication(app: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/jobApplications`, app, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addJobApplication")));
  }

  updateJobApplication(app: any): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/jobApplications/${app.id}`,
        app,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("updateJobApplication")));
  }

  deleteJobApplication(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/jobApplications/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteJobApplication")));
  }

  // ========== Attendance ==========
  getAttendance(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/attendance`)
      .pipe(catchError(this.handleError<any[]>("getAttendance", [])));
  }

  addAttendance(record: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/attendance`, record, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addAttendance")));
  }

  updateAttendance(record: any): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/attendance/${record.id}`,
        record,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("updateAttendance")));
  }

  deleteAttendance(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/attendance/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteAttendance")));
  }

  // ========== Leave Requests ==========
  getLeaveRequests(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/leaveRequests`)
      .pipe(catchError(this.handleError<any[]>("getLeaveRequests", [])));
  }

  addLeaveRequest(request: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/leaveRequests`, request, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addLeaveRequest")));
  }

  updateLeaveRequest(request: any): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/leaveRequests/${request.id}`,
        request,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("updateLeaveRequest")));
  }

  deleteLeaveRequest(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/leaveRequests/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteLeaveRequest")));
  }

  // ========== Salary ==========
  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(`${this.apiUrl}/salaries`).pipe(
      tap((_) => console.log("fetched salaries")),
      catchError(this.handleError<Salary[]>("getSalaries", []))
    );
  }

  getSalaryById(id: number): Observable<Salary> {
    return this.http.get<Salary>(`${this.apiUrl}/salaries/${id}`).pipe(
      tap((_) => console.log(`Fetched salary id=${id}`)),
      catchError(this.handleError<Salary>(`getSalaryById id=${id}`))
    );
  }

  addSalary(salary: Salary): Observable<Salary> {
    return this.http
      .post<Salary>(`${this.apiUrl}/salaries`, salary, this.httpOptions)
      .pipe(
        tap((s: Salary) => console.log(`Added salary id=${s.id}`)),
        catchError(this.handleError<Salary>("addSalary"))
      );
  }

  updateSalary(salary: Salary): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/salaries/${salary.id}`, salary, this.httpOptions)
      .pipe(
        tap((_) => console.log(`Updated salary id=${salary.id}`)),
        catchError(this.handleError<any>("updateSalary"))
      );
  }

  deleteSalary(id: number): Observable<Salary> {
    return this.http
      .delete<Salary>(`${this.apiUrl}/salaries/${id}`, this.httpOptions)
      .pipe(
        tap((_) => console.log(`Deleted salary id=${id}`)),
        catchError(this.handleError<Salary>("deleteSalary"))
      );
  }

  // ========== Performance Reviews ==========
  getPerformanceReviews(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/performanceReviews`)
      .pipe(catchError(this.handleError<any[]>("getPerformanceReviews", [])));
  }

  addPerformanceReview(review: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/performanceReviews`, review, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addPerformanceReview")));
  }

  updatePerformanceReview(review: any): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/performanceReviews/${review.id}`,
        review,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("updatePerformanceReview")));
  }

  deletePerformanceReview(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/performanceReviews/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deletePerformanceReview")));
  }

  // ========== Generic Methods ==========
  getCollection(name: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/${name}`)
      .pipe(catchError(this.handleError<any[]>("getCollection", [])));
  }

  addItem(name: string, item: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/${name}`, item, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addItem")));
  }

  updateItem(name: string, item: any): Observable<any> {
    return this.http
      .put<any>(`${this.apiUrl}/${name}/${item.id}`, item, this.httpOptions)
      .pipe(catchError(this.handleError<any>("updateItem")));
  }

  deleteItem(name: string, id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/${name}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteItem")));
  }
}
