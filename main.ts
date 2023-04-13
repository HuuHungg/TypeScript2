// let sum7 = (x: number, y: number, z = false) => {
//     if( z === false) {
//         return x + y
//     }
//     if(z) {
//         return x - y
//     }
// }

// console.log(">>> check sum 7 = ", sum7(1,2), sum7(1, 2, true))

function greet (name?:string, greeting: string = "Hello") {
    console.log( `${greeting}, ${name ?? 'world'}!`);
}    
    greet()
    greet('John')
    greet(undefined, 'Hola')
    greet('Jane', 'Hi')

