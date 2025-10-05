// Step 2
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe(){
        return `${this.name} works in ${this.department}`
    }
}

// Step 3
class Manager extends Employee {
    constructor(name, dept, teamSize) {
        super(name, dept)
        this.teamSize = teamSize
    }
    describe() {
        return `${this.name} manages ${this.teamSize} peoples in ${this.department}. `
    }
}

// Step 4
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

// Step 5
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