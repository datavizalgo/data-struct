

#include "CircularLinkedList.h"

void print_is_circular(CircularLinkedList *list)
{
    if (is_circular(list))
    {
        printf("list is circular\n");
    }
    else
    {
        printf("list is not circular\n");
    }
}

void print_is_empty(CircularLinkedList *list)
{
    if (is_empty(list))
    {
        printf("list is empty\n");
    }
    else
    {
        printf("list is not empty\n");
    }
}

void print_list_length(CircularLinkedList *list)
{
    printf("list length : %d\n", list->length);
}

int main(int argc, char const *argv[])
{
    CircularLinkedList *list = create_linked_list();
    append(list, 1);
    append(list, 2);
    append(list, 3);
    append(list, 4);
    print_list(list);
    print_is_empty(list);

    print_is_circular(list);

    print_list_length(list);

    printf("delete at 2\n");
    delete_at(list, 2);
    print_list_length(list);

    print_list(list);

    printf("prepend at 0\n");
    prepend(list, 0);
    print_list_length(list);
    print_list(list);

    printf("insert 5 at 3\n");
    insert_at(list, 5, 3);
    print_list_length(list);
    print_list(list);
    print_is_circular(list);
    printf("delete at 0\n");
    delete_at(list, 0);
    print_list_length(list);
    print_list(list);

    printf("delete at 0\n");
    delete_at(list, 0);
    print_list_length(list);
    print_list(list);
    print_is_circular(list);

    printf("insert 6 at 0\n");
    insert_at(list, 6, 0);
    print_list_length(list);
    print_list(list);
    print_is_circular(list);
    printf("insert 7 at 7\n");
    insert_at(list, 7, 7);
    print_list_length(list);
    print_list(list);

    free_list(list);
    /* code */
    return 0;
}
