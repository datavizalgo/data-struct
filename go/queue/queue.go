package queue

type Node struct {
	data int
	next *Node
}

type Queue struct {
	front  *Node
	rear   *Node
	length int
}

func New() *Queue {
	return &Queue{
		front:  nil,
		rear:   nil,
		length: 0,
	}
}

func (q *Queue) Enqueue(data int) {
	node := &Node{
		data: data,
		next: nil,
	}
	if q.front == nil {
		q.front = node
	} else {
		q.rear.next = node
	}
	q.rear = node
	q.length++
}

func (q *Queue) Dequeue() int {
	if q.front == nil {
		return -1
	}
	data := q.front.data
	q.front = q.front.next
	if q.front == nil {
		q.rear = nil
	}
	q.length--
	return data
}

func (q *Queue) Size() int {
	return q.length
}
func (q *Queue) IsEmpty() bool {
	return q.front == nil
}
func (q *Queue) Print() {
	if q.front == nil {
		return
	}
	for node := q.front; node != nil; node = node.next {
		print(node.data, " ")
	}
	println()
}
