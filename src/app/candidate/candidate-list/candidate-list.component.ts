import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Candidate } from "../../models/hrms.model";
import { HrmsService } from "../../services/hrms.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-candidate-list",
  templateUrl: "./candidate-list.component.html",
  styleUrls: ["./candidate-list.component.scss"],
})
export class CandidateListComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "email",
    "phone",
    "jobId",
    "resumeUrl",
    "skills",
    "experience",
    "education",
    "source",
    "actions",
  ];

  dataSource: MatTableDataSource<Candidate>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private hrmsService: HrmsService, private router: Router) {}

  ngOnInit(): void {
    this.hrmsService.getCandidates().subscribe((candidates: Candidate[]) => {
      this.dataSource = new MatTableDataSource(candidates);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editCandidate(id: number): void {
    this.router.navigate(["/candidates/edit", id]);
  }

  deleteCandidate(id: number): void {
    const confirmed = window.confirm(
      "Are you sure you want to delete this candidate?"
    );

    if (confirmed) {
      this.hrmsService.deleteCandidate(id).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter((c) => c.id !== id);
      });
    }
  }
}
