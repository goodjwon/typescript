"use strict";
/**
 * Type Inference
 */
var text = 'hello';
function print(message) {
    if (message === void 0) { message = 'hello'; }
    console.log(message);
}
print('hello');
//print(1);
function add(x, y) {
    return x + y;
}
var result = add(1, 2);
console.log(result);
