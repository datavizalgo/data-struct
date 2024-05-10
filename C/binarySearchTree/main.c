#include "bst.h"

int main(int argc, char const *argv[])
{
    bstree *bst = create_bstree();
    insert(bst, 10);
    insert(bst, 5);
    insert(bst, 15);
    insert(bst, 3);
    insert(bst, 7);
    insert(bst, 12);
    insert(bst, 17);

    preorder(bst->root);
    printf("---------preorder\n");

    inorder(bst->root);
    printf("---------inorder\n");

    postorder(bst->root);
    printf("---------postorder\n");

    levelorder(bst->root);
    printf("---------levelorder\n");

    bstnode *node = search_bst(bst->root, 7);
    printf("search node: %d\n", node->data);

    bstnode *min = min_bst_node(bst->root);
    printf("min node: %d\n", min->data);

    bstnode *max = max_bst_node(bst->root);
    printf("max node: %d\n", max->data);


    delete_bst(&bst->root, 7);

    levelorder(bst->root);
    printf("---------levelorder\n");
    free_bstree(bst);
    /* code */
    return 0;
}
