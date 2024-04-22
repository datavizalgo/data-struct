
#include <stdlib.h>
#include <stdio.h>

typedef struct DoublyLinkedListNode
{
    int data;
    struct DoublyLinkedListNode *next;
    struct DoublyLinkedListNode *prev;
} DoublyLinkedListNode;

typedef struct DoublyLinkedList
{
    struct DoublyLinkedListNode *head;
    int length;
} DoublyLinkedList;

DoublyLinkedListNode *create_doubly_linked_list_node(int data);

DoublyLinkedList *create_doubly_linked_list();

void prepend(DoublyLinkedList *list, int data);

void append(DoublyLinkedList *list, int data);

void insert_at(DoublyLinkedList *list, int data, int index);

void delete_at(DoublyLinkedList *list, int index);

void printDoublyLinkedList(DoublyLinkedList *list);

void destroyDoublyLinkedList(DoublyLinkedList *list);

DoublyLinkedList *create_doubly_linked_list()
{
    DoublyLinkedList *list = (DoublyLinkedList *)malloc(sizeof(DoublyLinkedList));
    list->head = NULL;
    list->length = 0;
    return list;
}

DoublyLinkedListNode *create_doubly_linked_list_node(int data)
{
    DoublyLinkedListNode *node = (DoublyLinkedListNode *)malloc(sizeof(DoublyLinkedListNode));
    node->data = data;
    node->next = NULL;
    node->prev = NULL;
    return node;
}

void prepend(DoublyLinkedList *list, int data)
{
    DoublyLinkedListNode *node = create_doubly_linked_list_node(data);
    node->next = list->head;
    if (list->head != NULL)
        list->head->prev = node;
    list->head = node;
    list->size++;
}

void append(DoublyLinkedList *list, int data)
{
    DoublyLinkedListNode *node = create_doubly_linked_list_node(data);
    if (list->head == NULL)
    {
        list->head = node;
    }
    else
    {
        DoublyLinkedListNode *current = list->head;
        while (current->next != NULL)
        {
            current = current->next;
        }
        current->next = node;
        node->prev = current;
    }
    list->length++;
}

void insert_at(DoublyLinkedList *list, int data, int index)
{

    if (index < 0 || index > list->size)
    {
        printf("Invalid index\n");
        return;
    }
    DoublyLinkedListNode *node = create_doubly_linked_list_node(data);
    if (index == 0)
    {
        node->next = list->head;
        if (list->head != NULL)
            list->head->prev = node;
        list->head = node;
    }
    else
    {
        DoublyLinkedListNode *current = list->head;
        for (size_t i = 0; i < index - 1; i++)
        {
            current = current->next;
        }

        node->next = current->next;
        if (current->next != NULL)
            current->next->prev = node;
        current->next = node;
        node->prev = current;
    }
    list->size++;
}

void delete_at(DoublyLinkedList *list, int index)
{

    if (index < 0 || index >= list->size)
    {
        printf("Invalid index\n");
        return;
    }
    DoublyLinkedListNode *node = list->head;
    if (index == 0)
    {
        list->head = node->next;
        if (list->head != NULL)
            list->head->prev = NULL;
    }
    else
    {
        DoublyLinkedListNode *current = list->head;
        for (size_t i = 0; i < index - 1; i++)
        {
            current = current->next;
        }

        node = current->next;
        current->next = node->next;
        if (node->next != NULL)
            node->next->prev = current;
    }
    if (node != NULL)
    {
        node->next = NULL;
        free(node);
    }
    list->size--;
}

void printDoublyLinkedList(DoublyLinkedList *list)
{

    DoublyLinkedListNode *current = list->head;
    while (current != NULL)
    {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}

void destroyDoublyLinkedList(DoublyLinkedList *list)
{

    DoublyLinkedListNode *current = list->head;
    while (current != NULL)
    {
        DoublyLinkedListNode *next = current->next;
        free(current);
        current = next;
    }
    free(list);
}
