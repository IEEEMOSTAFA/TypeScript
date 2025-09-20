// interface MultiplyFn {
//   (a: number, b: number): number;
// }

// const multiply: MultiplyFn = (a, b) => a * b;



interface Calculate {
    (a: number, b: number): number;
}

const add: Calculate = (a, b) => a + b;
const subtract: Calculate = (a, b) => a - b;
const multiply : Calculate = (a, b) => a * b;
const divide : Calculate = (a, b) => a / b;

console.log(add(33,12));
console.log(subtract(33,12));       
console.log(multiply(33,12));
console.log(divide(33,12));