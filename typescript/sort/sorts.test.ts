import { describe, it, expect } from "bun:test"
import { isAscArray, isDescArray, randomArray } from "./sortUtils"
import { bubbleSort, bubbleSort2 } from "./bubbleSort"
import { selectionSort } from "./selectionSort"
import { insertionSort, insertionSortDesc } from "./insertionSort"

describe("sorts", () => {
    it("bubble sorted", () => {
        const arr = randomArray(500, 1, 10000)
        const arr2 = arr.slice(0)        
        bubbleSort(arr)
        
        expect(isAscArray(arr)).toBe(true)
        bubbleSort2(arr2)
        expect(isDescArray(arr2)).toBe(true)
    })

    it("selection sort", () => {
        const arr = randomArray(500, 1, 10000)
        selectionSort(arr)
        expect(isAscArray(arr)).toBe(true)
    })

    it('insertion sort', () => {
        const arr = randomArray(500, 1, 10000)
        const arr2 = arr.slice(0)
        insertionSort(arr)
        expect(isAscArray(arr)).toBe(true)
        insertionSortDesc(arr2)
        expect(isDescArray(arr2)).toBe(true)
    })
})

