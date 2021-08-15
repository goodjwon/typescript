"use strict";
{
    var SingleStack = /** @class */ (function () {
        function SingleStack(capacity) {
            this.capacity = capacity;
            this._size = 0;
        }
        Object.defineProperty(SingleStack.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: true,
            configurable: true
        });
        SingleStack.prototype.push = function (value) {
            if (this.size === this.capacity) {
                throw new Error('Stack is full!!');
            }
            var node = { value: value, next: this.head };
            this.head = node;
            this._size++;
        };
        SingleStack.prototype.pop = function () {
            if (this.head == null) {
                throw new Error('Stack is empty!!');
            }
            var node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        };
        return SingleStack;
    }());
    var ss = new SingleStack(3);
    ss.push('A 1');
    ss.push('B 2');
    ss.push('C 3');
    console.log(ss);
    while (ss.size !== 0) {
        console.log(ss.pop());
    }
    var s2 = new SingleStack(3);
    s2.push(123);
    s2.push(456);
    s2.push(789);
    console.log(s2);
    while (s2.size !== 0) {
        console.log(s2.pop());
    }
}
