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
var User = /** @class */ (function () {
    function User(gadget, price) {
        this.gadget = gadget;
        this.price = price;
    }
    User.prototype.showDetails = function () {
        console.log("This Excellent gadget is ".concat(this.gadget, " and the price is ").concat(this.price, " Taka"));
    };
    return User;
}());
// object
var user1 = new User("iphone 17 pro max", 2500);
var user2 = new User("Samsund s24 ultra", 2000);
// method call
user1.showDetails();
user2.showDetails();
