import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // Add ReactiveFormsModule
import { CandidaterFormComponent } from "./candidater-form/candidater-form.component";
import { CandidaterListComponent } from "./candidater-list/candidater-list.component";
import { CandidaterRoutingModule } from "./candidater-routing.module";

@NgModule({
  declarations: [CandidaterFormComponent, CandidaterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CandidaterRoutingModule,
  ],
})
export class CandidaterModule {}
