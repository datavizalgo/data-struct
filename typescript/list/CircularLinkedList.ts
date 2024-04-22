
export class CircularLinkedListNode<T> {
    prev: CircularLinkedListNode<T> | null = null
    next: CircularLinkedListNode<T> | null = null
    constructor(public value: T) { }
}

export class CircularLinkedList<T> {
    head: CircularLinkedListNode<T> | null = null
    length: number = 0
    constructor() {

    }

    prepend(value: T): void {
        const newNode = new CircularLinkedListNode<T>(value);
        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
            this.head.prev = this.head;
        } else {
            const tail = this.head.prev;
            newNode.next = this.head;
            newNode.prev = tail;
            tail!.next = newNode;
            this.head.prev = newNode;
            this.head = newNode

        }
        this.length++;
    }

    append(value: T): void {
        const newNode = new CircularLinkedListNode<T>(value);
        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
            this.head.prev = this.head;
        } else {
            let tail = this.head.prev;
            tail!.next = newNode;
            newNode.prev = tail;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.length++;
    }

    insertAt(value: T, index: number): void {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        const newNode = new CircularLinkedListNode<T>(value);
        if (index === 0) {
            if (!this.head) {
                this.head = newNode;
                this.head.next = this.head;
                this.head.prev = this.head;
            }else {
                newNode.next = this.head;
                newNode.prev = this.head.prev;
                this.head.prev!.next = newNode;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else {
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp!.next;
            }
            newNode.next = temp!.next;
            newNode.prev = temp;
            temp!.next = newNode;
            newNode.next!.prev = newNode;
        }
        this.length++;
    }

    deleteAt(index: number): void {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
            } else {
                const temp = this.head!;
                this.head = temp!.next;
                this.head!.prev = temp.prev;
                temp!.prev!.next = this.head;
            }
        } else {
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp!.next;
            }
            temp!.next = temp!.next!.next;
            temp!.next!.prev = temp;
        }
        this.length--;
    }

    findAt(index: number): T | null {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp!.next;
        }
        return temp!.value
    }

    size() {
        return this.length
    }

    isEmpty() {
        return this.length === 0
    }

    isCircular() {
        let current = this.head
        while (current) {
            if (current.next === this.head && this.head?.prev === current) {
                return true
            }
            current = current.next
        }
        return false
    }

    *[Symbol.iterator]() {
        let current = this.head
        while (current) {
            yield current.value
            current = current.next
            if (current === this.head) {
                break
            }
        }
    }

    *reverseToArray() {

        let current = this.head?.prev
        while (current) {
            yield current.value
            current = current.prev
            if (current === this.head?.prev) {
                break
            }
        }
    }
}