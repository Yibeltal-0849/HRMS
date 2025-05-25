import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CandidateListComponent } from "../candidate/candidate-list/candidate-list.component";
import { CandidateFormComponent } from "../candidate/candidate-form/candidate-form.component";

const routes: Routes = [
  { path: "list", component: CandidateListComponent },
  { path: "add", component: CandidateFormComponent },
  { path: "edit/:id", component: CandidateFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}
