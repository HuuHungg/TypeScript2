class Person {
    readonly name: string;
    readonly age: number;
    
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        
    }

    greet() {
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old ` )
    }
}

let person = new Person("Yshing",30);
// person.name = "Huu Hung"  Không thể gán giá trị vì nó là read Only nên mình không thể thay đổi 
console.log(person)

