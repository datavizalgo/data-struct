package tree;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.example.tree.AvlTree;

public class AvlTest {

    @Test
    public void testAvlTree() {
        AvlTree tree = new AvlTree();
        for (int i = 0; i <= 150; i += 10) {
            tree.insert(i);
        }

        Assertions.assertEquals(tree.inOrder().toString(),
                "[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]");
    }

    @Test
    public void testAvlTreeLeftRotate() {
        AvlTree tree = new AvlTree();
        tree.insert(10);
        tree.insert(20);
        tree.insert(30);
        Assertions.assertEquals(tree.inOrder().toString(), "[10, 20, 30]");
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 20, 10, 30 });

    }

    @Test
    public void testAvlTreeRightRotate() {
        AvlTree tree = new AvlTree();
        tree.insert(30);
        tree.insert(20);
        tree.insert(10);
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 20, 10, 30 });
        Assertions.assertArrayEquals(tree.inOrder().toArray(), new Integer[] { 10, 20, 30 });
    }

    @Test
    public void testAvlTreeLeftRightRotate() {
        AvlTree tree = new AvlTree();
        tree.insert(30);
        tree.insert(10);
        tree.insert(20);
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 20, 10, 30 });
        Assertions.assertArrayEquals(tree.inOrder().toArray(), new Integer[] { 10, 20, 30 });
    }

    @Test
    public void testAvlTreeRightLeftRotate() {
        AvlTree tree = new AvlTree();
        tree.insert(10);
        tree.insert(30);
        tree.insert(20);
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 20, 10, 30 });
        Assertions.assertArrayEquals(tree.inOrder().toArray(), new Integer[] { 10, 20, 30 });
    }

    @Test
    public void testAvlTreeDelete() {
        AvlTree tree = new AvlTree();
        for (int i = 10; i <= 30; i += 10) {
            tree.insert(i);
        }
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 20, 10, 30 });
        tree.delete(30);
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 20, 10 });

        tree.delete(10);
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 20 });

        tree.delete(20);
        Assertions.assertTrue(tree.isEmpty());
    }

    @Test
    public void testAvlTreeDelete2() {
        AvlTree tree = new AvlTree();
        
        tree.insert(10);
        tree.insert(20);
        tree.insert(30);
        tree.insert(40);
        tree.insert(50);
        tree.insert(60);    
        tree.insert(70);
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 40, 20, 60, 10, 30, 50,70 });

        tree.delete(40);

        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 50, 20, 60, 10, 30, 70 });

        tree.delete(60);
        Assertions.assertArrayEquals(tree.levelOrder().toArray(), new Integer[] { 50, 20, 70, 10, 30 });
    }

}
