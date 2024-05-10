
#include "avl.h"

int main(int argc, char const *argv[])
{
    /* code */
    AVLTree tree = AVLInsert(NULL, 10);
    tree = AVLInsert(tree, 20);
    tree = AVLInsert(tree, 30);
    // print 中序：10 20 30
    tree = AVLInsert(tree, 5);
    tree = AVLInsert(tree, 3);
    // print 中序：3 5 10 20 30
    tree = AVLInsert(tree, 40);
    tree = AVLInsert(tree, 35);
    // print 中序：3 5 10 20 30 35 40

    tree = AVLInsert(tree, 4);
    tree = AVLInsert(tree, 2);
    tree = AVLInsert(tree, 1);
    // print 中序：1 2 3 4 5 10 20 30 35 40

    tree = AVLDelete(tree, 4);
    // print 中序：1 2 3 5 10 20 30 35 40

    tree = AVLDelete(tree, 20);
    // print 中序：1 2 3 5 10 30 35 40
    printAVLTree(tree);
    printf("\n");
    tree = AVLDelete(tree, 30);
    tree = AVLDelete(tree, 35);
    tree = AVLDelete(tree, 40);
    // print 中序：1 2 3 5 10
    printAVLTree(tree);

    freeAVLTree(tree);
    return 0;
}
