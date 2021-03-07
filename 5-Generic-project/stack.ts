{
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }

    type StatcNode<T> = {
        readonly value: T;
        readonly next?: StatcNode<T>;
    }

    class SingleStack<T> implements Stack<T> {
        private _size: number = 0;
        private head?: StatcNode<T>;

        constructor(private capacity: number){}

        get size(){
            return this._size;
        }

        push(value: T): void {
            if(this.size === this.capacity){
                throw new Error('Stack is full!!');
            }
            const node = {value, next: this.head};
            this.head = node;
            this._size++;
        }

        pop(): T {
            if(this.head == null){
                throw new Error('Stack is empty!!');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }

    }

    const ss = new SingleStack<string>(3);
    ss.push('A 1');
    ss.push('B 2');
    ss.push('C 3');

    console.log(ss)

    while(ss.size !== 0 ){
        console.log(ss.pop());
    }

    const s2 = new SingleStack<number>(3);
    s2.push(123);
    s2.push(456);
    s2.push(789);

    console.log(s2)

    while(s2.size !== 0 ){
        console.log(s2.pop());
    }
}










