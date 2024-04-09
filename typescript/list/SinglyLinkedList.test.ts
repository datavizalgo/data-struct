import {describe, expect, it} from "bun:test"
import { SinglyLinkedList } from "./SinglyLinkedList"

describe("SinglyLinkedList", () => {

    it("should be empty", () => {
        const list = new SinglyLinkedList()
        expect(list.isEmpty()).toBe(true)
    })

    it("should not be empty", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        expect(list.isEmpty()).toBe(false)
    })

    it("should add nodes", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(list.size()).toBe(3)
    })

    it("should remove nodes", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.removeAt(1)
        expect(list.size()).toBe(2) 
        expect(list.findAt(0)).toBe(1)
    })

    it("should insert nodes", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 1)
        expect(list.size()).toBe(4) 
        expect(list.findAt(1)).toBe(4)
        expect(list.findAt(2)).toBe(2)
    })

    it("should prepend nodes", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.prepend(0)
        expect(list.size()).toBe(4) 
        expect(list.findAt(0)).toBe(0)
    })

    it("should find nodes", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(list.findAt(1)).toBe(2)
    })


    it("should throw an error if the index is out of bounds", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(() => list.findAt(3)).toThrow()
    })

    it("to array",()=>{
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(Array.from(list)).toEqual([1,2,3])
    })

    it("should throw an error if the index is out of bounds", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(() => list.removeAt(3)).toThrow()
    })

    it("should throw an error if the index is out of bounds", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        expect(() => list.insertAt(4, 4)).toThrow()
    })

    it("insert at 0", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 0)
        expect(list.size()).toBe(4) 
        expect(list.findAt(0)).toBe(4)
    })

    it("insert at end", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 3)
        expect(list.size()).toBe(4) 
        expect(list.findAt(3)).toBe(4)  
    })

    it("insert at middle", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.insertAt(4, 1)
        expect(list.size()).toBe(4) 
        expect(list.findAt(1)).toBe(4)  
        expect(list.findAt(2)).toBe(2)
    })

    it("remove at 0", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.removeAt(0)
        expect(list.size()).toBe(2) 
        expect(list.findAt(0)).toBe(2)  
    })

    it("remove at end", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.removeAt(2)
        expect(list.size()).toBe(2) 
        expect(list.findAt(1)).toBe(2)  
    })

    it("removeValue at 0", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.removeValue(1)
        expect(list.size()).toBe(2) 
        expect(list.findAt(0)).toBe(2)
    })

    it("removeValue at end", () => {
        const list = new SinglyLinkedList()
        list.append(1)
        list.append(2)
        list.append(3)
        list.removeValue(3)
        expect(list.size()).toBe(2) 
        expect(list.findAt(1)).toBe(2)
    })
})