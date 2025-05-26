import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { user } from "../../models/hrms.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-change-list",
  templateUrl: "./change-list.component.html",
  styleUrls: ["./change-list.component.scss"],
})
export class ChangeListComponent implements OnInit {
  users: user[] = [];

  constructor(private hrmsService: HrmsService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.hrmsService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onEdit(userId: number) {
    this.router.navigate(["/change/edit", userId]);
  }

  onDelete(userId: number) {
    if (confirm("Are you sure to delete this user?")) {
      this.hrmsService.deleteUser(userId).subscribe(() => this.getUsers());
    }
  }
}
