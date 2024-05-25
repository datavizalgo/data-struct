// 归并排序
export function mergeSort(arr: number[], left: number = 0, right: number = arr.length - 1, temp: number[] = []) {
    if (left >= right) return
    const middle = (left + right) >> 1
    mergeSort(arr, left, middle, temp)
    mergeSort(arr, middle + 1, right, temp)
    merge(arr, left, middle, right, temp)
}

export function merge(arr: number[], left: number, mid: number, right: number, temp: number[]) {
    let i = left, j = mid + 1, k = left;
    // 利用 temp 将两个有序数组合并
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++]
        } else {
            temp[k++] = arr[j++]
        }
    }
    // 两个子数组可能不一样长
    while (i <= mid) {
        temp[k++] = arr[i++]
    }
    while (j <= right) {
        temp[k++] = arr[j++]

    }
    // 将 temp 中的元素拷贝回原数组
    for (i = left; i <= right; i++) {
        arr[i] = temp[i]
    }
}