import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobListComponent } from "../job/job-list/job-list.component";
import { JobFormComponent } from "../job/job-form/job-form.component";

const routes: Routes = [
  { path: "list", component: JobListComponent },
  { path: "add", component: JobFormComponent },
  { path: "edit/:id", component: JobFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRoutingModule {}
