let counter2 = 6;


// Dù điều kiện sai thì vẫn chạy ít nhất 1 lần 

do {
    console.log("counter = ", counter2)
    if(counter2 % 2 === 1) break;
    counter2++;
}while(counter2 < 5)

