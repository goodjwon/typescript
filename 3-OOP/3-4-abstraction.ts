{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        static BEANS_GRAMM_PER_SHOT = 7;    // class level
        private coffeeBeans: number = 0;    // instance level

        private constructor(coffeeBeans: number) {
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

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {

        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {

        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45)
            this.machine.clean();
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);

    pro.makeCoffee();

}
