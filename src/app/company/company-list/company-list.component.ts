import { Component, OnInit } from "@angular/core";
import { HrmsService } from "../../services/hrms.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
  companies: any[] = [];
  displayedColumns: string[] = [
    "id",
    "name",
    "industry",
    "location",
    "email",
    "isActive",
    "actions",
  ];
  isLoading = true;
  error: string | null = null;

  constructor(
    private hrmsService: HrmsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.isLoading = true;
    this.error = null;

    this.hrmsService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading companies:", error);
        this.error = this.getErrorMessage(error);
        this.snackBar.open(this.error, "Close", {
          duration: 5000,
          panelClass: ["error-snackbar"],
        });
        this.isLoading = false;
        this.companies = [];
      },
    });
  }

  private getErrorMessage(error: any): string {
    if (error.error instanceof ErrorEvent) {
      return `Error: ${error.error.message}`;
    } else {
      return (
        error.message ||
        error.statusText ||
        `Server returned code ${error.status}` ||
        "Unknown error occurred while loading companies"
      );
    }
  }

  // ✅ Use routing instead of dialog
  addCompany(): void {
    this.router.navigate(["/company/add"]);
  }

  editCompany(company: any): void {
    this.router.navigate(["/company/edit", company.id]);
  }

  deleteCompany(id: number): void {
    // You may optionally add a native confirm() or toast-based confirmation
    const confirmed = confirm("Are you sure you want to delete this company?");
    if (confirmed) {
      this.hrmsService.deleteCompany(id).subscribe({
        next: () => {
          this.snackBar.open("Company deleted successfully", "Close", {
            duration: 3000,
            panelClass: ["success-snackbar"],
          });
          this.loadCompanies();
        },
        error: (error) => {
          console.error("Error deleting company:", error);
          this.snackBar.open(
            `Error deleting company: ${this.getErrorMessage(error)}`,
            "Close",
            {
              duration: 5000,
              panelClass: ["error-snackbar"],
            }
          );
        },
      });
    }
  }
}
