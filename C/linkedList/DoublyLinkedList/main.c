
#include "DoublyLinkedList.h"

int main()
{
    DoublyLinkedList *list = create_doubly_linked_list();
    printf("Doubly Linked List created successfully\n");

    prepend(list, 10);
    prepend(list, 20);
    prepend(list, 30);
    printDoublyLinkedList(list);
    printf("prepend 10, 20, 30\n");

    append(list, 40);
    append(list, 50);
    printDoublyLinkedList(list);
    printf("append 40 and 50\n");

    insert_at(list, 25, 2);
    printDoublyLinkedList(list);
    printf("insert at 25 at index 2\n");
    insert_at(list, 35, 0);
    printDoublyLinkedList(list);
    printf("insert at 35 at index 0\n");

    insert_at(list, 45, 7);
    printDoublyLinkedList(list);
    printf("insert at 45 at index 7\n");

    delete_at(list, 2);
    printDoublyLinkedList(list);
    printf("delete at index 2\n");

    delete_at(list, 0);
    printDoublyLinkedList(list);
    printf("delete at index 0\n");

    delete_at(list, 5);
    printDoublyLinkedList(list);
    printf("delete at index 5\n");
    return 0;
}