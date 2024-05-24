import { describe, it, expect } from "bun:test"
import { isAscArray, isDescArray, randomArray } from "./sortUtils"
import { bubbleSort, bubbleSort2 } from "./bubbleSort"
import { selectionSort } from "./selectionSort"
import { insertionSort, insertionSortDesc } from "./insertionSort"
import { getMedianOfThree, quickSort } from "./quickSort"

describe("sorts", () => {
    it("bubble sorted", () => {
        const arr = randomArray(5000, 1, 10000000)
        bubbleSort(arr)
        expect(isAscArray(arr)).toBe(true)
      
    })
    it("bubble sorted flag", () => {
        const arr = randomArray(5000, 1, 10000000)
        bubbleSort2(arr)
        expect(isDescArray(arr)).toBe(true)
    })
    it("selection sort", () => {
        const arr = randomArray(50000, 1, 1000000)
        selectionSort(arr)
        expect(isAscArray(arr)).toBe(true)
    })

    it('insertion sort', () => {
        const arr = randomArray(500000, 1, 1000000)
        const arr2 = arr.slice(0)
        insertionSort(arr)
        expect(isAscArray(arr)).toBe(true)
        insertionSortDesc(arr2)
        expect(isDescArray(arr2)).toBe(true)
    })

    it("test getMedianOfThree", () => {
        let arr: number[] = [5, 1, 4, 2, 3]
        let pivot = getMedianOfThree(arr, 0, arr.length - 1)
        expect(arr[pivot]).toBe(4)
        arr = [56,23,56,78,44,61,567,124,682,12358,95,33,76,12]
        pivot = getMedianOfThree(arr, 0, arr.length - 1)
        expect(arr[pivot]).toBe(56)

        arr = [45,76,89]
        pivot = getMedianOfThree(arr, 0, arr.length - 1)
        expect(arr[pivot]).toBe(76)
    })


    it("test quickSort", () => {
        const arr = randomArray(500000, 1, 1000000)
        quickSort(arr)
        expect(isAscArray(arr)).toBe(true)
    })
})

