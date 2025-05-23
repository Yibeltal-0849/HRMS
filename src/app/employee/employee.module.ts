import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeListComponent } from "../employee/employee-list/employee-list.component";
import { EmployeeFormComponent } from "../employee/employee-form/employee-form.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [EmployeeListComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EmployeeRoutingModule,
  ],
})
export class EmployeeModule {}
