class DoublylinkedlistNode<T> {
  T data;
  DoublylinkedlistNode<T>? next;
  DoublylinkedlistNode<T>? prev;
  DoublylinkedlistNode(this.data);
}

class DoublyLinkedList<T> {
  DoublylinkedlistNode<T>? head;
  int? length;
  DoublyLinkedList() {
    this.head = null;
    this.length = 0;
  }

  get isEmpty => this.head == null;

  get size => this.length;

  /**
   * Prepend value to the head of the list
   *    
   * 
   * */

  void prepend(T data) {
    final node = DoublylinkedlistNode<T>(data);
    node.next = this.head;
    this.head?.prev = node;
    this.head = node;
    this.length = this.length! + 1;
  }

  void append(T data) {
    final node = DoublylinkedlistNode<T>(data);
    if (this.head == null) {
      this.head = node;
    } else {
      DoublylinkedlistNode<T>? current = this.head;
      while (current!.next != null) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    this.length = this.length! + 1;
  }

  void insertAt(T data, int index) {
    if (index < 0 || index > this.length!) {
      throw RangeError("Invalid index");
    }
    final node = DoublylinkedlistNode<T>(data);
    if (index == 0) {
      node.next = this.head;
      this.head?.prev = node;
      this.head = node;
    } else {
      DoublylinkedlistNode<T>? current = this.head;
      for (int i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      node.next = current!.next;
      node.prev = current;
      current.next = node;
      node.next?.prev = node;
    }
    this.length = this.length! + 1;
  }

  void deleteAt(int index) {
    if (index < 0 || index >= this.length!) {
      throw RangeError("Invalid index");
    }

    if (index == 0) {
      this.head = this.head!.next;
      this.head?.prev = null;
    } else {
      DoublylinkedlistNode<T>? current = this.head;
      for (int i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      current?.next = current.next?.next;
      current?.next?.prev = current;
    }
    this.length = this.length! - 1;
  }

  T get(int index) {
    if (index < 0 || index >= this.length!) {
      throw RangeError("Invalid index");
    }
    DoublylinkedlistNode<T>? current = this.head;
    for (int i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.data;
  }

  List<T> toList() {
    List<T> list = [];
    DoublylinkedlistNode<T>? current = this.head;
    while (current != null) {
      list.add(current.data);
      current = current.next;
    }
    return list;
  }

  List<T> reverseToList() {
    List<T> list = [];
    DoublylinkedlistNode<T>? current = this.head;
    while (current?.next != null) {
      current = current?.next;
    }
    while (current != null) {
      list.add(current.data);
      current = current.prev;
    }
    return list;
  }
}
