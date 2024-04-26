#include <stdlib.h>
#include <stdio.h>

// 定义queue节点结构体
typedef struct Node
{
    int data;          // 数据域
    struct Node *next; // 指针域，指向下一个节点
} Node;

// 定义队列结构体
typedef struct Queue
{
    Node *front; // 头节点
    Node *rear;  // 尾节点
} Queue;

Node *init_node(int data);
Queue *init_queue();
void destory_queue(Queue *q);
int is_empty(Queue *q);
void enqueue(Queue *q, int data);
int dequeue(Queue *q);
void print_queue(Queue *q);

Queue *init_queue()
{
    Queue *q = (Queue *)malloc(sizeof(Queue));
    q->front = NULL;
    q->rear = NULL;
    return q;
}

Node *init_node(int data)
{
    Node *n = (Node *)malloc(sizeof(Node));
    n->data = data;
    n->next = NULL;
    return n;
}

void destory_queue(Queue *q)
{
    Node *n = q->front;
    while (n != NULL)
    {
        Node *tmp = n;
        n = n->next;
        free(tmp);
    }
    free(q);
}

int is_empty(Queue *q)
{
    return q->front == NULL;
}

void enqueue(Queue *q, int data)
{
    Node *n = init_node(data);
    if (q->front == NULL)
    {
        q->front = n;
    }
    else
    {
        q->rear->next = n;
    }
    q->rear = n;

}

int dequeue(Queue *q)
{
    if (q->front == NULL)
    {
        fprintf(stderr, "Error: Queue is empty.\n");
        exit(EXIT_FAILURE);
    }
    Node *n = q->front;
    int data = n->data;
    q->front = n->next;
	if(q->front==NULL)
	{
		q->rear = NULL;
	}
    free(n);
    return data;
}

void print_queue(Queue *q)
{
    Node *n = q->front;
    while (n != NULL)
    {
        printf("%d ", n->data);
        n = n->next;
    }
    printf("\n");
}
