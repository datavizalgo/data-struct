package sort

//冒泡排序

func BubbleSort[T any](arr []T, compare func(a, b T) bool) {
	length := len(arr)
	for i := 0; i < length-1; i++ {
		for j := 0; j < length-i-1; j++ {
			if compare(arr[j], arr[j+1]) {
				Swap(arr, j, j+1)
			}
		}
	}
}

func BubbleSort2[T any](arr []T, compare func(a, b T) bool) {
	flag := true
	length := len(arr)
	// flag := false 优化,如果循环一轮没有进行交换,那么说明已经排好序了
	for i := 0; i < length-1 && flag; i++ {
		flag = false
		for j := 0; j < length-i-1; j++ {
			if compare(arr[j], arr[j+1]) {
				Swap(arr, j, j+1)
				flag = true
			}
		}
	}
}
