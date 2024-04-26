
class StackNode<T> {
    constructor(public value: T, public next: StackNode<T> | null = null) { }   
}

export class Stack<T> {
    private head: StackNode<T> | null = null
    private length: number = 0

    public push(value: T) {
        const node = new StackNode(value, this.head)
        this.head = node
        this.length++
    }

    public pop() {
        if (!this.head) return
        const node = this.head
        this.head = node.next
        this.length--
        return node.value
    }
    public top() {
        return this.head?.value
    }
    public isEmpty() {
        return this.length === 0
    }

    public size() {
        return this.length
    }
}