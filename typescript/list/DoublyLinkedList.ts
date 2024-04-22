
/**
 * A doubly linked list node.
 */
export class DoublylinkedlistNode<T> {
    next: DoublylinkedlistNode<T> | null = null
    prev: DoublylinkedlistNode<T> | null = null
    constructor(public value: T) { }
}


export class DoublyLinkedList<T> {

    private head: DoublylinkedlistNode<T> | null = null
    private length: number = 0

    /**
     * Adds a new value to the beginning of the list.
     * @param value - The value to be added to the list
     */
    public prepend(value: T): void {
        const newNode = new DoublylinkedlistNode<T>(value);
        newNode.next = this.head;
        if (this.head) this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    public append(value: T): void {
        const newNode = new DoublylinkedlistNode<T>(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = newNode;
            newNode.prev = tail;
        }
        this.length++;
    }
    /**
     * insert a new value at the specified index
     * @param value  
     * @param index  form 0 to length
     */

    public insertAt(value: T, index: number): void {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        const newNode = new DoublylinkedlistNode<T>(value);
        if (index === 0) {
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
        } else {
            let tail = this.head;
            for (let i = 0; i < index - 1; i++) {
                tail = tail!.next;
            }
            newNode.next = tail!.next;
            newNode.prev = tail;
            if (tail!.next) tail!.next!.prev = newNode;
            tail!.next = newNode;
        }
        this.length++;

    }
    /**
     * delete a node at the specified index
     * @param index - The index of the node to be removed.
     */
    public deleteAt(index: number): void {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            this.head = this.head!.next;
            if (this.head) this.head.prev = null;
        } else {
            let tail = this.head;
            for (let i = 0; i < index - 1; i++) {
                tail = tail!.next;
            }
            tail!.next = tail!.next!.next;
            if (tail!.next) tail!.next.prev = tail;
        }
        this.length--;
    }

    public findAt(index: number): T | null {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        let tail = this.head;
        for (let i = 0; i < index; i++) {
            tail = tail!.next;
        }
        return tail!.value
    }

    public isEmpty(): boolean {
        return this.head === null
    }

    public size() {
        return this.length
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }

    }
    * reverse() {
        let current = this.head;
        while (current?.next) {
            current = current.next;
        }
        while (current) {
            yield current.value;
            current = current.prev;
        }
    }
}