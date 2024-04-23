package linkedlist.CircularLinkedList;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.example.linkedlist.CircularLinkedList.CircularLinkedList;

public class CircularLinkedListTest {

    @Test
    public void testCircularLinkedListIsEmpty() {
        CircularLinkedList list = new CircularLinkedList();
        Assertions.assertTrue(list.isEmpty());
        Assertions.assertEquals(0, list.size());
        list.append(1);
        Assertions.assertFalse(list.isEmpty());
        Assertions.assertEquals(1, list.size());
    }

    @Test
    public void testCircularLinkedListAppend() {
        CircularLinkedList list = new CircularLinkedList();
        list.append(1);
        Assertions.assertEquals(1, list.size());
        Assertions.assertArrayEquals(new int[] { 1 }, list.toArray());
        list.append(2);
        Assertions.assertEquals(2, list.size());
        Assertions.assertArrayEquals(new int[] { 1, 2 }, list.toArray());
        list.append(3);
        Assertions.assertEquals(3, list.size());
        Assertions.assertArrayEquals(new int[] { 1, 2, 3 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 3, 2, 1 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());

        list.append(4);
        Assertions.assertEquals(4, list.size());
        Assertions.assertArrayEquals(new int[] { 1, 2, 3, 4 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 4, 3, 2, 1 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());

    }

    @Test
    public void testCircularLinkedListPrepend() {
        CircularLinkedList list = new CircularLinkedList();
        list.prepend(1);
        Assertions.assertEquals(1, list.size());
        Assertions.assertArrayEquals(new int[] { 1 }, list.toArray());
        list.prepend(2);
        Assertions.assertEquals(2, list.size());
        Assertions.assertArrayEquals(new int[] { 2, 1 }, list.toArray());
        list.prepend(3);
        Assertions.assertEquals(3, list.size());
        Assertions.assertArrayEquals(new int[] { 3, 2, 1 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 1, 2, 3 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());

        list.prepend(4);
        Assertions.assertEquals(4, list.size());
        Assertions.assertArrayEquals(new int[] { 4, 3, 2, 1 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 1, 2, 3, 4 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());

        list.prepend(5);
        Assertions.assertEquals(5, list.size());
        Assertions.assertArrayEquals(new int[] { 5, 4, 3, 2, 1 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 1, 2, 3, 4, 5 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());
    }

    @Test
    public void testCircularLinkedListInsertAt() {
        CircularLinkedList list = new CircularLinkedList();
        list.insertAt(1, 0);
        Assertions.assertEquals(1, list.size());
        Assertions.assertArrayEquals(new int[] { 1 }, list.toArray());
        list.insertAt(2, 1);
        Assertions.assertEquals(2, list.size());
        Assertions.assertArrayEquals(new int[] { 1, 2 }, list.toArray());
        list.insertAt(3, 2);
        Assertions.assertEquals(3, list.size());
        Assertions.assertArrayEquals(new int[] { 1, 2, 3 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 3, 2, 1 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());

        list.insertAt(4, 0);
        Assertions.assertEquals(4, list.size());
        Assertions.assertArrayEquals(new int[] { 4, 1, 2, 3 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 3, 2, 1, 4 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());

        list.insertAt(5, 1);
        Assertions.assertEquals(5, list.size());
        Assertions.assertArrayEquals(new int[] { 4, 5, 1, 2, 3 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 3, 2, 1, 5, 4 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());

        list.insertAt(6, 2);
        Assertions.assertEquals(6, list.size());
        Assertions.assertArrayEquals(new int[] { 4, 5, 6, 1, 2, 3 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 3, 2, 1, 6, 5, 4 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());

        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.insertAt(7, -1);
        });

        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.insertAt(7, 7);
        });
    }

    @Test
    public void testCircularLinkedListDeleteAt() {
        CircularLinkedList list = new CircularLinkedList();
        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.deleteAt(0);
        });
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        Assertions.assertEquals(4, list.size());
        Assertions.assertArrayEquals(new int[] { 1, 2, 3, 4 }, list.toArray());

        list.deleteAt(0);
        Assertions.assertEquals(3, list.size());
        Assertions.assertArrayEquals(new int[] { 2, 3, 4 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 4, 3, 2 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());

        list.deleteAt(2);
        Assertions.assertEquals(2, list.size());
        Assertions.assertArrayEquals(new int[] { 2, 3 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 3, 2 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());

        list.append(4);
        list.append(8);
        list.append(5);
        Assertions.assertEquals(5, list.size());

        list.deleteAt(3);
        Assertions.assertEquals(4, list.size());
        Assertions.assertArrayEquals(new int[] { 2, 3, 4, 5 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 5, 4, 3, 2 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());

        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.deleteAt(-1);
        });

        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.deleteAt(5);
        });

        list.deleteAt(3);
        Assertions.assertEquals(3, list.size());
        Assertions.assertArrayEquals(new int[] { 2, 3, 4 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 4, 3, 2 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());
        Assertions.assertFalse(list.isEmpty());

        list.deleteAt(1);
        Assertions.assertEquals(2, list.size());
        Assertions.assertArrayEquals(new int[] { 2, 4 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 4, 2 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());

        list.deleteAt(1);
        Assertions.assertEquals(1, list.size());
        Assertions.assertArrayEquals(new int[] { 2 }, list.toArray());
        Assertions.assertArrayEquals(new int[] { 2 }, list.reverseToArray());
        Assertions.assertTrue(list.isCircular());

        list.deleteAt(0);
        Assertions.assertEquals(0, list.size());
        Assertions.assertArrayEquals(new int[] {}, list.toArray());
        Assertions.assertArrayEquals(new int[] {}, list.reverseToArray());
        Assertions.assertFalse(list.isCircular());
        Assertions.assertTrue(list.isEmpty());
        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.deleteAt(0);
        });

    }


    @Test
    public void testCircularLinkedListFindAt() {
        CircularLinkedList list = new CircularLinkedList();
        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.findAt(0);
        });
        list.append(1);

        Assertions.assertEquals(1, list.findAt(0));

        list.append(2);
        Assertions.assertEquals(2, list.findAt(1));

        list.append(3);
        Assertions.assertEquals(3, list.findAt(2));

        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.findAt(-1);
        });
        Assertions.assertThrows(IndexOutOfBoundsException.class, () -> {
            list.findAt(3);
        });
    }
}
