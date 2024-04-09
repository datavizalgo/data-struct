#pragma once

#include <stdio.h>
#include <malloc.h>

typedef struct _SinglyLinkedListNode SinglyLinkedListNode;

struct _SinglyLinkedListNode
{
    struct _SinglyLinkedListNode *next;
    int data;
};

typedef struct SinglyLinkedList
{
    SinglyLinkedListNode *head;
    int length;
} SinglyLinkedList;

SinglyLinkedListNode *createNode(int data);
SinglyLinkedList *createSinglyLinkedList();
// 插入列表头
void prepend(SinglyLinkedList *list, SinglyLinkedListNode *node);
// 添加到尾部
void append(SinglyLinkedList *list, SinglyLinkedListNode *node);

// 插入到指定位置
void insertAt(SinglyLinkedList *list, SinglyLinkedListNode *node, int index);
// 删除指定位置
void removeAt(SinglyLinkedList *list, int index);
// 删除指定值
void removeValue(SinglyLinkedList *list, int value);
// 查找指定位置值
int findAt(SinglyLinkedList *list, int indedx);

// 清空列表
void clear(SinglyLinkedList *list);
// 销毁列表
void destroySinglyLinkedList(SinglyLinkedList *list);
// 打印列表
void printList(SinglyLinkedList *list);
// 获取列表长度
int length(SinglyLinkedList *list);
// 获取指定位置的值
int get(SinglyLinkedList *list, int index);
