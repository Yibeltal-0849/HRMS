import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SalaryListComponent } from "./salary-list/salary-list.component";
import { SalaryFormComponent } from "./salary-form/salary-form.component";
import { SalaryRoutingModule } from "./salary-routing.module";
import { MaterialModule } from "../material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

@NgModule({
  declarations: [SalaryListComponent, SalaryFormComponent],
  imports: [
    CommonModule,
    SalaryRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
  ],
})
export class SalaryModule {}
