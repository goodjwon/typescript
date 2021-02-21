// either a or b
interface Either<L, R> {
    left:() => L;
    right: ()=> R;
}

class SimpleEither<L, R> implements Either<L, R> {
 
    constructor(
        private leftValue: L, 
        private rightValue: R){
    }

    left(): L {
        return this.leftValue;
    }
    right(): R{
        return this.rightValue;
    }
}

const either = new SimpleEither(4, 5)
console.log(either.left());
console.log(either.right());


const either1: Either<number, number> = new SimpleEither(4, 5)
console.log(either1.left());
console.log(either1.right());


const either2: Either<string, number> = new SimpleEither('A', 5)
console.log(either2.left());
console.log(either2.right());