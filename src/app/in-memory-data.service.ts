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
      {
        id: 2,
        name: "Green Energy Corp",
        description: "Renewable energy solutions provider",
        industry: "Energy",
        location: "Austin, TX",
        email: "contact@greenenergy.com",
        phone: "+1 (512) 555-5678",
        website: "https://greenenergy.com",
        establishedDate: new Date("2015-08-20"),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
      {
        id: 2,
        username: "manager",
        email: "manager@example.com",
        role: "manager",
        isActive: true,
        employeeId: 2,
        companyId: 1,
      },
    ];

    const departments = [
      {
        id: 1,
        name: "HR",
        description: "Human Resources",
        location: "1st Floor",
        budget: 50000,
        headId: 101,
      },
      {
        id: 2,
        name: "IT",
        description: "Information Tech",
        location: "2nd Floor",
        budget: 120000,
        headId: 102,
      },
    ];

    const employees = [
      {
        id: 1,
        firstName: "Yibeltal",
        lastName: "Ayalneh",
        email: "yibeltal@gmail.com",
        phone: "0912345678",
        position: "full stack Developer",
        departmentId: 101,
        hireDate: new Date("2022-05-10"),
        isActive: true,
      },
      {
        id: 2,
        firstName: "Kefale",
        lastName: "Asefa",
        email: "kefale@gmail.com",
        phone: "0987654321",
        position: "Backend Developer",
        departmentId: 102,
        hireDate: new Date("2023-01-20"),
        isActive: true,
      },
    ];

    // Add other collections as needed
    return { users, employees, departments, company };
  }

  // Override genId to ensure entities always have an id
  genId<T extends { id: number }>(
    collection: T[],
    collectionName: string
  ): number {
    return collection.length > 0
      ? Math.max(...collection.map((item) => item.id)) + 1
      : 1;
  }
}
