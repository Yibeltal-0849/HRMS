-- 1. Company Table
CREATE TABLE Company (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(20)
);

-- 2. Department Table
CREATE TABLE Department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    companyId INT,
    FOREIGN KEY (companyId) REFERENCES Company(id)
);

-- 3. Employee Table
CREATE TABLE Employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    hireDate DATE,
    departmentId INT,
    companyId INT,
    jobTitle VARCHAR(100),
    FOREIGN KEY (departmentId) REFERENCES Department(id),
    FOREIGN KEY (companyId) REFERENCES Company(id)
);

-- 4. Candidate Table
CREATE TABLE Candidate (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    resume TEXT
);

-- 5. Job Table
CREATE TABLE Job (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    description TEXT,
    departmentId INT,
    companyId INT,
    postedDate DATE,
    FOREIGN KEY (departmentId) REFERENCES Department(id),
    FOREIGN KEY (companyId) REFERENCES Company(id)
);

-- 6. JobApplication Table
CREATE TABLE JobApplication (
    id INT PRIMARY KEY AUTO_INCREMENT,
    candidateId INT,
    jobId INT,
    status ENUM('applied', 'interviewing', 'hired', 'rejected') DEFAULT 'applied',
    appliedDate DATE,
    FOREIGN KEY (candidateId) REFERENCES Candidate(id),
    FOREIGN KEY (jobId) REFERENCES Job(id)
);

-- 7. LeaveRequest Table
CREATE TABLE LeaveRequest (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employeeId INT,
    startDate DATE,
    endDate DATE,
    reason TEXT,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    FOREIGN KEY (employeeId) REFERENCES Employee(id)
);

-- 8. Attendance Table
CREATE TABLE Attendance (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employeeId INT,
    date DATE,
    status ENUM('present', 'absent', 'late', 'leave') DEFAULT 'present',
    FOREIGN KEY (employeeId) REFERENCES Employee(id)
);

-- 9. Salary Table
CREATE TABLE Salary (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employeeId INT,
    amount DECIMAL(10,2),
    effectiveDate DATE,
    FOREIGN KEY (employeeId) REFERENCES Employee(id)
);

-- 10. PerformanceReview Table
CREATE TABLE PerformanceReview (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employeeId INT,
    reviewerId INT,
    reviewDate DATE,
    score INT,
    comments TEXT,
    FOREIGN KEY (employeeId) REFERENCES Employee(id),
    FOREIGN KEY (reviewerId) REFERENCES Employee(id)
);

-- 11. User Table (For authentication & role management)
CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'hr', 'employee') DEFAULT 'employee',
    employeeId INT,
    FOREIGN KEY (employeeId) REFERENCES Employee(id)
);
