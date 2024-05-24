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

	if a <= b {

		if b <= c {
			return middle
		} else if a <= c {
			return high
		} else {
			return low
		}
	} else {
		if a <= c {
			return low
		} else if b <= c {
			return high
		} else {
			return middle
		}
	}
}
