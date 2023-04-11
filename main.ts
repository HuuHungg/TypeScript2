const arr = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
        continue
    }
    console.log(arr[i])
}

const arr2 = [16, null, 22, undefined, 33, "string"];
for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] === null || arr2[i] === undefined) {
        continue
    }
    console.log(arr2[i])
}

const arr3 = [11, "two", 333, "for", 33333444];
for(let i = 0; i < arr3.length; i++) {
    if(typeof arr3[i] !== "number") {
        continue
    }
    console.log(arr3[i])
}