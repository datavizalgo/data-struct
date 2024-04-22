class CircularLinkedListNode<T> {
  T data;
  CircularLinkedListNode<T>? next;
  CircularLinkedListNode<T>? prev;

  CircularLinkedListNode(this.data) {}
}

class CircularLinkedList<T> {
  CircularLinkedListNode<T>? head;
  int? length;

  CircularLinkedList() {
    this.head = null;
    this.length = 0;
  }

  get size => this.length;
  get isEmpty => this.length == 0;
  isCircular() {
    var flag = false;
    var current = this.head;
    while (current != null) {
      if (current.next == this.head) {
        flag = true;
        break;
      }
      current = current.next;
    }
    return flag;
  }

  void append(T data) {
    final node = CircularLinkedListNode<T>(data);

    if (this.head == null) {
      this.head = node;
      node.next = node;
      node.prev = node;
    } else {
      var tail = this.head?.prev;
      tail?.next = node;
      node.prev = tail;
      node.next = this.head;
      this.head?.prev = node;
    }
    this.length = this.length! + 1;
  }

  void prepend(T data) {
    final node = CircularLinkedListNode<T>(data);

    if (this.head == null) {
      this.head = node;
      node.next = node;
      node.prev = node;
    } else {
      node.next = this.head;
      node.prev = this.head?.prev;
      this.head?.prev?.next = node;
      this.head?.prev = node;
      this.head = node;
    }
    this.length = this.length! + 1;
  }

  void insertAt(T data, int index) {
    if (index < 0 || index > this.length!) {
      throw RangeError("Invalid index");
    }
    final node = CircularLinkedListNode<T>(data);

    if (index == 0) {
      if (head == null) {
        node.next = node;
        node.prev = node;
      } else {
        node.next = this.head;
        node.prev = this.head?.prev;
        this.head?.prev?.next = node;
        this.head?.prev = node;
      }
      this.head = node;
    } else {
      var current = this.head;
      for (int i = 0; i < index - 1; i++) {
        current = current?.next;
      }
      node.next = current?.next;
      node.prev = current;
      current?.next?.prev = node;
      current?.next = node;
    }
    this.length = this.length! + 1;
  }

  void deleteAt(int index) {
    if (index < 0 || index >= this.length!) {
      throw RangeError("Invalid index");
    }

    if (index == 0) {
      if (this.length == 1) {
        this.head = null;
      } else {
        var next = this.head?.next;
        next?.prev = this.head?.prev;
        this.head?.prev?.next = next;
        this.head = next;
      }
    } else {
      var current = this.head;
      for (int i = 0; i < index - 1; i++) {
        current = current?.next;
      }
      var next = current?.next?.next;
      next?.prev = current;
      current?.next = next;
    }
    this.length = this.length! - 1;
  }

  toList() {
    List<T> list = [];
    CircularLinkedListNode<T>? current = this.head;
    while (current != null) {
      list.add(current.data);
      current = current.next;
      if (current == this.head) {
        break;
      }
    }
    return list;
  }

  reverseToList() {
    List<T> list = [];
    CircularLinkedListNode<T>? current = this.head?.prev;
    while (current != null) {
      list.add(current.data);
      current = current.prev;
      if (current == this.head?.prev) {
        break;
      }
    }
    return list;
  }
}
