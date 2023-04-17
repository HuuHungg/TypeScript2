abstract class Employee99 {
    constructor(private firstName: string, private lastName: string) {}
    abstract getSalary(): number; // abstract method
    
    // normal method
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    
    compensationStatement(): string {
        return ` ${this.fullName} makes ${this.getSalary()} a month`
    }
}

class FullTimeEmployee extends Employee99 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName); // 
    }

    getSalary(): number {
        return this.salary;
    }
 }

class Contractor extends Employee99 {
    constructor (firstName: string, lastName: string, private rate: number) {
        super(firstName, lastName)
    }
    getSalary(): number {
        return this.rate;
    }
}

const test1 = new FullTimeEmployee("Yushing","Fufun", 4000)
console.log(">>> test 1: ", test1.getSalary())




