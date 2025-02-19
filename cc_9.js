// Task 1
class Employee {
    constructor(name, id, department, salary) {
        this.name = name
        this.id = id
        this.department = department
        this.salary = salary
    }
getDetails() {
    return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`
}
calculateAnnualSalary() {
        return this.salary * 12 ;
}
}
//Test Case
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails())
console.log(emp1.calculateAnnualSalary())

//Task 2
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary)
        this.teamSize= teamSize
    }
getDetails() {
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`
}
calculateBonus() {
    return this.salary * 12 * 0.10
}
calculateAnnualSalary() {
    return super.calculateAnnualSalary() + this.calculateBonus();
}
}
//Test Case
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails())
console.log(mgr1.calculateBonus())

//Task 3
class Company {
    constructor(name) {
        this.name= name
        this.employees = []
    }
addEmployee(employee) {
    this.employees.push(employee)
}
listEmployees() {
    this.employees.forEach(employee => {
        console.log(employee.getDetails())
    })
}

//Task 4
 calculateTotalPayroll(){
    return this.employees.reduce((totalPayroll, employee) => {
        return totalPayroll + employee.calculateAnnualSalary();}, 0)
    }}
//Test Case for Task 3
const company = new Company("TechCorp")
company.addEmployee(emp1)
company.addEmployee(mgr1)
company.listEmployees()
//Test Case for Task 4
console.log(company.calculateTotalPayroll())