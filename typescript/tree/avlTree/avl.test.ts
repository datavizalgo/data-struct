
import { describe, test, expect } from "bun:test"
import { AVLTree } from "./avlTree"

describe('avl', () => {

    test('should be empty', () => {
        const avl = new AVLTree()
        expect(avl.isEmpty()).toBe(true)
    })

    test('should not be empty', () => {
        const avl = new AVLTree()
        avl.insert(1)
        expect(avl.isEmpty()).toBe(false)
    })

    test('insert left rotate', () => {
        const avl = new AVLTree()
        avl.insert(1)
        avl.insert(2)
        avl.insert(3)
        expect(avl.root?.value).toBe(2)
        expect(avl.levelOrder()).toEqual([2, 1, 3])
    })

    test('insert right rotate', () => {
        const avl = new AVLTree()
        avl.insert(3)
        avl.insert(2)
        avl.insert(1)
        expect(avl.root?.value).toBe(2)
        expect(avl.levelOrder()).toEqual([2, 1, 3])
    })

    test('insert left right rotate', () => {
        const avl = new AVLTree()
        avl.insert(3)
        avl.insert(1)
        avl.insert(2)
        expect(avl.root?.value).toBe(2)
        expect(avl.levelOrder()).toEqual([2, 1, 3])
    })

    test('insert right left rotate', () => {
        const avl = new AVLTree()
        avl.insert(1)
        avl.insert(3)
        avl.insert(2)
        expect(avl.root?.value).toBe(2)
        expect(avl.levelOrder()).toEqual([2, 1, 3])
    })

    test("delete at right child", () => {
        const avl = new AVLTree()
        avl.insert(1)
        avl.insert(2)
        avl.insert(3)
        avl.delete(2)
        expect(avl.levelOrder()).toEqual([3, 1])
    })

    test("delete at left child", () => {
        const avl = new AVLTree()
        avl.insert(3)
        avl.insert(2)
        avl.insert(1)
        avl.delete(2)
        expect(avl.levelOrder()).toEqual([3, 1])
    })

    test("delete at root", () => {
        const avl = new AVLTree()
        avl.insert(3)
        avl.insert(2)
        avl.insert(1)
        avl.delete(3)
        expect(avl.levelOrder()).toEqual([2, 1])
    })

    test("delete not child", () => {
        const avl = new AVLTree()

        avl.insert(10);
        avl.insert(5);
        avl.insert(15);
        avl.insert(3);
        avl.insert(8);
        avl.insert(12);

        expect(avl.levelOrder()).toEqual([10, 5, 15, 3, 8, 12])

        avl.delete(12)

        expect(avl.levelOrder()).toEqual([10, 5, 15, 3, 8])

        avl.delete(5)

        expect(avl.levelOrder()).toEqual([10, 8, 15, 3])

        avl.delete(10)

        expect(avl.levelOrder()).toEqual([8, 3, 15])

    })


})