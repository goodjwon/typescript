"use strict";
/**
 * Type Assertions, javascript 와 typescript를 혼용할때.. 특정 함수에 any로 할때.. 유형을 확신 할 수 있을 때.. 사용
 */
{
    function jsStrFunc() {
        return 'hello';
    }
    ;
    var result_1 = jsStrFunc();
    console.log(result_1.length);
    var wrong = 5;
    console.log(wrong.push(1)); // 하면안됨..
    function findNumbers() {
        return undefined;
    }
    var numbers = findNumbers();
    numbers.push(2); //무조건 배열이야..
    var button = document.querySelector('class'); // querySelector null 도 반환함.
    if (button) {
        button.nodeValue;
    }
}
