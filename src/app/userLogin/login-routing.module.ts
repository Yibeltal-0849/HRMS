import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "../userLogin/login-form/login-form.component";

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  // You can add other routes here if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
