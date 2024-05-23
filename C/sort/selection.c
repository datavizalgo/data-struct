#include "selection.h"
#include <locale.h>
int main(int argc, char const *argv[])
{
    setlocale(LC_ALL, "zh_CN.UTF-8"); // 设置为简体中文UTF-8编码
    const int size = 10;
    int *arr = randArr(size, 1, 100);
    printArr(arr, size, "排序前:");
    selectionSort(arr, size);
    printArr(arr, size, "排序后:");
    
    /* code */
    return 0;
}
