import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { HrmsService } from "../../services/hrms.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-department-list",
  templateUrl: "./department-list.component.html",
  styleUrls: ["./department-list.component.scss"],
})
export class DepartmentListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "companyId",
    "budget",
    "location",
    "actions",
  ];
  dataSource = new MatTableDataSource<any>([]);
  successMessage = "";

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(
    private hrmsService: HrmsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadDepartments();

    // Show success message if redirected after update
    this.route.queryParams.subscribe((params) => {
      if (params["updated"]) {
        this.successMessage = "✅ Department updated successfully!";
        setTimeout(() => {
          this.successMessage = "";
          // Optionally remove query params from URL after showing message
          this.router.navigate([], { queryParams: {} });
        }, 3000);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadDepartments() {
    this.hrmsService.getDepartments().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  editDepartment(id: number) {
    this.router.navigate(["/departments/edit", id]);
  }

  deleteDepartment(id: number) {
    if (confirm("Are you sure you want to delete this department?")) {
      this.hrmsService
        .deleteDepartment(id)
        .subscribe(() => this.loadDepartments());
    }
  }
}
