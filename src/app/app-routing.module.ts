import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "",
    loadChildren: () =>
      import("./userLogin/login.module").then((m) => m.LoginModule),
  },
  //profile change
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
  },

  //dashboard
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

  //users
  {
    path: "users",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  // { path: "", redirectTo: "/users/list", pathMatch: "full" },

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

  //cnadidater
  { path: "", redirectTo: "jobs/list/candidater", pathMatch: "full" },
  {
    path: "jobs/list",
    loadChildren: () =>
      import("./candidater/candidater.module").then((m) => m.CandidaterModule),
  },

  // { path: "", redirectTo: "jobs/apply", pathMatch: "full" },
  {
    path: "jobs",
    loadChildren: () =>
      import("./candidater/candidater.module").then((m) => m.CandidaterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
