let products = [
    {name : 'phone', price: 700},
    {name: "tablet", price: 900},
    {name: "laptop", price: 1200},
    {name: "macbook", price: 1600}
];

// for (let i = 0; i < products.length; i++) {
//     if( products[i].price === 1200) {
//         break;
//     }
//     console.log(products[i])
// }

let discount1 = 0;
let product = products[2]
switch (product.name) {
    case 'phone':
        discount1 = 5;
        break;
    case 'tablet':
        discount1 = 10
        break
    case 'laptop':
        discount1 = 20
        // break;
    default:    
        discount1 = 100
}

console.log(`There is a ${discount1}% on ${product.name}.`)

let color = "red"
switch(color) {
    case "blue":
        console.log("The color is blue")
        break;
    case "red":
        console.log("The color is red")
        break;
    case "black":
        console.log("The color is black")
        break;
    default :
        console.log("color is not define")
}

let i = 0
while (i < 10) {
    console.log(i)
    i++
    if(i === 5) {
        break;
    }
}

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    console.log("Found 3 at index", i);
    break;
  }
}