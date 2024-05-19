enum Color {
    Red,
    Black,
}

class RBNode {
    value: number;
    left: RBNode | null;
    right: RBNode | null;
    parent: RBNode | null;
    color: Color;
    constructor(value: number, color: Color = Color.Red) {
        this.value = value;
        this.color = color;
        this.left = this.right = this.parent = null;
    }
}

export class RBTree {
    root: RBNode | null;
    private nil: RBNode = new RBNode(-1, Color.Black);
    constructor() {
        this.root = null;
    }
    insert(value: number) {
        const newNode = new RBNode(value);
        newNode.left = newNode.right = newNode.parent = this.nil;
        this.root = this.insertNode(this.root, newNode, this.nil);
        this.insertFixup(newNode);
    }

    private insertNode(
        node: RBNode | null,
        newNode: RBNode,
        parent: RBNode
    ): RBNode {
        if (node === null || node === this.nil) {
            newNode.parent = parent;
            return newNode;
        }
        if (newNode.value < node.value) {
            node.left = this.insertNode(node.left, newNode, node);
        } else if (newNode.value > node.value) {
            node.right = this.insertNode(node.right, newNode, node);
        }
        return node;
    }

    private insertFixup(node: RBNode) {
        // 当node.parent的颜色为黑色时或者node是根节点时（因为node为根节点是只有可能违反第二条性质，但在代码最后有将根节点标记为黑色）终止循环

        while (node !== this.root && node.parent!.color === Color.Red) {
            // 如果node的父节点是左子节点
            if (node.parent === node.parent!.parent!.left) {
                // 如果node的叔叔节点是红色
                const uncle = node.parent!.parent!.right;
                if (uncle?.color === Color.Red) {
                    // 将node的父节点和叔叔节点的颜色都改为黑色
                    node.parent!.color = Color.Black;
                    uncle.color = Color.Black;
                    // 将node的祖父节点的颜色改为红色
                    node.parent!.parent!.color = Color.Red;
                    // 将node的祖父节点设置为node
                    node = node.parent!.parent!;
                } else {
                    // 如果node的叔叔节点是黑色
                    if (node === node.parent!.right) {
                        node = node.parent!;
                        this.rotateLeft(node);
                    }

                    node.parent!.color = Color.Black;
                    node.parent!.parent!.color = Color.Red;
                    this.rotateRight(node.parent!.parent!);
                }
            } else {
                // 右子树
                const uncle = node.parent!.parent!.left;
                if (uncle?.color === Color.Red) {
                    node.parent!.color = Color.Black;
                    uncle.color = Color.Black;
                    node.parent!.parent!.color = Color.Red;
                    node = node.parent!.parent!;
                } else {
                    if (node === node.parent!.left) {
                        node = node.parent!;
                        this.rotateRight(node);
                    }
                    node.parent!.color = Color.Black;
                    node.parent!.parent!.color = Color.Red;
                    this.rotateLeft(node.parent!.parent!);
                }
            }
        }

        this.root!.color = Color.Black;
    }
    // 左旋转
    private rotateLeft(node: RBNode) {
        const right = node.right;
        node.right = right!.left;
        if (right!.left !== this.nil) {
            right!.left!.parent = node;
        }
        right!.parent = node.parent;
        if (node.parent === this.nil) {
            this.root = right;
        } else if (node === node.parent!.left) {
            node.parent!.left = right;
        } else {
            node.parent!.right = right;
        }
        right!.left = node;
        node.parent = right;
    }
    // 右旋转

    private rotateRight(node: RBNode) {
        const left = node.left;
        node.left = left!.right;
        if (left!.right !== this.nil) {
            left!.right!.parent = node;
        }
        left!.parent = node.parent;
        if (node.parent === this.nil) {
            this.root = left;
        } else if (node === node.parent!.left) {
            node.parent!.left = left;
        } else {
            node.parent!.right = left;
        }
        left!.right = node;
        node.parent = left;
    }

    find(value: number): RBNode | null {
        let node = this.root;
        while (node && node !== this.nil) {
            if (value < node.value) {
                node = node.left;
            } else if (value > node.value) {
                node = node.right;
            } else {
                return node;
            }
        }
        return null;
    }
    findMin(node: RBNode | null): RBNode | null {
        while (node && node !== this.nil) {
            node = node.left;
        }
        return node;
    }

