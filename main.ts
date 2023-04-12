function sum(a: any,b: any) {
    return a + b;
}

console.log(">>> check sum: ", sum(8,9))


// anonimus function 
let sum2 = (a:number, b: number) =>  {
    return a + b    
}
console.log(">>> check sum: ", sum2(2,3) )