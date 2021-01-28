/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type operation = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder' ;

function calculate(oper: operation, num1:number, num2:number) : number {
    let result = 0;

    if('add' === oper){
        result = num1 + num2;
    } else if ('substract' === oper){
        result = num1 - num2;
    } else if ('multiply' === oper ){
        result = num1 * num2;
    } else if ('divide' === oper) {
        result = num1/ num2;
    } else if ('remainder' === oper){
        result = num1 % num2;
    } else {
        result = 0;
    }
    

    return result;

}