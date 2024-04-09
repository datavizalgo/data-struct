/**
 * Singly Linked List
 */

class Node<T> {
  T data;
  Node<T>? next = null;

  Node(this.data);
}

class SinglyLinkedList<T> {
  Node<T>? head = null;
  int? length = 0;

  get isEmpty => this.length == 0;
/**
 * Prepend value to the head of the list
 */
  void prepend(T data) {
    final node = Node<T>(data);
    node.next = this.head;
    this.head = node;
    this.length = this.length! + 1;
  }

/**
 * Append value to the end of the list
 *
 */
  void append(T data) {
    final node = Node<T>(data);
    if (this.head == null) {
      this.head = node;
    } else {
      Node<T>? current = this.head;
      while (current!.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length = this.length! + 1;
  }

/**
 * Insert value at index
 *
 */
  void insertAt(T data, int index) {
    if (index < 0 || index > this.length!) {
      throw RangeError("Invalid index");
    }
    final node = Node<T>(data);
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      Node<T>? current = this.head;
      for (int i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      node.next = current!.next;
      current.next = node;
    }
    this.length = this.length! + 1;
  }

/**
 * Remove value at index
 */
  void removeAt(int index) {
    if (index < 0 || index >= this.length!) {
      throw RangeError("Invalid index");
    }

    if (index == 0) {
      this.head = this.head!.next;
    } else {
      Node<T>? current = this.head;
      for (int i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      current!.next = current.next!.next;
    }
    this.length = this.length! - 1;
  }

/**
 * Get value at index
 */
  T get(int index) {
    if (index < 0 || index >= this.length!) {
      throw RangeError("Invalid index");
    }
    Node<T>? current = this.head;
    for (int i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.data;
  }

  List<T> toList() {
    List<T> list = [];
    Node<T>? current = this.head;
    while (current != null) {
      list.add(current.data);
      current = current.next;
    }
    return list;
  }

/**
 * reverse the list
 * 
 */
  void reverse() {
    if (this.head == null) {
      return;
    }
    Node<T>? current = this.head;
    Node<T>? prev = null;
    Node<T>? next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}
