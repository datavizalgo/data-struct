package com.example.tree;

import java.util.LinkedList;
import java.util.Queue;

/**
 * BSTNode
 */
class BSTNode {

    int data;
    BSTNode left;
    BSTNode right;

    public BSTNode(int data) {
        this.data = data;
    }
}

public class BinarySeachTree {

    public BSTNode root;

    public void insert(int data) {
        root = insert(root, data);
    }

    private BSTNode insert(BSTNode node, int data) {
        if (node == null) {
            node = new BSTNode(data);
        } else if (data < node.data) {
            node.left = insert(node.left, data);
        } else if (data > node.data) {
            node.right = insert(node.right, data);
        }
        return node;
    }

    public BSTNode search(int data) {
        BSTNode node = root;
        while (node != null) {
            if (data < node.data) {
                node = node.left;
            } else if (data > node.data) {
                node = node.right;
            }
            if (node.data == data) {
                break;
            }
        }
        return node;

    }

    public void delete(int data) {
        if (root == null) {
            return;
        }

        root = delete(root, data);

    }

    private BSTNode delete(BSTNode node, int data) {
        if (node != null) {

            if (data < node.data) {
                node.left = delete(node.left, data);
            } else if (data > node.data) {
                node.right = delete(node.right, data);
            } else {
                if (node.left == null && node.right == null) {
                    node = null;
                } else if (node.left == null) {
                    node = node.right;
                } else if (node.right == null) {
                    node = node.left;
                } else {
                    BSTNode temp = node.right;
                    while (temp.left != null) {
                        temp = temp.left;
                    }
                    node.data = temp.data;
                    node.right = delete(node.right, temp.data);
                }
            }

        }
        return node;
    }

    public int findMin() {
        if (root == null) {
            return -1;
        }
        BSTNode node = root;
        while (node.left != null) {
            node = node.left;
        }
        return node.data;
    }

    public int findMax() {
        if (root == null) {
            return -1;
        }
        BSTNode node = root;
        while (node.right != null) {
            node = node.right;
        }
        return node.data;
    }

    public void inOrder(BSTNode node) {
        if (node != null) {
            inOrder(node.left);
            System.out.print(node.data + " ");
            inOrder(node.right);
        }
    }

    public void preOrder(BSTNode node) {
        if (node != null) {
            System.out.print(node.data + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    public void postOrder(BSTNode node) {
        if (node != null) {
            postOrder(node.left);
            postOrder(node.right);
            System.out.print(node.data + " ");
        }
    }

    public void levelOrder() {

        Queue<BSTNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            BSTNode node = queue.poll();
            System.out.print(node.data + " ");
            if (node.left != null) {
                queue.add(node.left);
            }
            if (node.right != null) {
                queue.add(node.right);
            }
        }
    }
}
