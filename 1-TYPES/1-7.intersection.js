"use strict";
/**
 * Intersection Types:
 */
{
    function internWork(person) {
        console.log(person.name, person.employeeId, person.work());
    }
    internWork({
        name: 'goodjwon',
        score: 1,
        employeeId: 123,
        work: function () {
        }
    });
}
