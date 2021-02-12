{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        syrup?: boolean;
    }


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT = 7;    // class level
        private coffeeBeans: number = 0;    // instance level

        public constructor(coffeeBeans: number) {
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


        // 추상 메소드 화..
        protected abstract  extract(shots: number): CoffeeCup;

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

        steamMilk() {
            console.log('Steaming some milk...🥛🥛')
            
        }
        
        // 추상 메소드 구현
        protected extract(shots: number):CoffeeCup{
            this.steamMilk();
            return{
                shots,
                hasMilk: true
            }
        }

        
    }

    class SwiteCoffeeMaker extends CoffeeMachine {
        addSyrup(){
            console.log('add syrup ...🍯🍯 ')
        }
        
        // 추상 메소드 구현
        protected extract(shots: number):CoffeeCup{
            this.addSyrup();
            return{
                shots,
                syrup: true
            }
        }
        
    }

    const machines: CoffeeMachine[] = [
        new CaffeLatteMachine(16),
        new SwiteCoffeeMaker(16),
        new CaffeLatteMachine(16),
        new SwiteCoffeeMaker(16)
    ];

    machines.forEach(machine => {
        console.log('---------------');
        machine.makeCoffee(1)
    })

}
