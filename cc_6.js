// Step 2: Create a base class called Employee with the following properties: name, department
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe(){
        return `${this.name} works in ${this.department}`
    }
}

// Step 3: reate a subclass called Manager that extends Employee. Use super() to inherit name and department
class Manager extends Employee {
    constructor(name, dept, teamSize) {
        super(name, dept)
        this.teamSize = teamSize
    }
    describe() {
        return `${this.name} manages ${this.teamSize} peoples in ${this.department}. `
    }
}

// Step 4: Create a few sample employees and managers
const employee = [
    new Employee("Lorelai", "Operations"),
    new Employee("Rory", "Finance"),
    new Employee("Lane", "Marketing"),
    new Employee("Dean", "Operations")
];

const manager = [
    new Manager("Emily", "Operations", 10),
    new Manager("Max", "Finance", 4),
    new Manager("Gerry", "Marketing", 30)
];

// Step 5: Create a class called Company with a property employees (an array). Add methods
class Company {
   constructor() {
    this.employee = []
    }
    addEmployee(employee) {
        this.employee.push(employee)
    }
    listEmployees() {
        this.employee.forEach(emp => {
            console.log(emp.describe())
        });
    }
}


// Step 6: Instantiate a Company object, add both employee and manager instances, and call listEmployees().
const company = new Company();
employee.forEach(e => company.addEmployee(e));
manager.forEach(m => company.addEmployee(m));
company.listEmployees();