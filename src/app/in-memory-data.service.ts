import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        username: "admin",
        email: "admin@example.com",
        role: "admin",
        isActive: true,
      },
      {
        id: 2,
        username: "manager",
        email: "manager@example.com",
        role: "manager",
        isActive: true,
      },
    ];

    const employees = [
      { id: 1, name: "John Doe", position: "Developer", department: "IT" },
      { id: 2, name: "Jane Smith", position: "Manager", department: "HR" },
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

    // Add other collections as needed
    return { users, employees, departments };
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
