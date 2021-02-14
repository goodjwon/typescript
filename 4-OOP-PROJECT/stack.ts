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
        get size(){
            return this._size;
        }

        push(value: string): void {
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

    const ss = new SingleStack();
    ss.push('A 1');
    ss.push('B 2');
    ss.push('C 3');

    while(ss.size !== 0 ){
        console.log(ss.pop());
    }
}










