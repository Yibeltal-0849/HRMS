import { Component } from "@angular/core";

@Component({
  selector: "app-candidate-layout",
  templateUrl: "./candidate-layout.component.html",
  styleUrls: ["./candidate-layout.component.scss"],
})
export class CandidateLayoutComponent {
  currentYear: number = new Date().getFullYear();

  logout() {
    // Add logout logic if needed
  }
}
