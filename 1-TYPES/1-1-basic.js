"use strict";
/**
 * javascript
 * Primitive: number, string, boolean, bigint, symbol, null, undifine,
 * Object: function, arrary ....
 */
{
    // number
    var num = 12111111111111111111111111111111111111111111111111111111111111111;
    // string
    var str = 'hello';
    // boolean
    var bal = false;
    // undefined
    var name_1; //not used
    var age = void 0; //used
    age = undefined;
    age = 1;
    function find() {
        return 1;
    }
    // null
    var person = void 0; //not used
    person = null;
    var person2 = void 0; //used
    person2 = 'goodjwon';
    // unknown, not used, javascript 호환성 때문에 존재함. 가급적 사용하지 않음.
    var notSure = 0;
    notSure = 'He';
    notSure = true;
    // any  
    var anything = 0;
    anything = 'hello';
    // void
    function print() {
        console.log('hello');
        return;
    }
    //never
    function throwError(message) {
        //message -> server(log)
        throw new Error(message);
        while (true)
            ;
    }
    {
        console.log(message);
    }
    //object
    var obj_1;
    function acceptSomeObject(obj) { }
    acceptSomeObject({ name: 'jwon' });
    acceptSomeObject({ animal: 'dog' });
}
