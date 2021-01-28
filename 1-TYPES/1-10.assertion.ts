/**
 * Type Assertions, javascript 와 typescript를 혼용할때.. 특정 함수에 any로 할때.. 유형을 확신 할 수 있을 때.. 사용
 */
{
    function jsStrFunc():any {
        return 'hello'
     };

    const result = jsStrFunc();
    console.log((result as string).length)

    const wrong: any =  5;
    console.log((wrong as Array<number>).push(1))   // 하면안됨..

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2); //무조건 배열이야..

    const button = document.querySelector('class') // querySelector null 도 반환함.
    if(button){
        button.nodeValue;
    }
}
 

