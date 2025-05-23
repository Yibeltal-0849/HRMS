import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "../employee/employee-list/employee-list.component";
import { EmployeeFormComponent } from "../employee/employee-form/employee-form.component";

const routes: Routes = [
  { path: "list", component: EmployeeListComponent },
  { path: "add", component: EmployeeFormComponent },
  { path: "add/:id", component: EmployeeFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
