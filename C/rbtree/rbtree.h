#ifndef RED_BLACK_TREE_H
#define RED_BLACK_TREE_H

#include <stdlib.h>
#include <stdio.h>
#include <assert.h>

typedef enum Color
{
    RED,
    BLACK
} Color;

typedef struct rbtree_node
{
    /* data */
    int data;
    struct rbtree_node *left;
    struct rbtree_node *right;
    struct rbtree_node *parent;
    Color color;
} rbtree_node;

typedef struct rbtree
{
    /* data */

    rbtree_node *root;
    // 哨兵节点
    rbtree_node *nil;
} rbtree;

rbtree_node *rbtree_create_node(int data);

rbtree *rbtree_create();

void free_rbtree_node(rbtree_node *node, rbtree_node *nil);
void free_rbtree(rbtree *t);

void rotate_left(rbtree *tree, rbtree_node *node);
void rotate_right(rbtree *tree, rbtree_node *node);
void rbtree_insert(rbtree *t, int data);
rbtree_node *rbtree_node_insert(rbtree_node *node, rbtree_node *new_node, rbtree_node *parent, rbtree_node *nil);

void rbtree_insert_fixup(rbtree *t, rbtree_node *node);
void rbtree_delete(rbtree *t, int data);
void rbtree_transplant(rbtree *tree, rbtree_node *node, rbtree_node *child);
void rbtree_delete_fixup(rbtree *t, rbtree_node *node);

rbtree_node *findMinNode(rbtree_node *node, rbtree_node *nil);
rbtree_node *findNode(rbtree *tree, int data);

int isRed(rbtree_node *node);
int isBlack(rbtree_node *node);
int isRedBlackTree(rbtree *t);
int getBlackHeight(rbtree_node *node);
int isRedBlackTreeHelper(rbtree_node *node, rbtree_node *nil);

void rbtree_print(rbtree *t);
void rbtree_print_helper(rbtree_node *node, int level, rbtree_node *nil);

rbtree_node *rbtree_create_node(int data)
{

    rbtree_node *node = (rbtree_node *)malloc(sizeof(rbtree_node));
    if (node == NULL)
    {
        printf("Error: rbtree_node malloc failed\n");
        exit(1);
    }
    node->data = data;

    node->left = NULL;
    node->right = NULL;
    node->parent = NULL;

    node->color = RED;

    return node;
}

rbtree *rbtree_create()
{

    rbtree *t = (rbtree *)malloc(sizeof(rbtree));
    if (t == NULL)
    {
        printf("Error:rbtree malloc failed\n");
        exit(1);
    }
    t->nil = rbtree_create_node(-1);
    // 哨兵节点必须是黑色
    t->nil->color = BLACK;
    t->root = NULL;
    return t;
}

void free_rbtree(rbtree *t)
{
    if (t != NULL)
    {

        rbtree_node *node = t->root;
        free_rbtree_node(node, t->nil);
        free(t->nil);
        free(t);
    }
}

void free_rbtree_node(rbtree_node *node, rbtree_node *nil)
{
    if (node == NULL)
    {
        return;
    }
    if (node->left != nil)
    {
        free_rbtree_node(node->left, nil);
    }
    if (node->right != nil)
    {
        free_rbtree_node(node->right, nil);
    }
    free(node);
}

rbtree_node *findMinNode(rbtree_node *node, rbtree_node *nil)
{
    if (node == NULL)
    {
        return NULL;
    }
    rbtree_node *current = node;

    while (current->left != nil)
    {
        current = current->left;
    }

    return current;
}

rbtree_node *findNode(rbtree *tree, int data)
{
    rbtree_node *current = tree->root;

    while (current != tree->nil)
    {
        if (current->data == data)
        {
            return current;
        }
        else if (current->data > data)
        {
            current = current->left;
        }
        else
        {
            current = current->right;
        }
    }

    return NULL;
}

void rotate_left(rbtree *tree, rbtree_node *node)
{
    rbtree_node *right_child = node->right;

    node->right = right_child->left;

    if (right_child->left != tree->nil)
    {
        right_child->left->parent = node;
    }
    right_child->parent = node->parent;

    if (node->parent == tree->nil)
    {
        tree->root = right_child;
    }
    else if (node->parent->left == node)
    {
        node->parent->left = right_child;
    }
    else
    {
        node->parent->right = right_child;
    }
    right_child->left = node;

    node->parent = right_child;
}

