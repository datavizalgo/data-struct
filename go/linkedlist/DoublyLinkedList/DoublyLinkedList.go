package doublylinkedlist

import (
	"fmt"
)

type DoublylinkedlistNode struct {
	Prev  *DoublylinkedlistNode
	Value int
	Next  *DoublylinkedlistNode
}

type Doublylinkedlist struct {
	Head   *DoublylinkedlistNode
	Length int
}

func NewDoublylinkedlist() *Doublylinkedlist {
	return &Doublylinkedlist{Head: nil, Length: 0}
}

func (d *Doublylinkedlist) Prepend(value int) {
	node := &DoublylinkedlistNode{Value: value}
	node.Next = d.Head
	if d.Head != nil {
		d.Head.Prev = node
	}
	d.Head = node
	d.Length++
}

func (d *Doublylinkedlist) Append(value int) {
	node := &DoublylinkedlistNode{Value: value}
	if d.Head == nil {
		d.Head = node
	} else {
		current := d.Head
		for current.Next != nil {
			current = current.Next
		}
		current.Next = node
		node.Prev = current
	}
	d.Length++
}

func (d *Doublylinkedlist) InsertAt(value int, index int) {
	if index < 0 || index > d.Length {
		panic("Index out of bounds")
	}
	node := &DoublylinkedlistNode{Value: value}

	if index == 0 {
		node.Next = d.Head
		if d.Head != nil {
			d.Head.Prev = node
		}
		d.Head = node
	} else {
		current := d.Head
		for i := 0; i < index-1; i++ {
			current = current.Next
		}
		node.Next = current.Next
		if current.Next != nil {
			current.Next.Prev = node
		}
		current.Next = node
		node.Prev = current
	}
	d.Length++
}

func (d *Doublylinkedlist) ToArray() []int {
	var array []int
	current := d.Head
	for current != nil {
		array = append(array, current.Value)
		current = current.Next
	}
	return array
}

func (d *Doublylinkedlist) ReverseToArray() []int {
	var array []int
	if d.Length == 0 {
		return array
	}
	current := d.Head
	for current.Next != nil {
		current = current.Next
	}

	for current != nil {
		array = append(array, current.Value)
		current = current.Prev
	}
	return array
}
func (d *Doublylinkedlist) Print() {
	current := d.Head
	for current != nil {
		fmt.Printf("%d ", current.Value)
		current = current.Next
	}
	fmt.Println()
}
func (d *Doublylinkedlist) DeleteAt(index int) {
	if index < 0 || index >= d.Length {
		panic("Index out of bounds")
	}
	if index == 0 {
		d.Head = d.Head.Next
		d.Head.Prev = nil
	} else {
		current := d.Head
		for i := 0; i < index-1; i++ {
			current = current.Next
		}
		current.Next = current.Next.Next
		if current.Next != nil {
			current.Next.Prev = current
		}
	}
	d.Length--
}

func (d *Doublylinkedlist) IsEmpty() bool {
	return d.Length == 0
}

func (d *Doublylinkedlist) Size() int {
	return d.Length
}
func (d *Doublylinkedlist) Reverse() {
	current := d.Head
	var temp *DoublylinkedlistNode
	for current != nil {
		temp = current.Prev
		current.Prev = current.Next
		current.Next = temp
		current = current.Prev
	}
	if temp != nil {
		d.Head = temp.Prev
	}
}
