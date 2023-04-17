class Person3 {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    // overwrite
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}`
    }
}

// để kế thừa 1 class, chúng ta sử dụng keyword extends

class Employee1 extends Person3 {
    constructor (
        firstName: string,
        lastName: string) {
            super(firstName, lastName);
        }

    describe(): string {
        return ` ${super.describe()} from Parent - I am learning English with my Friend `
    }
}

let employee = new Employee1("毎日ITを勉強して", "2時間ぐらい")

console.log(employee.getFullName())
console.log(employee.describe())



class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  
  let sam = new Snake("Sammy the Python");
  sam.move();
  
  console.log(sam)