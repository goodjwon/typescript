"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    function updateTodo(todo, fieldsTodoUpdate) {
        return __assign(__assign({}, todo), fieldsTodoUpdate);
    }
    var todo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high'
    };
    var updated = updateTodo(todo, { priority: 'low' });
    console.log(updated);
}
