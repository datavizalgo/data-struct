package com.example.linkedlist.CircularLinkedList;


public class CircularLinkedList {
    private CircularLinkedListNode head;

    private int length;

    public CircularLinkedList() {
        head = null;
        length = 0;
    }

    public boolean isEmpty() {
        return head == null;
    }

    public int size() {
        return length;
    }

    public boolean isCircular() {
        if (isEmpty())
            return false;
        boolean flag = false;
        CircularLinkedListNode temp = head;
        while (temp != null) {
            if (temp.next == head) {
                flag = true;
                break;
            }
            temp = temp.next;
        }
        return flag;
    }

    public void append(int data) {
        CircularLinkedListNode newNode = new CircularLinkedListNode(data);
        if (isEmpty()) {
            head = newNode;
            head.next = head;
            head.prev = head;
        } else {
            CircularLinkedListNode last = head.prev;
            last.next = newNode;
            newNode.prev = last;
            newNode.next = head;
            head.prev = newNode;
        }
        length++;
    }

    public void prepend(int data) {
        CircularLinkedListNode newNode = new CircularLinkedListNode(data);

        if (isEmpty()) {
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            CircularLinkedListNode last = head.prev;
            head.prev = newNode;
            newNode.next = head;
            newNode.prev = last;
            last.next = newNode;
        }
        head = newNode;
        length++;
    }

    public void insertAt(int data, int index) {
        if (index < 0 || index > length) {
            throw new IndexOutOfBoundsException("index out if bounds");
        }

        CircularLinkedListNode newNode = new CircularLinkedListNode(data);

        if (index == 0) {
            if (isEmpty()) {
                newNode.next = newNode;
                newNode.prev = newNode;
            } else {
                newNode.next = head;
                newNode.prev = head.prev;
                head.prev.next = newNode;
                head.prev = newNode;
            }
            head = newNode;
        } else {
            CircularLinkedListNode temp = head;
            for (int i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            newNode.next = temp.next;
            newNode.prev = temp;
            temp.next.prev = newNode;
            temp.next = newNode;
        }
        length++;
    }

    public void deleteAt(int index) {
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException("index out if bounds");
        }

        if (index == 0) {
            if (length == 1) {
                head = null;
            } else {
                head.prev.next = head.next;
                head.next.prev = head.prev;
                head = head.next;
            }
        } else {
            CircularLinkedListNode temp = head;
            for (int i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            temp.next = temp.next.next;
            temp.next.prev = temp;
        }
        length--;
    }

    public int findAt(int index) {
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException("index out if bounds");
        }

        CircularLinkedListNode temp = head;
        for (int i = 0; i < index; i++) {
            temp = temp.next;
        }
        return (int) temp.data;
    }
    public int[] toArray() {
        if (isEmpty())
            return new int[0];

        int[] arr = new int[length];
        CircularLinkedListNode temp = head;
        for (int i = 0; i < length; i++) {
            arr[i] = (int) temp.data;
            temp = temp.next;
        }
        return arr;

    }

    public int[] reverseToArray() {
        if (isEmpty())
            return new int[0];

        int[] arr = new int[length];
        CircularLinkedListNode temp = head.prev;
        for (int i = 0; i < length; i++) {
            arr[i] = (int) temp.data;
            temp = temp.prev;
        }
        return arr;
    }
}

class CircularLinkedListNode {

    int data;
    CircularLinkedListNode next;
    CircularLinkedListNode prev;

    public CircularLinkedListNode(int data) {
        this.data = data;
    }
}
