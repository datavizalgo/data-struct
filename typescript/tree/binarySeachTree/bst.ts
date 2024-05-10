
export class BSTNode<T> {
    value: T
    left: BSTNode<T> | null
    right: BSTNode<T> | null
    constructor(value: T) {
        this.value = value
        this.left = null
        this.right = null
    }
}


export class BinarySearchTree<T> {
    root: BSTNode<T> | null
    constructor() {
        this.root = null
    }

    insert(value: T) {
        this.root = this.insertNode(this.root!, value)
    }

    private insertNode(node: BSTNode<T>, value: T): BSTNode<T> {
        if (node === null) {
            return new BSTNode<T>(value)
        }
        if (value < node.value) {
            node.left = this.insertNode(node.left!, value)
        } else if (value > node.value) {
            node.right = this.insertNode(node.right!, value)
        }
        return node
    }

    delete(value: T) {
        this.root = this.deleteNode(this.root!, value)
    }
    private deleteNode<T>(node: BSTNode<T>|null, value: T): BSTNode<T> | null {
        if (node === null) {
            return null
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left!, value)
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right!, value)
        } else {
            if (!node.left && !node.right) {
                node = null
            } else if (!node.left) {
                node = node.right
            } else if (!node.right) {
                node = node.left
            }else{
                // 两个节点都不为空

                // 找到右子树的最小值
                let tempNode = node.right
                while (tempNode.left) {
                    tempNode = tempNode.left
                }
                // 将节点的值替换为右子树的最小值
                node.value = tempNode.value
                // 删除右子树的最小值
                node.right = this.deleteNode(node.right!, tempNode.value)
            }
        }
        return node
    }

    search(value: T) {
        let node = this.root
        while (node) {
            if (value < node.value) {
                node = node.left
            } else if (value > node.value) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }

    findMin() {
        let node = this.root
        while (node?.left) {
            node = node.left!
        }
        return node?.value
    }

    findMax() {
        let node = this.root
        while (node?.right) {
            node = node.right!
        }
        return node?.value
    }

    preOrder() {
        const result = []
        const stack = []
        let node = this.root
        while (node || stack.length) {
            while (node) {
                result.push(node.value)
                stack.push(node)
                node = node.left
            }
            node = stack.pop()!
            node = node.right
        }
        return result;
    }

    inOrder() {
        const result = []
        const stack = []
        let node = this.root
        while (node || stack.length) {
            while (node) {
                stack.push(node)
                node = node.left
            }
            node = stack.pop()!
            result.push(node.value)
            node = node.right
        }
    }

    postOrder() {
        const result = []
        const stack = []
        let node = this.root
        while (node || stack.length) {
            while (node) {
                result.push(node.value)
                stack.push(node)
                node = node.right
            }
            node = stack.pop()!
            node = node.left
        }
        return result
    }
    levelOrder() {
        const result = []
        const queue = [this.root]
        let node = queue.shift()
        while (node || queue.length) {
            result.push(node!.value)
            if (node?.left) {
                queue.push(node.left)
            }
            if (node?.right) {
                queue.push(node.right)
            }
            node = queue.shift()
        }
        return result
    }


    isEmpty() {
        return this.root === null
    }
}