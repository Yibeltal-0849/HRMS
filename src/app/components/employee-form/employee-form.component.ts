// import { Component, OnInit } from "@angular/core";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { EmployeeService } from "../../services/employee.service";
// import { Employee } from "../../models/employee.model";
// import { ActivatedRoute, Router } from "@angular/router";
// import { MatSnackBar } from "@angular/material/snack-bar";

// @Component({
//   selector: "app-employee-form",
//   templateUrl: "./employee-form.component.html",
//   styleUrls: ["./employee-form.component.scss"],
// })
// export class EmployeeFormComponent implements OnInit {
//   employeeForm: FormGroup;
//   isEditMode = false;
//   currentEmployeeId: number | null = null;
//   isLoading = false;

//   constructor(
//     private fb: FormBuilder,
//     private employeeService: EmployeeService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private snackBar: MatSnackBar
//   ) {
//     this.employeeForm = this.fb.group({
//       name: ["", [Validators.required, Validators.minLength(3)]],
//       departmentId: [
//         "",
//         [Validators.required, Validators.pattern(/^[1-9]\d*$/)],
//       ],
//       jobId: ["", [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
//       salaryId: ["", [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
//     });
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       if (params["id"]) {
//         this.isEditMode = true;
//         this.currentEmployeeId = +params["id"];
//         this.loadEmployeeData(this.currentEmployeeId);
//       }
//     });
//   }

//   loadEmployeeData(id: number): void {
//     this.isLoading = true;
//     this.employeeService.get(id).subscribe({
//       next: (employee) => {
//         this.employeeForm.patchValue(employee);
//         this.isLoading = false;
//       },
//       error: () => {
//         this.isLoading = false;
//         this.snackBar.open("Error loading employee data", "Close", {
//           duration: 3000,
//         });
//         this.router.navigate(["/employees"]);
//       },
//     });
//   }

//   onSubmit(): void {
//     if (this.employeeForm.invalid || this.isLoading) {
//       return;
//     }

//     this.isLoading = true;
//     const employeeData: Employee = {
//       ...this.employeeForm.value,
//       id: this.currentEmployeeId,
//     };

//     const operation = this.isEditMode
//       ? this.employeeService.update(employeeData)
//       : this.employeeService.create(employeeData);

//     operation.subscribe({
//       next: () => {
//         const message = this.isEditMode
//           ? "Employee updated successfully!"
//           : "Employee created successfully!";
//         this.snackBar.open(message, "Close", { duration: 3000 });
//         this.router.navigate(["/employees"]);
//       },
//       error: () => {
//         this.isLoading = false;
//         this.snackBar.open("An error occurred. Please try again.", "Close", {
//           duration: 3000,
//         });
//       },
//     });
//   }

//   // Convenience getters for form controls
//   get name() {
//     return this.employeeForm.get("name");
//   }
//   get departmentId() {
//     return this.employeeForm.get("departmentId");
//   }
//   get jobId() {
//     return this.employeeForm.get("jobId");
//   }
//   get salaryId() {
//     return this.employeeForm.get("salaryId");
//   }
// }
