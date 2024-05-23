import { swap } from "./sortUtils"

export function selectionSort(arr: number[]) {
    const length = arr.length
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
}