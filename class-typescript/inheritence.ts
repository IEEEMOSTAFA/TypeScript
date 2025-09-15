// Parent Class
// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound(): void {
//     console.log("This animal makes a sound.");
//   }
// }

// // Child Class (extends)
// class Dog extends Animal {
//   breed: string;

//   constructor(name: string, breed: string) {
//     super(name); // parent এর constructor কে কল করতে হবে
//     this.breed = breed;
//   }

//   bark(): void {
//     console.log(`${this.name} is barking!`);
//   }
// }

// // ব্যবহার
// const dog1 = new Dog("Tommy", "German Shepherd");
// dog1.makeSound(); // Parent class থেকে পাওয়া
// dog1.bark();      // Child class এর নিজস্ব





// Parent Element
class Vehicle {
    model: string;
    year : number;

    constructor(model: string, year: number){
        this.model = model;
        this.year = year;

    }

    displayInfo() : void {
        console.log(`This vehicle is a ${this.model} from the year ${this.year}`);

    }
}

// Child Element (extends)
class Car extends Vehicle {
    price : number;

    constructor(model: string, year: number, price: number){
        super(model, year);
        this.price = price;
    }

    showInfo() : void {
        console.log(`This car is a ${this.model} from the year ${this.year} and costs $${this.price}.`);
    }
}

// Object

const car1 = new Car("Corolla Cross", 2023, 30000);
car1.displayInfo();
car1.showInfo();

const car2 = new Car("Toyota Axio", 2020, 20000);
car2.displayInfo();
car2.showInfo();