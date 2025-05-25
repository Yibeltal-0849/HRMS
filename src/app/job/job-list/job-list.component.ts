import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { Job } from "../../models/hrms.model";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar"; // Optional: For notification

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.scss"],
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(
    private hrmsService: HrmsService,
    private router: Router,
    private snackBar: MatSnackBar // Optional
  ) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.hrmsService.getJobs().subscribe((data) => (this.jobs = data));
  }

  editJob(id: number) {
    this.router.navigate(["/jobs/edit", id]);
  }

  onDeleteJob(jobId: number): void {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (confirmed) {
      this.hrmsService.deleteJob(jobId).subscribe(() => {
        this.jobs = this.jobs.filter((job) => job.id !== jobId); // Remove from list
        this.snackBar.open("Job deleted successfully!", "Close", {
          duration: 3000,
        });
      });
    }
  }
}
