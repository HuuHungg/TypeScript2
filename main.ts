// TH1
for(let i = 0; i < 10; i++) {
    console.log(">>> i=", i)
} 

console.log("=====")
// TH2
let n = 12;
let sum = 0;
for(let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum)

console.log("=====")
// TH3
let arr = [1,2,3,4,5,6]
for(let a = 0 ; a < arr.length; a++) {
    console.log(arr[a])
}

console.log("=====")
// TH4

let arr2 = [1,2,3,4,5,6,7,7,8]
let sum2 = 0
for(let b = 0; b < arr2.length; b++) {
    sum2 += arr2[b]
}

console.log(sum2)

console.log("=====")
// TH5
let person = { name: 'John', age: 30, gender: 'male' };
let fullPerson = ""
for (let key in person) {
  fullPerson += `${key}: ${person[key]}`;
}
console.log(fullPerson)


