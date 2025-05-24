import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const company = [
      {
        id: 1,
        name: "Tech Solutions Inc.",
        description: "Leading technology consulting firm",
        industry: "Information Technology",
        location: "San Francisco, CA",
        email: "info@techsolutions.com",
        phone: "+1 (415) 555-1234",
        website: "https://techsolutions.com",
        establishedDate: new Date("2010-05-15"),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // ... other companies
    ];

    const users = [
      {
        id: 1,
        username: "sara_t",
        email: "sara@technova.com",
        role: "manager",
        isActive: true,
        employeeId: 1,
        companyId: 1,
      },
      // ... other users
    ];

    const departments = [
      {
        id: 1,
        name: "HR",
        description: "Human Resources",
        location: "1st Floor",
        budget: 50000,
        headId: 101,
        companyId: 1,
      },
      // ... other departments
    ];

    const employees = [
      {
        id: 1,
        firstName: "Yibeltal",
        lastName: "Ayalneh",
        email: "yibeltal@gmail.com",
        phone: "0912345678",
        position: "Full Stack Developer",
        departmentId: 1, // Changed to match department IDs
        hireDate: new Date("2022-05-10"),
        salary: 80000, // Added base salary
        isActive: true,
        companyId: 1,
      },
      // ... other employees
    ];

    const salaries = [
      {
        id: 1,
        employeeId: 1, // Matches employee ID 1 (Yibeltal)
        baseSalary: 80000,
        bonus: 5000,
        allowances: 3000,
        deductions: 2000,
        tax: 12000,
        effectiveDate: new Date("2023-01-01"),
        paymentFrequency: "monthly",
        bankAccountNumber: "ET1234567890",
        bankName: "Commercial Bank of Ethiopia",
        notes: "Regular salary with performance bonus",
        isActive: true,
      },
      {
        id: 2,
        employeeId: 2, // Matches employee ID 2 (Kefale)
        baseSalary: 75000,
        bonus: 3000,
        allowances: 2500,
        deductions: 1500,
        tax: 11000,
        effectiveDate: new Date("2023-01-01"),
        paymentFrequency: "monthly",
        bankAccountNumber: "ET9876543210",
        bankName: "Dashen Bank",
        notes: "New hire salary package",
        isActive: true,
      },
    ];

    return {
      users,
      employees,
      departments,
      company,
      salaries, // Added salaries collection
    };
  }

  // Enhanced ID generator
  genId<T extends { id: number }>(
    collection: T[],
    collectionName: string
  ): number {
    if (collectionName === "salaries") {
      // Special case for salaries to ensure sequential IDs
      return collection.length > 0
        ? Math.max(...collection.map((s) => s.id)) + 1
        : 1;
    }
    return collection.length > 0
      ? Math.max(...collection.map((item) => item.id)) + 1
      : 1;
  }
}
