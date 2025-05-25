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
  //company
  {
    path: "company",
    loadChildren: () =>
      import("./company/company.module").then((m) => m.CompanyModule),
  },
  // { path: "", redirectTo: "/company", pathMatch: "full" },

  //user
  {
    path: "users",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },

  //department
  {
    path: "departments",
    loadChildren: () =>
      import("./department/department.module").then((m) => m.DepartmentModule),
  },
  // { path: "**", redirectTo: "dashboard" }, lead to error
  {
    path: "departments",
    loadChildren: () =>
      import("./department/department.module").then((m) => m.DepartmentModule),
  },
  { path: "", redirectTo: "departments/list", pathMatch: "full" },

  //employee
  { path: "", redirectTo: "employees/list", pathMatch: "full" },
  { path: "", redirectTo: "employees/list", pathMatch: "full" },
  {
    path: "employees",
    loadChildren: () =>
      import("./employee/employee.module").then((m) => m.EmployeeModule),
  },

  //salary
  {
    path: "salaries",
    loadChildren: () =>
      import("./salary/salary.module").then((m) => m.SalaryModule),
  },
  // { path: "", redirectTo: "/salaries/list", pathMatch: "full" },

  //for job

  {
    path: "jobs",
    loadChildren: () => import("./job/job.module").then((m) => m.JobModule),
  },
  // { path: "", redirectTo: "/jobs/list", pathMatch: "full" },

  //for candidate
  {
    path: "candidates",
    loadChildren: () =>
      import("./candidate/candidate.module").then((m) => m.CandidateModule),
  },
  // { path: "", redirectTo: "/candidates/list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
