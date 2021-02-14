{
    interface Queue {
        push(value: string):void;
        pop():string;
    }

    type QueueNode = {
        value: string
        next?: QueueNode;
    }

    class SingleQueue implements Queue {
        private _size: number = 0;
        private head?: QueueNode;
        private tail?: QueueNode;

        get size(){
            return this._size;
        }

        push(value: string): void {
            const node:  QueueNode = {value, next:this.head}
            this.head = node;
            this._size++;
        }

        pop(): string {
            const tempNode: QueueNode = this.head;
            this.head = this.head?.next;

            if(this.head == null){
                this.tail = undefined;
            }

            this._size--;

            return this.head?.value;
        }
        
    }

    const sq = new SingleQueue();
    sq.push('A1');
    sq.push('A2');
    sq.push('A3');

    while(sq.size !== 0){
        console.log(sq.pop());
    }

}