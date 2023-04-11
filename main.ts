let balance = 1000;
let withdraw = 500;
while (balance >= withdraw) {
    balance -= withdraw;
    console.log(`Withdraw ${withdraw}, balance: ${balance} `)
}

let counter= 0

while (counter < 5) {
    console.log(counter)
    counter++;
}


let counter2 = 0

while(counter2 < 5) {
    console.log("check counter = ",counter2)
    if(counter2 % 2 === 1) break;
    counter2 ++
}