#include "rbtree.h"

int main(int argc, char const *argv[])
{
    /* code */
    rbtree *t = rbtree_create();

    rbtree_insert(t, 10);
    rbtree_insert(t, 20);
    rbtree_insert(t, 30);
    rbtree_insert(t, 40);
    rbtree_insert(t, 50);
    rbtree_insert(t, 60);
    rbtree_insert(t, 70);
    rbtree_insert(t, 80);
    rbtree_insert(t, 90);
    rbtree_insert(t, 100);
    rbtree_print(t);
    if(isRedBlackTree(t)){
        printf("is red black tree\n");
    }

    rbtree_delete(t, 70);
    rbtree_print(t);

    if(isRedBlackTree(t)){
        printf("is red black tree\n");
    }

    rbtree_delete(t,90);

    rbtree_print(t);
    if(isRedBlackTree(t)){
        printf("is red black tree\n");
    }
    printf("rbtree c implementation\n");
    return 0;
}
