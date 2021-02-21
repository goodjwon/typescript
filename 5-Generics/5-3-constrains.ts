interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee{
    pay() {
        console.log('full time!!!');
    }

    workFullTime(){

    }
}

class PartTimeEmployee implements Employee{
    pay(){
        console.log('part time!!!');
    }

    workPartTime(){

    }
}


function payBad(employee:Employee): Employee{
    employee.pay();
    return employee;
}

// T의 pay를 활용하기위해서 extends 함.
function pay<T extends Employee >(employee:T): T{
    employee.pay();
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

ellie.workFullTime;
bob.workPartTime;

const ellieAffterPay = pay(ellie);
const bobAfterPay = pay(bob);

ellieAffterPay.workFullTime();



const obj = {
    name: 'ellie',
    age: 20,
};

const obj2 = {
    animal: '🦮'
};

// 인자값으로 제네릭과 제네릭의 속성 중 하나를 받는다.
// 그것은 obj, key라는 인수로 한다.
// 리턴은 obj의 속성 중 하나로 한다.
function getValue<T, K extends keyof T>(obj:T, key:K): T[K]{
    return obj[key];
}

console.log(getValue(obj, 'name')) ; // ellie
console.log(getValue(obj, 'age')); //20
console.log(getValue(obj2, 'animal')); // dog 🦮