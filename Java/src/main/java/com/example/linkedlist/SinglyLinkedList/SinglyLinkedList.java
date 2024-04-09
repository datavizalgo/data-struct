package com.example.linkedlist.SinglyLinkedList;

class Node {
    int data;
    Node next;

    Node(int d) {
        data = d;
        next = null;
    }
}

public class SinglyLinkedList {
    Node head;
    private int length = 0;

    public SinglyLinkedList() {
        head = null;
    }

    /**
     * Prepend a new node at the beginning of the linked list.
     *
     * @param value The data to be stored in the new node.
     */
    public void prepend(int value) {
        // Create a new node
        Node node = new Node(value);

        // Make the new node point to the current head
        node.next = head;

        // Assign the new node as the new head
        head = node;

        // Increment the length of the linked list
        length++;
    }

    /**
     * Append a new node at the end of the linked list.
     *
     * @param value The data to be stored in the new node.
     */
    public void append(int value) {
        // Create a new node
        Node node = new Node(value);

        // If the head is null, the new node is the head
        if (head == null) {
            head = node;
        } else {
            // Traverse to the last node
            Node last = head;
            while (last.next != null) {
                last = last.next;
            }
            // Point the last node's next to the new node
            last.next = node;
        }

        // Increment the length of the linked list
        length++;
    }

    /**
     * Inserts a new node at the specified index in the linked list.
     *
     * @param value The data to be stored in the new node.
     * @param index The index at which the new node will be inserted.
     */
    public void insertAt(int value, int index) {
        // Check if the index is out of bounds

        if (index < 0 || index > length) {
            throw new IndexOutOfBoundsException("Index: " + index + " is out of bounds. Size: " + length);
        }
        // Create a new node
        Node node = new Node(value);

        // If the index is 0, insert the node at the head
        if (index == 0) {
            // Point the new node's next to the current head and assign it as the new head
            node.next = head;
            head = node;
        } else {
            // Traverse to the node before the insertion point
            Node temp = head;
            for (int i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            // Connect the new node to the next node after the insertion point
            node.next = temp.next;
            // Connect the node before the insertion point to the new node
            temp.next = node;
        }
        length++;
    }

    /**
     * Removes the node at the specified index from the linked list.
     *
     * @param index The index of the node to be removed.
     */
    public void removeAt(int index) {
        // Check if the index is out of bounds
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException("Index: " + index + " is out of bounds. Size: " + length);
        }

        // Case 1: Removing the head
        if (index == 0) {
            // Move the head to the next node
            head = head.next;
        } else {
            // Traverse to the node before the removal point
            Node temp = head;
            for (int i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            // Disconnect the node before the removal point from the node after the removal
            // point
            temp.next = temp.next.next;
        }

        // Decrement the length of the linked list
        length--;
    }

    public int findAt(int index) {
        if (index < 0 || index >= length) {
            throw new IndexOutOfBoundsException("Index: " + index + " is out of bounds. Size: " + length);
        }
        Node temp = head;
        for (int i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp.data;
    }

    public int size() {
        return length;
    }

    public boolean isEmpty() {
        return length == 0;
    }

    public int[] toArray() {
        int[] arr = new int[length];
        Node temp = head;
        for (int i = 0; i < length; i++) {
            arr[i] = temp.data;
            temp = temp.next;
        }
        return arr;
    }

}