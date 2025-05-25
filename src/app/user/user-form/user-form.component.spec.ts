import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HrmsService } from "../../services/hrms.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  userId: number;

  constructor(
    private fb: FormBuilder,
    private hrmsService: HrmsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      role: ["", Validators.required],
      isActive: [true],
    });

    this.userId = +this.route.snapshot.paramMap.get("id");
    if (this.userId) {
      this.hrmsService.getUsers().subscribe((users) => {
        const user = users.find((u) => u.id === this.userId);
        if (user) this.userForm.patchValue(user);
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const data = this.userForm.value;
      if (this.userId) {
        data.id = this.userId;
        this.hrmsService.updateUser(data).subscribe(() => {
          alert("User successfully updated");
          this.router.navigate(["/users/list"]);
        });
      } else {
        this.hrmsService.addUser(data).subscribe(() => {
          alert("User successfully added");
          this.router.navigate(["/users/list"]);
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(["/users/list"]);
  }
}
