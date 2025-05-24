import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SalaryListComponent } from "./salary-list/salary-list.component";
import { SalaryFormComponent } from "./salary-form/salary-form.component";

const routes: Routes = [
  { path: "list", component: SalaryListComponent },
  { path: "add", component: SalaryFormComponent },
  { path: "edit/:id", component: SalaryFormComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryRoutingModule {}
