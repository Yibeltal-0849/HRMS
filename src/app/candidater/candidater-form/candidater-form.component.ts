import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HrmsService } from "../../services/hrms.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-candidate-form",
  templateUrl: "./candidater-form.component.html",
  styleUrls: ["./candidater-form.component.scss"],
})
export class CandidaterFormComponent implements OnInit {
  candidateForm: FormGroup;
  jobs: any[] = [];
  successMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private hrmsService: HrmsService,
    private router: Router
  ) {
    this.candidateForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      jobId: ["", Validators.required],
      resumeUrl: [""],
      skills: [""],
      experience: ["", Validators.required],
      education: ["", Validators.required],
      source: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.hrmsService.getJobs().subscribe((data) => (this.jobs = data));
  }

  onSubmit(): void {
    if (this.candidateForm.invalid) return;

    const formValue = this.candidateForm.value;

    // Convert skills from comma-separated string to array
    if (typeof formValue.skills === "string") {
      formValue.skills = formValue.skills
        .split(",")
        .map((skill: string) => skill.trim())
        .filter((skill: string) => skill.length > 0);
    }

    this.hrmsService.addCandidate(formValue).subscribe(() => {
      this.successMessage = "  Your application submitted successfully!";
      this.candidateForm.reset();
    });
  }

  cancel(): void {
    this.router.navigate(["/jobs/list/candidater"]);
  }
}
