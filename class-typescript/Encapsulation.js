// class Vehicle {
//     private model: string;   // private (outside থেকে সরাসরি change করা যাবে না)
//     private year: number;
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
//     constructor(model: string, year: number) {
//         this.model = model;
//         this.year = year;
//     }
//     // Getter Method (data পড়ার জন্য)
//     public getModel(): string {
//         return this.model;
//     }
//     public getYear(): number {
//         return this.year;
//     }
//     // Setter Method (data update করার জন্য)
//     public setYear(year: number): void {
//         if (year > 1900) {
//             this.year = year;
//         } else {
//             console.log("Invalid year!");
//         }
//     }
// }
// class Car extends Vehicle {
//     private price: number;
//     constructor(model: string, year: number, price: number) {
//         super(model, year);
//         this.price = price;
//     }
//     public showInfo(): void {
//         console.log(
//             `Car Details => Model: ${this.getModel()}, Year: ${this.getYear()}, Price: $${this.price}`
//         );
//     }
//     public setPrice(price: number): void {
//         if (price > 0) {
//             this.price = price;
//         } else {
//             console.log("Invalid price!");
//         }
//     }
// }
// // Object
// const car1 = new Car("Corolla Cross", 2023, 30000);
// car1.showInfo();
// // Update value using setter
// car1.setPrice(35000);
// car1.setYear(2024);
// car1.showInfo();
// // Invalid update
// car1.setPrice(-1000);  // Invalid price!
// car1.setYear(1800);    // Invalid year!
var Vehicle = /** @class */ (function () {
    function Vehicle(moderl, year) {
        this.model = this.model;
        this.year = year;
    }
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.setYear = function (year) {
        if (year > 1900) {
            this.year = year;
        }
        else {
            console.log("Invalid Year");
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, year, price) {
        var _this = _super.call(this, model, year) || this;
        _this.price = price;
        return _this;
    }
    Car.prototype.showInfo = function () {
        console.log("Car Details => Model: ".concat(this.getModel(), " , Year: ").concat(this.getYear(), ", Price: ").concat(this.price));
    };
    Car.prototype.setPrice = function (price) {
        if (price > 0) {
            this.price = price;
        }
        else {
            console.log("Invalid Price");
        }
    };
    return Car;
}(Vehicle));
// Object
var car1 = new Car("Lamborghini", 2023, 30000);
var car2 = new Car("BMW", 2022, 40000);
car1.showInfo();
car2.showInfo();
car1.setPrice(35999);
car1.setYear(2024);
car1.showInfo();
car1.setPrice(-1000); // Invalid Price
car1.setYear(1800); // Invalid Year
