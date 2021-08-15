"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans, sugar, milk) {
            this.sugar = sugar;
            this.milk = milk;
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
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("Pulling " + shots + " shots...coffee \u2615\u2615\u2615");
            return {
                shots: shots,
                hasMilk: false
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots); //커피를 필요한 샷만큼 간다.
            this.preheat(); //예열한다.
            var coffee = this.extract(shots);
            var sugarAdded = this.sugar.addSuger(coffee);
            return this.milk.makeMilk(sugarAdded);
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level
        return CoffeeMachine;
    }());
    var CeapMilkSteamer = /** @class */ (function () {
        function CeapMilkSteamer() {
        }
        CeapMilkSteamer.prototype.steamMilk = function () {
            console.log('Steaming some milk... 🥛');
        };
        CeapMilkSteamer.prototype.makeMilk = function (cup) {
            this.steamMilk();
            return __assign(__assign({}, cup), { hasMilk: true });
        };
        return CeapMilkSteamer;
    }());
    var FancyMilkSteamer = /** @class */ (function () {
        function FancyMilkSteamer() {
        }
        FancyMilkSteamer.prototype.steamMilk = function () {
            console.log('Fancy Steaming some milk... 🥛');
        };
        FancyMilkSteamer.prototype.makeMilk = function (cup) {
            this.steamMilk();
            return __assign(__assign({}, cup), { hasMilk: true });
        };
        return FancyMilkSteamer;
    }());
    var ColdMilkSteamer = /** @class */ (function () {
        function ColdMilkSteamer() {
        }
        ColdMilkSteamer.prototype.steamMilk = function () {
            console.log('Cold Steaming some milk... 🥛');
        };
        ColdMilkSteamer.prototype.makeMilk = function (cup) {
            this.steamMilk();
            return __assign(__assign({}, cup), { hasMilk: true });
        };
        return ColdMilkSteamer;
    }());
    var NoMilkSteamer = /** @class */ (function () {
        function NoMilkSteamer() {
        }
        NoMilkSteamer.prototype.makeMilk = function (cup) {
            return cup;
        };
        return NoMilkSteamer;
    }());
    var SugarMixer = /** @class */ (function () {
        function SugarMixer() {
        }
        SugarMixer.prototype.getSuger = function () {
            console.log('Getting soum sugar from candy 🍭');
            return true;
        };
        SugarMixer.prototype.addSuger = function (cup) {
            var suger = this.getSuger();
            return __assign(__assign({}, cup), { syrup: suger });
        };
        return SugarMixer;
    }());
    var FancySugarMixer = /** @class */ (function () {
        function FancySugarMixer() {
        }
        FancySugarMixer.prototype.getSuger = function () {
            console.log('Getting soum sugar from jar 🥫🥫🥫');
            return true;
        };
        FancySugarMixer.prototype.addSuger = function (cup) {
            var suger = this.getSuger();
            return __assign(__assign({}, cup), { syrup: suger });
        };
        return FancySugarMixer;
    }());
    var NoSugar = /** @class */ (function () {
        function NoSugar() {
        }
        NoSugar.prototype.addSuger = function (cup) {
            return cup;
        };
        return NoSugar;
    }());
    var cheapMilkMaker = new CeapMilkSteamer();
    var fancyMilker = new FancyMilkSteamer();
    var coldMilkMaker = new ColdMilkSteamer();
    var noMilk = new NoMilkSteamer();
    var candySuger = new SugarMixer();
    var fancySuger = new FancySugarMixer();
    var noSugar = new NoSugar();
    var swteetCandyMachine = new CoffeeMachine_1(16, candySuger, noMilk);
    var sweetMachine = new CoffeeMachine_1(16, fancySuger, noMilk);
    var lattteMachine = new CoffeeMachine_1(16, noSugar, fancyMilker);
    var machines = [
        swteetCandyMachine,
        sweetMachine,
        lattteMachine
    ];
    machines.forEach(function (machine) {
        console.log('---------------');
        machine.makeCoffee(1);
    });
}
