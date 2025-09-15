


// class Student {
//     name: string;
//     age : number;

//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }

//     sayHello(): void {
//         console.log(`Hello, My name is ${this.name} and I am ${this.age} years old`);

//     }
// }
// // class থেকে object বানালাম
// const student1 = new Student("Mostafa", 22);
// const student2 = new Student("Anawar", 21);

// // method call
// student1.sayHello();
// student2.sayHello();


class User {
    gadget: string;
    price: number;

    constructor(gadget: string, price: number){
        this.gadget = gadget;
        this.price = price;
    }

    showDetails() : void {
        console.log(`This Excellent gadget is ${this.gadget} and the price is ${this.price} Taka`);

    }



}

// object
const user1 = new User("iphone 17 pro max", 2500);
const user2 = new User("Samsund s24 ultra", 2000);


// method call
user1.showDetails();
user2.showDetails();