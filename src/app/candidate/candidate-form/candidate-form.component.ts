import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HrmsService } from "../../services/hrms.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-candidate-form",
  templateUrl: "./candidate-form.component.html",
  styleUrls: ["./candidate-form.component.scss"],
})
export class CandidateFormComponent implements OnInit {
  candidateForm: FormGroup;
  isEditMode = false;
  jobs: any[] = [];
  successMessage: string = "";
  candidateId!: number; // ✅ Fix: Declare candidateId

  constructor(
    private fb: FormBuilder,
    private hrmsService: HrmsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.candidateForm = this.fb.group({
      id: [null],
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
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode = true;
      this.candidateId = +id; // ✅ Assign candidateId here
      this.hrmsService
        .getCandidateById(this.candidateId)
        .subscribe((candidate) => this.candidateForm.patchValue(candidate));
    }
    this.hrmsService.getJobs().subscribe((data) => (this.jobs = data));
  }

  onSubmit(): void {
    if (this.candidateForm.invalid) return;

    const formValue = this.candidateForm.value;

    // Convert skills to array
    if (typeof formValue.skills === "string") {
      formValue.skills = formValue.skills
        .split(",")
        .map((skill: string) => skill.trim())
        .filter((skill: string) => skill.length > 0);
    }

    if (this.isEditMode) {
      const updatedCandidate = { ...formValue, id: this.candidateId };
      this.hrmsService.updateCandidate(updatedCandidate).subscribe(() => {
        this.successMessage = "✅ Candidate updated successfully!";
      });
    } else {
      this.hrmsService.addCandidate(formValue).subscribe(() => {
        this.router.navigate(["/candidates"]);
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/candidates/list"]);
  }
}
