// Custom Type using Interface : step - 01:

// interface Product {
//     id: number;
//     name: string;
//     price: number;

// }

// const item: Product = {
//     id: 1,
//     name: "Laptop",
//     price: 75000
// };

// console.log(item.id);
// console.log(item.name);
// console.log(item.price);





// type User = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// };

// const user1: User = {
//   name: "Rafiq",
//   age: 25,
//   isAdmin: true,
// };



type User = {
    name: string;
    age: number;
    isAdmin: boolean;
}

const form: User = {
    name: "Rafiq",
    age: 25,
    isAdmin: false
}

console.log(form.name);
console.log(form.age);
console.log(form.isAdmin);