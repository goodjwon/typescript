"use strict";
var FullTimeEmployee = /** @class */ (function () {
    function FullTimeEmployee() {
    }
    FullTimeEmployee.prototype.pay = function () {
        console.log('full time!!!');
    };
    FullTimeEmployee.prototype.workFullTime = function () {
    };
    return FullTimeEmployee;
}());
var PartTimeEmployee = /** @class */ (function () {
    function PartTimeEmployee() {
    }
    PartTimeEmployee.prototype.pay = function () {
        console.log('part time!!!');
    };
    PartTimeEmployee.prototype.workPartTime = function () {
    };
    return PartTimeEmployee;
}());
function payBad(employee) {
    employee.pay();
    return employee;
}
// T의 pay를 활용하기위해서 extends 함.
function pay(employee) {
    employee.pay();
    return employee;
}
var ellie = new FullTimeEmployee();
var bob = new PartTimeEmployee();
ellie.workFullTime;
bob.workPartTime;
var ellieAffterPay = pay(ellie);
var bobAfterPay = pay(bob);
ellieAffterPay.workFullTime();
var obj = {
    name: 'ellie',
    age: 20,
};
var obj2 = {
    animal: '🦮'
};
// 인자값으로 제네릭과 제네릭의 속성 중 하나를 받는다.
// 그것은 obj, key라는 인수로 한다.
// 리턴은 obj의 속성 중 하나로 한다.
function getValue(obj, key) {
    return obj[key];
}
console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); //20
console.log(getValue(obj2, 'animal')); // dog 🦮
