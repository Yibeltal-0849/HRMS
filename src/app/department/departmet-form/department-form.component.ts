import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HrmsService } from "../../services/hrms.service";

@Component({
  selector: "app-department-form",
  templateUrl: "./department-form.component.html",
  styleUrls: ["./department-form.component.scss"],
})
export class DepartmentFormComponent implements OnInit {
  departmentForm: FormGroup;
  isEdit = false;
  id: number;
  successMessage = "";

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hrmsService: HrmsService
  ) {}

  ngOnInit() {
    this.departmentForm = this.fb.group({
      name: ["", Validators.required],
      companyId: ["", Validators.required],
      description: [""],
      location: [""],
      budget: ["", [Validators.min(0)]],
    });

    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam !== null) {
      this.id = +idParam;
      this.isEdit = true;
      this.hrmsService.getDepartments().subscribe((depts) => {
        const dept = depts.find((d) => d.id === this.id);
        if (dept) {
          this.departmentForm.patchValue(dept);
        } else {
          alert("Department not found.");
          this.router.navigate(["/departments/list"]);
        }
      });
    }
  }

  onSubmit() {
    if (this.departmentForm.invalid) return;

    const dept = { ...this.departmentForm.value, id: this.id };
    const request = this.isEdit
      ? this.hrmsService.updateDepartment(dept)
      : this.hrmsService.addDepartment(dept);

    request.subscribe(() => {
      if (this.isEdit) {
        this.successMessage = "✅ Department updated successfully!";
        // Optionally reset form or scroll to top
      } else {
        this.successMessage = "✅ Department created successfully!";
        this.departmentForm.reset();
      }

      setTimeout(() => {
        this.successMessage = "";
      }, 3000);
    });
  }
}
