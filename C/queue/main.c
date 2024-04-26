#include "queue.h"

int main(int argc, char const *argv[])
{
    Queue *q = init_queue();

    enqueue(q, 1);
    enqueue(q, 2);
    enqueue(q, 3);

    print_queue(q);

    while (!is_empty(q)){
        printf("%d\n", dequeue(q));
    }

    destory_queue(q);
    /* code */
    return 0;
}