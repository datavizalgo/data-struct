import { compareAsc, swap } from "./sortUtils"


export function bubbleSort(arr: number[]): number[] {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (compareAsc(arr[j], arr[j + 1])) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

export function bubbleSort2(arr: number[]): number[] {
    const length = arr.length
    let flag = true
    for (let i = 0; i < length && flag; i++) {
        flag = false
        for (let j = length - 1; j > i; j--) {
            if (compareAsc(arr[j], arr[j - 1])) {
                swap(arr, j, j - 1)
                flag = true
            }
        }
    }
    return arr
}