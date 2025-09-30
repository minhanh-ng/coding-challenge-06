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

