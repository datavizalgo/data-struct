package queue

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestQueue(t *testing.T) {
	q := New()
	q.Print()
	for i := 0; i < 10; i++ {
		q.Enqueue(i)
	}
	q.Print()
}

func TestQueue2(t *testing.T) {
	q := New()

	assert.Assert(t, q.IsEmpty(), "queue should be empty")
}

func TestQueue3(t *testing.T) {
	q := New()
	for i := 0; i < 4; i++ {
		q.Enqueue(i)
	}
	assert.Assert(t, q.Size() == 4, "queue size should be 10")
	assert.Assert(t, q.Dequeue() == 0, "queue front should be 0")
	assert.Equal(t, q.Dequeue(), 1)
	assert.Equal(t, q.Dequeue(), 2)
	assert.Equal(t, q.Dequeue(), 3)
	assert.Equal(t, q.IsEmpty(), true)

}
