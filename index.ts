function add(a:string, b:string): string {
    return a + b
}

const result = add("毎日ITを勉強してる頑張りましょう", "でも難しいですが頑張りましょう")
console.log(result)

const add2 = (c: number, d: number, e: number | string = 10) => {
    console.log(c + d);
    console.log(e);
  }
  
  add2(3, 4);    // Output: 7, 0
  add2(3, 4, "hello"); // Output: 7hello, hello

const fine = (a: number, b: number, c ?: number | string) => {
    console.log(a + b)
    console.log(c)
}

fine(1,2,3)
fine(2,3, 'henry')

interface NumberArray {
    [index: number]: number;
}

const myNumbers: NumberArray = [1,2,3,4,5,6]
console.log(myNumbers)

interface Person {
    name: string,
    age: number
}

interface PersonArray {
    [index: number]: Person
}

const myPeople: PersonArray = [
    {name: "Alice", age: 30},
    {name: "Bob", age: 25},
    {name: "Charlie", age: 40}
]

console.log(myPeople)

let names = ['mai', 'nam', 'hung']
names.push("yushing")
console.log(names)

let numbers2 = [1,2,3,4,5,5,67,8,899]
console.log(numbers2)

let mixed = [1, 'henry', false]
mixed.push(5)
mixed.push('Yushing')
console.log(mixed)


type Dictionary<T> = {
    [key:string]: T;
};

const myDictionary: Dictionary<string> = {
    foo: "Yushing",
    bar: "Name",
    age: "40"
}

console.log(myDictionary)

let mixed2 : (string | number | boolean)[]
mixed2 = ["string", 332, true]
console.log(mixed2)

let person: object
person = {name: 'henry', age: 40}
console.log(person)


// Any type Có thể nhận bất cứ biến gì

let age: any = 225
age = 'henry'

// Type Alisas 
type StringOrNumber = string | number;
type Stundent2 = {
    name: string
    id: StringOrNumber
}

const studentDetails = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student ${studentName} has id ${id}`)
}

studentDetails(123, 'henry')
studentDetails('46', 'Yushing')

let calculate: (a: number, b: number, c: string) => number

calculate = (numOne: number, numTwo: number, action: string) => 
    action === 'add' ? numOne + numTwo : numOne - numTwo

console.log(calculate(4,2,'add'))

type Stundent3 = {name: string, age: number}
let printStudent: (student: Stundent3) => void
printStudent = (myStudent: Stundent3) => {
    console.log(`${myStudent.name} is ${myStudent.age} year old`)
}

printStudent({name: 'Yushing', age: 20})