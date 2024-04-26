
#include <stdlib.h>
#include <stdio.h>
typedef struct stackNode
{
    int data;
    struct stackNode *next;
    /* data */
} stackNode;

typedef struct stack {
    stackNode *head;
    int length;
} stack;

stack *create_stack();
stackNode *create_node(int data);
void push(stack *s, int data);
int pop(stack *s);
int top(stack *s);
int isEmpty(stack *s);
int size(stack *s);
void print_stack(stack *s);
void distroy_stack(stack *s);


stack *create_stack() {
    stack *s = (stack *)malloc(sizeof(stack));
    s->head = NULL;
    s->length = 0;
    return s;
}

stackNode *create_node(int data) {
    stackNode *node = (stackNode *)malloc(sizeof(stackNode));
    node->data = data;
    node->next = NULL;
    return node;
}

void push(stack *s, int data) {
    stackNode *node = create_node(data);
    node->next = s->head;
    s->head = node;
    s->length++;
}

int pop(stack *s) {
    if (s->head == NULL) {
        return -1;
    }
    stackNode *node = s->head;
    s->head = s->head->next;
    int data = node->data;
    free(node);
    s->length--;
    return data;
}

int top(stack *s) {
    if (s->head == NULL) {
        return -1;
    }
    return s->head->data;
}

int isEmpty(stack *s) {
    return s->length == 0;
}

int size(stack *s) {
    return s->length;
}

void print_stack(stack *s) {
    stackNode *node = s->head;
    while (node != NULL) {
        printf("%d ", node->data);
        node = node->next;
    }
    printf("\n");
}

void distroy_stack(stack *s) {
    stackNode *node = s->head;
    while (node != NULL) {
        stackNode *next = node->next;
        free(node);
        node = next;
    }
    free(s);
}
