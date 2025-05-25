import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HrmsService } from "../../services/hrms.service";
import { user } from "../../models/hrms.model";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  user: user = {
    id: 0,
    username: "",
    email: "",
    password: "",
    role: "employee",
    isActive: true,
    employeeId: 0,
    companyId: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  employees = [];
  companies = [];
  isEdit = false;

  constructor(
    private hrmsService: HrmsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.hrmsService.getUserById(id).subscribe((data) => (this.user = data));
    }
    this.loadEmployees();
    this.loadCompanies();
  }

  loadEmployees() {
    this.hrmsService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
  }

  loadCompanies() {
    this.hrmsService
      .getCompanies()
      .subscribe((data) => (this.companies = data));
  }

  onSubmit() {
    if (this.isEdit) {
      this.hrmsService
        .updateUser(this.user)
        .subscribe(() => this.router.navigate(["/users/list"]));
    } else {
      this.hrmsService
        .addUser(this.user)
        .subscribe(() => this.router.navigate(["/users/list"]));
    }
  }
  onCancel() {
    this.router.navigate(["/users/list"]);
  }
}
