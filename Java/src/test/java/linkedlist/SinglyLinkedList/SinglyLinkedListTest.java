package linkedlist.SinglyLinkedList;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import com.example.linkedlist.SinglyLinkedList.SinglyLinkedList;

public class SinglyLinkedListTest {

    @Test
    public void testEmptyList() {
        SinglyLinkedList list = new SinglyLinkedList();
        Assertions.assertEquals(0, list.size());
        Assertions.assertTrue(list.isEmpty());
    }

    @Test
    public void testNonEmptyList() {
        SinglyLinkedList list = new SinglyLinkedList();
        list.append(1);
        Assertions.assertEquals(1, list.size());
        Assertions.assertFalse(list.isEmpty());
    }

    @Test
    public void testPrepend() {
        SinglyLinkedList list = new SinglyLinkedList();
        list.prepend(1);
        list.prepend(2);
        list.prepend(3);
        Assertions.assertEquals(3, list.size());
        Assertions.assertEquals(3, list.findAt(0));
        Assertions.assertArrayEquals(list.toArray(), new int[] { 3, 2, 1 });
    }

    @Test
    public void testAppend() {
        SinglyLinkedList list = new SinglyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        Assertions.assertEquals(3, list.size());
        Assertions.assertEquals(3, list.findAt(2));
        Assertions.assertArrayEquals(list.toArray(), new int[] { 1, 2, 3 });
    }

    @Test
    public void testInsertion() {
        SinglyLinkedList list = new SinglyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        Assertions.assertEquals(3, list.size());
        Assertions.assertArrayEquals(list.toArray(), new int[] { 1, 2, 3 });
        list.insertAt(0, 0);
        list.insertAt(4, 4);
        list.insertAt(5, 2);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 0, 1, 5, 2, 3, 4 });
        Assertions.assertEquals(6, list.size());
    }

    @Test
    public void testDeletion() {
        SinglyLinkedList list = new SinglyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.removeAt(2);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 1, 2 });
        Assertions.assertEquals(2, list.size());
    }

    @Test
    public void testSearch() {
        SinglyLinkedList list = new SinglyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        Assertions.assertEquals(3, list.findAt(2));
    }

}
