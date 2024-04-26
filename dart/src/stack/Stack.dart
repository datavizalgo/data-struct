class StackNode {
  int? data;
  StackNode? next;
  StackNode(this.data) {}
}

class Stack {
  StackNode? head;
  int length = 0;
  void push(int data) {
    var newNode = StackNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length = this.length + 1;
  }

  int? pop() {
    if (this.head == null) {
      return null;
    }
    var data = this.head?.data;
    this.head = this.head?.next;
    this.length = this.length - 1;
    return data;
  }

  int? top() {
    return this.head?.data;
  }

  int size() {
    return this.length;
  }

  bool isEmpty() {
    return this.head == null;
  }
}
