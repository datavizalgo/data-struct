package rbtree

import (
	"fmt"
)

type NodeColor int

const (
	Red NodeColor = iota
	Black
)

type RBNode struct {
	Value  int
	Left   *RBNode
	Parent *RBNode
	Right  *RBNode
	Color  NodeColor
}

type RBTree struct {
	root *RBNode
	nil  *RBNode
}

func NewRBTree() *RBTree {
	nilNode := &RBNode{
		Value: -1,
		Color: Black,
	}
	return &RBTree{
		nil: nilNode,
	}
}

func (t *RBTree) Insert(value int) {
	node := &RBNode{
		Value:  value,
		Left:   t.nil,
		Parent: t.nil,
		Right:  t.nil,
		Color:  Red,
	}
	t.root = t.insert(t.root, node, t.nil)
	t.insertFixup(node)
}

func (t *RBTree) insert(node, newNode, parent *RBNode) *RBNode {
	if node == t.nil || node == nil {
		newNode.Parent = parent
		return newNode
	}
	if node.Value < newNode.Value {
		node.Right = t.insert(node.Right, newNode, node)
	} else if node.Value > newNode.Value {
		node.Left = t.insert(node.Left, newNode, node)
	}
	return node
}

// 左旋转
func (t *RBTree) rotateLeft(node *RBNode) {
	right := node.Right
	node.Right = right.Left

	if right.Left != t.nil {
		right.Left.Parent = node
	}
	right.Parent = node.Parent
	if node.Parent == t.nil {
		t.root = right
	} else if node == node.Parent.Left {
		node.Parent.Left = right
	} else {
		node.Parent.Right = right
	}

	right.Left = node
	node.Parent = right
}

// 右旋

func (t *RBTree) rotateRight(node *RBNode) {
	left := node.Left
	node.Left = left.Right

	if left.Right != t.nil {
		left.Right.Parent = node
	}
	left.Parent = node.Parent
	if node.Parent == t.nil {
		t.root = left
	} else if node == node.Parent.Left {
		node.Parent.Left = left
	} else {
		node.Parent.Right = left
	}

	left.Right = node
	node.Parent = left
}

func (t *RBTree) insertFixup(node *RBNode) {
	// 当node->parent的颜色为黑色时或者node是根节点时（因为node为根节点是只有可能违反第二条性质，但在代码最后有将根节点标记为黑色）终止循环

	for node != t.root && node.Parent.Color == Red {
		// node的父节点是其父节点的左孩子
		if node.Parent == node.Parent.Parent.Left {
			// node的叔叔节点
			uncle := node.Parent.Parent.Right
			// 如果叔叔节点颜色为红色
			if uncle != nil && uncle.Color == Red {
				// 将其父节点和叔叔节点的颜色都变为黑色
				node.Parent.Color = Black
				uncle.Color = Black
				// 将其父节点的父节点的颜色变为红色
				node.Parent.Parent.Color = Red
				// 将node指向其父节点的父节点
				node = node.Parent.Parent
			} else {
				// 如果node是其父节点的右孩子
				if node == node.Parent.Right {

					node = node.Parent
					t.rotateLeft(node)
				}

				node.Parent.Color = Black
				node.Parent.Parent.Color = Red
				t.rotateRight(node.Parent.Parent)
			}
		} else {
			// node的父节点是其父节点的右孩子
			// node的叔叔节点
			uncle := node.Parent.Parent.Left
			// 如果叔叔节点颜色为红色
			if uncle != nil && uncle.Color == Red {
				// 将其父节点和叔叔节点的颜色都变为黑色
				node.Parent.Color = Black
				uncle.Color = Black
				// 将其父节点的父节点的颜色变为红色
				node.Parent.Parent.Color = Red
				// 将node指向其父节点的父节点
				node = node.Parent.Parent
			} else {
				// 如果node是其父节点的左孩子
				if node == node.Parent.Left {
					node = node.Parent
					t.rotateRight(node)
				}
				node.Parent.Color = Black
				node.Parent.Parent.Color = Red
				t.rotateLeft(node.Parent.Parent)
			}
		}
	}
	t.root.Color = Black
}

func (t *RBTree) Search(value int) *RBNode {
	return t.search(t.root, value)
}
func (t *RBTree) search(node *RBNode, value int) *RBNode {
	if node == t.nil || node == nil {
		return nil
	}
	if node.Value == value {
		return node
	}
	if node.Value < value {
		return t.search(node.Right, value)
	}
	return t.search(node.Left, value)
}

