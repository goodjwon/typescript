/**
 * javascript
 * Primitive: number, string, boolean, bigint, symbol, null, undifine,
 * Object: function, arrary ....
 */

{
    // number
    const num: number = 12111111111111111111111111111111111111111111111111111111111111111;

    // string
    const str: string = 'hello';

    // boolean
    const bal: boolean = false;

    // undefined
    let name: undefined;    //not used
    let age: number | undefined;    //used
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return 1;
    }

    // null
    let person: null;  //not used
    person = null;
    let person2: string | null;  //used
    person2 = 'goodjwon'

    // unknown, not used, javascript 호환성 때문에 존재함. 가급적 사용하지 않음.
    let notSure: unknown = 0;
    notSure = 'He';
    notSure = true

    // any  
    let anything: any = 0;
    anything = 'hello'

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    //never
    function throwError(message: string): never {
        //message -> server(log)

        throw new Error(message);
        while (true)} {
        console.log(message);
    }

    //object
    let obj: object;
    function acceptSomeObject(obj: object) { }
    acceptSomeObject({ name: 'jwon' })
    acceptSomeObject({ animal: 'dog' })

}






