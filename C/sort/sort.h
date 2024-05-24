#ifndef SORT_H
#define SORT_H
#include <stdlib.h>
#include <time.h>
#include <stdio.h>

int compare(const int a, const int b);

int compare(const int a, const int b){
    return a < b;
}
// compare function 升序
int compare_asc(const int a, const int b)
{
    return a - b > 0;
};
// 降序
int compare_desc(const int a, const int b)
{
    return b - a < 0;
};
/**
 * 生成随机数组
 * @param size 数组大小
 * @param min 最小值
 * @param max 最大值
 */
int *randArr(int size, int min, int max)
{
    srand(time(NULL));
    int *arr = (int *)malloc(sizeof(int) * size);
    for (int i = 0; i < size; i++)
    {
        arr[i] = min + rand() % (max - min + 1);
    }
    return arr;
}

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

void printArr(int arr[], int n, char *str)
{
    printf("%s => size:%d : ", str,n);
    for (int i = 0; i < n; i++){

        printf("%d ", arr[i]);
    }
    printf("\n------------------------------\n");
}

#endif // SORT_H