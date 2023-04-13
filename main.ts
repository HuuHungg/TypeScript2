class Person {
    ssn : string;
    firstName: string;
    lastName: string;

    constructor(ssn: string , firstName: string, lastName: string ) {
        this.ssn = ssn
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(): string {
        return `calling method: ${this.firstName} ${this.lastName}` ;
    }
}   

let fullCourse = new Person("毎日","日本語を勉強してる", "頑張ってください")

console.log(fullCourse)
console.log(fullCourse.getFullName())