void rotate_right(rbtree *tree, rbtree_node *node)
{
    rbtree_node *left_child = node->left;

    node->left = left_child->right;

    if (left_child->right != tree->nil)
    {
        left_child->right->parent = node;
    }

    left_child->parent = node->parent;

    if (node->parent == tree->nil)
    {
        tree->root = left_child;
    }
    else if (node == node->parent->left)
    {
        node->parent->left = left_child;
    }
    else
    {
        node->parent->right = left_child;
    }

    left_child->right = node;

    node->parent = left_child;
}

void rbtree_insert(rbtree *t, int data)
{
    if (t == NULL)
        return;
    rbtree_node *new_node = rbtree_create_node(data);
    new_node->left = new_node->right = new_node->parent = t->nil;
    t->root = rbtree_node_insert(t->root, new_node, t->nil, t->nil);
    rbtree_insert_fixup(t, new_node);
}

rbtree_node *rbtree_node_insert(rbtree_node *node, rbtree_node *new_node, rbtree_node *parent, rbtree_node *nil)
{
    if (node == nil || node == NULL)
    {
        new_node->parent = parent;
        return new_node;
    }

    if (node->data > new_node->data)
    {
        node->left = rbtree_node_insert(node->left, new_node, node, nil);
    }
    else if (node->data < new_node->data)
    {
        node->right = rbtree_node_insert(node->right, new_node, node, nil);
    }
    return node;
}

void rbtree_insert_fixup(rbtree *t, rbtree_node *node)
{
    // 当node->parent的颜色为黑色时或者node是根节点时（因为node为根节点是只有可能违反第二条性质，但在代码最后有将根节点标记为黑色）终止循环
    while (node != t->root && node->parent->color == RED)
    {

        // node->parent 是node祖父的节点的左子树
        if (node->parent == node->parent->parent->left)
        {
            // 所以它的叔叔节点就是其祖父节点的右子树
            rbtree_node *rightNode = node->parent->parent->right;
            // 对应情况1 node的父节点和node的叔叔节点都是红色
            if (rightNode != NULL && rightNode->color == RED)
            {
                // 将node 节点的父节点和叔叔节点都标记为黑色
                node->parent->color = BLACK;
                rightNode->color = BLACK;
                // 将node 的祖父节点标记为红色
                node->parent->parent->color = RED;
                // 用node 的祖父节点开始新的循环
                node = node->parent->parent;
            }
            else
            {

                if (node == node->parent->right)
                {
                    node = node->parent;
                    rotate_left(t, node);
                }

                node->parent->color = BLACK;
                node->parent->parent->color = RED;
                rotate_right(t, node->parent->parent);
            }
        }
        else
        {
            // 右子树
            rbtree_node *leftNode = node->parent->parent->left;
            if (leftNode != NULL && leftNode->color == RED)
            {
                node->parent->color = BLACK;
                leftNode->color = BLACK;
                node->parent->parent->color = RED;
                node = node->parent->parent;
            }
            else
            {
                if (node == node->parent->left)
                {
                    node = node->parent;
                    rotate_right(t, node);
                }

                node->parent->color = BLACK;
                node->parent->parent->color = RED;
                rotate_left(t, node->parent->parent);
            }
        }
    }
    t->root->color = BLACK;
}

// 将child 置换到 node 的位置
void rbtree_transplant(rbtree *tree, rbtree_node *node, rbtree_node *child)
{
    if (node->parent == NULL)
    {
        tree->root = child;
    }
    else if (node == node->parent->left)
    {
        node->parent->left = child;
    }
    else
    {
        node->parent->right = child;
    }
    if (child != NULL)
    {
        child->parent = node->parent;
    }
}

void rbtree_delete(rbtree *t, int data)
{
    rbtree_node *delNode = findNode(t, data);
    if (delNode == NULL)
    {
        return;
    }
    Color delNodeColor = delNode->color;
    rbtree_node *child;
    if (delNode->left == t->nil)
    {
        /* code */
        child = delNode->right;
        rbtree_transplant(t, delNode, delNode->right);

    }
    else if (delNode->right == t->nil)
    {
        child = delNode->left;
        rbtree_transplant(t, delNode, delNode->left);
    }
    else
    {
        rbtree_node *minNode = findMinNode(delNode->right, t->nil);
        delNodeColor = minNode->color;
        child = minNode->right;
        if (minNode->parent == delNode)
        {
            child->parent = minNode;
        }
        else
        {
            rbtree_transplant(t, minNode, minNode->right);
            minNode->right = delNode->right;
            minNode->right->parent = minNode;
        }
        rbtree_transplant(t, delNode, minNode);
        minNode->left = delNode->left;
        minNode->left->parent = minNode;
        minNode->color = delNode->color;
    }
    if (delNodeColor == BLACK)
    {
        rbtree_delete_fixup(t, child);
    }

    free(delNode);
}

