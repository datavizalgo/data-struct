#ifndef QUEUE_H
#define QUEUE_H
#include <stdlib.h>
typedef struct queue_node
{
    void* data;
    struct queue_node *next;
    /* data */
} queue_node;

typedef struct queue
{
    queue_node *head;
    queue_node *tail;
    /* data */
} queue;

queue *create_queue();

queue_node *create_queue_node(void* data);

void enqueue(queue *q, void* data);

void* dequeue(queue *q);

int is_empty(queue *q);

void destroy_queue(queue *q);

queue *create_queue()
{
    queue *q = (queue *)malloc(sizeof(queue));
    q->head = NULL;
    q->tail = NULL;
    return q;
}

queue_node *create_queue_node(void* data)
{
    queue_node *q = (queue_node *)malloc(sizeof(queue_node));
    q->data = data;
    q->next = NULL;
    return q;
}

void enqueue(queue *q, void* data)
{
    queue_node *new_node = create_queue_node(data);
    if (is_empty(q))
    {
        q->head = new_node;
        q->tail = new_node;
    }
    else
    {
        q->tail->next = new_node;
        q->tail = new_node;
    }
}

void* dequeue(queue *q)
{
    if (is_empty(q))
    {
        return NULL;
    }
    else
    {
        queue_node *tmp = q->head;
        void* data = tmp->data;
        q->head = q->head->next;
        if (q->head == NULL)
            q->tail = NULL;
        free(tmp);
        return data;
    }
}

int is_empty(queue *q)
{

    return q->head == NULL && q->tail == NULL;
}
#endif // QUEUE_H