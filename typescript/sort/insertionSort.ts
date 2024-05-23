
// 插入排序 升序
export function insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
}

// 插入排序 降序
export function insertionSortDesc(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] < current) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
}