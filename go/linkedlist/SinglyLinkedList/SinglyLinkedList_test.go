package singlylinkedlist_test

import (
	"testing"

	singlylinkedlist "example.com/go/go/linkedlist/SinglyLinkedList"
	"gotest.tools/v3/assert"
)

func TestSinglyLinkedList(t *testing.T) {
	list := singlylinkedlist.Singlylinkedlist{Length: 0, Head: nil}
	list.Append(1)
	list.Append(2)
	list.Append(3)
	list.Append(4)
	list.Append(5)
	assert.Equal(t, list.Length, 5)
	assert.DeepEqual(t, list.ToArray(), []int{1, 2, 3, 4, 5})
}

func TestSinglyLinkedListPrepend(t *testing.T) {
	list := singlylinkedlist.Singlylinkedlist{Length: 0, Head: nil}
	list.Prepend(1)
	list.Prepend(2)
	list.Prepend(3)
	list.Prepend(4)
	list.Prepend(5)
	assert.Equal(t, list.Length, 5)
	assert.DeepEqual(t, list.ToArray(), []int{5, 4, 3, 2, 1})
}

func TestSinglyLinkedListInsertAt(t *testing.T) {
	list := singlylinkedlist.Singlylinkedlist{Length: 0, Head: nil}
	list.InsertAt(1, 0)
	list.InsertAt(2, 1)
	list.InsertAt(3, 2)
	list.InsertAt(4, 3)
	list.InsertAt(5, 4)
	assert.Equal(t, list.Length, 5)
	assert.DeepEqual(t, list.ToArray(), []int{1, 2, 3, 4, 5})
}

func TestSinglyLinkedListRemove(t *testing.T) {
	list := singlylinkedlist.Singlylinkedlist{Length: 0, Head: nil}
	list.Append(1)
	list.Append(2)
	list.InsertAt(3, 0)
	list.Prepend(4)
	assert.Equal(t, list.Length, 4)
	list.Remove(2)
	assert.Equal(t, list.Length, 3)
	assert.DeepEqual(t, list.ToArray(), []int{4, 3, 1})
}

func TestSinglyLinkedListRemoveAt(t *testing.T) {
	list := singlylinkedlist.Singlylinkedlist{Length: 0, Head: nil}
	list.Append(1)
	list.Append(2)
	list.InsertAt(3, 0)
	list.Prepend(4)
	list.RemoveAt(1)
	assert.Equal(t, list.Length, 3)
	assert.DeepEqual(t, list.ToArray(), []int{4, 1, 2})
	list.RemoveAt(0)

	assert.DeepEqual(t, list.ToArray(), []int{1, 2})
}
