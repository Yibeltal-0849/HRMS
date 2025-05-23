import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CompanyRoutingModule } from "./company-routing.module";
import { MaterialModule } from "../material.module";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyFormComponent } from "./company-form/company-form.component";
// import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CompanyListComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CompanyRoutingModule,
    // SharedModule,
  ],
  // entryComponents: [CompanyFormComponent],
})
export class CompanyModule {}
