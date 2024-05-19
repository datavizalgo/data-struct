package rbtree

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestRBTree(t *testing.T) {
	tree := NewRBTree()
	tree.Insert(1)
	assert.Equal(t, tree.GetRootValue(), 1)
}

func TestRBTree_Insert(t *testing.T) {
	tree := NewRBTree()
	for i := 1; i <= 10; i++ {
		tree.Insert(i)
	}
	assert.Equal(t, tree.GetRootValue(), 4)
	assert.Equal(t, tree.IsRedBlackTree(), true)
}

func TestRBTree_Insert_1(t *testing.T) {
	tree := NewRBTree()

	for i := 100; i > 0; i -= 10 {
		tree.Insert(i)
	}
	assert.Equal(t, tree.IsRedBlackTree(), true)
}

func TestRBTree_Insert_2(t *testing.T) {
	tree := NewRBTree()

	for i := 100; i > 0; i -= 10 {
		tree.Insert(i)
	}
	assert.Equal(t, tree.IsRedBlackTree(), true)

	tree.Delete(50)

	assert.Equal(t, tree.IsRedBlackTree(), true)
}
