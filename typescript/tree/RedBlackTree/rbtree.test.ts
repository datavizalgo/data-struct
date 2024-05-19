import {describe,it,expect} from "bun:test"

import {RBTree} from "./rbtree"

describe("red black tree tests", () => {
    
    it("create rbtree ",()=>{
        const tree = new RBTree()
        expect(tree).toBeDefined()
    })

    it("insert test 1",()=>{
        const tree = new RBTree()
        tree.insert(1)
        tree.insert(2)
        tree.insert(3)
        tree.insert(4)
        tree.insert(5)
        expect(tree.root?.value).toBe(2)
        expect(tree.isRedBlackTree()).toBeTrue()
    })

    it("insert test 2",()=>{
        const tree = new RBTree()
        tree.insert(6)
        tree.insert(5)
        tree.insert(4)
        tree.insert(3)
        tree.insert(2)
        tree.insert(1)
        expect(tree.root?.value).toBe(5)
        expect(tree.isRedBlackTree()).toBeTrue()
    })

    it("delete test 1",()=>{
        const tree = new RBTree()
        tree.insert(6)
        tree.insert(5)
        tree.insert(4)
        tree.insert(3)
        tree.insert(2)
        tree.insert(1)
        expect(tree.root?.value).toBe(5)
        tree.delete(6)
        expect(tree.root?.value).toBe(3)
        expect(tree.isRedBlackTree()).toBeTrue()
    })
})