void rbtree_delete_fixup(rbtree *t, rbtree_node *node)
{
    while (node != t->root && node->color == BLACK)
    {
        if (node == node->parent->left)
        {
            rbtree_node *sibling = node->parent->right;
            if (sibling->color == RED)
            {
                sibling->color = BLACK;
                node->parent->color = RED;
                rotate_left(t, node->parent);
                sibling = node->parent->right;
            }
            if (sibling->left->color == BLACK && sibling->right->color == BLACK)
            {
                sibling->color = RED;
                node = node->parent;
            }
            else
            {
                if (sibling->right->color == BLACK)
                {
                    sibling->left->color = BLACK;
                    sibling->color = RED;
                    rotate_right(t, sibling);
                    sibling = node->parent->right;
                }
                sibling->color = node->parent->color;
                node->parent->color = BLACK;
                sibling->right->color = BLACK;
                rotate_left(t, node->parent);
                node = t->root;
            }
            /* code */
        }
        else
        {
            rbtree_node *sibling = node->parent->left;
            if (sibling->color == RED)
            {
                sibling->color = BLACK;
                node->parent->color = RED;
                rotate_right(t, node->parent);
                sibling = node->parent->left;
            }
            if (sibling->left->color == BLACK && sibling->right->color == BLACK)
            {
                sibling->color = RED;
                node = node->parent;
            }
            else
            {
                if (sibling->left->color == BLACK)
                {
                    sibling->right->color = BLACK;
                    sibling->color = RED;
                    rotate_left(t, sibling);
                    sibling = node->parent->left;
                }
                sibling->color = node->parent->color;
                node->parent->color = BLACK;
                sibling->left->color = BLACK;
                rotate_right(t, node->parent);
                node = t->root;
            }
        }
    }
    node->color = BLACK;
}

int isRed(rbtree_node *node)
{
    if (node == NULL)
    {
        return 0;
    }
    return node->color == RED;
}

int isBlack(rbtree_node *node)
{
    if (node == NULL)
    {
        return 0;
    }
    return node->color == BLACK;
}

int getBlackHeight(rbtree_node *node)
{
    if (!node)
        return 0; // 空节点黑色高度为0
    if (node->color == BLACK)
        return 1 + getBlackHeight(node->left); // 黑色节点加1，并递归左子树
    return getBlackHeight(node->left);         // 红色节点不增加高度，直接递归左子树
}

int isRedBlackTree(rbtree *t)
{
    if (t->root == NULL)
        return 1;

    // 根节点必须是黑色
    if (isRed(t->root))
        return 0;

    return isRedBlackTreeHelper(t->root, t->nil);
}
int isRedBlackTreeHelper(rbtree_node *node, rbtree_node *nil)
{
    if (!node)
        return 1; // 空节点视为满足条件

    // 3. 检查红色节点的孩子是否为黑色
    if (isRed(node))
    {
        if (isRed(node->left) || isRed(node->right))
        {
            return 0;
        }
    }

    // 4. 递归检查左子树和右子树
    if (!isRedBlackTreeHelper(node->left, nil))
        return 0;
    if (!isRedBlackTreeHelper(node->right, nil))
        return 0;

    // 5. 检查从当前节点到其所有叶子节点的简单路径上黑色节点的数量是否相同
    // 这通常需要一个额外的函数来计算黑色高度，并比较左右子树的黑色高度
    int leftBlackHeight = getBlackHeight(node->left);
    int rightBlackHeight = getBlackHeight(node->right);
    if (leftBlackHeight != rightBlackHeight)
        return 0;

    // 所有检查都通过，返回true
    return 1;
}

void rbtree_print(rbtree *t)
{
    rbtree_print_helper(t->root, 0, t->nil);
}

void rbtree_print_helper(rbtree_node *node, int level, rbtree_node *nil)
{
    if (node == nil)
    {
        return;
    }
    rbtree_print_helper(node->right, level + 1, nil);
    for (int i = 0; i < level; i++)
    {
        printf("    ");
    }
    printf("%d : %d\n", node->data, node->color);
    rbtree_print_helper(node->left, level + 1, nil);
}
#endif