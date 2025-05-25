import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { UserRoutingModule } from "./user-routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from "./user-form/user-form.component";

@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [CommonModule, FormsModule, MaterialModule, UserRoutingModule],
})
export class UserModule {}
