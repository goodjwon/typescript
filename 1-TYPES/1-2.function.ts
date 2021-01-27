{
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }


    // function add(num1:number, num2:number){
    //     return num1 + num2;
    // }

    // // before
    // function jsFetchNum(id){
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolove, reject)=>{
    //         resolove(100);
    //     });
    // }

    // // after
    // function fetchNum(id: string): Promise<number>{
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolove, reject)=>{
    //         resolove(100);
    //     });
    // }


    // javacript => Typescript
    // Optional parameter
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve', 'Jobs');
    printName('jwon');
    printName('Alsia', undefined);

    //Default parameter
    function printMessage(message: string = 'default message'){
        console.log(message);
    }

    printMessage();

    //Rest parameter
    function addNumbers(...numbers:number[]): number{
        return numbers.reduce((a, b) => a+ b);  // reduce 줄이다.
    }


    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3 ,4))
    console.log(addNumbers(1, 2, 3 ,4, 5, 0))

}