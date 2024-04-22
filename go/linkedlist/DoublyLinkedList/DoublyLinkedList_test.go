package doublylinkedlist_test

import (
	"testing"

	linkedlist "example.com/go/go/linkedlist/DoublyLinkedList"

	"gotest.tools/v3/assert"
)

func TestDoublyLinkedListIsEmpty(t *testing.T) {
	d := linkedlist.NewDoublylinkedlist()
	assert.Equal(t, d.IsEmpty(), true)

}

func TestDoublyLinkedListAppend(t *testing.T) {
	d := linkedlist.NewDoublylinkedlist()
	d.Append(1)
	d.Append(2)
	d.Append(3)
	assert.Equal(t, d.Size(), 3)
	assert.DeepEqual(t, d.ToArray(), []int{1, 2, 3})
	assert.DeepEqual(t, d.ReverseToArray(), []int{3, 2, 1})
}

func TestDoublyLinkedListPrepend(t *testing.T) {
	d := linkedlist.NewDoublylinkedlist()
	d.Prepend(1)
	d.Prepend(2)
	d.Prepend(3)
	d.Prepend(4)
	assert.Equal(t, d.Size(), 4)
	assert.DeepEqual(t, d.ToArray(), []int{4, 3, 2, 1})
	assert.DeepEqual(t, d.ReverseToArray(), []int{1, 2, 3, 4})
}

func TestDoublyLinkedListResverse(t *testing.T) {
	d := linkedlist.NewDoublylinkedlist()
	d.Append(1)
	d.Append(2)
	d.Append(3)
	d.Append(4)
	assert.DeepEqual(t, d.ToArray(), []int{1, 2, 3, 4})
	d.Reverse()
	assert.DeepEqual(t, d.ToArray(), []int{4, 3, 2, 1})

}

func TestDoublyLinkedListInsertAt(t *testing.T) {
	d := linkedlist.NewDoublylinkedlist()
	d.Append(1)
	d.Append(2)
	d.Append(3)
	d.InsertAt(4, 1)
	assert.DeepEqual(t, d.ToArray(), []int{1, 4, 2, 3})
	assert.DeepEqual(t, d.ReverseToArray(), []int{3, 2, 4, 1})
	d.InsertAt(5, 0)
	assert.DeepEqual(t, d.ToArray(), []int{5, 1, 4, 2, 3})
	assert.DeepEqual(t, d.ReverseToArray(), []int{3, 2, 4, 1, 5})

	d.InsertAt(6, 5)
	assert.Equal(t, d.Size(), 6)
	assert.DeepEqual(t, d.ToArray(), []int{5, 1, 4, 2, 3, 6})
	assert.DeepEqual(t, d.ReverseToArray(), []int{6, 3, 2, 4, 1, 5})
}

func TestDoublyLinkedListDeleteAt(t *testing.T) {
	d := linkedlist.NewDoublylinkedlist()
	d.Append(1)
	d.Append(2)
	d.Append(3)
	d.Append(4)
	d.Append(5)
	d.Append(6)
	assert.DeepEqual(t, d.ToArray(), []int{1, 2, 3, 4, 5, 6})
	d.DeleteAt(0)
	assert.Equal(t, d.Size(), 5)
	assert.DeepEqual(t, d.ToArray(), []int{2, 3, 4, 5, 6})
	assert.DeepEqual(t, d.ReverseToArray(), []int{6, 5, 4, 3, 2})
	d.DeleteAt(4)

	assert.Equal(t, d.Size(), 4)
	assert.DeepEqual(t, d.ToArray(), []int{2, 3, 4, 5})
	assert.DeepEqual(t, d.ReverseToArray(), []int{5, 4, 3, 2})
	d.DeleteAt(2)
	assert.Equal(t, d.Size(), 3)
	assert.DeepEqual(t, d.ToArray(), []int{2, 3, 5})
	assert.DeepEqual(t, d.ReverseToArray(), []int{5, 3, 2})
	d.DeleteAt(2)
	assert.Equal(t, d.Size(), 2)
	assert.DeepEqual(t, d.ToArray(), []int{2, 3})
	assert.DeepEqual(t, d.ReverseToArray(), []int{3, 2})

}

func TestIndexBoundsError(t *testing.T) {
	d := linkedlist.NewDoublylinkedlist()
	assert.Assert(t, d.IsEmpty())
	d.InsertAt(1, 2)
}
