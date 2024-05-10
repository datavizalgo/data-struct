import 'dart:collection';
import 'dart:math';

class AvlNode<T> {
  T? data;
  AvlNode<T>? left;
  AvlNode<T>? right;
  int height = 0;

  AvlNode(this.data, this.left, this.right);
}

class AvlTree<T extends Comparable> {
  AvlNode<T>? root;

  AvlTree() {
    this.root = null;
  }

  bool get isEmpty {
    return this.root == null;
  }

  int height(AvlNode<T>? node) {
    if (node == null) {
      return -1;
    }
    return node.height;
  }

  int getMaxHeight(AvlNode<T>? node) {
    if (node == null) {
      return -1;
    }
    int leftHeight = height(node.left);
    int rightHeight = height(node.right);
    return max(leftHeight, rightHeight) + 1;
  }

//   左旋转
  AvlNode<T>? leftRotate(AvlNode<T>? node) {
    AvlNode<T>? rightNode = node?.right;

    node?.right = rightNode?.left;
    rightNode?.left = node;

    node?.height = getMaxHeight(node);
    rightNode?.height = getMaxHeight(rightNode);
    return rightNode;
  }

//   右旋转
  AvlNode<T>? rightRotate(AvlNode<T>? node) {
    AvlNode<T>? leftNode = node?.left;

    node?.left = leftNode?.right;
    leftNode?.right = node;

    node?.height = getMaxHeight(node);
    leftNode?.height = getMaxHeight(leftNode);
    return leftNode;
  }

//   左右旋转
  AvlNode<T>? leftRightRotate(AvlNode<T>? node) {
    node?.left = leftRotate(node.left);
    return rightRotate(node);
  }

//   右左旋转
  AvlNode<T>? rightLeftRotate(AvlNode<T>? node) {
    node?.right = rightRotate(node.right);
    return leftRotate(node);
  }

  AvlNode<T>? insertNode(AvlNode<T>? node, T data) {
    if (node == null) {
      return AvlNode(data, null, null);
    }
    if (data.compareTo(node.data!) < 0) {
      node.left = insertNode(node.left, data);
    } else if (data.compareTo(node.data!) > 0) {
      node.right = insertNode(node.right, data);
    }
    node = balance(node);
    node!.height = getMaxHeight(node);
    return node;
  }

  AvlNode<T>? deleteNode(AvlNode<T>? node, T data) {
    if (node == null) {
      return null;
    }

    if (data.compareTo(node.data!) < 0) {
      node.left = deleteNode(node.left, data);
    } else if (data.compareTo(node.data!) > 0) {
      node.right = deleteNode(node.right, data);
    } else {
      if (node.left == null && node.right == null) {
        node = null;
      } else if (node.left == null) {
        node = node.right;
      } else if (node.right == null) {
        node = node.left;
      } else {
        var min = findMin(node.right);
        node.data = min;
        node.right = deleteNode(node.right, min!);
      }
    }
    node = balance(node);
    node?.height = getMaxHeight(node);
    return node;
  }

  AvlNode<T>? balance(AvlNode<T>? node) {
    if (node == null) {
      return null;
    }
    if (height(node.left) - height(node.right) > 1) {
      if (height(node.left?.left) >= height(node.left?.right)) {
        node = rightRotate(node);
      } else {
        node = leftRightRotate(node);
      }
    } else if (height(node.right) - height(node.left) > 1) {
      if (height(node.right?.right) >= height(node.right?.left)) {
        print("leftRotate");
        node = leftRotate(node);
      } else {
        node = rightLeftRotate(node);
      }
    }
    return node;
  }

  T? findMin(AvlNode<T>? node) {
    if (root == null) {
      return null;
    }
    while (node!.left != null) {
      node = node.left;
    }
    return node.data;
  }

  void delete(T data) {
    this.root = deleteNode(this.root, data);
  }

  void insert(T data) {
    this.root = insertNode(this.root, data);
  }

  /// Performs an in-order traversal of the AVL tree starting from the given node.
  ///
  /// The in-order traversal visits the nodes in ascending order based on their data.
  ///
  /// Parameters:
  /// - `node`: The starting node of the traversal. If `null`, the traversal is not performed.
  ///
  /// Returns:
  /// This function does not return any value.

  void inOrder(AvlNode<T>? node) {
    if (node == null) {
      return;
    }
    inOrder(node.left);
    print("${node.data} ${node.height}");
    inOrder(node.right);
  }

  List toList() {
    List list = [];
    if (root != null) {
      Queue<AvlNode<T>> queue = Queue();
      queue.addLast(root!);
      while (!queue.isEmpty) {
        AvlNode<T> current = queue.removeFirst();
        list.add(current.data);
        if (current.left != null) {
          queue.addLast(current.left!);
        }
        if (current.right != null) {
          queue.addLast(current.right!);
        }
      }
    }
    return list;
  }
}
