import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { Job } from "../../models/hrms.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.scss"],
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private hrmsService: HrmsService, private router: Router) {}

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
      this.deleteJob(jobId);
    }
  }

  deleteJob(jobId: number): void {
    // TODO: Add your delete logic here, such as:
    // this.jobService.deleteJob(jobId).subscribe(...)
    console.log("Job deleted:", jobId);
  }
}
