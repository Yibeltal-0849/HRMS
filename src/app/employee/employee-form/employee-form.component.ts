import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HrmsService } from "../../services/hrms.service";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.scss"],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number;
  departments: any[] = []; // ✅ List of departments for dropdown

  constructor(
    private fb: FormBuilder,
    private hrmsService: HrmsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      position: ["", Validators.required],
      departmentId: [null, Validators.required], // Will be set via dropdown
      hireDate: ["", Validators.required],
      isActive: [true],
    });

    // ✅ Get departments for dropdown
    this.hrmsService.getDepartments().subscribe((data) => {
      this.departments = data;
    });

    // ✅ If editing an employee, prefill the form
    this.employeeId = +this.route.snapshot.paramMap.get("id");
    if (this.employeeId) {
      this.hrmsService.getEmployees().subscribe((emps) => {
        const emp = emps.find((e) => e.id === this.employeeId);
        if (emp) this.employeeForm.patchValue(emp);
      });
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const data = this.employeeForm.value;
      if (this.employeeId) {
        data.id = this.employeeId;
        this.hrmsService
          .updateEmployee(data)
          .subscribe(() => this.router.navigate(["/employees/list"]));
      } else {
        this.hrmsService
          .addEmployee(data)
          .subscribe(() => this.router.navigate(["/employees/list"]));
      }
    }
  }
}
