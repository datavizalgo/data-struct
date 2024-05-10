package com.example.tree;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class AvlNode {
    AvlNode left;
    AvlNode right;
    int height;
    int data;

    public AvlNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }

}

public class AvlTree {
    private AvlNode root;

    public AvlTree() {
        this.root = null;
    }

    private int getHeight(AvlNode node) {
        if (node == null) {
            return -1;
        }
        return node.height;
    }

    private int getMaxHeight(AvlNode node) {
        if (node == null) {
            return -1;
        }
        return Math.max(getHeight(node.left), getHeight(node.right));
    }

    // 左旋
    private AvlNode leftRotate(AvlNode node) {
        if (node == null) {
            return null;
        }
        AvlNode newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        node.height = getMaxHeight(node) + 1;
        newRoot.height = getMaxHeight(newRoot) + 1;
        return newRoot;
    }

    // 右旋
    private AvlNode rightRotate(AvlNode node) {
        AvlNode newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        node.height = getMaxHeight(node) + 1;
        newRoot.height = getMaxHeight(newRoot) + 1;
        return newRoot;
    }

    // 左右旋
    private AvlNode leftRightRotate(AvlNode node) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    // 右左旋
    private AvlNode rightLeftRotate(AvlNode node) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    private AvlNode rebalance(AvlNode node, int data) {
        if (node != null) {
            int leftHeight = getHeight(node.left);
            int rightHeight = getHeight(node.right);

            if (rightHeight - leftHeight == 2) {
                if (data > node.right.data) {
                    node = leftRotate(node);
                } else {
                    node = rightLeftRotate(node);
                }

            } else if (leftHeight - rightHeight == 2) {
                if (data < node.left.data) {
                    node = rightRotate(node);
                } else {
                    node = leftRightRotate(node);
                }
            }
        }

        return node;
    }

    // 插入

    public void insert(int data) {
        root = insert(root, data);
    }

    private AvlNode insert(AvlNode node, int data) {
        if (node == null) {
            return new AvlNode(data);
        }
        if (data < node.data) {
            node.left = insert(node.left, data);
        } else if (data > node.data) {
            node.right = insert(node.right, data);
        }
        node = rebalance(node, data);
        node.height = getMaxHeight(node) + 1;
        return node;
    }

    public void delete(int data) {
        root = delete(root, data);
    }


    private AvlNode delete(AvlNode node, int data) {
        if (node == null) {
            return null;
        }
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
                AvlNode miNode = findMin(node.right);
                node.data = miNode.data;
                node.right = delete(node.right, miNode.data);
            }
            if (node != null) {
                node = rebalance(node, data);
                node.height = getMaxHeight(node) + 1;
            }

        }
        return node;
    }

    private AvlNode findMin(AvlNode node) {
        if (node == null) {
            return null;
        }
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }

    public List<Integer> inOrder() {
        List<Integer> list = new ArrayList<>();

        return inOrder(root, list);

    }

    private List<Integer> inOrder(AvlNode node, List<Integer> list) {
        if (node != null) {
            inOrder(node.left, list);
            list.add(node.data);
            inOrder(node.right, list);
        }
        return list;
    }

    public List<Integer> levelOrder() {
        List<Integer> list = new ArrayList<>();
        Queue<AvlNode> queue = new LinkedList<>();
        if (root != null) {
            queue.add(root);
            while (!queue.isEmpty()) {
                AvlNode node = queue.poll();
                list.add(node.data);
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
        }
        return list;

    }

    public boolean isEmpty() {
        return root == null;
    }
}