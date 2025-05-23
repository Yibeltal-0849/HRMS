// src/app/user/user-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "../components/user-list/user-list.component";
import { UserFormComponent } from "../components/user-form/user-form.component";

const routes: Routes = [
  { path: "list", component: UserListComponent }, // /users/list
  { path: "add", component: UserFormComponent }, // /users/add
  { path: "", redirectTo: "list", pathMatch: "full" }, // /users -> /users/list
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
