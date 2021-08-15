


function simleFunc() {
    console.log(this)
}

class Counter {
    count = 0;
    increase = ()=> {
        console.log('=====Counter.increse ====')
        console.log(this)
    }
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
caller();
const caller2 = counter.increase.bind(counter)
caller2();

class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