    delete(value: number) {
        const deleteNode = this.find(value);
        if (!deleteNode) return;
        let color = deleteNode.color;
        let child;
        if (deleteNode.left===this.nil) {
            child = deleteNode.right;
            this.transplant(deleteNode, deleteNode.right!);
        } else if (deleteNode.right===this.nil) {
            child = deleteNode.left;
            this.transplant(deleteNode, deleteNode.left!);
        } else {
            const minNode = this.findMin(deleteNode.right)!;
            color = minNode.color;
            child = minNode.right;
            if (minNode.parent === deleteNode) {
                child!.parent = minNode;
            } else {
                this.transplant(minNode, minNode.right);
                minNode.right = deleteNode.right;
                minNode.right!.parent = minNode;
            }
            this.transplant(minNode, minNode.right);
            minNode.right = deleteNode.right;
            minNode.right!.parent = minNode;
            minNode.color = deleteNode.color;
        }

        if (color === Color.Black) {
            this.deleteFixup(child!);
        }
    }
    // 删除之后的rbtree fixup
    deleteFixup(node: RBNode) {
        while (node !== this.root && node.color === Color.Black) {
            if (node === node.parent!.left) {
                let brother = node.parent!.right!;
                if (brother.color === Color.Red) {
                    brother.color = Color.Black;
                    node.parent!.color = Color.Red;
                    this.rotateLeft(node.parent!);
                    brother = node.parent!.right!;
                }
                if (
                    brother.left!.color === Color.Black &&
                    brother.right!.color === Color.Black
                ) {
                    brother.color = Color.Red;
                    node = node.parent!;
                } else {
                    if (brother.right!.color === Color.Black) {
                        brother.left!.color = Color.Black;
                        brother.color = Color.Red;
                        this.rotateRight(brother);
                        brother = node.parent!.right!;
                    }
                    brother.color = node.parent!.color;
                    node.parent!.color = Color.Black;
                    brother.right!.color = Color.Black;

                    this.rotateLeft(node.parent!);
                    node = this.root!;
                }
            } else {
                let brother = node.parent!.left!;
                if (brother.color === Color.Red) {
                    brother.color = Color.Black;
                    node.parent!.color = Color.Red;
                    this.rotateRight(node.parent!);
                    brother = node.parent!.left!;
                }
                if (
                    brother.left!.color === Color.Black &&
                    brother.right!.color === Color.Black
                ) {
                    brother.color = Color.Red;
                    node = node.parent!;
                } else {
                    if (brother.left!.color === Color.Black) {
                        brother.right!.color = Color.Black;
                        brother.color = Color.Red;
                        this.rotateLeft(brother);
                        brother = node.parent!.left!;
                    }
                    brother.color = node.parent!.color;
                    node.parent!.color = Color.Black;
                    brother.left!.color = Color.Black;

                    this.rotateRight(node.parent!);
                    node = this.root!;
                }
            }
        }
        node.color = Color.Black;
    }
    // 将child 置换到 node 的位置
    transplant(node: RBNode, child: RBNode | null) {
        if (node.parent === this.nil) {
            this.root = child;
        } else if (node === node.parent!.left) {
            node.parent!.left = child;
        } else {
            node.parent!.right = child;
        }
        child!.parent = node.parent;
    }

    private isRed(node: RBNode | null): boolean {
        return node?.color === Color.Red;
    }
    private isBlack(node: RBNode | null): boolean {
        return node?.color === Color.Black;
    }
    private isNil(node: RBNode | null): boolean {
        return node === this.nil;
    }

    getBlackHeight(node: RBNode): number {
        if (!node)
            return 0; // 空节点黑色高度为0
        if (node.color == Color.Black)
            return 1 + this.getBlackHeight(node.left!); // 黑色节点加1，并递归左子树
        return this.getBlackHeight(node.left!);         // 红色节点不增加高度，直接递归左子树
    }
    /**
     * 检查这棵树是否符合红黑树的性质
     * @returns 
     */
    isRedBlackTree(): boolean {
        if (!this.root)
            return true

        // 根节点必须是黑色
        if (this.isRed(this.root))
            return false;

        return this.isRedBlackTreeHelper(this.root);
    }
    private isRedBlackTreeHelper(node: RBNode): boolean {
        if (!node)
            return true; // 空节点视为满足条件

        // 3. 检查红色节点的孩子是否为黑色
        if (this.isRed(node)) {
            if (this.isRed(node.left) || this.isRed(node.right)) {
                return false;
            }
        }

        // 4. 递归检查左子树和右子树
        if (!this.isRedBlackTreeHelper(node.left!))
            return false;
        if (!this.isRedBlackTreeHelper(node.right!))
            return false;

        // 5. 检查从当前节点到其所有叶子节点的简单路径上黑色节点的数量是否相同
        // 这通常需要一个额外的函数来计算黑色高度，并比较左右子树的黑色高度
        const leftBlackHeight = this.getBlackHeight(node.left!);
        const rightBlackHeight = this.getBlackHeight(node.right!);
        if (leftBlackHeight != rightBlackHeight)
            return false;

        // 所有检查都通过，返回true
        return true;
    }
}
