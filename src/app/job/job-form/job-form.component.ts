import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HrmsService } from "../../services/hrms.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-job-form",
  templateUrl: "./job-form.component.html",
  styleUrls: ["./job-form.component.scss"],
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  jobId: number;
  departments: any[] = [];
  companies: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hrmsService: HrmsService,
    private snackBar: MatSnackBar
  ) {
    this.jobForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      departmentId: ["", Validators.required],
      companyId: ["", Validators.required],
      location: ["", Validators.required],
      type: ["", Validators.required],
      isRemote: [false],
      experienceLevel: ["", Validators.required],
      educationLevel: [""],
      salaryRangeMin: [null],
      salaryRangeMax: [null],
      isActive: [true],
      postedDate: [new Date(), Validators.required],
      closingDate: [""],
      requirements: [[]],
      responsibilities: [[]],
    });
  }

  ngOnInit() {
    // Load departments and companies
    this.hrmsService
      .getDepartments()
      .subscribe((data) => (this.departments = data));
    this.hrmsService
      .getCompanies()
      .subscribe((data) => (this.companies = data));

    // Check for editing mode
    this.jobId = +this.route.snapshot.paramMap.get("id");
    if (this.jobId) {
      this.hrmsService
        .getJobById(this.jobId) // ✅ Correct method
        .subscribe((job) => {
          if (job) {
            this.jobForm.patchValue(job);
          }
        });
    }
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const job: any = this.jobForm.value;

      if (this.jobId) {
        job.id = this.jobId;
        this.hrmsService.updateJob(job).subscribe(() => {
          this.snackBar.open("Job updated successfully!", "Close", {
            duration: 3000,
          });
          this.router.navigate(["/jobs/list"]);
        });
      } else {
        this.hrmsService.addJob(job).subscribe(() => {
          this.snackBar.open("Job added successfully!", "Close", {
            duration: 4000,
          });
          this.router.navigate(["/jobs/list"]);
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(["/jobs/list"]);
  }
}
