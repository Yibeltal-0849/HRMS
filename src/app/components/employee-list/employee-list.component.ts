import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee.model";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../confirm-dialog.component";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = true;
  displayedColumns: string[] = [
    "id",
    "name",
    "departmentId",
    "jobId",
    "salaryId",
    "actions",
  ];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.isLoading = true;
    this.employeeService.getAll().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.isLoading = false;
      },
    });
  }

  editEmployee(id: number): void {
    this.router.navigate(["/employees/edit", id]);
  }

  deleteEmployee(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Confirm Delete",
        message: "Are you sure you want to delete this employee?",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeService.delete(id).subscribe({
          next: () => {
            this.loadEmployees(); // Refresh the list
          },
          error: (error) => {
            console.error("Error deleting employee:", error);
          },
        });
      }
    });
  }
}
