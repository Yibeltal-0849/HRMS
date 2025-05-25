import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CandidateListComponent } from "../candidate/candidate-list/candidate-list.component";
import { CandidateFormComponent } from "../candidate/candidate-form/candidate-form.component";
import { CandidateRoutingModule } from "./candidate-routing.module";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [CandidateListComponent, CandidateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CandidateRoutingModule,
    MaterialModule,
  ],
})
export class CandidateModule {}
