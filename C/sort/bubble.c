
#include "bubbleSort.h"
#include <locale.h>

int main(int argc, char const *argv[])
{
    setlocale(LC_ALL, "zh_CN.UTF-8"); // 设置为简体中文UTF-8编码
    const int size = 10;
    int *arr = randArr(size, 1, 100);
    printArr(arr, size, "排序前:");
    bubbleSort(arr, size);
    printArr(arr, size, "排序后:");

    printf("标志位优化：\n");

    int *arr2 = randArr(size, 1, 100);
    printArr(arr2, size, "排序前:");
    bubbleSort2(arr2, size);
    printArr(arr2, size, "排序后:");
    /* code */
    return 0;
}
