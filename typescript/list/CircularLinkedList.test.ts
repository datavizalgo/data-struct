
import { describe, it, test, expect } from 'bun:test'
import { CircularLinkedList } from './CircularLinkedList'
describe("CircularLinkedList", () => {

    it("should be empty", () => {
        const list = new CircularLinkedList()
        expect(list.isEmpty()).toBe(true)
    })
    test("should not be empty", () => {
        const list = new CircularLinkedList()
        list.append(1)
        expect(list.isEmpty()).toBe(false)
    })

    test("should add nodes", () => {
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(list.size()).toBe(3)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 2, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 2, 1])

        list.append(4)
        list.append(5)
        list.append(6)

        expect(list.size()).toBe(6)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 2, 3, 4, 5, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 5, 4, 3, 2, 1])
    })

    test("should prepend nodes", () => {

        const list = new CircularLinkedList()
        list.prepend(1)
        list.prepend(2)
        list.prepend(3)
        expect(list.size()).toBe(3)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([3, 2, 1])
        expect(Array.from(list.reverseToArray())).toEqual([1, 2, 3])

        list.prepend(4)
        list.prepend(5)

        list.prepend(6)

        expect(list.size()).toBe(6)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([6, 5, 4, 3, 2, 1])
        expect(Array.from(list.reverseToArray())).toEqual([1, 2, 3, 4, 5, 6])

    })

    test("should throw an error if the index is out of bounds", () => {
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(() => list.findAt(3)).toThrow()
        expect(() => list.findAt(-1)).toThrow()
        expect(() => list.insertAt(4, -1)).toThrow()
        expect(() => list.insertAt(4, 4)).toThrow()
        expect(() => list.deleteAt(-1)).toThrow()
        expect(() => list.deleteAt(3)).toThrow()
    })
    test("should insert at start", () => {
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 0)
        expect(list.size()).toBe(4)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([4, 1, 2, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 2, 1, 4])

        list.insertAt(5, 0)
        expect(list.size()).toBe(5)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 4, 1, 2, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 2, 1, 4, 5])

    })

    test("should insert at end", () => {
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 3)
        expect(list.size()).toBe(4)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 2, 3, 4])
        expect(Array.from(list.reverseToArray())).toEqual([4, 3, 2, 1])

        list.insertAt(5, 4)
        expect(list.size()).toBe(5)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 2, 3, 4, 5])
        expect(Array.from(list.reverseToArray())).toEqual([5, 4, 3, 2, 1])

        list.insertAt(6, 5)
        expect(list.size()).toBe(6)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 2, 3, 4, 5, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 5, 4, 3, 2, 1])
    })

    test("should insert at middle", () => {
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 1)
        expect(list.size()).toBe(4)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 4, 2, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 2, 4, 1])

        list.insertAt(5, 2)
        expect(list.size()).toBe(5)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 4, 5, 2, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 2, 5, 4, 1])

        list.insertAt(6, 3)
        list.insertAt(7, 4)
        expect(list.size()).toBe(7)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 4, 5, 6, 7, 2, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 2, 7, 6, 5, 4, 1])

        list.insertAt(8, list.size() - 1);
        list.insertAt(9, list.size() - 1);
        expect(list.size()).toBe(9)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 4, 5, 6, 7, 2, 8, 9, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 9, 8, 2, 7, 6, 5, 4, 1])
    })
    test("should delete at start", () => {
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.deleteAt(0)
        expect(list.size()).toBe(2)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([2, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 2])

        list.prepend(4)
        list.prepend(5)
        list.append(6)
        expect(list.size()).toBe(5)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 4, 2, 3, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 3, 2, 4, 5])

        list.deleteAt(0)
        expect(list.size()).toBe(4)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([4, 2, 3, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 3, 2, 4])

        list.deleteAt(0)
        expect(list.size()).toBe(3)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([2, 3, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 3, 2])

        list.deleteAt(0)
        expect(list.size()).toBe(2)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([3, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 3])

        list.deleteAt(0)
        expect(list.size()).toBe(1)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([6])
        expect(Array.from(list.reverseToArray())).toEqual([6])

        list.deleteAt(0)
        expect(list.size()).toBe(0)
        expect(list.isCircular()).toBe(false)
        expect(list.isEmpty()).toBe(true)
    })
    test("should delete at end", () => {
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.deleteAt(2)
        expect(list.size()).toBe(2)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 2])
        expect(Array.from(list.reverseToArray())).toEqual([2, 1])

        list.prepend(4)
        list.prepend(5)
        list.append(6)
        expect(list.size()).toBe(5)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 4, 1, 2, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 2, 1, 4, 5])

        list.deleteAt(list.size() - 1)
        expect(list.size()).toBe(4)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 4, 1, 2])
        expect(Array.from(list.reverseToArray())).toEqual([2, 1, 4, 5])

        list.deleteAt(list.size() - 1)
        expect(list.size()).toBe(3)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 4, 1])
        expect(Array.from(list.reverseToArray())).toEqual([1, 4, 5])

        list.deleteAt(list.size() - 1)
        expect(list.size()).toBe(2)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 4])
        expect(Array.from(list.reverseToArray())).toEqual([4, 5])

        list.deleteAt(list.size() - 1)
        expect(list.size()).toBe(1)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5])
        expect(Array.from(list.reverseToArray())).toEqual([5])

        list.deleteAt(list.size() - 1)
        expect(list.size()).toBe(0)
        expect(list.isCircular()).toBe(false)
        expect(list.isEmpty()).toBe(true)
    })

    test("should delete at middle", () => {
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.deleteAt(1)
        expect(list.size()).toBe(2)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([1, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 1])


        list.prepend(4)
        list.prepend(5)
        list.append(6)
        expect(list.size()).toBe(5)
        expect(list.isCircular()).toBe(true)

        list.deleteAt(2)
        expect(list.size()).toBe(4)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 4, 3, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 3, 4, 5])

        list.deleteAt(1)
        expect(list.size()).toBe(3)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 3, 6])
        expect(Array.from(list.reverseToArray())).toEqual([6, 3, 5])

        list.deleteAt(2)
        expect(list.size()).toBe(2)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5, 3])
        expect(Array.from(list.reverseToArray())).toEqual([3, 5])

        list.deleteAt(1)
        expect(list.size()).toBe(1)
        expect(list.isCircular()).toBe(true)
        expect(Array.from(list)).toEqual([5])
        expect(Array.from(list.reverseToArray())).toEqual([5])

        list.deleteAt(0)
        expect(list.size()).toBe(0)
        expect(list.isCircular()).toBe(false)
        expect(list.isEmpty()).toBe(true)

    })

    test("test find at", () => {
        
        const list = new CircularLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.append(4)
        list.append(5)

        expect(list.findAt(0)).toBe(1)
        expect(list.findAt(1)).toBe(2)
        expect(list.findAt(2)).toBe(3)
        expect(list.findAt(3)).toBe(4)
        expect(list.findAt(4)).toBe(5)
    })
})