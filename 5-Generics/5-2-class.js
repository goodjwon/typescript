"use strict";
var SimpleEither = /** @class */ (function () {
    function SimpleEither(leftValue, rightValue) {
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }
    SimpleEither.prototype.left = function () {
        return this.leftValue;
    };
    SimpleEither.prototype.right = function () {
        return this.rightValue;
    };
    return SimpleEither;
}());
var either = new SimpleEither(4, 5);
console.log(either.left());
console.log(either.right());
var either1 = new SimpleEither(4, 5);
console.log(either1.left());
console.log(either1.right());
var either2 = new SimpleEither('A', 5);
console.log(either2.left());
console.log(either2.right());
