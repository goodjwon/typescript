{
    // Array
    const fruits: string[] = ['apple', 'banana'];
    const scroes: Array<number> = [1, 2, 3];

    function printArray(fruits: readonly string[]){}

    // Tuple -> interface, type, alias, class 로 변경해서 사용.
    let student: [string, number];
    student = ['name', 123];
    student[0];
    student[1];

    console.log(student[0]);
    console.log(student[1]);

    const [name, age] = student;

}