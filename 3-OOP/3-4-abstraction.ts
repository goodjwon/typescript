{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    
    class CoffeeMachine implements CoffeeMaker{
        static BEANS_GRAMM_PER_SHOT = 7;    // class level
        private coffeeBeans: number = 0;    // instance level
        
        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        /**
         * 추상화...
         * 커피를 만들기 위해서 많은 메소드가 필요하지만 외부에 필요한 것은 특정적임 
         * 내부용과 외부용을 접근제어자를 통해서 구분 할 수 있음.
         * 
         * 
         */

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                 throw new Error('Not enough coffee beans!') 
                }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(){
            console.log('heating up...')
        }

        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots...coffee`)
            return {
                shots,
                hasMilk: false
            };
        }

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);         //커피를 필요한 샷만큼 간다.
            this.preheat();                 //예열한다.
            return this.extract(shots);     //추출한다.

        }
    }

    const maker = CoffeeMachine.makeMachine(32);

    maker.fillCoffeeBeans(5);
    console.log(maker);
    console.log(maker.makeCoffee(3));


}
