package com.example.queue ;

class Node<T> {
    T data;
    Node<T> next;

    public Node(T data) {
        this.data = data;
        next = null;
    }
}

public class Queue<T> {

    private Node<T> front;
    private Node<T> rear;
    private int length;

    public Queue() {
        front = null;
        rear = null;
        length = 0;
    }

    public void enqueue(T data) {
        Node<T> newNode = new Node<T>(data);
        if (front == null) {
            front = newNode;
        } else {
            rear.next = newNode;
        }
        rear = newNode;
        length++;
    }

    public T dequeue() {
        if (front == null) {
            return null;
        }
        T data = front.data;
        front = front.next;
        if (front == null) {
            rear = null;
        }
        length--;

        return data;
    }

    public T peek() {
        if (front == null) {
            return null;
        }
        return front.data;
    }

    public int size() {
        return length;
    }

    public boolean isEmpty() {
        return front == null;
    }
}