import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyFormComponent } from "./company-form/company-form.component";

const routes: Routes = [
  { path: "list", component: CompanyListComponent },
  { path: "add", component: CompanyFormComponent },
  { path: "edit/:id", component: CompanyFormComponent },
  //   { path: "", redirectTo: "list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
