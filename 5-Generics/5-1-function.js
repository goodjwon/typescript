"use strict";
{
    function checkNotNullBad(arg) {
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    function checkNotNull(arg) {
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    var number = checkNotNull(1);
    console.log(number);
    var boal = checkNotNull(true);
    console.log(boal);
}
