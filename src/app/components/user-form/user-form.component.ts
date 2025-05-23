import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HrmsService } from "../../services/hrms.service";
import { Employee } from "../../models/hrms.model";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  employees: Employee[] = [];
  roles = ["admin", "manager", "employee", "hr"];

  constructor(private hrmsService: HrmsService) {}

  ngOnInit() {
    // Initialize form controls
    this.userForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.minLength(6)]), // optional, but validate if filled
      role: new FormControl("", Validators.required),
      isActive: new FormControl(true),
      employeeId: new FormControl(null), // optional relation
    });

    // Load employees for dropdown
    this.hrmsService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (err) => console.error("Error loading employees", err)
    );
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userData = this.userForm.value;
    console.log("Form data to submit:", userData);

    // Call your service to save user (addUser or updateUser)
    this.hrmsService.addUser(userData).subscribe(
      (res) => {
        console.log("User saved successfully", res);
        this.userForm.reset({ isActive: true });
      },
      (err) => console.error("Error saving user", err)
    );
  }

  getErrorMessage(controlName: string) {
    const control = this.userForm.get(controlName);
    if (control.hasError("required")) {
      return "You must enter a value";
    }
    if (control.hasError("email")) {
      return "Not a valid email";
    }
    if (control.hasError("minlength")) {
      return `Minimum length is ${control.errors.minlength.requiredLength}`;
    }
    return "";
  }
}
