{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    
    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT = 7;    // class level
        private coffeeBeans: number = 0;    // instance level
        
        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans  -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            }
        }
    }

    const maker = CoffeeMaker.makeMachine(32);
    // maker.coffeeBeans = 3;  직접접근 => private 로 해결.
    // CoffeeMaker.BEANS_GRAMM_PER_SHOT 직접접근=> privatge 로 해결
    maker.fillCoffeeBeans(5);
    console.log(maker);
    console.log(maker.makeCoffee(3))
}