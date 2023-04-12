function sum(a: any,b: any) {
    return a + b;
}

console.log(">>> check sum: ", sum(8,9))


// anonimus function 
let sum2 = (a:number, b: number) =>  {
    return a + b    
}
console.log(">>> check sum: ", sum2(2,3) )


let sum3 = (x: number, y: number) => {
    return "毎日ITを勉強してる頑張りましょう"
}

console.log('check sum', sum3(1,20))


// ChatGPT 

function add(a:number, b:number) {
    return a + b
}

console.log(add(2,3))


function greet(name: string, greeting?: string) {
    if(name) {
        return `${greeting} ${name}`;
    }else {
        return `Hello ${name}`
    }
}

console.log(greet('John'))
console.log(greet('Yushing', 'Name'))

function sum4(...numbers: number[]): number {
    let total = 0
    for(let number of numbers ) {
        total += number
    }
    return total
}

console.log(sum4(2,3,4))
console.log(sum4(1,2,3,4,5,5,6))


type MyFunctionType = (a:number, b: number) => number;

const add2: MyFunctionType = (a,b) => {
    return a + b
}

console.log(add2(40,30))

function fetchData (url: string, callback:(data: string) => void) {
    const data = 'some data'
    callback(data)
}

fetchData('http://example.com', (data) => {
    console.log(data)
})