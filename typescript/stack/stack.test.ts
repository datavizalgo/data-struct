import {describe, expect, it} from "bun:test"
import { Stack } from "./stack"

describe('stack', () => {

    it('should be empty', () => {
        const stack = new Stack()
        expect(stack.isEmpty()).toBe(true)
    })

    it('should not be empty', () => {
        const stack = new Stack()
        stack.push(1)
        expect(stack.isEmpty()).toBe(false)
    })

    it('should add nodes', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.size()).toBe(3)
        expect(stack.top()).toBe(3)
        expect(stack.isEmpty()).toBeFalse()
    })

    it('should pop nodes', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.pop()).toBe(3)
        expect(stack.size()).toBe(2)
        expect(stack.top()).toBe(2)
        expect(stack.isEmpty()).toBeFalse()

        expect(stack.pop()).toBe(2)
        expect(stack.size()).toBe(1)
        expect(stack.top()).toBe(1)
        expect(stack.pop()).toBe(1)
        expect(stack.isEmpty()).toBeTrue()

    })
})