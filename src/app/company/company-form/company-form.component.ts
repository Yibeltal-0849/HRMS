import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
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
  isSaving = false;
  today = new Date();
  mode: "add" | "edit" = "add";
  companyId?: number;

  constructor(
    private fb: FormBuilder,
    private hrmsService: HrmsService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.mode = "edit";
        this.companyId = +id;
        this.hrmsService.getCompanyById(this.companyId).subscribe((company) => {
          if (company) {
            this.patchForm(company);
          } else {
            this.snackBar.open("Company not found", "Close", {
              duration: 3000,
              panelClass: "error-snackbar",
            });
            this.router.navigate(["/company"]);
          }
        });
      }
    });
  }

  initForm(): void {
    this.companyForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      description: ["", Validators.maxLength(500)],
      industry: ["", Validators.maxLength(50)],
      location: ["", [Validators.required, Validators.maxLength(100)]],
      email: ["", [Validators.email, Validators.maxLength(100)]],
      phone: ["", [Validators.pattern(/^[0-9\+\-\s]+$/)]],
      website: [
        "",
        Validators.pattern(
          /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
        ),
      ],
      establishedDate: [null],
      isActive: [true],
    });
  }

  patchForm(company: Company): void {
    this.companyForm.patchValue({
      name: company.name,
      description: company.description,
      industry: company.industry,
      location: company.location,
      email: company.email,
      phone: company.phone,
      website: company.website,
      establishedDate: company.establishedDate
        ? new Date(company.establishedDate)
        : null,
      isActive: company.isActive,
    });
  }

  onSubmit(): void {
    if (this.companyForm.invalid) {
      this.markFormGroupTouched(this.companyForm);
      return;
    }

    this.isSaving = true;
    const companyData = this.companyForm.value;

    const operation$ =
      this.mode === "add"
        ? this.hrmsService.addCompany(companyData)
        : this.hrmsService.updateCompany({
            ...companyData,
            id: this.companyId,
          });

    operation$.subscribe({
      next: () => {
        this.snackBar.open(
          `Company ${this.mode === "add" ? "added" : "updated"} successfully`,
          "Close",
          { duration: 3000, panelClass: "success-snackbar" }
        );
        this.router.navigate(["/company"]);
      },
      error: (error) => {
        this.snackBar.open(
          `Error ${this.mode === "add" ? "adding" : "updating"} company: ${
            error.message || "Unknown error"
          }`,
          "Close",
          { duration: 5000, panelClass: "error-snackbar" }
        );
        this.isSaving = false;
      },
    });
  }

  onCancel(): void {
    if (
      this.companyForm.dirty &&
      !confirm("You have unsaved changes. Are you sure you want to cancel?")
    ) {
      return;
    }
    this.router.navigate(["/company"]);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get name() {
    return this.companyForm.get("name");
  }
  get location() {
    return this.companyForm.get("location");
  }
  get email() {
    return this.companyForm.get("email");
  }
  get phone() {
    return this.companyForm.get("phone");
  }
  get website() {
    return this.companyForm.get("website");
  }
}
