package sort

import (
	"testing"

	"gotest.tools/v3/assert"
)

func TestBubbleSort(t *testing.T) {
	arr := RandomArray(1000, 0, 10000)
	assert.Equal(t, false, IsAscArray(arr))
	BubbleSort(arr, CompareAsc)
	assert.Equal(t, true, IsAscArray(arr))

	arr = RandomArray(1000, 0, 10000)
	assert.Equal(t, false, IsDescArray(arr))
	BubbleSort2(arr, CompareDesc)
	assert.Equal(t, true, IsDescArray(arr))
}

func TestSelectionSort(t *testing.T) {
	arr := RandomArray(1000, 0, 10000)
	assert.Equal(t, false, IsAscArray(arr))
	SelectionSort(arr)
	assert.Equal(t, true, IsAscArray(arr))
}

func TestInsertionSort(t *testing.T) {
	arr := RandomArray(1000, 0, 10000)
	assert.Equal(t, false, IsAscArray(arr))
	InsertionSort(arr)
	assert.Equal(t, true, IsAscArray(arr))
}

func TestInsertionSortDesc(t *testing.T) {
	arr := RandomArray(1000, 0, 10000)
	assert.Equal(t, false, IsDescArray(arr))
	InsertionSortDesc(arr)
	assert.Equal(t, true, IsDescArray(arr))
}
