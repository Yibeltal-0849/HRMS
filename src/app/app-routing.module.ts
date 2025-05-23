// import { NgModule } from "@angular/core";
// import { Routes, RouterModule } from "@angular/router";
// import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
// import { EmployeeFormComponent } from "./components/employee-form/employee-form.component";

// const routes: Routes = [
//   { path: "employees", component: EmployeeListComponent },
//   { path: "employees/new", component: EmployeeFormComponent },
//   { path: "employees/edit/:id", component: EmployeeFormComponent },
//   { path: "", redirectTo: "/employees", pathMatch: "full" },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

// src/app/app-routing.module.ts

// src/app/app-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    //   loadChildren: () =>
    //     import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "users",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "departments",
    loadChildren: () =>
      import("./department/department.module").then((m) => m.DepartmentModule),
  },
  { path: "**", redirectTo: "dashboard" },

  {
    path: "departments",
    loadChildren: () =>
      import("./department/department.module").then((m) => m.DepartmentModule),
  },
  { path: "", redirectTo: "departments/list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
