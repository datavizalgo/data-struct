
#include <stdlib.h>
#include <stdio.h>
#include "queue.h"

typedef struct bstnode
{
    int data;
    struct bstnode *left;
    struct bstnode *right;
} bstnode;

typedef struct bstree
{
    bstnode *root;
    /* data */
} bstree;

bstnode *create_bst_node(int data);
bstree *create_bstree();
bstnode *insert_bst_node(bstnode *root, int data);
void insert(bstree *tree, int data);
bstnode *search_bst(bstnode *root, int data);
int delete_bst(bstnode **root, int data);
bstnode *min_bst_node(bstnode *root);
bstnode *max_bst_node(bstnode *root);

int find(bstree *tree, int data);
int find_min(bstree *tree);
int find_max(bstree *tree);

void inorder(bstnode *root);
void preorder(bstnode *root);
void postorder(bstnode *root);
void levelorder(bstnode *root);

void free_bstree(bstree *tree);
void free_bst_node(bstnode *root);

bstnode *create_bst_node(int data)
{

    bstnode *new_node = (bstnode *)malloc(sizeof(bstnode));
    new_node->data = data;
    new_node->left = NULL;
    new_node->right = NULL;
    return new_node;
};

bstree *create_bstree()
{
    bstree *new_tree = (bstree *)malloc(sizeof(bstree));
    new_tree->root = NULL;
    return new_tree;
}

bstnode *insert_bst_node(bstnode *root, int data)
{
    if (root == NULL)
    {
        root = create_bst_node(data);
        return root;
    }
    if (data < root->data)
    {
        root->left = insert_bst_node(root->left, data);
    }
    else if (data > root->data)
    {
        root->right = insert_bst_node(root->right, data);
    }

    return root;
};

/**
 *  insert data into bstree
 */
void insert(bstree *tree, int data)
{
    tree->root = insert_bst_node(tree->root, data);
}

bstnode *search_bst(bstnode *root, int data)
{
    if (root == NULL)
    {
        return NULL;
    }
    if (root->data == data)
    {
        return root;
    }
    if (data < root->data)
    {
        return search_bst(root->left, data);
    }
    return search_bst(root->right, data);
}


int find(bstree *tree, int data)
{
    bstnode *node = search_bst(tree->root, data);
    if (node == NULL)
    {
        return 0;
    }
    return 1;
}

int find_min(bstree *tree)
{
    bstnode *node = min_bst_node(tree->root);
    if (node == NULL)
    {
        return NULL;
    }
    return node->data;
}   

int find_max(bstree *tree)
{
    bstnode *node = max_bst_node(tree->root);
    if (node == NULL)
    {
        return NULL;
    }
    return node->data;
}

int delete_bst(bstnode **root, int data)
{
    if (root == NULL)
    {
        return 0;
    }

    if (data < (*root)->data)
    {
        return delete_bst(&(*root)->left, data);
    }
    else if (data > (*root)->data)
    {
        return delete_bst(&(*root)->right, data);
    }
    else
    {
        if ((*root)->left == NULL && (*root)->right == NULL)
        {
            free(*root);
            *root = NULL;
        }
        else if ((*root)->left == NULL)
        {
            bstnode **tmp = root;
            *root = (*root)->right;
            free(*tmp);
        }
        else if ((*root)->right == NULL)
        {
            bstnode **tmp = root;
            *root = (*root)->left;
            free(*tmp);
        }
        else
        {
            bstnode *tmp = min_bst_node((*root)->right);
            (*root)->data = tmp->data;
            delete_bst(&(*root)->right, tmp->data);
        }
    }
    return 1;
}

bstnode *min_bst_node(bstnode *root)
{

    if (root == NULL)
    {
        return NULL;
    }

    if (root->left == NULL)
    {
        return root;
    }

    return min_bst_node(root->left);
}

bstnode *max_bst_node(bstnode *root)
{

    if (root == NULL)
    {
        return NULL;
    }

    if (root->right == NULL)
    {
        return root;
    }

    return max_bst_node(root->right);
}

void free_bstree(bstree *tree)
{
    if (tree->root == NULL)
    {
        return;
    }
    free_bst_node(tree->root);
    free(tree);
}

void free_bst_node(bstnode *root)
{
    if (root == NULL)
    {
        return;
    }

    free_bst_node(root->left);
    free_bst_node(root->right);
    free(root);
}
/**
 *  inorder traversal
 *  中序遍历
 */
void inorder(bstnode *root)
{
    if (root == NULL)
    {
        return;
    }
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}
/**
 *  preorder traversal
 * 前序遍历
 */
void preorder(bstnode *root)
{
    if (root == NULL)
    {
        return;
    }
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}

/**
 *  postorder traversal
 *  后序遍历
 */
void postorder(bstnode *root)
{
    if (root == NULL)
    {
        return;
    }
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}

/**
 *  levelorder traversal
 * 层序遍历
 */
void levelorder(bstnode *root)
{
    if (root == NULL)
    {
        return;
    }

    queue *q = create_queue();

    enqueue(q, root);
    bstnode *tmp;
    while (!is_empty(q) && tmp != NULL)
    {
        tmp = dequeue(q);
        printf("%d ", tmp->data);
        if (tmp->left != NULL)
        {
            enqueue(q, tmp->left);
        }

        if (tmp->right != NULL)
        {
            enqueue(q, tmp->right);
        }
    }

    printf("\n");
    // TODO
}


