
export class SinglyLinkedList<T> {
    private head: SinglylinkedlistNode<T> | null = null;
    private length: number = 0
    public isEmpty(): boolean {
        return this.head === null;
    }
    public size() {
        return this.length
    }
    /**
     * Add a new node with the given value to the beginning of the list.
     *
     * @param {T} value - the value to be added to the list
     * @return {void} 
     */
    public prepend(value: T): void {
        const newNode = new SinglylinkedlistNode<T>(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }

    /**
     * Adds a new value to the end of the linked list.
     *
     * @param {T} value - the value to be added to the linked list
     * @return {void} 
     */
    public append(value: T): void {
        const newNode = new SinglylinkedlistNode<T>(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
        this.length++
    }

    /**
     * Inserts a new value at the specified index.
     *
     * @param {T} value - the value to insert
     * @param {number} index - the index at which to insert the value
     * @return {void} 
     */
    public insertAt(value: T, index: number): void {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        const newNode = new SinglylinkedlistNode<T>(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let tail = this.head;
            for (let i = 0; i < index - 1; i++) {
                tail = tail!.next;
            }
            newNode.next = tail!.next;
            tail!.next = newNode;
        }
        this.length++
    }

    /**
     * Removes the node at the specified index.
     *
     * @param {number} index - The index of the node to be removed.
     * @throws {Error} If the index is out of bounds.
     */
    public removeAt(index: number): void {
        // Check if index is out of bounds
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }

        // If the node to be removed is the head
        if (index === 0) {
            // Update head to the next node
            this.head = this.head!.next;
        } else {
            // Find the node before the node to be removed
            let tail = this.head;
            for (let i = 0; i < index - 1; i++) {
                tail = tail!.next;
            }

            // Update the next pointer of the node before the node to be removed
            // to skip the node to be removed
            tail!.next = tail!.next!.next;
        }

        // Decrement the length of the linked list
        this.length--;
    }

    /**
     * Removes the first occurrence of a given value from the linked list.
     *
     * @param {T} value - The value to be removed from the list.
     */
    public removeValue(value: T): void {
        // Initialize variables to track the current and previous nodes.
        let current = this.head;
        let prev = null;

        // Traverse the linked list until the value is found or the end is reached.
        while (current) {
            // If the current node's value matches the given value, remove it.
            if (current.value === value) {

                // If the current node is the head, update the head to the next node.
                if (current === this.head) {
                    this.head = current.next;
                }
                // Otherwise, update the previous node's next pointer to skip the current node.
                else {
                    prev!.next = current.next;
                }

                this.length--;
                break;
            }

            // Move to the next node.
            prev = current;
            current = current.next;
        }
    }
    /**
     * Finds and returns the value at the specified index.
     *
     * @param {number} index - The index at which to find the value.
     * @return {T | null} The value at the specified index, or null if the index is out of bounds.
     * @throws {Error} If the index is out of bounds.
     */
    public findAt(index: number): T | null {
        // Check if index is out of bounds
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        // Start at head and traverse to the specified index
        let tail = this.head;
        for (let i = 0; i < index; i++) {
            tail = tail!.next;
        }
        // Return the value at the specified index
        return tail!.value
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }

    }
}

class SinglylinkedlistNode<T> {
    next: SinglylinkedlistNode<T> | null = null;
    constructor(public value: T) { }
}
