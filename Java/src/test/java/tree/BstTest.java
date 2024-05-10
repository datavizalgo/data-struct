package tree;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.example.tree.BinarySeachTree;

public class BstTest {
    
    @Test
    public void test() {
        BinarySeachTree bst = new BinarySeachTree();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(1);
        bst.insert(4);
        bst.insert(6);
        bst.insert(8);
        bst.preOrder(bst.root);
        System.out.println("preOrder");
        bst.inOrder(bst.root);
        System.out.println("inOrder");
        bst.postOrder(bst.root);
        System.out.println("postOrder");
        bst.levelOrder();
        System.out.println("levelOrder");

      Assertions.assertEquals(8,bst.findMax());
      Assertions.assertEquals(1,bst.findMin());
      bst.delete(8);
      bst.levelOrder();
      Assertions.assertEquals(7,bst.findMax());
      Assertions.assertEquals(1,bst.findMin());

      bst.delete(7);
      bst.levelOrder();
      Assertions.assertEquals(6,bst.findMax());
      Assertions.assertEquals(1,bst.findMin());

      bst.delete(6);
      bst.levelOrder();

      bst.delete(5);

      bst.levelOrder();
    }
}
