// Optional có thể có hoặc không 

let sum5 = ( x: number, y: number, z ?: number) => {
    if(z) return x + y + z
    return x + y
}

console.log(">>> check sum 5 = ", sum5(2,5,10))


interface Person {
    name: string;
    age ?: number;
}

function greet (person: Person) {
    console.log(`Hello, ${person.name}!`)
    if(person.age) {
        console.log(`You are ${person.age} years old` )
    }else {
        console.log(`I don't know year old`)
    }
}

greet({name: "john"})
greet({name: "Jane", age: 30})
