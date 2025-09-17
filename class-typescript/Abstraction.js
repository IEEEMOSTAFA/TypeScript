// using Abstract method::
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Vehicle = /** @class */ (function () {
    function Vehicle(model, year) {
        this.model = model;
        this.year = year;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, year, price) {
        var _this = _super.call(this, model, year) || this;
        _this.price = price;
        return _this;
    }
    Car.prototype.displayInfo = function () {
        console.log("This car is a ".concat(this.model, " from the year ").concat(this.year));
    };
    Car.prototype.showInfo = function () {
        console.log("This car is a ".concat(this.model, " from the year ").concat(this.year, " and Price is ").concat(this.price));
    };
    return Car;
}(Vehicle));
// Object 
var car1 = new Car("Corolla Cross", 2024, 40000);
var car2 = new Car("Toyota Axio", 2020, 20000);
car1.displayInfo();
car1.showInfo();
car2.displayInfo();
car2.showInfo();
