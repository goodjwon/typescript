const x = {};
const y = {};
console.log(x);
console.log(y);


function CoffeMachine(beens){
    this.beens = beens;
    // this.makeCoffee = shots =>{
    //     console.log('making... coffee')        
    // }
}

CoffeMachine.prototype.makeCoffee = (shots) => {
    console.log('making... coffee')
}

const machine1 = new CoffeMachine(10);
const machine2 = new CoffeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}


LatteMachine.prototype = Object.create(CoffeMachine)
const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();