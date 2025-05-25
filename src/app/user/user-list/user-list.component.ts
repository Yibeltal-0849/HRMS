import { Component, OnInit, ViewChild } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { Router } from "@angular/router";
import { MatPaginator, PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  paginatedUsers: any[] = [];
  columns: string[] = ["username", "email", "role", "actions"];
  searchTerm: string = "";
  successMessage: string = "";

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private hrmsService: HrmsService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.hrmsService.getUsers().subscribe((data) => {
      this.users = data;
      this.filteredUsers = [...this.users];
      this.paginate(0, 5);
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(
      (user) =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.paginator.firstPage();
    this.paginate(0, this.paginator.pageSize || 5);
  }

  clearSearch() {
    this.searchTerm = "";
    this.filterUsers();
  }

  onPageChange(event: PageEvent) {
    this.paginate(event.pageIndex, event.pageSize);
  }

  paginate(pageIndex: number, pageSize: number) {
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
  }

  editUser(id: number) {
    this.router.navigate(["/users/edit", id]);
  }

  deleteUser(id: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.hrmsService.deleteUser(id).subscribe(() => {
        this.successMessage = "User deleted successfully";
        this.getUsers(); // Refresh user list
      });
    }
  }
}
