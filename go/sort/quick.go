package sort

// 快速排序
func QuickSort(arr []int, low int, high int) {
	if low < high {
		pivot := partition(arr, low, high)
		QuickSort(arr, low, pivot-1)
		QuickSort(arr, pivot+1, high)
	}
}

func partition(arr []int, low int, high int) int {
	// 获取基准值
	pivot := getMedianOfThree(arr, low, high)
	// 将基准值交换到数组开头
	Swap(arr, pivot, low)
	left := low
	right := high
	for left < right {
		for left < right && arr[right] >= arr[low] {
			right--
		}
		for left < right && arr[left] <= arr[low] {
			left++
		}
		if left < right {
			Swap(arr, left, right)
		}
	}
	Swap(arr, low, right)
	return right
}

// 三数取中间值法获取基准值
func getMedianOfThree(arr []int, low int, high int) int {
	a := arr[low]
	middle := (low + high) / 2
	b := arr[middle]
	c := arr[high]

	if a >= b && b >= c || a <= b && b <= c {
		return middle
	} else if b >= a && a >= c || b <= a && a <= c {
		return low
	}
	return high
}

// 快速排序 另一种实现
func QuickSort1(arr []int, low int, high int) {
	if low < high {
		pivot := partition1(arr, low, high)
		QuickSort1(arr, low, pivot-1)
		QuickSort1(arr, pivot+1, high)
	}
}

func partition1(arr []int, low int, high int) int {
	// 获取基准值
	pivot := getMedianOfThree(arr, low, high)
	// 将基准值交换到数组末尾
	Swap(arr, pivot, high)
	i := low - 1

	for j := low; j < high; j++ {
		if arr[j] <= arr[high] {
			i++
			Swap(arr, i, j)
		}
	}
	Swap(arr, i+1, high)
	return i + 1
}
