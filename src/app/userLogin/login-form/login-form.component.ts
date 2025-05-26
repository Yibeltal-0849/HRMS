import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HrmsService } from "../../services/hrms.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  username = "";
  password = "";
  loginError = "";

  constructor(private hrmsService: HrmsService, private router: Router) {}

  onLogin() {
    this.hrmsService.getUsers().subscribe((users) => {
      const matchedUser = users.find(
        (u) => u.username === this.username && u.password === this.password
      );
      if (matchedUser) {
        this.loginError = "";
        this.router.navigate(["/dashboard"]); // Adjust route accordingly
      } else {
        this.loginError = "Invalid username or password";
      }
    });
  }
}
