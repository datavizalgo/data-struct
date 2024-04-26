package stack;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.example.stack.Stack;

public class StackTest {
    
    @Test
    public void testIsEmpty() {
        Stack stack = new Stack();
        Assertions.assertEquals(true, stack.isEmpty());

    }

    @Test
    public void testPush() {
        Stack stack = new Stack();
        stack.push(10);
        Assertions.assertEquals(10, stack.top());
        Assertions.assertEquals(1, stack.size());
        Assertions.assertEquals(false, stack.isEmpty());

        stack.push(20);
        stack.push(30);
        Assertions.assertEquals(30, stack.top());
        Assertions.assertEquals(3, stack.size());

    }

    @Test
    public void testPop() {
        Stack stack = new Stack();
        stack.push(10);
        Assertions.assertEquals(10, stack.pop());
        Assertions.assertEquals(0, stack.size());
        Assertions.assertEquals(true, stack.isEmpty());

        stack.push(10);
        stack.push(20);
        Assertions.assertEquals(20, stack.pop());
        Assertions.assertEquals(1, stack.size());
        Assertions.assertEquals(false, stack.isEmpty());
        Assertions.assertEquals(10, stack.pop());
    }
}
