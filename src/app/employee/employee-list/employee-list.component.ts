// import { Component, OnInit } from "@angular/core";
// import { HrmsService } from "../../services/hrms.service";
// import { Router } from "@angular/router";

// @Component({
//   selector: "app-employee-list",
//   templateUrl: "./employee-list.component.html",
//   styleUrls: ["./employee-list.component.scss"],
// })
// export class EmployeeListComponent implements OnInit {
//   employees = [];

//   constructor(private hrmsService: HrmsService, private router: Router) {}

//   ngOnInit() {
//     this.loadEmployees();
//   }

//   loadEmployees() {
//     this.hrmsService
//       .getEmployees()
//       .subscribe((data) => (this.employees = data));
//   }

//   editEmployee(id: number) {
//     this.router.navigate(["/employees/add", id]);
//   }

//   deleteEmployee(id: number) {
//     if (confirm("Are you sure to delete this employee?")) {
//       this.hrmsService.deleteEmployee(id).subscribe(() => this.loadEmployees());
//     }
//   }
// }

import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"],
})
export class EmployeeListComponent implements OnInit {
  employees = [];

  constructor(private hrmsService: HrmsService, private router: Router) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.hrmsService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
  }

  editEmployee(id: number) {
    this.router.navigate(["/employees/add", id]);
  }

  deleteEmployee(id: number) {
    if (confirm("Are you sure to delete this employee?")) {
      this.hrmsService.deleteEmployee(id).subscribe(() => this.loadEmployees());
    }
  }
}
