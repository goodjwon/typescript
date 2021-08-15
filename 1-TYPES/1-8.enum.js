"use strict";
/**
 * Eunm
 * Eunm 은 보다는 type을 사용..
 */
var MAX_NUM = 6;
var MAX_STUDENT_PER_CLASS = 10;
var MONDAY = 0;
var TUESDAY = 1;
var WEDNSDAY = 2;
var DAYS_ENUM = Object.freeze({
    "MONDAY": 0,
    "TUESDAY": 1,
    "WEDNSDAY": 2,
});
// enum 사용 단.. 값을 변경할 수 있다., 무슨 값이 사전에 연결되어 있는지 알지 못한다.
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wensday"] = 2] = "Wensday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Satarday"] = 5] = "Satarday";
    Days["Sunday"] = "sunday";
})(Days || (Days = {}));
console.log(Days);
console.log(Days.Tuesday);
var dayOfWeek = 'Tuesday';
console.log(dayOfWeek);
dayOfWeek = 'Wensday';
console.log(dayOfWeek);
