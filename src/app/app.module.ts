import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryDataService } from "./in-memory-data.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { MaterialModule } from "./material.module";
import { HrmsService } from "./services/hrms.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    MaterialModule,
    DashboardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      apiBase: "api/",
      delay: 500,
      dataEncapsulation: false,
      passThruUnknownUrl: true, // New in 0.11.0
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HrmsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
