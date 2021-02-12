{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        syrup?: boolean;
    }


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT = 7;    // class level
        private coffeeBeans: number = 0;    // instance level

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(): void {
            console.log('cleaning the machine ..🧹🧹')
        }


        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat() {
            console.log('heating up...🔥🔥')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...coffee ☕☕☕`)
            return {
                shots,
                hasMilk: false
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);         //커피를 필요한 샷만큼 간다.
            this.preheat();                 //예열한다.
            return this.extract(shots);     //추출한다.

        }
    }

    class CeapMilkSteamer {
        private steamMilk(): void {
            console.log('Steaming some milk... 🥛')
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class SugarMixer {
        private getSuger() {
            console.log('Getting soum sugar from candy 🍭');
            return true
        }

        addSuger(cup: CoffeeCup): CoffeeCup {
            const suger = this.getSuger();
            return {
                ...cup,
                syrup: suger
            }
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number,
            private milkFother: CeapMilkSteamer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.milkFother.makeMilk(coffee)
        }
        steamMilk() {
            console.log('Steaming some milk...🥛🥛')

        }
    }

    class SwiteCoffeeMaker extends CoffeeMachine {
        constructor(private beans: number,
            private sugar: SugarMixer) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.sugar.addSuger(coffee)
        }

    }

    class SwiteCoffeeLattemachine extends CoffeeMachine {
        constructor(
            private beans: number, 
            private sugar: SugarMixer, 
            private milk: CeapMilkSteamer){
                super(beans)
            }
        
        makeCoffee(shots: number): CoffeeCup{
            const coffee = super.makeCoffee(shots)
            return this.milk.makeMilk(this.sugar.addSuger(coffee))
        }

    }

    const cheapMilkMaker = new CeapMilkSteamer();
    const candySuger = new SugarMixer();


    const machines: CoffeeMachine[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, cheapMilkMaker ),
        new SwiteCoffeeMaker(16,candySuger),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16,cheapMilkMaker ),
        new SwiteCoffeeMaker(16, candySuger)
    ];

    machines.forEach(machine => {
        console.log('---------------');
        machine.makeCoffee(1)
    })

}
