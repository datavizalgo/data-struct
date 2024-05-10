
import { describe, it, expect } from 'bun:test'
import { BinarySearchTree } from './bst'

const random = (max: number, min: number) => Math.floor(Math.random() * (max - min) + min)

const randArray = (n: number) => Array.from({ length: n }, () => random(100, 10))

describe('binary search tree', () => {

    it('should be empty', () => {
        const bst = new BinarySearchTree()
        expect(bst.isEmpty()).toBe(true)
    })

    it('should not be empty', () => {
        const bst = new BinarySearchTree()
        bst.insert(1)
        expect(bst.isEmpty()).toBe(false)
        expect(bst.search(1)).toBe(true)

        bst.insert(2)
        expect(bst.search(2)).toBe(true)
    })

    it('should add nodes', () => {
        const bst = new BinarySearchTree()
        bst.insert(56)
        bst.insert(78)
        bst.insert(34)
        bst.insert(12)
        bst.insert(23)
        bst.insert(45)
        bst.insert(67)
        bst.insert(89)

        expect(bst.search(56)).toBe(true)
        expect(bst.search(78)).toBe(true)
        expect(bst.search(34)).toBe(true)
        expect(bst.search(12)).toBe(true)
        expect(bst.search(23)).toBe(true)
        expect(bst.search(45)).toBe(true)
        expect(bst.search(67)).toBe(true)
        expect(bst.search(89)).toBe(true)
    })

    it('should remove nodes', () => {
        const bst = new BinarySearchTree()
        bst.insert(56)
        bst.insert(78)
        bst.insert(34)
        bst.insert(12)
        bst.insert(23)
        bst.insert(45)
        bst.insert(67)
        bst.insert(89)
        expect(bst.levelOrder()).toEqual([56, 34, 78, 12, 45, 67, 89, 23])
        bst.delete(56)

        expect(bst.levelOrder()).toEqual([67, 34, 78, 12, 45, 89, 23])

        bst.delete(23)

        expect(bst.levelOrder()).toEqual([67, 34, 78, 12, 45, 89])
        bst.delete(78)

        expect(bst.levelOrder()).toEqual([67, 34, 89, 12, 45])
    })

    it('should find min and max', () => {
        const bst = new BinarySearchTree()
        bst.insert(56)
        bst.insert(78)
        bst.insert(34)
        bst.insert(12)
        bst.insert(23)
        bst.insert(45)
        bst.insert(67)
        bst.insert(89)
        expect(bst.findMin()).toBe(12)
        expect(bst.findMax()).toBe(89)

    })

    it('should insert once', () => {
        const bst = new BinarySearchTree()
        bst.insert(56)
        bst.insert(78)
        bst.insert(34)
        bst.insert(78)
        expect(bst.levelOrder()).toEqual([56, 34, 78])
    })
})