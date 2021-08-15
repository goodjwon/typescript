"use strict";
{
    var CoffeeMaker_1 = /** @class */ (function () {
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0; // instance level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMaker.makeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        };
        CoffeeMaker.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            };
        };
        CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMaker;
    }());
    var maker = CoffeeMaker_1.makeMachine(32);
    // maker.coffeeBeans = 3;  직접접근 => private 로 해결.
    // CoffeeMaker.BEANS_GRAMM_PER_SHOT 직접접근=> privatge 로 해결
    maker.fillCoffeeBeans(5);
    console.log(maker);
    console.log(maker.makeCoffee(3));
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.internalAge = 4;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(User.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "age", {
            get: function () {
                return this.internalAge;
            },
            set: function (num) {
                if (num < 0) {
                    throw new Error('age should not be greater than 0');
                }
                this.internalAge = num;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    }());
    var user = new User('goodjwon', 'park');
    user.age = 1;
    console.log(user.fullName);
    console.log(user.age);
}
