package avl

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestAVLTree(t *testing.T) {
	tree := NewAvlTree()
	for i := 0; i < 10; i++ {
		tree.root = tree.Insert(tree.root, i)
	}
	if len(tree.InOrderArray()) == 0 {
		t.Fatal("tree is empty")
	}
	assert.DeepEqual(t, tree.InOrderArray(), []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9})
}

func TestAVLTreeDelete(t *testing.T) {
	tree := NewAvlTree()
	for i := 0; i <= 150; i += 10 {
		tree.root = tree.Insert(tree.root, i)
	}

	if len(tree.InOrderArray()) <= 0 {
		t.Fatal("tree is empty")
	}
	assert.DeepEqual(t, tree.InOrderArray(), []int{0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150})

	tree.root = tree.Delete(tree.root, 50)

	assert.DeepEqual(t, tree.InOrderArray(), []int{0, 10, 20, 30, 40, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150})

	tree.root = tree.Delete(tree.root, 0)

	tree.root = tree.Delete(tree.root, 90)

	tree.root = tree.Delete(tree.root, 150)

	assert.DeepEqual(t, tree.InOrderArray(), []int{10, 20, 30, 40, 60, 70, 80, 100, 110, 120, 130, 140})
}

func TestAVLTreeFindMin(t *testing.T) {
	tree := NewAvlTree()
	for i := 0; i <= 150; i += 10 {
		tree.root = tree.Insert(tree.root, i)
	}

	if len(tree.InOrderArray()) <= 0 {
		t.Fatal("tree is empty")
	}
	assert.Equal(t, tree.FindMin(tree.root).Data, 0)
}

func TestAVLTreeFindMax(t *testing.T) {
	tree := NewAvlTree()
	for i := 0; i <= 150; i += 10 {
		tree.root = tree.Insert(tree.root, i)
	}
	if len(tree.InOrderArray()) <= 0 {
		t.Fatal("tree is empty")
	}
	assert.Equal(t, tree.FindMax(tree.root).Data, 150)
}

func TestAvlTreeLeftRotate(t *testing.T) {
	tree := NewAvlTree()

	tree.root = tree.Insert(tree.root, 10)
	tree.root = tree.Insert(tree.root, 20)
	tree.root = tree.Insert(tree.root, 30)

	assert.DeepEqual(t, tree.InOrderArray(), []int{10, 20, 30})
	assert.DeepEqual(t, tree.LevelOrderArray(), []int{20, 10, 30})

	if tree.root.height != 1 {
		t.Fatal("tree height is  {}", tree.root.height)
	}
}

func TestAvlTreeRightRotate(t *testing.T) {
	tree := NewAvlTree()
	tree.root = tree.Insert(tree.root, 30)
	tree.root = tree.Insert(tree.root, 20)
	tree.root = tree.Insert(tree.root, 10)

	assert.DeepEqual(t, tree.InOrderArray(), []int{10, 20, 30})
	assert.DeepEqual(t, tree.LevelOrderArray(), []int{20, 10, 30})
}

func TestAvlTreeLeftRightRotate(t *testing.T) {
	tree := NewAvlTree()
	tree.root = tree.Insert(tree.root, 30)
	tree.root = tree.Insert(tree.root, 10)
	tree.root = tree.Insert(tree.root, 20)
	assert.DeepEqual(t, tree.InOrderArray(), []int{10, 20, 30})
	assert.DeepEqual(t, tree.LevelOrderArray(), []int{20, 10, 30})
}

func TestAvlTreeRightLeftRotate(t *testing.T) {
	tree := NewAvlTree()
	tree.root = tree.Insert(tree.root, 10)
	tree.root = tree.Insert(tree.root, 30)
	tree.root = tree.Insert(tree.root, 20)

	assert.DeepEqual(t, tree.InOrderArray(), []int{10, 20, 30})
	assert.DeepEqual(t, tree.LevelOrderArray(), []int{20, 10, 30})
}
