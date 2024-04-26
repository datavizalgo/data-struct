package stack

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestStack(t *testing.T) {

	s := New()
	if !s.IsEmpty() {
		t.Error("Stack should be empty")
	}
}

func TestPush(t *testing.T) {
	s := New()
	s.Push(1)
	if s.Size() != 1 {
		t.Error("Stack size should be 1")
	}
	if s.IsEmpty() {
		t.Error("Stack should not be empty")
	}
	if s.Top() != 1 {
		t.Error("Stack top should be 1")
	}
}

func TestPop(t *testing.T) {
	s := New()
	s.Push(1)
	if s.Pop() != 1 {
		t.Error("Stack pop should be 1")
	}
	if !s.IsEmpty() {
		t.Error("Stack should be empty")
	}

	s.Push(1)
	s.Push(2)
	if s.Pop() != 2 {
		t.Error("Stack pop should be 2")
	}
	if s.Pop() != 1 {
		t.Error("Stack pop should be 1")
	}

	if !s.IsEmpty() {
		t.Error("Stack should be empty")
	}
}

func TestTop(t *testing.T) {
	s := New()
	s.Push(1)
	if s.Top() != 1 {
		t.Error("Stack top should be 1")
	}

	s.Push(2)
	if s.Top() != 2 {
		t.Error("Stack top should be 2")
	}
	if s.Pop() != 2 {
		t.Error("Stack pop should be 2")
	}

	s.Push(3)
	if s.Top() != 3 {
		t.Error("Stack top should be 3")
	}

	assert.Equal(t, s.Size(), 2)
}
