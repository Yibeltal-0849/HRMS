import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { DepartmentFormComponent } from "./departmet-form/department-form.component";

const routes: Routes = [
  { path: "list", component: DepartmentListComponent },
  { path: "add", component: DepartmentFormComponent },
  { path: "edit/:id", component: DepartmentFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
