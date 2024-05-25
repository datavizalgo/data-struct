import { swap } from "./sortUtils"


export function quickSort(arr: number[], low: number = 0, high: number = arr.length - 1) {
    if (low < high) {
        const pivot = partition(arr, low, high)
        quickSort(arr, low, pivot - 1)
        quickSort(arr, pivot + 1, high)
    }
}

function partition(arr: number[], low: number, high: number) {
    let left = low
    let right = high
    const pivot = getMedianOfThree(arr, left, right)
    swap(arr, low, pivot)
    while (left < right) {
        while (left < right && arr[right] >= arr[low]) {
            right--
        }
        while (left < right && arr[left] <= arr[low]) {
            left++
        }
        if (left < right) {
            swap(arr, left, right)
        }
    }
    swap(arr, right, low)

    return right
}

// 三数取中间值法获取基准值
export function getMedianOfThree(arr: number[], low: number, high: number) {
    const a = arr[low]
    const mid = (low + high) >> 1
    const b = arr[mid]
    const c = arr[high]
    if ((a >= b && b >= c) || (c >= b && b >= a)) {
        return mid
    } else if ((b >= a && a >= c) || (c >= a && a >= b)) {
        return low
    } else {
        return high
    }
}



export function quickSort2(arr: number[], low: number = 0, high: number = arr.length - 1) {
    if (low < high) {
        let left = low
        let right = high
        const pivot = getMedianOfThree(arr, left, right)
        swap(arr, low, pivot)
        while (left < right) {
            let rightFlag = false
            let leftFlag = false
            do {
                if (left < right) {
                    rightFlag = arr[right] <= arr[low]
                    if (rightFlag) {
                        right--
                    }
                }
            } while (left < right && rightFlag)

            do {
                if (left < right) {
                    leftFlag = arr[left] >= arr[low]
                    if (leftFlag) {
                        left++
                    }
                }
            } while (left < right && leftFlag)

            if (left < right) {
                swap(arr, left, right)
            }
        }
        swap(arr, right, low)
        quickSort2(arr, low, right - 1)
        quickSort2(arr, right + 1, high)
    }
}



export function quickSort3(arr: number[], low: number = 0, high: number = arr.length - 1) {
    if (low < high) {
        const pivot = partition2(arr, low, high)
        quickSort3(arr, low, pivot - 1)
        quickSort3(arr, pivot + 1, high)
    }
}

export function partition2(arr: number[], low: number, high: number) {
    const pivot = getMedianOfThree(arr, low, high)
    swap(arr, high, pivot)
    let i = low - 1
    for (let j = low; j < high; j++) {
        if (arr[j] <= arr[high]) {
            i++
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, high)
    return i + 1
}