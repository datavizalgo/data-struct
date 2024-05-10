
#pragma once
#include <stdlib.h>
#include <stdio.h>
typedef struct _AVLNode
{
    int data;
    int height;
    struct _AVLNode *left;
    struct _AVLNode *right;
} AVLNode;

typedef AVLNode *AVLTree;

AVLNode *AVLCreateNode(const int data);

AVLTree AVLInsert(AVLTree root, const int data);

AVLTree AVLDelete(AVLTree root, const int data);

int height(AVLTree root);
int getMaxHeight(AVLTree root);
// 旋转
// 左旋转（LL旋转）
AVLTree leftRotate(AVLTree node);
// 右旋转（RR旋转）
AVLTree rightRotate(AVLTree node);
// 右左旋转（RL旋转）
AVLTree rightLeftRotate(AVLTree node);
// 左右旋转（LR旋转）
AVLTree leftRightRotate(AVLTree node);

// 再平衡 通过旋转让AVL 树再度平衡
AVLTree rebalance(const int data, AVLTree node);

AVLNode *AVLFindMin(AVLTree root);

void freeAVLTree(AVLTree root);

void printAVLTree(AVLTree root);

AVLNode *AVLCreateNode(const int data)
{
    AVLNode *node = (AVLNode *)malloc(sizeof(AVLNode));
    node->data = data;
    node->height = 1;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int height(AVLTree root)
{
    if (root == NULL)
    {
        return -1;
    }
    return root->height;
}

int getMaxHeight(AVLTree root)
{
    if (root == NULL)
    {
        return -1;
    }
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    return leftHeight > rightHeight ? leftHeight : rightHeight;
}

AVLTree leftRotate(AVLTree node)
{

    AVLTree rightNode = node->right;
    node->right = rightNode->left;
    rightNode->left = node;
    node->height = getMaxHeight(node);
    rightNode->height = getMaxHeight(rightNode);
    return rightNode;
}

AVLTree rightRotate(AVLTree node)
{
    AVLTree leftNode = node->left;
    node->left = leftNode->right;
    leftNode->right = node;
    node->height = getMaxHeight(node);
    leftNode->height = getMaxHeight(leftNode);
    return leftNode;
}

AVLTree rightLeftRotate(AVLTree node)
{
    node->right = rightRotate(node->right);
    return leftRotate(node);
}

AVLTree leftRightRotate(AVLTree node)
{
    node->left = leftRotate(node->left);
    return rightRotate(node);
}

AVLTree rebalance(const int data, AVLTree node)
{
    if (node == NULL)
        return NULL;

    int leftHeight = height(node->left);
    int rightHeight = height(node->right);
    if (leftHeight - rightHeight == 2)
    {
        if (data > node->left->data)
        {
            return leftRotate(node);
        }
        else
        {
            return rightLeftRotate(node);
        }
    }
    else if (rightHeight - leftHeight == 2)
    {
        if (data < node->right->data)
        {
            return rightRotate(node);
        }
        else
        {
            return leftRightRotate(node);
        }
    }

    return node;
}
// 插入
AVLTree AVLInsert(AVLTree root, const int data)
{
    if (root == NULL)
    {
        return AVLCreateNode(data);
    }
    if (data < root->data)
    {
        root->left = AVLInsert(root->left, data);
    }
    else if (data > root->data)
    {
        root->right = AVLInsert(root->right, data);
    }
    root = rebalance(data, root);
    root->height = getMaxHeight(root)+1;
    return root;
}

// 删除
AVLTree AVLDelete(AVLTree root, const int data)
{

    if (root == NULL)
    {
        return root;
    }
    if (data < root->data)
    {
        root->left = AVLDelete(root->left, data);
    }
    else if (data > root->data)
    {
        root->right = AVLDelete(root->right, data);
    }
    else if (data == root->data)
    {
        if (root->left == NULL)
        {
            AVLTree rightNode = root->right;
            free(root);
            return rightNode;
        }
        else if (root->right == NULL)
        {
            AVLTree leftNode = root->left;
            free(root);
            return leftNode;
        }
        AVLTree minNode = AVLFindMin(root->right);
        root->data = minNode->data;
        root->right = AVLDelete(root->right, minNode->data);

        root = rebalance(data, root);
        root->height = getMaxHeight(root);
    }
    return root;
}

AVLTree AVLFindMin(AVLTree root)
{

    if (root == NULL)
    {
        return NULL;
    }
    while (root->left != NULL)
    {
        root = root->left;
    }
    return root;
}

void freeAVLTree(AVLTree root)
{

    if (root == NULL)
    {
        return;
    }

    freeAVLTree(root->left);
    freeAVLTree(root->right);
    free(root);
}

void printAVLTree(AVLTree root)
{

    if (root == NULL)
    {
        return;
    }
    printAVLTree(root->left);
    printf("%d ", root->data);
    printAVLTree(root->right);
}