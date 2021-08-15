"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0; // instance level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.clean = function () {
            console.log('cleaning the machine ..🧹🧹');
        };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grinding beans for " + shots);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log('heating up...🔥🔥');
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots); //커피를 필요한 샷만큼 간다.
            this.preheat(); //예열한다.
            return this.extract(shots); //추출한다.
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMachine;
    }());
    var CaffeLatteMachine = /** @class */ (function (_super) {
        __extends(CaffeLatteMachine, _super);
        function CaffeLatteMachine(beans) {
            return _super.call(this, beans) || this;
        }
        CaffeLatteMachine.prototype.steamMilk = function () {
            console.log('Steaming some milk...🥛🥛');
        };
        // 추상 메소드 구현
        CaffeLatteMachine.prototype.extract = function (shots) {
            this.steamMilk();
            return {
                shots: shots,
                hasMilk: true
            };
        };
        return CaffeLatteMachine;
    }(CoffeeMachine_1));
    var SwiteCoffeeMaker = /** @class */ (function (_super) {
        __extends(SwiteCoffeeMaker, _super);
        function SwiteCoffeeMaker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SwiteCoffeeMaker.prototype.addSyrup = function () {
            console.log('add syrup ...🍯🍯 ');
        };
        // 추상 메소드 구현
        SwiteCoffeeMaker.prototype.extract = function (shots) {
            this.addSyrup();
            return {
                shots: shots,
                syrup: true
            };
        };
        return SwiteCoffeeMaker;
    }(CoffeeMachine_1));
    var machines = [
        new CaffeLatteMachine(16),
        new SwiteCoffeeMaker(16),
        new CaffeLatteMachine(16),
        new SwiteCoffeeMaker(16)
    ];
    machines.forEach(function (machine) {
        console.log('---------------');
        machine.makeCoffee(1);
    });
}
