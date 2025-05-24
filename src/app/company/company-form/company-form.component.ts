import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HrmsService } from "../../services/hrms.service";
import { Company } from "../../models/hrms.model";

@Component({
  selector: "app-company-form",
  templateUrl: "./company-form.component.html",
  styleUrls: ["./company-form.component.scss"],
})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;
  isEditMode = false;
  isSaving = false;
  companyId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private companyService: HrmsService
  ) {}

  ngOnInit(): void {
    this.initForm();

    // Check if it's edit mode based on the route
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.isEditMode = true;
        this.companyId = +id;
        this.loadCompany(this.companyId);
      }
    });
  }

  initForm(): void {
    this.companyForm = this.fb.group({
      id: [null], // include if you're editing
      name: ["", Validators.required],
      industry: [""],
      location: ["", Validators.required],
      email: ["", Validators.email],
      phone: [""],
      website: [""],
      establishedDate: [""],
      description: [""],
      isActive: [false],
    });
  }

  loadCompany(id: number): void {
    this.companyService.getCompanyById(id).subscribe({
      next: (company: Company) => this.companyForm.patchValue(company),
      error: (err) => console.error("Failed to load company:", err),
    });
  }

  onSubmit(): void {
    if (this.companyForm.invalid) return;

    this.isSaving = true;
    const formData = this.companyForm.value;

    if (this.isEditMode) {
      // Update
      this.companyService.updateCompany(formData).subscribe({
        next: () => {
          this.isSaving = false;
          this.router.navigate(["/company/list"]); // ✅ Redirect after update
        },
        error: (err) => {
          console.error("Update failed:", err);
          this.isSaving = false;
        },
      });
    } else {
      // Add
      this.companyService.addCompany(formData).subscribe({
        next: () => {
          this.isSaving = false;
          this.router.navigate(["/company/list"]); // ✅ Redirect after add
        },
        error: (err) => {
          console.error("Add failed:", err);
          this.isSaving = false;
        },
      });
    }
  }

  onCancel(): void {
    this.router.navigate(["/company/list"]); // Optional: Cancel button routing
  }
}
