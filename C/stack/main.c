#include "stack.h"
int main(int argc, char const *argv[])
{
    /* code */
    stack *s = create_stack();
    printf("isEmpty:%d\n", isEmpty(s));
    push(s, 1);
    push(s, 2);
    push(s, 3);
    push(s, 4);
    push(s, 5);
    printf("size:%d\n", size(s));
    printf("isEmpty:%d\n", isEmpty(s));
    print_stack(s);
    printf("%d\n", pop(s));
    printf("size:%d\n", size(s));
    printf("isEmpty:%d\n", isEmpty(s));
    print_stack(s);
    printf("size:%d\n", size(s));
    printf("isEmpty:%d\n", isEmpty(s));
    printf("%d\n", pop(s));
    printf("size:%d\n", size(s));
    printf("isEmpty:%d\n", isEmpty(s));
    print_stack(s);
    printf("size:%d\n", size(s));
    printf("isEmpty:%d\n", isEmpty(s));
    printf("%d\n", pop(s));
    printf("size:%d\n", size(s));
    printf("isEmpty:%d\n", isEmpty(s));
    print_stack(s);
    printf("%d\n", pop(s));
    printf("size:%d\n", size(s));
    printf("isEmpty:%d\n", isEmpty(s));
    print_stack(s);
    printf("%d\n", pop(s));
    print_stack(s);
    printf("%d\n", pop(s));
    printf("size:%d\n", size(s));
    printf("isEmpty:%d\n", isEmpty(s));
    print_stack(s);
    distroy_stack(s);
    return 0;
}
