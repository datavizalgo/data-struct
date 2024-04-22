import { describe, it, expect } from 'bun:test'
import { DoublyLinkedList } from './DoublyLinkedList'
describe('DoublyLinkedList', () => {
    it('should be empty', () => {
        const list = new DoublyLinkedList()
        expect(list.isEmpty()).toBe(true)
    })

    it('should not be empty', () => {
        const list = new DoublyLinkedList()
        list.append(1)
        expect(list.isEmpty()).toBe(false)
    })

    it('should add nodes', () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(list.size()).toBe(3)
        expect(Array.from(list)).toEqual([1, 2, 3])
    })

    it("prepend node", () => {
        const list = new DoublyLinkedList()
        list.prepend(1)
        list.prepend(2)
        list.prepend(3)
        expect(list.size()).toBe(3)
        expect(Array.from(list)).toEqual([3, 2, 1])

        list.prepend(4)
        expect(list.size()).toBe(4)
        expect(Array.from(list)).toEqual([4, 3, 2, 1])

        list.prepend(5)
        expect(list.size()).toBe(5)
        expect(Array.from(list)).toEqual([5, 4, 3, 2, 1])
    })

    it("insert at start", () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 0)
        list.insertAt(5, 0)
        expect(list.size()).toBe(5)
        expect(Array.from(list)).toEqual([5, 4, 1, 2, 3])
    })

    it("insert at end", () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 3)
        expect(list.size()).toBe(4)
        expect(Array.from(list)).toEqual([1, 2, 3, 4])

        list.insertAt(5, 4)
        expect(list.size()).toBe(5)
        expect(Array.from(list)).toEqual([1, 2, 3, 4, 5])
    })

    it("insert at middle", () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 1)
        expect(list.size()).toBe(4)
        expect(Array.from(list)).toEqual([1, 4, 2, 3])

        list.insertAt(5, 2)
        expect(list.size()).toBe(5)
        expect(Array.from(list)).toEqual([1, 4, 5, 2, 3])
    })

    it('should find nodes', () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(list.findAt(0)).toBe(1)
        expect(list.findAt(1)).toBe(2)
        expect(list.findAt(2)).toBe(3)
    })
    it("reverse the list output", () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(Array.from(list.reverse())).toEqual([3, 2, 1])
    })


    it("should throw an error if the index is out of bounds", () => {
        const list = new DoublyLinkedList()
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
    it('should delete at start', () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.deleteAt(0)
        expect(list.size()).toBe(2)
        expect(Array.from(list)).toEqual([2, 3])
    })

    it('should delete at end', () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.deleteAt(2)
        expect(list.size()).toBe(2)
        expect(Array.from(list)).toEqual([1, 2])    
    })

    it('should delete at middle', () => {
        const list = new DoublyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.deleteAt(1)
        expect(list.size()).toBe(2)
        expect(Array.from(list)).toEqual([1, 3])
    })
})

