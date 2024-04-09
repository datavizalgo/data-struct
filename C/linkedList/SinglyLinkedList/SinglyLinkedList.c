
#include "SinglyLinkedList.h"
#include <assert.h>
// 创建节点
SinglyLinkedListNode *createNode(int data)
{
    SinglyLinkedListNode *node = (SinglyLinkedListNode *)malloc(sizeof(SinglyLinkedListNode));
    node->data = data;
    node->next = NULL;
    return node;
}
// 初始化链表
SinglyLinkedList *createSinglyLinkedList()
{
    SinglyLinkedList *list = (SinglyLinkedList *)malloc(sizeof(SinglyLinkedList));
    list->head = NULL;
    list->length = 0;
    return list;
}

// 插入列表头
void prepend(SinglyLinkedList *list, SinglyLinkedListNode *node)
{
    node->next = list->head;
    list->head = node;
    list->length++;
}
// 添加到尾部
void append(SinglyLinkedList *list, SinglyLinkedListNode *node)
{
    if (list->head == NULL)
    {
        list->head = node;
    }
    else
    {
        SinglyLinkedListNode *currentNode = list->head;
        while (currentNode->next != NULL)
        {
            currentNode = currentNode->next;
        }
        currentNode->next = node;
    }
    list->length++;
}

// 插入到指定位置
void insertAt(SinglyLinkedList *list, SinglyLinkedListNode *node, int index)
{
    assert(index >= 0 || index <= list->length);
    if (index == 0)
    {
        node->next = list->head;
        list->head = node;
    }
    else
    {
        SinglyLinkedListNode *currentNode = list->head;
        for (int i = 0; i < index - 1; i++)
        {
            currentNode = currentNode->next;
        }
        node->next = currentNode->next;
        currentNode->next = node;
    }
    list->length++;
}

// 删除指定位置
void removeAt(SinglyLinkedList *list, int index)
{
    assert(index >= 0 || index <= list->length);
    if (index == 0)
    {
        list->head = list->head->next;
    }
    else
    {
        SinglyLinkedListNode *currentNode = list->head;
        for (int i = 0; i < index - 1; i++)
        {
            currentNode = currentNode->next;
        }
        SinglyLinkedListNode *temp = currentNode->next;
        currentNode->next = currentNode->next->next;
        free(temp);
    }
    list->length--;
}
// 删除指定值
void removeValue(SinglyLinkedList *list, int value)
{
    SinglyLinkedListNode *currentNode = list->head;
    SinglyLinkedListNode *previousNode = NULL;
    while (currentNode != NULL)
    {
        if (currentNode->data == value)
        {
            if (previousNode == NULL)
            {
                list->head = currentNode->next;
            }
            else
            {
                previousNode->next = currentNode->next;
            }
            free(currentNode);
            list->length--;
            break;
        }
        previousNode = currentNode;
        currentNode = currentNode->next;
    }
}

int get(SinglyLinkedList *list, int index)
{

    assert(index >= 0 || index <= list->length);

    SinglyLinkedListNode *currentNode = list->head;
    for (int i = 0; i < index; i++)
    {
        currentNode = currentNode->next;
    }
    return currentNode->data;
}
// 清空链表
void clear(SinglyLinkedList *list)
{
    SinglyLinkedListNode *currentNode = list->head;
    while (currentNode != NULL)
    {
        SinglyLinkedListNode *temp = currentNode;
        currentNode = currentNode->next;
        free(temp);
    }
    list->head = NULL;
    list->length = 0;
}

// 销毁链表
void destroySinglyLinkedList(SinglyLinkedList *list)
{
    clear(list);
    free(list);
}

// 遍历链表
void printList(SinglyLinkedList *list)
{
    SinglyLinkedListNode *currentNode = list->head;
    while (currentNode != NULL)
    {
        printf("%d ", currentNode->data);
        currentNode = currentNode->next;
    }
    printf("\n");
}

// 获取链表长度
int length(SinglyLinkedList *list)
{
    return list->length;
}
