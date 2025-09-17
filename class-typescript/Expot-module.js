"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.pi = void 0;
exports.add = add;
exports.pi = 3.1416;
function add(a, b) {
    return a + b;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
exports.Person = Person;
