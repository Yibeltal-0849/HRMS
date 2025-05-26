import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "hrms-system";
  currentYear = new Date().getFullYear();

  isSidenavOpen = true;
  isScreenWide = true;
  isDropdownOpen = false;

  ngOnInit(): void {
    this.updateSidenavState();
  }

  @HostListener("window:resize", [])
  onWindowResize(): void {
    this.updateSidenavState();
  }

  updateSidenavState(): void {
    this.isScreenWide = window.innerWidth > 768;
    this.isSidenavOpen = this.isScreenWide;

    // Close dropdown on large screens
    if (this.isScreenWide) {
      this.isDropdownOpen = false;
    }
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  closeSidenav(): void {
    if (!this.isScreenWide) {
      this.isSidenavOpen = false;
    }
  }

  toggleDropdown(): void {
    if (!this.isScreenWide) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  logout(): void {
    console.log("Logout clicked");
    // Implement actual logout logic here
  }
}
