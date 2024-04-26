package stack

type StackNode struct {
	Data int
	Next *StackNode
}

type Stack struct {
	head   *StackNode
	length int
}

func New() *Stack {
	return &Stack{
		head:   nil,
		length: 0,
	}
}

func (s *Stack) Push(data int) {
	node := &StackNode{
		Data: data,
		Next: s.head,
	}
	s.head = node
	s.length++
}

func (s *Stack) Pop() int {
	if s.head == nil {
		return -1
	}
	data := s.head.Data
	s.head = s.head.Next
	s.length--
	return data
}

func (s *Stack) Top() int {
	if s.head == nil {
		return -1
	}
	return s.head.Data
}

func (s *Stack) Size() int {
	return s.length
}

func (s *Stack) IsEmpty() bool {
	return s.length == 0
}
