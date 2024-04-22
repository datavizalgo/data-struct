package CircularLinkedList_test

import (
	"testing"

	linkedlist "example.com/go/go/linkedlist/CircularLinkedList"
	"gotest.tools/v3/assert"
)

func TestCircularLinkedListIsEmpty(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	assert.Equal(t, l.IsEmpty(), true)
}

func TestCircularLinkedListSize(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	l.Append(1)
	l.Append(2)
	l.Append(3)
	assert.Equal(t, l.Length, 3)
}
func TestCircularLinkedListPrepend(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	l.Prepend(1)
	assert.Equal(t, l.Head.Value, 1)
	l.Prepend(2)
	assert.Equal(t, l.Head.Value, 2)
	assert.Equal(t, l.IsCircular(), true)
	assert.DeepEqual(t, l.ToArray(), []int{2, 1})

	l.Prepend(3)
	l.Prepend(4)

	assert.DeepEqual(t, l.ToArray(), []int{4, 3, 2, 1})
	assert.DeepEqual(t, l.ReverseToArray(), []int{1, 2, 3, 4})
	assert.Equal(t, l.IsCircular(), true)
}
func TestCircularLinkedListAppend(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	l.Append(1)
	l.Append(2)
	l.Append(3)
	l.Append(4)
	assert.Equal(t, l.Length, 4)
	assert.Equal(t, l.IsCircular(), true)
	assert.DeepEqual(t, l.ToArray(), []int{1, 2, 3, 4})
	assert.DeepEqual(t, l.ReverseToArray(), []int{4, 3, 2, 1})
}

func TestCircularLinkedListInsertAtStart(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	l.InsertAt(1, 0)
	l.InsertAt(2, 0)
	l.InsertAt(3, 0)
	assert.Equal(t, l.Length, 3)
	assert.Equal(t, l.IsCircular(), true)
	assert.DeepEqual(t, l.ToArray(), []int{3, 2, 1})
	assert.DeepEqual(t, l.ReverseToArray(), []int{1, 2, 3})
}

func TestCircularLinkedListInsertAtEnd(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	l.InsertAt(1, 0)
	l.Append(2)
	l.Append(3)
	l.InsertAt(4, 3)
	l.InsertAt(5, 4)
	assert.Equal(t, l.Length, 5)
	assert.Equal(t, l.IsCircular(), true)
	assert.DeepEqual(t, l.ToArray(), []int{1, 2, 3, 4, 5})
	assert.DeepEqual(t, l.ReverseToArray(), []int{5, 4, 3, 2, 1})
}

func TestCircularLinkedListInsertAtMiddle(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	l.Append(1)
	l.Append(2)
	l.Append(3)
	l.Append(4)

	assert.Equal(t, l.Length, 4)
	l.InsertAt(5, 2)
	assert.Equal(t, l.Length, 5)
	assert.DeepEqual(t, l.ToArray(), []int{1, 2, 5, 3, 4})
	assert.DeepEqual(t, l.ReverseToArray(), []int{4, 3, 5, 2, 1})
	assert.Equal(t, l.IsCircular(), true)

	l.InsertAt(6, 3)
	assert.Equal(t, l.Length, 6)
	assert.DeepEqual(t, l.ToArray(), []int{1, 2, 5, 6, 3, 4})
	assert.DeepEqual(t, l.ReverseToArray(), []int{4, 3, 6, 5, 2, 1})
	assert.Equal(t, l.IsCircular(), true)
}

func TestCircularLinkedListDeleteAt(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	l.Append(1)
	l.Append(2)
	l.Append(3)
	l.Append(4)
	assert.Equal(t, l.Length, 4)
	assert.Equal(t, l.IsCircular(), true)
	assert.DeepEqual(t, l.ToArray(), []int{1, 2, 3, 4})

	l.DeleteAt(0)

	assert.Equal(t, l.Length, 3)
	assert.DeepEqual(t, l.ToArray(), []int{2, 3, 4})
	assert.DeepEqual(t, l.ReverseToArray(), []int{4, 3, 2})
	assert.Equal(t, l.IsCircular(), true)

	l.DeleteAt(2)
	assert.Equal(t, l.Length, 2)
	assert.DeepEqual(t, l.ToArray(), []int{2, 3})
	assert.DeepEqual(t, l.ReverseToArray(), []int{3, 2})
	assert.Equal(t, l.IsCircular(), true)

	l.Append(4)
	l.Append(5)
	l.Append(6)
	l.Append(7)
	assert.Equal(t, l.Length, 6)

	l.DeleteAt(5)
	assert.Equal(t, l.Length, 5)
	assert.DeepEqual(t, l.ToArray(), []int{2, 3, 4, 5, 6})
	assert.DeepEqual(t, l.ReverseToArray(), []int{6, 5, 4, 3, 2})
	assert.Equal(t, l.IsCircular(), true)

	l.DeleteAt(0)
	assert.Equal(t, l.Length, 4)
	assert.DeepEqual(t, l.ToArray(), []int{3, 4, 5, 6})
	assert.DeepEqual(t, l.ReverseToArray(), []int{6, 5, 4, 3})
	assert.Equal(t, l.IsCircular(), true)

	l.DeleteAt(3)
	assert.Equal(t, l.Length, 3)
	assert.DeepEqual(t, l.ToArray(), []int{3, 4, 5})
	assert.DeepEqual(t, l.ReverseToArray(), []int{5, 4, 3})
	assert.Equal(t, l.IsCircular(), true)

	l.DeleteAt(1)
	assert.Equal(t, l.Length, 2)
	assert.DeepEqual(t, l.ToArray(), []int{3, 5})
	assert.DeepEqual(t, l.ReverseToArray(), []int{5, 3})

	assert.Equal(t, l.IsCircular(), true)

	assert.Error(t, l.DeleteAt(2), "index out of range")
	assert.Error(t, l.DeleteAt(-1), "index out of range")
	assert.Error(t, l.DeleteAt(3), "index out of range")
	l.DeleteAt(0)
	l.DeleteAt(0)

	assert.Equal(t, l.Length, 0)
	assert.Equal(t, l.IsCircular(), false)
}

func TestCircularLinkedListError(t *testing.T) {
	l := linkedlist.NewCircularLinkedList()
	assert.Error(t, l.DeleteAt(0), "index out of range")
	assert.Error(t, l.InsertAt(1, 1), "index out of range")
	assert.Error(t, l.InsertAt(1, -1), "index out of range")
}
