import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Salary } from "../models/hrms.model";

@Injectable({
  providedIn: "root",
})
export class HrmsService {
  private apiUrl = "/api";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  // ✅ Unified error handler
  private handleError<T>(operation = "operation", result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.group(`❌ Error in ${operation}`);
      console.error("Status:", error.status);
      console.error("Message:", error.message);
      console.error("Error Details:", error.error);
      console.groupEnd();
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

  //======users======//

  // Get all users
  // Get all users
  getUsers(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/users`)
      .pipe(catchError(this.handleError<any[]>("getUsers", [])));
  }

  // Get user by ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`).pipe(
      tap((_) => console.log(`fetched user id=${id}`)),
      catchError(this.handleError<any>(`getUser id=${id}`))
    );
  }

  // Add a new user
  addUser(user: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/users`, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addUser")));
  }

  // Update existing user
  updateUser(user: any): Observable<any> {
    return this.http
      .put<any>(`${this.apiUrl}/users/${user.id}`, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>("updateUser")));
  }

  // Delete user by ID
  deleteUser(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/users/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteUser")));
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

  // ========================= Jobs =========================
  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/jobs`);
  }

  // GET job by ID
  getJobById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/jobs/${id}`);
  }

  // ADD new job
  addJob(job: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/jobs`, job);
  }

  // UPDATE job
  updateJob(job: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/jobs/${job.id}`, job);
  }

  // DELETE job
  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/jobs/${id}`);
  }

  // ... (Rest of the existing methods: candidates,  attendance, salary, leave requests, etc.)

  // ========== Candidates ==========

  /** GET: fetch all candidates */
  getCandidates(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/candidates`)
      .pipe(catchError(this.handleError<any[]>("getCandidates", [])));
  }

  /** GET: fetch single candidate by ID */
  getCandidateById(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/candidates/${id}`)
      .pipe(catchError(this.handleError<any>("getCandidateById")));
  }

  /** POST: add a new candidate */
  addCandidate(candidate: any): Observable<any> {
    // ✅ Ensure skills is always an array before sending to the backend
    if (typeof candidate.skills === "string") {
      candidate.skills = candidate.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);
    }

    return this.http
      .post<any>(`${this.apiUrl}/candidates`, candidate, this.httpOptions)
      .pipe(catchError(this.handleError<any>("addCandidate")));
  }

  /** PUT: update an existing candidate */
  updateCandidate(candidate: any): Observable<any> {
    return this.http
      .put<any>(
        `${this.apiUrl}/candidates/${candidate.id}`,
        candidate,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>("updateCandidate")));
  }

  /** DELETE: remove a candidate by ID */
  deleteCandidate(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/candidates/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>("deleteCandidate")));
  }

  // ========== Salary ==========
  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(`${this.apiUrl}/salaries`).pipe(
      tap(() => console.log("Fetched salaries")),
      catchError(this.handleError<Salary[]>("getSalaries", []))
    );
  }

  getSalaryById(id: number): Observable<Salary> {
    return this.http.get<Salary>(`${this.apiUrl}/salaries/${id}`).pipe(
      tap(() => console.log(`Fetched salary id=${id}`)),
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
        tap(() => console.log(`Updated salary id=${salary.id}`)),
        catchError(this.handleError<any>("updateSalary"))
      );
  }

  deleteSalary(id: number): Observable<Salary> {
    return this.http
      .delete<Salary>(`${this.apiUrl}/salaries/${id}`, this.httpOptions)
      .pipe(
        tap(() => console.log(`Deleted salary id=${id}`)),
        catchError(this.handleError<Salary>("deleteSalary"))
      );
  }

  // ========== Generic Collection Methods ==========
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
