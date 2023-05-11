// TUPLE 
let arr = ['henry', 30, false]
arr[0] = 24
arr[1] = 'Yushing'
arr[2] = true

console.log(arr)

// tuple
const tup: [string, boolean, number] = ['henry', false, 23]



// GENERICS trong TypeScript: Khai báo trước dạng của biến của chúng ta 

type strArr = Array<string>
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1]

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]
const l3 = lastT([1,2,3])
const l4 = lastT(['a','b'])
const l5 = lastT<string>(['d', 'e'])

const makeArr = (x: number) => [x]

const m = makeArr(5)
console.log(m)

const makeArrT = <T> (x:T) => [x]
const m3 = makeArrT('b')
console.log(m3)

const makeArrXY = <X,Y> (x: X, y: Y) => [x,y]
const m4 = makeArrXY(5,6)
const m5 = makeArrXY('YU', 'Shing')
const m6 = makeArrXY(1, "Space betweent")

console.log(m4)
console.log(m5)
console.log(m6)

const makeTuple = <X,Y> (x:X, y: Y): [X,Y] => [x,y]
const m7 = makeTuple('x',5)
console.log(m7)
const m9 = makeTuple<string, number>('Yushign', 20)
console.log(m9)
const m10 = makeTuple<string |null, number>(null, 3)

const makeTuplewithDefault = <X,Y = number> (x: X, y: Y): [X,Y] => [x,y]
const m11 = makeTuplewithDefault<string | null> ('a', 5) 

// Generic example
function identity<T>(arg:T): T {
    return arg;
}

let result = identity<string>("Yushung learning English with me")
console.log(result)

function pair<T,U>(a:T, b:U): [T,U] {
    return [a,b]
}

let result2 = pair<string, string>("Yushing", "konichiwa")
console.log(result2)

class Stack<T> {
    private elements: T[] = []
    
    push(element: T): void {
        this.elements.push(element)
    }

    pop(): T | undefined {
        return this.elements.pop()
    }
}

let stack = new Stack<number>();
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())


interface Pair<T,U> {
    first: T;
    second: U;
}

let spaceAround:Pair <number, string> = {first: 1, second: "hello"}
console.log(spaceAround)

class GenericNumber<NumTypes> {
    zeroValue!: NumTypes;
    add!: (x: NumTypes, y: NumTypes) => NumTypes;
  }
  
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };
  
  console.log(myGenericNumber.add(1, 2)); // output: 3

function identity2<T> (arg: T): T {
    return arg;
}
let output = identity2<string>("Yushing")
console.log(output)

// Generic Extend

const makeFullNameConstraint = (obj: {
    firstName: string
    lastName: string
}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({firstName: "Guen", lastName:"Yushing"})
console.log(n1)


const makeFullNameConstraintWithGenerics = <
    T extends {firstName: string, lastName: string}
>(obj: T) => ({
    ...obj, 
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n3 = makeFullNameConstraintWithGenerics({firstName: 'henry', lastName: 'web dev', age: 30, gender: 'male'})
console.log(n3)

const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
} 

const empOne = addNewEmployee({name: 'henry', age: 30, fullName: 'Yushing Interface'})
console.log(empOne)

// ====================

const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}

const empTwo = addNewEmployeeT({name: "Yushing", age: 25, male: true, doing: "I am learning English alone", How: 'This life is more difficult'})
console.log(empTwo)
console.log(empTwo.How)

// =====================

const addNewEmployeeTextend = <T extends {name: string}> (
    employee: T
) => {
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}


const empThree = addNewEmployeeTextend({ name: "Yushing",  fine: 'extend'})
console.log(empThree)


// Generic interface

interface Resource<T> {
    uid: number,
    address: string,
    student: boolean,
    doing: T
}

const resourceOne: Resource<string> = {
    uid: 1,
    address: "VietNam",
    student: true,
    doing: "毎日ITを勉強してるでもも難しいですが頑張りましょう"
}


console.log(resourceOne)