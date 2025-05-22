import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Employee } from "../models/employee.model";

@Injectable({
  providedIn: "root",
})
export class MockDataService implements InMemoryDbService {
  createDb() {
    const employees: Employee[] = [
      { id: 1, name: "John Doe", departmentId: 1, jobId: 1, salaryId: 1 },
      { id: 2, name: "Jane Smith", departmentId: 2, jobId: 2, salaryId: 2 },
    ];
    return { employees };
  }

  genId(employees: Employee[]): number {
    return employees.length > 0
      ? Math.max(...employees.map((emp) => emp.id)) + 1
      : 1;
  }
}
