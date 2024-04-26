class Node {
  int? data;
  Node? next;

  Node(this.data);
}

class Queue {
  Node? front;
  Node? rear;
  int length = 0;
  Queue() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  void enqueue(int data) {
    var newNode = Node(data);
    if (this.front == null) {
      this.front = newNode;
    }
    if (this.rear != null) {
      this.rear!.next = newNode;
    }
    this.rear = newNode;
    this.length = this.length + 1;
  }

  int? dequeue() {
    if (this.front == null) {
      return null;
    }
    var node = this.front;
    this.front = this.front?.next;
    if (this.front == null) {
      this.rear = null;
    }
    this.length = this.length - 1;
    return node?.data;
  }

  int? peek() {
    if (this.front == null) {
      return null;
    }
    return this.front?.data;
  }

  bool isEmpty() {
    return this.front == null;
  }
}
