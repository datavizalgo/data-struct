import { describe, expect, it } from 'bun:test'
import { Queue } from './queue'

describe('queue', () => {

    it('should be empty', () => {
        const queue = new Queue()
        expect(queue.isEmpty()).toBe(true)
    })

    it('should not be empty', () => {
        const queue = new Queue()
        queue.enqueue(1)
        expect(queue.isEmpty()).toBe(false)
    })

    it('should add nodes', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.size()).toBe(3)
    })

    it('should enqueue nodes', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.isEmpty()).toBe(true)
    })
})