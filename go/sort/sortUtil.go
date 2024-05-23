package sort

import "math/rand"

func Swap[T any](arr []T, i, j int) {
	if i == j {
		return
	}
	arr[i], arr[j] = arr[j], arr[i]
}

func RandomArray(size int, min int, max int) []int {
	arr := make([]int, size)
	for i := 0; i < size; i++ {
		arr[i] = rand.Intn(max-min) + min
	}
	return arr
}

func CompareAsc(a, b int) bool {
	return a > b
}

func CompareDesc(a, b int) bool {
	return a < b
}

// Check if array is sorted in ascending order
func IsAscArray(arr []int) bool {
	for i := 0; i < len(arr)-1; i++ {
		if arr[i] > arr[i+1] {
			return false
		}
	}
	return true
}

// Check if array is sorted in descending order
func IsDescArray(arr []int) bool {
	for i := 0; i < len(arr)-1; i++ {
		if arr[i] < arr[i+1] {
			return false
		}
	}
	return true
}
