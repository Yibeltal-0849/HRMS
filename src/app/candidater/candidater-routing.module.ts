import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidaterFormComponent } from "./candidater-form/candidater-form.component";
import { CandidaterListComponent } from "./candidater-list/candidater-list.component";

const routes: Routes = [
  { path: "apply", component: CandidaterFormComponent },
  { path: "apply/:id", component: CandidaterFormComponent },
  { path: "candidater", component: CandidaterListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidaterRoutingModule {}
