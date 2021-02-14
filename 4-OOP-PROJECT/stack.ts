{
    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
    }

    type StatcNode = {
        readonly value: string;
        readonly next?: StatcNode;
    }

    class SingleStack implements Stack {
        private _size: number = 0;
        private head?: StatcNode;

        constructor(private capacity: number){}

        get size(){
            return this._size;
        }

        push(value: string): void {
            if(this.size === this.capacity){
                throw new Error('Stack is full!!');
            }
            const node: StatcNode = {value, next: this.head};
            this.head = node;
            this._size++;
        }

        pop(): string {
            if(this.head == null){
                throw new Error('Stack is empty!!');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }

    }

    const ss = new SingleStack(3);
    ss.push('A 1');
    ss.push('B 2');
    ss.push('C 3');

    console.log(ss)

    while(ss.size !== 0 ){
        console.log(ss.pop());
    }
}










