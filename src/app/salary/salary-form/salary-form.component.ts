import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HrmsService } from "../../services/hrms.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Salary } from "../../models/hrms.model";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Employee } from "../../models/hrms.model";

@Component({
  selector: "app-salary-form",
  templateUrl: "./salary-form.component.html",
  styleUrls: ["./salary-form.component.scss"],
})
export class SalaryFormComponent implements OnInit {
  salaryForm: FormGroup;
  isEditMode = false;
  salaryId: number | null = null;
  isLoading = false;
  employees: Employee[] = [];
  filteredEmployees: Observable<Employee[]>;

  paymentFrequencies = [
    { value: "monthly", viewValue: "Monthly" },
    { value: "bi-weekly", viewValue: "Bi-Weekly" },
    { value: "weekly", viewValue: "Weekly" },
    { value: "annual", viewValue: "Annual" },
  ];

  constructor(
    private fb: FormBuilder,
    private hrmsService: HrmsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.salaryForm = this.fb.group({
      employeeId: ["", Validators.required],
      baseSalary: ["", [Validators.required, Validators.min(0)]],
      bonus: ["", Validators.min(0)],
      allowances: ["", Validators.min(0)],
      deductions: ["", Validators.min(0)],
      tax: ["", Validators.min(0)],
      effectiveDate: ["", Validators.required],
      paymentFrequency: ["", Validators.required],
      bankAccountNumber: [""],
      bankName: [""],
      notes: [""],
    });
  }

  ngOnInit(): void {
    this.loadEmployees();

    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.salaryId = +params["id"];
        this.loadSalary(this.salaryId);
      }
    });

    this.filteredEmployees = this.salaryForm
      .get("employeeId")!
      .valueChanges.pipe(
        startWith(""),
        map((value) => this._filterEmployees(value))
      );
  }

  private _filterEmployees(value: string | number): Employee[] {
    if (typeof value === "string") {
      const filterValue = value.toLowerCase();
      return this.employees.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(filterValue) ||
          employee.lastName.toLowerCase().includes(filterValue) ||
          employee.id.toString().includes(filterValue)
      );
    } else {
      return this.employees;
    }
  }

  displayEmployee(employee?: Employee): string {
    return employee
      ? `${employee.firstName} ${employee.lastName} (ID: ${employee.id})`
      : "";
  }

  loadEmployees(): void {
    this.hrmsService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  loadSalary(id: number): void {
    this.isLoading = true;
    this.hrmsService.getSalaryById(id).subscribe({
      next: (salary) => {
        this.salaryForm.patchValue({
          ...salary,
          effectiveDate: new Date(salary.effectiveDate),
        });
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open("Failed to load salary data", "Close", {
          duration: 3000,
        });
      },
    });
  }

  onSubmit(): void {
    if (this.salaryForm.invalid) {
      return;
    }

    this.isLoading = true;
    const salaryData: Salary = this.salaryForm.value;

    const operation = this.isEditMode
      ? this.hrmsService.updateSalary({ ...salaryData, id: this.salaryId! })
      : this.hrmsService.addSalary(salaryData);

    operation.subscribe({
      next: () => {
        this.snackBar.open(
          `Salary ${this.isEditMode ? "updated" : "added"} successfully`,
          "Close",
          { duration: 3000 }
        );
        this.router.navigate(["/salaries/list"]);
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open(
          `Failed to ${this.isEditMode ? "update" : "add"} salary`,
          "Close",
          { duration: 3000 }
        );
      },
    });
  }

  onCancel(): void {
    this.router.navigate(["/salaries/list"]);
  }
}
