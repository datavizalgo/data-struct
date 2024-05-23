#include "insertion.h"
#include <locale.h>
int main(int argc, char const *argv[])
{
    setlocale(LC_ALL, "zh_CN.UTF-8"); // 设置为简体中文UTF-8编码
    const int size = 20;
    int *arr = randArr(size, 1, 1000);
    printArr(arr, 20, "排序前:");
    insertionSort(arr, 20);
    printArr(arr, 20, "排序后:");

    /* code */
    return 0;
}
