"use strict";
{
    var CoffeeMaker_1 = /** @class */ (function () {
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0; // instance level
            this.coffeeBeans = coffeeBeans;
        }
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
    var maker = new CoffeeMaker_1(32);
    console.log(maker.makeCoffee(3));
}
