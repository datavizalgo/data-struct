package queue;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.example.queue.Queue;

public class QueueTest {
    
    @Test
    public void testQueue() {
        Queue<Integer> queue = new Queue<>();

        Assertions.assertTrue(queue.isEmpty());

    }

    @Test
    public void testEnqueue() {
        Queue<Integer> queue = new Queue<>();
        queue.enqueue(1);
        Assertions.assertEquals(1, queue.size());
        Assertions.assertEquals(1, queue.peek());
        queue.enqueue(2);
        Assertions.assertEquals(2, queue.size());
    }

    @Test
    public void testDequeue() {
        Queue<Integer> queue = new Queue<>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        Assertions.assertEquals(1, queue.dequeue());
        Assertions.assertEquals(2, queue.dequeue());
        Assertions.assertEquals(3, queue.dequeue());
        Assertions.assertEquals(4, queue.dequeue());
        Assertions.assertTrue(queue.isEmpty());
    }
}
