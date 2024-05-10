package bst

import (
	"container/list"
	"errors"
	"fmt"
)

type BSTNode struct {
	Left  *BSTNode
	Right *BSTNode
	Data  int
}

type BSTree struct {
	Root *BSTNode
}

func NewBST() *BSTree {
	return &BSTree{Root: nil}
}

func (bst *BSTree) Insert(data int) {
	bst.Root = bst.insert_internal(bst.Root, data)
}
func (bst *BSTree) insert_internal(current *BSTNode, data int) *BSTNode {
	if current == nil {
		return &BSTNode{Data: data}
	}
	if current.Data > data {
		current.Left = bst.insert_internal(current.Left, data)
	} else if current.Data < data {
		current.Right = bst.insert_internal(current.Right, data)
	}
	return current
}

// Delete
func (bst *BSTree) Delete(data int) {
	bst.delete_internal(bst.Root, data)
}

func (bst *BSTree) delete_internal(current *BSTNode, data int) *BSTNode {

	if current == nil {
		return nil
	}

	if data < current.Data {
		current.Left = bst.delete_internal(current.Left, data)
	} else if data > current.Data {
		current.Right = bst.delete_internal(current.Right, data)
	} else {
		if current.Left == nil && current.Right == nil {
			current = nil
		} else if current.Left == nil {
			current = current.Right
		} else if current.Right == nil {
			current = current.Left
		} else {

			temp := current.Right
			for temp.Left != nil {
				temp = temp.Left
			}
			current.Data = temp.Data
			current.Right = bst.delete_internal(current.Right, temp.Data)
		}
	}
	return current

}

// 查找指定值
func (bst *BSTree) Search(data int) bool {
	current := bst.Root
	for current != nil {
		if current.Data == data {
			return true
		} else if current.Data > data {
			current = current.Left
		} else {
			current = current.Right
		}
	}
	return false
}

// 最小值
func (bst *BSTree) FindMin() (int, error) {
	if bst.Root == nil {
		return -1, errors.New("tree is empty")
	}

	current := bst.Root
	for current.Left != nil {
		current = current.Left
	}
	return current.Data, nil
}

// 查找最大值
func (bst *BSTree) FindMax() (int, error) {
	if bst.Root == nil {
		return -1, fmt.Errorf("tree is empty")
	}
	current := bst.Root
	for current.Right != nil {
		current = current.Right
	}
	return current.Data, nil
}

// in-order traversal	中序遍历
func (bst *BSTree) InOrderTraversal(current *BSTNode) {
	if current != nil {
		bst.InOrderTraversal(current.Left)
		fmt.Print(current.Data, ",")
		bst.InOrderTraversal(current.Right)
	}
}

// pre order traversal 前序遍历
func (bst *BSTree) PreOrderTraversal(current *BSTNode) {
	if current != nil {
		fmt.Print(current.Data, ",")
		bst.PreOrderTraversal(current.Left)
		bst.PreOrderTraversal(current.Right)
	}
}

// post order traversal   left -> right -> root  后续遍历
func (bst *BSTree) PostOrderTraversal(current *BSTNode) {
	if current != nil {
		bst.PostOrderTraversal(current.Left)
		bst.PostOrderTraversal(current.Right)
		fmt.Print(current.Data, ",")
	}
}

/**
*  level order traversal
* 层序遍历
 */
func (bst *BSTree) LevelOrderTraversal() {
	l := list.New()
	l.PushBack(bst.Root)
	for l.Len() > 0 {
		e := l.Front()
		l.Remove(e)
		node := e.Value.(*BSTNode)
		fmt.Print(node.Data, ",")
		if node.Left != nil {
			l.PushBack(node.Left)
		}
		if node.Right != nil {
			l.PushBack(node.Right)
		}
	}
}

func (bst *BSTree) LevelOrderToList() []int {
	arr := make([]int, 0)
	l := list.New()
	l.PushBack(bst.Root)
	for l.Len() > 0 {
		e := l.Front()
		l.Remove(e)
		node := e.Value.(*BSTNode)
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
