

class AVLTreeNode<T> {
    value: T
    left: AVLTreeNode<T> | null = null
    right: AVLTreeNode<T> | null = null
    height: number = 0
    constructor(value: T) {
        this.value = value
        this.height = 1
    }
}

export class AVLTree<T = number> {
    root: AVLTreeNode<T> | null = null
    constructor() {
    }

    getMaxHeight(node: AVLTreeNode<T> | null): number {
        if (node === null) {
            return 0
        }
        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
    }

    getHeight(node: AVLTreeNode<T> | null): number {
        if (node === null) {
            return 0
        }
        return node.height
    }

    // 左旋转
    leftRotate(node: AVLTreeNode<T>) {
        const newRoot = node.right
        node!.right = newRoot?.left!
        newRoot!.left = node
        node.height = this.getMaxHeight(node)
        newRoot!.height = this.getMaxHeight(newRoot)
        return newRoot
    }
    // 右旋转
    rightRotate(node: AVLTreeNode<T>) {
        const newRoot = node.left
        node.left = newRoot?.right!
        newRoot!.right = node
        node.height = this.getMaxHeight(node)
        newRoot!.height = this.getMaxHeight(newRoot)
        return newRoot
    }

    // 左右旋转
    leftRightRotate(node: AVLTreeNode<T>) {
        node.left = this.leftRotate(node.left!)
        return this.rightRotate(node)
    }

    // 右左旋转
    rightLeftRotate(node: AVLTreeNode<T>) {
        node.right = this.rightRotate(node.right!)
        return this.leftRotate(node)
    }

    rebalance(node: AVLTreeNode<T> | null, data: T) {
        if (node === null) {
            return null
        }
        if (this.getHeight(node.left) - this.getHeight(node.right) > 1) {
            if (this.getHeight(node.left?.left!) > this.getHeight(node.left?.right!)) {
                node = this.rightRotate(node)
            } else {
                node = this.leftRightRotate(node)
            }
        } else if (this.getHeight(node.right) - this.getHeight(node.left) > 1) {
            if (this.getHeight(node.right?.right!) > this.getHeight(node.right?.left!)) {
                node = this.leftRotate(node)
            } else {
                node = this.rightLeftRotate(node)
            }
        }
        return node
    }

    insert(value: T) {
        this.root = this.insertNode(this.root, value)
    }
    insertNode(root: AVLTreeNode<T> | null, value: T): AVLTreeNode<T> | null {
        if (root === null) {
            return new AVLTreeNode<T>(value)
        }
        if (value < root.value) {
            root.left = this.insertNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.insertNode(root.right, value)
        }
        root!.height = this.getMaxHeight(root)
        root = this.rebalance(root, value)
        return root
    }

    delete(value: T) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root: AVLTreeNode<T> | null, value: T): AVLTreeNode<T> | null {
        if (root === null) {
            return null
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                root = null
            } else if (!root.left) {
                root = root.right
            } else if (!root.right) {
                root = root.left
            } else {
                const minNode = this.findMin(root.right)!
                root.value = minNode.value // 将节点的值替换为右子树的最小值
                root.right = this.deleteNode(root.right, minNode.value) // 删除右子树的最小值
            }
        }
        if (root) {
            root.height = this.getMaxHeight(root)
            root = this.rebalance(root, value)
        }
        return root
    }

    findMin(node: AVLTreeNode<T> | null): AVLTreeNode<T> | null {
        if (node === null) {
            return null
        }
        while (node.left) {
            node = node.left
        }
        return node
    }

    findMax(node: AVLTreeNode<T> | null): AVLTreeNode<T> | null {
        if (node === null) {
            return null
        }
        while (node.right) {
            node = node.right
        }
        return node
    }

    levelOrder(): T[] {
        const result: T[] = []
        if (!this.root) {
            return result
        }
        const queue: AVLTreeNode<T>[] = []
        queue.push(this.root)
        while (queue.length) {
            const node = queue.shift()!
            result.push(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return result
    }

    isEmpty() {
        return this.root === null
    }
}
