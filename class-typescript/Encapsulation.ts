// class Vehicle {
//     private model: string;   // private (outside থেকে সরাসরি change করা যাবে না)
//     private year: number;

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



class Vehicle {
    private model : string;
    private year : number;

    constructor(moderl: string, year: number){
        this.model = this.model;
        this.year = year;

    }

    public getModel(): string{
        return this.model;
    }
    public getYear() : number{
        return this.year;
    }

    public setYear(year: number): void{
        if(year > 1900){
            this.year = year;
        }
        else{
            console.log("Invalid Year");
        }
    }
}

class Car extends Vehicle{
    private price : number;

    constructor (model: string, year: number, price : number){
        super(model, year);
        this.price = price;
    }

    public showInfo() : void{
        console.log(`Car Details => Model: ${this.getModel()} , Year: ${this.getYear()}, Price: ${this.price}`);
        
    }

    public setPrice(price: number): void{
        if(price > 0){
            this.price = price;
        }
        else{
            console.log("Invalid Price");
        }
    }


}

// Object

const car1 = new Car("Lamborghini", 2023, 30000);
const car2 = new Car("BMW", 2022, 40000);

car1.showInfo();
car2.showInfo();

car1.setPrice(35999);
car1.setYear(2024);
car1.showInfo();

car1.setPrice(-1000); // Invalid Price
car1.setYear(1800); // Invalid Year


