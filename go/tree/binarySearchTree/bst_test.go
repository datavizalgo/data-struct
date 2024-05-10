package bst

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestBSTree(t *testing.T) {
	bst := NewBST()
	bst.Insert(30)
	bst.Insert(20)
	bst.Insert(10)
	bst.Insert(40)
	bst.Insert(50)
	bst.Insert(60)
	bst.Insert(45)
	bst.Insert(35)
	bst.Insert(25)
	bst.Insert(15)
	bst.Insert(5)
	t.Log("LevelOrderTraversal")
	bst.PreOrderTraversal(bst.Root)
	t.Log("InOrderTraversal")
	bst.InOrderTraversal(bst.Root)

	bst.PostOrderTraversal(bst.Root)

	bst.LevelOrderTraversal()

	d, e := bst.FindMax()
	if e != nil {
		t.Fatal("find max error: ", e.Error())
	} else {
		assert.Equal(t, d, 60)
	}

	assert.DeepEqual(t, bst.LevelOrderToList(), []int{30, 20, 40, 10, 25, 35, 50, 5, 15, 45, 60})

	assert.Equal(t, bst.Search(5), true)
	assert.Equal(t, bst.Search(100), false)
	assert.Equal(t, bst.Search(60), true)
	assert.Equal(t, bst.Search(30), true)

	bst.Delete(5)
	assert.DeepEqual(t, bst.LevelOrderToList(), []int{30, 20, 40, 10, 25, 35, 50, 15, 45, 60})

	bst.Delete(20)
	assert.DeepEqual(t, bst.LevelOrderToList(), []int{30, 25, 40, 10, 35, 50, 15, 45, 60})
}
