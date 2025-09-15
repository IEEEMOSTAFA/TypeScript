// Parent Class
// class Animal {
//   name: string;
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
var Vehicle = /** @class */ (function () {
    function Vehicle(model, year) {
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.displayInfo = function () {
        console.log("This vehicle is a ".concat(this.model, " from the year ").concat(this.year));
    };
    return Vehicle;
}());
// Child Element (extends)
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, year, price) {
        var _this = _super.call(this, model, year) || this;
        _this.price = price;
        return _this;
    }
    Car.prototype.showInfo = function () {
        console.log("This car is a ".concat(this.model, " from the year ").concat(this.year, " and costs $").concat(this.price, "."));
    };
    return Car;
}(Vehicle));
// Object
var car1 = new Car("Corolla Cross", 2023, 30000);
car1.displayInfo();
car1.showInfo();
var car2 = new Car("Toyota Axio", 2020, 20000);
car2.displayInfo();
car2.showInfo();
