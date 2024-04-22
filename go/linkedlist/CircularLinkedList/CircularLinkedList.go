package CircularLinkedList

import "fmt"

type CircularLinkedListNode struct {
	Next  *CircularLinkedListNode
	Value int
	Prev  *CircularLinkedListNode
}

type CircularLinkedList struct {
	Head *CircularLinkedListNode

	Length int
}

func NewCircularLinkedList() *CircularLinkedList {
	return &CircularLinkedList{
		Head:   nil,
		Length: 0,
	}
}

func (l *CircularLinkedList) Prepend(value int) {
	node := &CircularLinkedListNode{
		Value: value,
		Next:  nil,
		Prev:  nil,
	}

	if l.Head == nil {
		l.Head = node
		node.Next = node
		node.Prev = node
	} else {
		node.Next = l.Head
		node.Prev = l.Head.Prev
		l.Head.Prev.Next = node
		l.Head.Prev = node
		l.Head = node
	}
	l.Length++
}
func (l *CircularLinkedList) IsEmpty() bool {
	return l.Length == 0
}
func (l *CircularLinkedList) IsCircular() bool {
	if l.Head == nil {
		return false
	}
	temp := l.Head
	for temp != nil {
		if temp.Next == l.Head {
			return true
		}
		temp = temp.Next
	}
	return false
}

func (l *CircularLinkedList) DeleteAt(index int) (err error) {
	if index < 0 || index >= l.Length {
		return fmt.Errorf("index out of range")
	}
	if index == 0 {
		if l.Length == 1 {
			l.Head = nil
		} else {
			temp := l.Head
			l.Head = l.Head.Next
			l.Head.Prev = temp.Prev
			temp.Prev.Next = l.Head
		}
	} else {
		temp := l.Head
		for i := 0; i < index-1; i++ {
			temp = temp.Next
		}
		temp.Next = temp.Next.Next
		temp.Next.Prev = temp
	}
	l.Length--
	return nil
}

func (l *CircularLinkedList) Append(value int) {
	node := &CircularLinkedListNode{
		Value: value,
		Next:  nil,
		Prev:  nil,
	}

	if l.Head == nil {
		l.Head = node
		node.Next = node
		node.Prev = node
	} else {
		tail := l.Head.Prev
		node.Next = l.Head
		node.Prev = tail
		tail.Next = node
		l.Head.Prev = node
	}
	l.Length++
}

func (l *CircularLinkedList) InsertAt(value int, index int) (err error) {
	if index < 0 || index > l.Length {
		return fmt.Errorf("index out of range")
	}
	node := &CircularLinkedListNode{
		Value: value,
		Next:  nil,
		Prev:  nil,
	}
	if index == 0 {
		if l.Head == nil {
			l.Head = node
			node.Next = node
			node.Prev = node
		} else {
			temp := l.Head
			node.Next = temp
			node.Prev = temp.Prev
			temp.Prev.Next = node
			temp.Prev = node
			l.Head = node
		}

	} else {
		temp := l.Head
		for i := 0; i < index-1; i++ {
			temp = temp.Next
		}
		node.Next = temp.Next
		node.Prev = temp
		temp.Next.Prev = node
		temp.Next = node
	}
	l.Length++
	return nil
}

func (l *CircularLinkedList) ToArray() []int {
	if l.Head == nil {
		return []int{}
	}
	temp := l.Head
	arr := make([]int, l.Length)
	for i := 0; i < l.Length; i++ {
		arr[i] = temp.Value
		temp = temp.Next
		if temp == l.Head {
			break
		}
	}
	return arr
}

func (l *CircularLinkedList) ReverseToArray() []int {
	if l.Head == nil {
		return []int{}
	}
	temp := l.Head.Prev
	arr := make([]int, l.Length)
	for i := 0; i < l.Length; i++ {
		arr[i] = temp.Value
		temp = temp.Prev
		if temp == l.Head.Prev {
			break
		}
	}
	return arr
}