func (t *RBTree) Delete(value int) {
	node := t.Search(value)
	if node == nil {
		return
	}
	deleteColor := node.Color
	var child *RBNode

	if node.Left == t.nil {
		child = node.Right
		t.transplant(node, node.Right)
	} else if node.Right == t.nil {
		child = node.Left
		t.transplant(node, node.Left)
	} else {
		minNode := t.findMinNode(node.Right)
		deleteColor = minNode.Color
		child = minNode.Right

		if minNode.Parent == node {
			child.Parent = minNode
		} else {
			t.transplant(minNode, minNode.Right)
			minNode.Right = node.Right
			minNode.Right.Parent = minNode
		}
		t.transplant(node, minNode)
		minNode.Left = node.Left
		minNode.Left.Parent = minNode
		minNode.Color = node.Color
	}
	if deleteColor == Black {
		t.deleteFixup(child)
	}
}

// 将 child 置换到node的位置
func (t *RBTree) transplant(node, child *RBNode) {
	if node.Parent == t.nil {
		t.root = child
	} else if node == node.Parent.Left {
		node.Parent.Left = child
	} else {
		node.Parent.Right = child
	}
	child.Parent = node.Parent
}

func (t *RBTree) deleteFixup(node *RBNode) {
	for node != t.root && node.Color == Black {
		if node == node.Parent.Left {
			// node的兄弟节点
			sibling := node.Parent.Right
			// 如果兄弟节点颜色为红色
			if sibling.Color == Red {
				// 将兄弟节点颜色变为黑色
				sibling.Color = Black
				// 将兄弟节点的父节点的颜色变为红色
				node.Parent.Color = Red
				// 左旋
				t.rotateLeft(node.Parent)
				// 将兄弟节点设置为node的兄弟节点
				sibling = node.Parent.Right
			}
			// 如果兄弟节点颜色为黑色
			if sibling.Left.Color == Black && sibling.Right.Color == Black {
				sibling.Color = Red
				node = node.Parent
			} else {

				if sibling.Right.Color == Black {
					sibling.Left.Color = Black
					sibling.Color = Red
					t.rotateRight(sibling)
					sibling = node.Parent.Right
				}
				sibling.Color = node.Parent.Color
				node.Parent.Color = Black
				sibling.Right.Color = Black
				t.rotateLeft(node.Parent)

				node = t.root
			}
		} else {
			//
			sibling := node.Parent.Left
			if sibling.Color == Red {
				sibling.Color = Black
				node.Parent.Color = Red
				t.rotateRight(node.Parent)
				sibling = node.Parent.Left
			}
			if sibling.Right.Color == Black && sibling.Left.Color == Black {
				sibling.Color = Red
				node = node.Parent
			} else {
				if sibling.Left.Color == Black {
					sibling.Right.Color = Black
					sibling.Color = Red
					t.rotateLeft(sibling)
					sibling = node.Parent.Left
				}
				sibling.Color = node.Parent.Color
				node.Parent.Color = Black
				sibling.Left.Color = Black
				t.rotateRight(node.Parent)
				node = t.root
			}
		}

	}
	node.Color = Black

}

func (t *RBTree) findMinNode(node *RBNode) *RBNode {
	if node == t.nil {
		return nil
	}
	for node.Left != t.nil {
		node = node.Left
	}
	return node
}

func (t *RBTree) Print() {
	t.print(t.root, 0)
}
func (t *RBTree) print(node *RBNode, depth int) {
	if node == t.nil {
		return
	}
	t.print(node.Right, depth+1)
	for i := 0; i < depth; i++ {
		fmt.Print("   ")
	}
	if node.Color == Red {
		fmt.Printf("%d(R)\n", node.Value)
	} else {
		fmt.Printf("%d(B)\n", node.Value)
	}
	t.print(node.Left, depth+1)
}

func (t *RBTree) IsRedBlackTree() bool {
	if t.root == nil {
		return true
	}
	return t.isRBTree(t.root)
}

func (t *RBTree) isRBTree(node *RBNode) bool {
	if node == t.nil {
		return true
	}
	if node.Color == Red && (node.Left != nil && node.Left.Color == Red || node.Right != nil && node.Right.Color == Red) {
		return false
	}

	// 4. 递归检查左子树和右子树
	if !t.isRBTree(node.Left) {

		return false
	}
	if !t.isRBTree(node.Right) {

		return false
	}

	leftHeight := t.getBlackHeight(node.Left)
	rightHeight := t.getBlackHeight(node.Right)
	return leftHeight == rightHeight
}

func (t *RBTree) getBlackHeight(node *RBNode) int {
	if node == nil {
		return 0
	}

	if node.Color == Black {
		return 1 + t.getBlackHeight(node.Left)
	}

	return t.getBlackHeight(node.Left)
}

func (t *RBTree) GetRootValue() int {
	if t.root == nil {
		return -1
	}
	return t.root.Value
}
