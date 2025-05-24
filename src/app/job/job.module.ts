import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { JobRoutingModule } from "./job-routing.module";
import { JobListComponent } from "../job/job-list/job-list.component";
import { JobFormComponent } from "../job/job-form/job-form.component";

@NgModule({
  declarations: [JobListComponent, JobFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    JobRoutingModule,
  ],
})
export class JobModule {}
