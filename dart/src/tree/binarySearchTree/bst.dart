import 'dart:collection';

class BSTNode<T extends Comparable> {
  T data;
  BSTNode<T>? left;
  BSTNode<T>? right;

  BSTNode(this.data, this.left, this.right);
}

class BinarySearchTree<T extends Comparable> {
  BSTNode<T>? root;
  BinarySearchTree() {
    this.root = null;
  }

  void insert(T data) {
    this.root = insertNode(this.root, data);
  }

  BSTNode<T> insertNode(BSTNode<T>? node, T data) {
    if (node == null) {
      return BSTNode(data, null, null);
    }
    if (data.compareTo(node.data) < 0) {
      node.left = insertNode(node.left, data);
    } else if (data.compareTo(node.data) > 0) {
      node.right = insertNode(node.right, data);
    }
    return node;
  }

  void delete(T data) {
    this.root = deleteNode(this.root, data);
  }

  BSTNode<T>? deleteNode(BSTNode<T>? root, T data) {
    if (root == null) {
      return null;
    }
    if (data.compareTo(root.data) < 0) {
      root.left = deleteNode(root.left, data);
    }
    if (data.compareTo(root.data) > 0) {
      root.right = deleteNode(root.right, data);
    }
    if (data.compareTo(root.data) == 0) {
      if (root.left == null && root.right == null) {
        root = null;
      } else if (root.left == null) {
        root = root.right;
      } else if (root.right == null) {
        root = root.left;
      } else {
        var node = root.right;
        while (node?.left != null) {
          node = node?.left;
        }
        root.data = node!.data;
        root.right = deleteNode(root.right, node.data);
      }
    }
    return root;
  }

  bool search(T data) {
    BSTNode<T>? current = this.root;
    while (current != null) {
      if (data.compareTo(current.data) < 0) {
        current = current.left;
      } else if (data.compareTo(current.data) > 0) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  T findMin() {
    BSTNode<T>? current = this.root;
    while (current?.left != null) {
      current = current?.left;
    }
    return current!.data;
  }

  T findMax() {
    BSTNode<T>? current = this.root;
    while (current?.right != null) {
      current = current?.right;
    }
    return current!.data;
  }

  int height(BSTNode<T>? node) {
    if (node == null) {
      return -1;
    }
    int leftHeight = height(node.left);
    int rightHeight = height(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  void inOrder(BSTNode<T>? node) {
    if (node == null) {
      return;
    }
    inOrder(node.left);
    print(node.data);
    inOrder(node.right);
  }

  void preOrder(BSTNode<T>? node) {
    if (node == null) {
      return;
    }
    print(node.data);
    preOrder(node.left);
    preOrder(node.right);
  }

  void postOrder(BSTNode<T>? node) {
    if (node == null) {
      return;
    }
    postOrder(node.left);
    postOrder(node.right);
    print(node.data);
  }

  void levelOrder(BSTNode<T>? node) {
    if (node == null) {
      return;
    }
    Queue<BSTNode<T>> queue = Queue();
    queue.addLast(node);
    while (!queue.isEmpty) {
      BSTNode<T> current = queue.removeFirst();
      print(current.data);
      if (current.left != null) {
        queue.addLast(current.left!);
      }
      if (current.right != null) {
        queue.addLast(current.right!);
      }
    }
  }

  List toList() {
    List list = [];
    if (root != null) {
      Queue<BSTNode<T>> queue = Queue();
      queue.addLast(root!);
      while (!queue.isEmpty) {
        BSTNode<T> current = queue.removeFirst();
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

  get isEmpty {
    return this.root == null;
  }

//   void insert(T data) {
//     BSTNode<T> newNode = BSTNode(data, null, null);
//     if (this.root == null) {
//       this.root = newNode;
//     } else {
//       BSTNode<T>? current = this.root;
//       BSTNode<T>? parent;
//       while (true) {
//         parent = current;
//         if (data.compareTo(current?.data) < 0) {
//           current = current?.left;
//           if (current == null) {
//             parent?.left = newNode;
//             break;
//           }
//         } else {
//           current = current?.right;
//           if (current == null) {
//             parent?.right = newNode;
//             break;
//           }
//         }
//       }
//     }
//   }
}
