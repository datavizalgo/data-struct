package linkedlist.DoublyLinkedList;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.example.linkedlist.DoublyLinkedList.DoublyLinkedList;

public class DoublyLinkedListTest {

    @Test
    public void testDoublyLinkedList() {
        DoublyLinkedList list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7);
        list.append(8);
        list.append(9);
        list.append(10);
        Assertions.assertTrue(list.size() == 10);
        Assertions.assertTrue(list.findAt(0) == 1);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 });
        Assertions.assertArrayEquals(list.reverseToArray(), new int[] { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 });
    }

    @Test
    public void testDoublyLinkedListPrepend() {
        DoublyLinkedList list = new DoublyLinkedList();
        list.prepend(1);
        list.prepend(2);
        list.prepend(3);
        Assertions.assertEquals(list.size(), 3);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 3, 2, 1 });
        Assertions.assertArrayEquals(list.reverseToArray(), new int[] { 1, 2, 3 });
    }

    @Test
    public void testDoublyLinkedListInsertAt() {
        DoublyLinkedList list = new DoublyLinkedList();
        list.insertAt(1, 0);
        list.insertAt(2, 1);
        list.insertAt(3, 2);
        Assertions.assertEquals(list.size(), 3);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 1, 2, 3 });
        Assertions.assertArrayEquals(list.reverseToArray(), new int[] { 3, 2, 1 });

        list.append(4);
        list.insertAt(5, 3);
        Assertions.assertEquals(list.size(), 5);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 1, 2, 3, 5, 4 });
        Assertions.assertArrayEquals(list.reverseToArray(), new int[] { 4, 5, 3, 2, 1 });

        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.insertAt(6, 7);
        });
        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.insertAt(6, -1);
        });
    }

    @Test
    public void testDoublyLinkedListDeleteAt() {
        DoublyLinkedList list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        Assertions.assertEquals(list.size(), 6);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 1, 2, 3, 4, 5, 6 });
        list.deleteAt(0);
        Assertions.assertEquals(list.size(), 5);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 2, 3, 4, 5, 6 });
        Assertions.assertArrayEquals(list.reverseToArray(), new int[] { 6, 5, 4, 3, 2 });

        list.deleteAt(3);
        Assertions.assertEquals(list.size(), 4);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 2, 3, 4, 6 });
        Assertions.assertArrayEquals(list.reverseToArray(), new int[] { 6, 4, 3, 2 });

        list.deleteAt(3);
        Assertions.assertEquals(list.size(), 3);
        Assertions.assertArrayEquals(list.toArray(), new int[] { 2, 3, 4 });
        Assertions.assertArrayEquals(list.reverseToArray(), new int[] { 4, 3, 2 });
        Assertions.assertFalse(list.isEmpty());
        Assertions.assertTrue(list.findAt(0) == 2);

        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.deleteAt(3);
        });

        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.deleteAt(-1);
        });
    }

    @Test
    public void testDoublyLinkedListFindAt() {
        DoublyLinkedList list = new DoublyLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        Assertions.assertEquals(list.findAt(0), 1);
        Assertions.assertEquals(list.findAt(1), 2);
        Assertions.assertEquals(list.findAt(2), 3);
    }
}
