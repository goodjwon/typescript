/**
 * Eunm
 * Eunm 은 보다는 type을 사용..
 */

// enum을 사용하기 전
 type DayOfWeek = 'Monday' | 'Tuesday' | 'Wensday';
 const MAX_NUM = 6;
 const MAX_STUDENT_PER_CLASS = 10;
 const MONDAY = 0;
 const TUESDAY = 1;
 const WEDNSDAY = 2;
 const DAYS_ENUM = Object.freeze({
    "MONDAY" :0,
    "TUESDAY" :1,
    "WEDNSDAY" :2,
 });
 
 // enum 사용 단.. 값을 변경할 수 있다., 무슨 값이 사전에 연결되어 있는지 알지 못한다.
 enum Days {
     Monday, 
     Tuesday,
     Wensday,
     Thursday,
     Friday,
     Satarday,
     Sunday = 'sunday'
 }

 console.log(Days);
 console.log(Days.Tuesday)

 let dayOfWeek: DayOfWeek = 'Tuesday';
 console.log(dayOfWeek);
 dayOfWeek = 'Wensday';
 console.log(dayOfWeek);