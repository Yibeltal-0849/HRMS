import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user: any = {
    id: 0,
    username: "Guest",
    email: "guest@example.com",
    password: "",
    role: "employee",
    isActive: true,
  };
  loading = false;
  isEdit = true;
  formSubmitted = false;

  constructor(
    private hrmsService: HrmsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const mockUserId = 1; // Hardcoded ID that exists in mock db
    this.loading = true;

    this.hrmsService.getUserById(mockUserId).subscribe({
      next: (data) => {
        this.user = data || this.user;
        this.loading = false;
      },
      error: (err) => {
        console.log("Using mock data instead", err);
        this.loading = false;
        this.showSnackbar("Using mock data (API unavailable)");
      },
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.isEdit) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  updateUser() {
    this.loading = true;
    this.hrmsService.updateUser(this.user).subscribe({
      next: () => {
        this.showSnackbar("Profile updated successfully!");
        this.loading = false;
        this.router.navigate(["/profile"]);
      },
      error: (err) => {
        console.error("Update error:", err);
        this.showSnackbar("Error updating profile");
        this.loading = false;
      },
    });
  }

  createUser() {
    this.loading = true;
    this.hrmsService.addUser(this.user).subscribe({
      next: (newUser) => {
        this.showSnackbar("User created successfully!");
        this.user = newUser;
        this.isEdit = true;
        this.loading = false;
      },
      error: (err) => {
        console.error("Create error:", err);
        this.showSnackbar("Error creating user");
        this.loading = false;
      },
    });
  }

  onCancel() {
    if (this.isEdit) {
      this.router.navigate(["/dashboard"]);
    } else {
      this.user = {
        id: 0,
        username: "",
        email: "",
        password: "",
        role: "employee",
        isActive: true,
      };
    }
  }

  private showSnackbar(message: string) {
    this.snackBar.open(message, "Close", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
