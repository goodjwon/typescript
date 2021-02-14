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
        private _size: number;
        private head?: QueueNode;
        private tail?: QueueNode;

        get size(){
            return this._size;
        }


        push(value: string): void {
            const head:  QueueNode = {value, next:this.head}
            this.head = head;
            this._size++;
        }
        pop(): string {
            const tail: this.head;
            this._size--;

            return tail.value;
        }
        
    }


    const sq = new SingleQueue();
    sq.push('A1');
    sq.push('A2');
    sq.push('A3');

    console.log(sq);

    while(sq.size === 0){
        console.log(sq.pop());
    }

}