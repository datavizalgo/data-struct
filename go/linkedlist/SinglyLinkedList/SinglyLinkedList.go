package singlylinkedlist

import "fmt"

type SinglylinkedlistNode struct {
	Value int
	Next  *SinglylinkedlistNode
}

type Singlylinkedlist struct {
	Head   *SinglylinkedlistNode
	Length int
}

// Append adds a new node with the given value to the end of the list.
// If the list is empty, the new node becomes the head of the list.
// Otherwise, it traverses the list to find the last node and appends the
// new node to it.
//
// Parameters:
// value - The value to be added to the list.
func (s *Singlylinkedlist) Append(value int) {
	node := &SinglylinkedlistNode{Value: value, Next: nil}

	// If the list is empty, set the new node as the head

	if s.Head == nil {
		s.Head = node
	} else {
		// Traverse to the last node of the list
		temp := s.Head
		for temp.Next != nil {
			temp = temp.Next
		}
		// Append the new node to the last node
		temp.Next = node
	}
	// Increase the length of the list
	s.Length++
}

// Prepend adds a new node with the given value to the beginning of the list.
// If the list is empty, the new node becomes the head of the list.
// Otherwise, the new node becomes the new head, and the current head
// becomes the next node of the new head.
func (s *Singlylinkedlist) Prepend(value int) {
	node := &SinglylinkedlistNode{Value: value, Next: nil}
	// Check if the list is empty
	if s.Head == nil {
		// If empty, set the new node as the head
		s.Head = node
	} else {
		// link it to the current head
		node.Next = s.Head
		// Set the new node as the new head
		s.Head = node
	}
	// Increase the length of the list
	s.Length++
}

func (s *Singlylinkedlist) InsertAt(value int, index int) {
	if index < 0 || index > s.Length {
		fmt.Println("Invalid Index")
		return
	}
	node := &SinglylinkedlistNode{Value: value, Next: nil}

	if index == 0 {
		node.Next = s.Head
		s.Head = node
	} else {
		temp := s.Head
		for i := 0; i < index-1; i++ {
			temp = temp.Next
		}
		node.Next = temp.Next
		temp.Next = node
	}
	s.Length++

}

// Remove  the first occurrence of a node with the given value from the
// list. If no such node is found, the function does nothing.
//
// Parameters:
// value - The value of the node to be removed.
func (s *Singlylinkedlist) Remove(value int) {
	// If the list is empty, do nothing
	if s.Head == nil {
		return
	}

	// Initialize a temporary node with the head of the list
	temp := s.Head
	var prev *SinglylinkedlistNode = nil

	// Iterate over the list to find a node with the given value
	for temp != nil {
		// If a node with the given value is found
		if temp.Value == value {
			// If the node is the head of the list
			if prev == nil {
				// Make the next node of the head as the new head
				s.Head = temp.Next
			} else {
				// Make the next node of the previous node as the next node of the current node
				prev.Next = temp.Next
			}
			// Decrease the length of the list
			s.Length--
			return
		}
		// Move to the next node
		prev = temp
		temp = temp.Next
	}
}

// RemoveAt removes a node from the list at the specified index.
// If the index is out of bounds, the function prints an error message and returns.
func (s *Singlylinkedlist) RemoveAt(index int) {

	// Check if the index is valid
	if index < 0 || index >= s.Length {
		fmt.Println("Invalid Index")
		return
	}

	// If the index is 0, remove the head node
	if index == 0 {
		s.Head = s.Head.Next
	} else {

		// Initialize a temporary node with the head of the list
		temp := s.Head

		// Iterate until the desired node is reached
		for i := 0; i < index-1; i++ {
			temp = temp.Next
		}

		// Update the next node of the previous node to the next node of the current node
		temp.Next = temp.Next.Next
	}

	// Decrease the length of the list
	s.Length--
}

// FindAt returns the value at the given index in the list.
// If the index is out of bounds, the function returns 0.
//
// Parameters:
// index - The index of the node to find.
func (s *Singlylinkedlist) FindAt(index int) int {
	// Initialize a temporary node with the head of the list
	temp := s.Head
	// Initialize a counter to keep track of the position
	counter := 0

	// Check if the index is out of bounds
	if index < 0 || index >= s.Length {
		// Return 0 to indicate that the index is out of bounds
		return 0
	}

	// Iterate over the list until the counter matches the index
	for temp != nil && counter != index {
		temp = temp.Next
		counter++
	}

	// Return the value of the node at the given index
	return temp.Value
}

func (s *Singlylinkedlist) Print() {
	if s.Head == nil {
		return
	}
	node := s.Head
	for node != nil {
		println(node.Value)
		node = node.Next
	}
}

// toArray converts a singly linked list to a slice of integers.
//
// Parameters:
// s - The singly linked list to be converted.
//
// Returns:
// A slice of integers representing the values in the list.
func (s *Singlylinkedlist) ToArray() []int {
	// Initialize an empty slice to store the values.
	var arr []int

	// Initialize a node with the head of the list.
	node := s.Head

	// Iterate over the list and append each value to the slice.
	for node != nil {
		arr = append(arr, node.Value)
		node = node.Next
	}

	// Return the resulting slice.
	return arr
}

// Reverse reverses the order of nodes in the singly linked list.
//
// This function does not take any parameters.
// It does not return any value.
func (s *Singlylinkedlist) Reverse() {
	// Initialize variables to keep track of the previous and current nodes.
	var prev *SinglylinkedlistNode
	curr := s.Head
	// Keep track of the next node before we update the current node's next pointer.
	var next *SinglylinkedlistNode

	// Iterate until there are no more nodes.
	for curr != nil {
		// Keep track of the next node.
		next = curr.Next
		// Reverse the link.
		curr.Next = prev
		// Move to the next pair of nodes.
		prev = curr
		curr = next
	}

	// Update the head to the new first node.
	s.Head = prev
}
