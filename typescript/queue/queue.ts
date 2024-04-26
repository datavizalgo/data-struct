
class Node {
    constructor(public value: any, public next?: Node) { }
}

export class Queue {
    private front: Node | null = null
    private rear: Node | null = null
    private length: number = 0
    public enqueue(value: any) {
        const node = new Node(value)
        if (!this.front) {
            this.front = node
        }
        if (this.rear) {
            this.rear.next = node
        }
        this.rear = node
        this.length++
    }

    public dequeue() {
        if (!this.front) return
        const node = this.front
        this.front = node.next!
        if (!this.front) {
            this.rear = null
        }
        this.length--
        return node.value
    }

    isEmpty() {
        return !this.front
    }

    size() {
        return this.length
    }
}