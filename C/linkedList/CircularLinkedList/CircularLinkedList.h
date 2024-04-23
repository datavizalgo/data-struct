
#include <malloc.h>
#include <stdio.h>
#include <stdbool.h>

typedef struct CircularLinkedListNode
{
    /* data */
    int data;
    struct CircularLinkedListNode *next;
    struct CircularLinkedListNode *prev;
} CircularLinkedListNode;

typedef struct CircularLinkedList
{
    CircularLinkedListNode *head;
    int length;
    /* data */
} CircularLinkedList;

CircularLinkedListNode *create_node(int data);
CircularLinkedList *create_linked_list();

void append(CircularLinkedList *list, int data);
void prepend(CircularLinkedList *list, int data);
void insert_at(CircularLinkedList *list, int data, int index);
void delete_at(CircularLinkedList *list, int index);

bool is_empty(CircularLinkedList *list);
int size(CircularLinkedList *list);
void print_list(CircularLinkedList *list);
bool is_circular(CircularLinkedList *list);
void free_list(CircularLinkedList *list);

CircularLinkedListNode *create_node(int data)
{
    CircularLinkedListNode *node = (CircularLinkedListNode *)malloc(sizeof(CircularLinkedListNode));
    node->data = data;
    node->next = NULL;
    node->prev = NULL;
    return node;
}

CircularLinkedList *create_linked_list()
{
    CircularLinkedList *list = (CircularLinkedList *)malloc(sizeof(CircularLinkedList));
    list->head = NULL;
    list->length = 0;
    return list;
}
int size(CircularLinkedList *list)
{
    return list->length;
}

void print_list(CircularLinkedList *list)
{
    CircularLinkedListNode *current = list->head;
    while (current != NULL)
    {
        printf("%d ", current->data);
        current = current->next;
        if (current == list->head){
            break;
        }
    }
    printf("-reverse print\n");

    current = list->head->prev;
    while (current != NULL)
    {
        printf("%d ", current->data);
        current = current->prev;
        if (current == list->head->prev){
            break;
        }
    }
    printf("--------------------------------------------- print end\n");


}
bool is_empty(CircularLinkedList *list)
{
    return list->length == 0;
}

bool is_circular(CircularLinkedList *list)
{
    if (list->head == NULL)
    {
        return false;
    }
    bool flag = false;
    CircularLinkedListNode *current = list->head;
    while (current != NULL)
    {
        if (current->next == list->head)
        {
            flag = true;
            break;
        }
        current = current->next;
    }
    return flag;
}

void prepend(CircularLinkedList *list, int data)
{
    CircularLinkedListNode *node = create_node(data);
    if (list->head == NULL)
    {
        node->next = node;
        node->prev = node;
    }
    else
    {
        node->next = list->head;
        node->prev = list->head->prev;
        list->head->prev->next = node;
        list->head->prev = node;
    }
    list->head = node;
    list->length++;
}

void append(CircularLinkedList *list, int data)
{
    CircularLinkedListNode *node = create_node(data);
    if (list->head == NULL)
    {
        node->next = node;
        node->prev = node;
        list->head = node;
    }
    else
    {
        CircularLinkedListNode *last = list->head->prev;
        last->next = node;
        node->prev = last;
        node->next = list->head;
        list->head->prev = node;
    }
    list->length++;
}

void insert_at(CircularLinkedList *list, int data, int index)
{
    if (index < 0 || index > list->length)
    {
        return;
    }

    CircularLinkedListNode *node = create_node(data);
    if (index == 0)
    {
        if (is_empty(list))
        {
            node->next = node;
            node->prev = node;
        }
        else
        {
            node->next = list->head;
            node->prev = list->head->prev;
            list->head->prev->next = node;
            list->head->prev = node;
        }
        list->head = node;
    }
    else
    {

        CircularLinkedListNode *current = list->head;
        for (int i = 0; i < index - 1; i++)
        {
            current = current->next;
        }
        node->next = current->next;
        node->prev = current;
        current->next->prev = node;
        current->next = node;
    }

    list->length++;
}

void delete_at(CircularLinkedList *list, int index)
{
    if (index < 0 || index >= list->length)
    {
        return;
    }

    if (index == 0)
    {
        CircularLinkedListNode *current = list->head;
        if (list->length == 1)
        {
            list->head = NULL;
        }
        else
        {
            list->head = current->next;
            list->head->prev = current->prev;
            current->prev->next = list->head;
        }
        free(current);
    }
    else
    {
        CircularLinkedListNode *current = list->head;
        for (int i = 0; i < index - 1; i++)
        {
            current = current->next;
        }
        CircularLinkedListNode *del = current->next;
        current->next = del->next;
        del->next->prev = current;
        free(del);
    }
    list->length--;
}
void free_list(CircularLinkedList *list)
{
    CircularLinkedListNode *current = list->head;
    CircularLinkedListNode *next;
    while (current != NULL)
    {
        next = current->next;
        free(current);
        current = next;
        if (current == list->head)
        {
            break;
        }
    }
    free(list);
}
