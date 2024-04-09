#include "SinglyLinkedList.h"

int main()
{
    SinglyLinkedList *list = createSinglyLinkedList();
    SinglyLinkedListNode *node = createNode(1);
    prepend(list, node);
    printList(list);
    append(list, createNode(2));
    printList(list);
    insertAt(list, createNode(3), 1);
    printList(list);
    insertAt(list, createNode(4), 3);
    printList(list);
    insertAt(list, createNode(5), 0);
    insertAt(list, createNode(6), 4);
    insertAt(list, createNode(7), 5);
    printList(list);
    insertAt(list, createNode(8), 7);
    printList(list);
    removeAt(list, 1);
    printList(list);
    removeAt(list,6);
    printList(list);
    removeValue(list, 6);
    printList(list);
    printf("length: %d\n", list->length);
    clear(list);
    return 0;
}