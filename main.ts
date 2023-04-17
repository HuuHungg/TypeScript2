interface IPerson {
    firstName: string,
    lastName : string
}

function getFullName(person: IPerson) {
    console.log(`${person.firstName} ${person.lastName}`) 
}


let myObj = {
    firstName: "天気はどうですか",
    lastName: "今日はいい天気です"
}

getFullName(myObj)


interface User {
    username: string;
    email: string;
    password: string;
    age ?: number;
}

function registerUser(user: User) {
    console.log(`This is ${user.username} ${user.email} ${user.password} ${user.age}`)
}

const newUser: User = {
    username: "Yushing",
    email: "yushing02@gmail.com",
    password: "I don't know",
    age : 21
}

registerUser(newUser)

interface Product {
    name: string,
    price: number,
    description ?: string,
    image ?: string[],
}

const laptop:Product = {
    name: "Macbook Pro",
    price: 1980,
    description: "The ulitimate laptop for professionals",
    image: ["Macbook-pro1", "Macbook-pro2"]
}

console.log(laptop)

const mouse: Product = {
    name: "Logitech Mx master",
    price: 99.99
}

console.log(mouse)
