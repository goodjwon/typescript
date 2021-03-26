Array;
[1, 2].map;

type Student = {
    passed: boolean;
}

const students: Student[] = [
    { passed: true },
    { passed: false },
    { passed: true },
];

const result = students.every(student => {
    return student.passed
});

console.log(result)

class Animal {}

class Cat extends Animal{
    isCat: boolean = true;
}

class Dog extends Animal{
    isDog: boolean =true;
    isCat: boolean =false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat;
}

console.log(animals.every<Cat>(isCat))