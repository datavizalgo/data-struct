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

func TestQuickSort(t *testing.T) {
	arr := RandomArray(9000000, 0, 90000000)
	assert.Equal(t, false, IsAscArray(arr))
	QuickSort(arr, 0, len(arr)-1)
	assert.Equal(t, true, IsAscArray(arr))
}

func TestGetMedianOfThree(t *testing.T) {
	arr := []int{5, 3, 7, 2, 4, 6, 8, 1}
	median := getMedianOfThree(arr, 0, len(arr)-1)
	assert.Equal(t, 3, median)

	arr = []int{6, 7, 8}
	median = getMedianOfThree(arr, 0, len(arr)-1)
	assert.Equal(t, 1, median)

	arr = []int{1, 2, 3}
	median = getMedianOfThree(arr, 0, len(arr)-1)
	assert.Equal(t, 1, median)

	arr = []int{77, 88, 77}
	median = getMedianOfThree(arr, 0, len(arr)-1)
	assert.Equal(t, 0, median)
}

func TestQuickSort1(t *testing.T) {
	arr := RandomArray(9000000, 0, 90000000)
	assert.Equal(t, false, IsAscArray(arr))
	QuickSort1(arr, 0, len(arr)-1)
	assert.Equal(t, true, IsAscArray(arr))
}

func TestMergeSort(t *testing.T) {
	const size = 1000
	arr := RandomArray(size, 0, 10000)
	assert.Equal(t, false, IsAscArray(arr))
	MergeSort(arr, make([]int, size), 0, size-1)
	assert.Equal(t, true, IsAscArray(arr))
}
