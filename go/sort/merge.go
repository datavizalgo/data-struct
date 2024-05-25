package sort

func MergeSort(arr []int, temp []int, left int, right int) {
	if left < right {
		mid := (left + right) / 2
		MergeSort(arr, temp, left, mid)
		MergeSort(arr, temp, mid+1, right)
		Merge(arr, temp, left, mid, right)
	}
}

func Merge(arr []int, temp []int, left int, mid int, right int) {
	i := left
	j := mid + 1
	k := left
	// 将两个有序数组 比较合并到临时数组
	for i <= mid && j <= right {
		if arr[i] <= arr[j] {
			temp[k] = arr[i]
			i++
		} else {
			temp[k] = arr[j]
			j++
		}
		k++
	}
	// 剩余元素 拷贝到临时数组
	for i <= mid {
		temp[k] = arr[i]
		i++
		k++
	}
	for j <= right {
		temp[k] = arr[j]
		j++
		k++
	}

	// 将有序的数组复制到原数组
	for i = left; i <= right; i++ {
		arr[i] = temp[i]
	}
}
