import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProfileComponent } from "../profile/change-form/profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, FormsModule, ProfileRoutingModule, MaterialModule],
})
export class ProfileModule {}
