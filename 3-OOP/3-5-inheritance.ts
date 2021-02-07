{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans:number){
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
        steamMilk() {
            console.log('Steaming some milk...🥛🥛')
            
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23);
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);


}
