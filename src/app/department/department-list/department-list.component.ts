import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-department-list",
  templateUrl: "./department-list.component.html",
  styleUrls: ["./department-list.component.scss"],
})
export class DepartmentListComponent implements OnInit {
  departments = [];

  constructor(private hrmsService: HrmsService, private router: Router) {}

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.hrmsService
      .getDepartments()
      .subscribe((data) => (this.departments = data));
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
