function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: any,  b: any): any {
    return a + b
}

console.log(sum(50,60))
console.log(sum("Huu Hung", "Nguyen"))
console.log(sum( "Name", " I am leaning English "))

function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
    return a + b
}

console.log(addNew(10,20), addNew("毎日ITを勉強してる", "頑張ってください"))