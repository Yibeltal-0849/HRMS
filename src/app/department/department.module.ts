import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { DepartmentRoutingModule } from "./department-routing.module";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { DepartmentFormComponent } from "./departmet-form/department-form.component";

@NgModule({
  declarations: [DepartmentListComponent, DepartmentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DepartmentRoutingModule,
  ],
})
export class DepartmentModule {}
