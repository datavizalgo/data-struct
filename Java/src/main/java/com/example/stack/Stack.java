package com.example.stack;

class StackNode {
    int data;
    StackNode next;
    public StackNode(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Stack {
    StackNode head;
    int length;
    public void push(int data) {
        StackNode node = new StackNode(data);
        node.next = head;
        head = node;
        length++;
    }

    public int pop() {
        if (head == null) {
            return -1;
        }
        int data = head.data;
        head = head.next;
        length--;
        return data;
    }

    public int top() {
        if (head == null) {
            return -1;
        }
        return head.data;
    }

    public int size() {
        return length;
    }

    public boolean isEmpty() {
        return length == 0;
    }
}
