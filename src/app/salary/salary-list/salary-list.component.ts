import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { Salary } from "../../models/hrms.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-salary-list",
  templateUrl: "./salary-list.component.html",
  styleUrls: ["./salary-list.component.scss"],
})
export class SalaryListComponent implements OnInit {
  displayedColumns: string[] = [
    "employeeId",
    "baseSalary",
    "bonus",
    "allowances",
    "deductions",
    "tax",
    "effectiveDate",
    "paymentFrequency",
    "actions",
  ];
  dataSource = new MatTableDataSource<Salary>();
  isLoading = true;

  constructor(
    private hrmsService: HrmsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSalaries();
  }

  loadSalaries(): void {
    this.isLoading = true;
    this.hrmsService.getSalaries().subscribe({
      next: (salaries) => {
        this.dataSource.data = salaries;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open("Failed to load salaries", "Close", {
          duration: 3000,
        });
      },
    });
  }

  editSalary(salaryId: number): void {
    this.router.navigate(["/salaries/edit", salaryId]);
  }

  deleteSalary(salaryId: number): void {
    if (confirm("Are you sure you want to delete this salary record?")) {
      this.hrmsService.deleteSalary(salaryId).subscribe({
        next: () => {
          this.snackBar.open("Salary deleted successfully", "Close", {
            duration: 3000,
          });
          this.loadSalaries();
        },
        error: () => {
          this.snackBar.open("Failed to delete salary", "Close", {
            duration: 3000,
          });
        },
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addNewSalary(): void {
    this.router.navigate(["/salaries/add"]);
  }
}
