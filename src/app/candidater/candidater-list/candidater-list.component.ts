import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";

@Component({
  selector: "app-candidater-list",
  templateUrl: "./candidater-list.component.html",
  styleUrls: ["./candidater-list.component.scss"],
})
export class CandidaterListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private hrmsService: HrmsService) {}

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.hrmsService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }
}
