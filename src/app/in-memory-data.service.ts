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
        name: "Innovative Tech Group",
        description: "Provider of innovative tech solutions",
        industry: "Information Technology",
        location: "New York, NY",
        email: "contact@innovativetech.com",
        phone: "+1 (212) 555-5678",
        website: "https://innovativetech.com",
        establishedDate: new Date("2015-08-20"),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Future Tech Solutions",
        description: "Expert in future technology consulting",
        industry: "Information Technology",
        location: "Austin, TX",
        email: "hello@futuretech.com",
        phone: "+1 (512) 555-9101",
        website: "https://futuretech.com",
        establishedDate: new Date("2018-11-30"),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // ... other companies
    ];

    const departments = [
      {
        id: 1,
        name: "HR",
        description: "Human Resources",
        location: "1st Floor",
        budget: 50000,
        companyId: 1, //from company id
      },
      {
        id: 2,
        name: "SW",
        description: "Develop Software",
        location: "2nd Floor",
        budget: 600000,

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
      {
        id: 2,
        firstName: "kebede",
        lastName: "alemu",
        email: "kebede@gmail.com",
        phone: "0934345678",
        position: "frotnend Stack Developer",
        departmentId: 1, // Changed to match department IDs
        hireDate: new Date("2022-05-10"),
        salary: 80000, // Added base salary
        isActive: true,
        companyId: 1,
      },
      // ... other employees
    ];

    const users = [
      {
        id: 1,
        username: "admin",
        email: "admin@company.com",
        password: "admin123",
        role: "admin",
        isActive: true,
        employeeId: 1, //from employee id
        companyId: 1, // come company id
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: "recruiter",
        email: "recruiter@company.com",
        password: "123",
        role: "recruiter",
        isActive: true,
        employeeId: 2, //from employee id
        companyId: 2, // come company id
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const jobs = [
      {
        id: 1,
        title: "Frontend Developer",
        description: "Develop and maintain Angular-based web applications.",
        departmentId: 1, //come from department ID
        companyId: 1, //come from company ID
        requirements: [
          "3+ years of Angular experience",
          "Strong HTML/CSS skills",
          "Knowledge of REST APIs",
        ],
        responsibilities: [
          "Develop UI components",
          "Collaborate with backend team",
          "Ensure responsive design",
        ],
        location: "Addis Ababa",
        type: "full-time",
        salaryRangeMin: 1200,
        salaryRangeMax: 2000,
        isRemote: false,
        experienceLevel: "mid",
        educationLevel: "bachelor",
        postedDate: new Date("2025-05-20"),
        closingDate: new Date("2025-06-20"),
        isActive: true,
      },
      {
        id: 2,
        title: "Data Analyst Intern",
        description: "Support the data team by analyzing reports and trends.",
        departmentId: 2, //come from department ID
        companyId: 1, //come from company ID
        requirements: [
          "Basic understanding of data analysis",
          "Familiarity with Excel and SQL",
        ],
        responsibilities: [
          "Prepare weekly reports",
          "Assist in data cleaning",
          "Work under senior analysts",
        ],
        location: "Remote",
        type: "internship",
        isRemote: true,
        experienceLevel: "entry",
        postedDate: new Date("2025-05-21"),
        isActive: true,
      },
      {
        id: 3,
        title: "HR Executive",
        description: "Manage employee records and recruitment processes.",
        departmentId: 2, //come from department ID
        companyId: 2, //come from company ID
        requirements: [
          "5+ years in HR management",
          "Good communication skills",
        ],
        responsibilities: [
          "Oversee hiring",
          "Manage payroll records",
          "Develop HR policies",
        ],
        location: "Bahir Dar",
        type: "full-time",
        salaryRangeMin: 1500,
        salaryRangeMax: 2500,
        isRemote: false,
        experienceLevel: "senior",
        educationLevel: "master",
        postedDate: new Date("2025-05-22"),
        closingDate: new Date("2025-06-15"),
        isActive: false,
      },
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
    const candidates = [
      {
        id: 1,
        firstName: "Alex",
        lastName: "Johnson",
        email: "alex.johnson@example.com",
        phone: "555-0303",
        jobId: "1", //come from job
        resumeUrl: "http://example.com/resumes/alex.pdf",
        skills: ["JavaScript", "Angular", "TypeScript"],
        experience: "Junior",
        education: "BSc Computer Science",
        source: "linkedin",
      },
      {
        id: 2,
        firstName: "Maria",
        lastName: "Gomez",
        email: "maria.gomez@example.com",
        phone: "555-0456",
        jobId: "2", //come from job
        resumeUrl: "http://example.com/resumes/maria.pdf",
        skills: ["Java", "Spring Boot", "MySQL"],
        experience: "Senior",
        education: "MSc Software Engineering",
        source: "website",
      },
      {
        id: 3,
        firstName: "Mekkias",
        lastName: "Belay",
        email: "david.lee@example.com",
        phone: "555-0678",
        jobId: "3", //come from job
        resumeUrl: "http://example.com/resumes/david.pdf",
        skills: ["JavaScript", "Node.js", "SQL"],
        experience: "Entry",
        education: "BSc Information Technology",
        source: "referral",
      },
    ];

    return {
      users,
      employees,
      departments,
      company,
      salaries,
      jobs,
      candidates,
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
