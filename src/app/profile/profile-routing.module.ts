import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "../profile/change-form/profile.component";

const routes: Routes = [
  { path: "", component: ProfileComponent }, // this will be loaded as /profile
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
