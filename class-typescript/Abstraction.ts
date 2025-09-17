// using Abstract method::


// // Abstract Class
// abstract class Vehicle {
//     model: string;
//     year: number;

//     constructor(model: string, year: number) {
//         this.model = model;
//         this.year = year;
//     }

//     // Abstract Method (no body, must be implemented in child class)
//     abstract displayInfo(): void;
// }

// // Child Class (extends Vehicle)
// class Car extends Vehicle {
//     price: number;

//     constructor(model: string, year: number, price: number) {
//         super(model, year);
//         this.price = price;
//     }

//     // Implement abstract method
//     displayInfo(): void {
//         console.log(`This car is a ${this.model} from the year ${this.year} and costs $${this.price}.`);
//     }

//     showInfo(): void {
//         console.log(`Car details => Model: ${this.model}, Year: ${this.year}, Price: $${this.price}`);
//     }
// }

// // Objects
// const car1 = new Car("Corolla Cross", 2023, 30000);
// car1.displayInfo();
// car1.showInfo();

// const car2 = new Car("Toyota Axio", 2020, 20000);
// car2.displayInfo();
// car2.showInfo();




abstract class Vehicle {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    // Abstract Method (no body, must be implemented in child class)
    abstract displayInfo() : void;
}

class Car extends Vehicle {
    price : number;

    constructor(model: string, year: number, price: number){
        super(model, year);
        this.price = price;
    }

    displayInfo (): void {
        console.log(`This car is a ${this.model} from the year ${this.year}`)
    }

    showInfo (): void {
    console.log(`This car is a ${this.model} from the year ${this.year} and Price is ${this.price}`)
}
}


// Object 

const car1 = new Car("Corolla Cross", 2024, 40000);
const car2 = new Car("Toyota Axio", 2020, 20000);

car1.displayInfo();
car1.showInfo();



car2.displayInfo();
car2.showInfo();