import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoginFormComponent } from "../userLogin/login-form/login-form.component";
import { MaterialModule } from "../material.module";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, FormsModule, MaterialModule, LoginRoutingModule],
})
export class LoginModule {}
