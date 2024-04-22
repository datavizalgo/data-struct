package com.example.linkedlist.DoublyLinkedList;

class DoublyLinkedListNode {
    public int data;
    public DoublyLinkedListNode next;
    public DoublyLinkedListNode prev;

    public DoublyLinkedListNode(int d) {
        data = d;
        next = null;
        prev = null;
    }
}

public class DoublyLinkedList {
    DoublyLinkedListNode head;
    int length;

    public DoublyLinkedList() {
        head = null;
        length = 0;
    }

    public boolean isEmpty() {
        return length == 0;
    }

    public int size() {
        return length;
    }

    /*
     * Prepend a node to the beginning of the list
     */
    public void prepend(int value) {
        DoublyLinkedListNode newNode = new DoublyLinkedListNode(value);

        newNode.next = head;
        if (head != null) {
            head.prev = newNode;
        }
        head = newNode;
        length++;
    }

    public void append(int value) {
        DoublyLinkedListNode newNode = new DoublyLinkedListNode(value);
        if (head == null) {
            head = newNode;
        } else {
            DoublyLinkedListNode current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
        length++;
    }

    public void insertAt(int value, int index) {
        if (index < 0 || index > length) {
            throw new IndexOutOfBoundsException();
        }

        DoublyLinkedListNode newNode = new DoublyLinkedListNode(value);
        if (index == 0) {
            newNode.next = head;
            if (head != null) {
                head.prev = newNode;
            }
            head = newNode;
        } else {
            DoublyLinkedListNode current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            if (current.next != null) {
                current.next.prev = newNode;
            }
            newNode.prev = current;
            current.next = newNode;
        }
        length++;
    }

    public void deleteAt(int index) {
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException();
        }

        DoublyLinkedListNode current = head;
        if (index == 0) {
            head = head.next;
            if (head != null) {
                head.prev = null;
            }
        } else {
            for (int i = 0; i < index - 1; i++) {
                current = current.next;
            }
            DoublyLinkedListNode delNode = current.next;
            current.next = delNode.next;
            if (delNode.next != null) {
                delNode.next.prev = current;
            }
            delNode.next = null;
            delNode.prev = null;
        }
        length--;
    }

    public int findAt(int index) {
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException();
        }

        DoublyLinkedListNode current = head;
        for (int i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    public int[] toArray() {
        int[] array = new int[length];
        DoublyLinkedListNode current = head;
        for (int i = 0; i < length; i++) {
            array[i] = current.data;
            current = current.next;
        }
        return array;
    }

    public int[] reverseToArray() {
        int[] array = new int[length];
        DoublyLinkedListNode current = head;
        while (current.next != null) {
            current = current.next;
        }
        for (int i = 0; i < length; i++) {
            array[i] = current.data;
            current = current.prev;
        }
        return array;
    }
}
