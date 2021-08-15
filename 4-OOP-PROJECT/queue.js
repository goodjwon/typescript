"use strict";
{
    var SingleQueue = /** @class */ (function () {
        function SingleQueue() {
            this._size = 0;
        }
        Object.defineProperty(SingleQueue.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: true,
            configurable: true
        });
        SingleQueue.prototype.push = function (value) {
            var node = { value: value, next: this.head };
            this.head = node;
            this._size++;
        };
        SingleQueue.prototype.pop = function () {
            var _a, _b;
            var tempNode = this.head;
            this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
            if (this.head == null) {
                this.tail = undefined;
            }
            this._size--;
            return (_b = this.head) === null || _b === void 0 ? void 0 : _b.value;
        };
        return SingleQueue;
    }());
    var sq = new SingleQueue();
    sq.push('A1');
    sq.push('A2');
    sq.push('A3');
    while (sq.size !== 0) {
        console.log(sq.pop());
    }
}
