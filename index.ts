let num: number = 10

if(num > 0) {
    console.log("Positive number")
} else if(num < 0) {
    console.log("Negative number");
}else {
    console.log("Number is zero")
}

let age: string = "languages English is important"
// Nếu chuyền một số lớn hơn 0 thì trả ra true
// Nếu chuyền một số nhỏ hơn 0 thì tra ra false
// Nếu chuyền một biến không rỗng thì trả vầ true
// Nếu chuyền một biến rỗng thì trả về false
 

if(age) {
    console.log("You can watch JAV...")
} else {
    console.log("Opps >>> You can watch Cartoon...")
}

let discount : number;
let itemCount =  11;

if(itemCount > 0 && itemCount < 6) {
    discount = 5 // 5% discount
}else if(itemCount > 5 && itemCount <= 10) {
    discount = 10 // 10% discount
}else if(itemCount > 10 && itemCount < 15) {
    discount = 11
}
else {
    discount = 15 //
}

console.log(`You got ${discount}% dis count`)

