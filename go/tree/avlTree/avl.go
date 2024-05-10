package avl

import "container/list"

type AVLNode struct {
	height int
	Data   int
	Left   *AVLNode
	Right  *AVLNode
}

type AVLTree struct {
	root *AVLNode
}

/*
 * @param data int
 * @return *AVLNode
 */
func NewAVLNode(data int) *AVLNode {
	return &AVLNode{
		height: 0,
		Data:   data,
		Left:   nil,
		Right:  nil,
	}
}

/*
 * @param root *AVLNode
 * @return int
 */
func GetHeight(node *AVLNode) int {
	if node == nil {
		return -1
	}
	return node.height
}

func NewAvlTree() *AVLTree {
	return &AVLTree{
		root: nil,
	}
}

func getMaxHeight(root *AVLNode) int {
	if root == nil {
		return 0
	}
	return max(GetHeight(root.Left), GetHeight(root.Right))
}

//旋转操作

// 左旋转
func leftRotate(node *AVLNode) *AVLNode {
	if node == nil {
		return nil
	}
	newRoot := node.Right
	node.Right = newRoot.Left
	newRoot.Left = node
	node.height = getMaxHeight(node)
	newRoot.height = getMaxHeight(newRoot)
	return newRoot
}

// 右旋转
func rightRotate(node *AVLNode) *AVLNode {
	if node == nil {
		return nil
	}
	newRoot := node.Left
	node.Left = newRoot.Right
	newRoot.Right = node
	node.height = getMaxHeight(node)
	newRoot.height = getMaxHeight(newRoot)
	return newRoot
}

// 左右旋转
func leftRightRotate(node *AVLNode) *AVLNode {
	if node == nil {
		return nil
	}
	node.Left = leftRotate(node.Left)
	return rightRotate(node)
}

// 右左旋转
func rightLeftRotate(node *AVLNode) *AVLNode {
	if node == nil {
		return nil
	}
	node.Right = rightRotate(node.Right)
	return leftRotate(node)
}

// 再平衡函数
func reBalance(node *AVLNode) *AVLNode {
	if node == nil {
		return nil
	}
	if GetHeight(node.Left)-GetHeight(node.Right) == 2 {
		if GetHeight(node.Left.Left)-GetHeight(node.Left.Right) == 1 {
			node = rightRotate(node)
		} else {
			node = leftRightRotate(node)
		}
	} else if GetHeight(node.Left)-GetHeight(node.Right) == -2 {
		if GetHeight(node.Right.Right)-GetHeight(node.Right.Left) == 1 {
			node = leftRotate(node)
		} else {
			node = rightLeftRotate(node)
		}
	}
	return node
}

// 插入
func (t *AVLTree) Insert(node *AVLNode, data int) *AVLNode {
	if node == nil {
		return NewAVLNode(data)
	}
	if data < node.Data {
		node.Left = t.Insert(node.Left, data)
	} else if data > node.Data {
		node.Right = t.Insert(node.Right, data)
	}
	node = reBalance(node)
	node.height = getMaxHeight(node) + 1
	return node
}

func (t *AVLTree) Delete(node *AVLNode, data int) *AVLNode {
	if node == nil {
		return nil
	}
	if data < node.Data {
		node.Left = t.Delete(node.Left, data)
	} else if data > node.Data {
		node.Right = t.Delete(node.Right, data)
	} else {
		if node.Left == nil {
			return node.Right
		} else if node.Right == nil {
			return node.Left
		} else {
			minNode := t.FindMin(node.Right)
			node.Data = minNode.Data
			node.Right = t.Delete(node.Right, minNode.Data)
		}
	}
	node = reBalance(node)
	node.height = getMaxHeight(node)
	return node
}

func (t *AVLTree) FindMin(node *AVLNode) *AVLNode {
	if node == nil {
		return nil
	}
	if node.Left == nil {
		return node
	}
	return t.FindMin(node.Left)
}
func (t *AVLTree) FindMax(node *AVLNode) *AVLNode {
	if node == nil {
		return nil
	}
	if node.Right == nil {
		return node
	}
	return t.FindMax(node.Right)
}

func (t *AVLTree) InOrderArray() []int {
	arr := make([]int, 0)
	if t.root == nil {
		return arr
	}
	return inOrder(t.root, arr)
}

func inOrder(node *AVLNode, arr []int) []int {
	if node == nil {
		return arr
	}
	return append(append(inOrder(node.Left, arr), node.Data), inOrder(node.Right, arr)...)
}

func (t *AVLTree) LevelOrderArray() []int {
	return levelOrder(t.root)
}

func levelOrder(node *AVLNode) []int {
	arr := make([]int, 0)
	if node == nil {
		return arr
	}
	l := list.New()
	l.PushBack(node)
	for l.Len() > 0 {
		e := l.Front()
		l.Remove(e)
		node = e.Value.(*AVLNode)
		arr = append(arr, node.Data)
		if node.Left != nil {
			l.PushBack(node.Left)
		}
		if node.Right != nil {
			l.PushBack(node.Right)
		}
	}
	return arr
}
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
