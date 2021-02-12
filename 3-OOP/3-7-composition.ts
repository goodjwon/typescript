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

        public constructor(
            coffeeBeans: number,
            private sugar: SugarProvider, 
            private milk: MilkFrother) {
            this.coffeeBeans = coffeeBeans
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSuger(coffee);
            return this.milk.makeMilk(sugarAdded);

        }
    }


    interface MilkFrother{
        makeMilk(cup: CoffeeCup): CoffeeCup
    }

    interface SugarProvider{
        addSuger(cup: CoffeeCup): CoffeeCup
    }

    class CeapMilkSteamer implements MilkFrother {
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

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Fancy Steaming some milk... 🥛')
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Cold Steaming some milk... 🥛')
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class NoMilkSteamer implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup{
            return cup;
        }
    }

    class SugarMixer implements SugarProvider {
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

    class FancySugarMixer implements SugarProvider {
        private getSuger() {
            console.log('Getting soum sugar from jar 🥫🥫🥫');
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

    class NoSugar implements SugarProvider {
        addSuger(cup: CoffeeCup): CoffeeCup{
            return cup;
        }
    }

    

    const cheapMilkMaker = new CeapMilkSteamer();
    const fancyMilker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilkSteamer();

    const candySuger = new SugarMixer();
    const fancySuger = new FancySugarMixer();
    const noSugar = new NoSugar();

    
    const swteetCandyMachine = new CoffeeMachine(16, candySuger, noMilk);
    const sweetMachine = new CoffeeMachine(16, fancySuger, noMilk);
    const lattteMachine = new CoffeeMachine(16, noSugar, fancyMilker);


    const machines: CoffeeMachine[] = [
        swteetCandyMachine,
        sweetMachine,
        lattteMachine
    ];

    machines.forEach(machine => {
        console.log('---------------');
        machine.makeCoffee(1)
    })

}
