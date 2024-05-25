#include "quickSort.h"
#include <locale.h>
int main(int argc, char const *argv[])
{
    setlocale(LC_ALL, "zh_CN.UTF-8"); // 设置为简体中文UTF-8编码
    const int size = 20;
    int *arr = randArr(size, 1, 800);
    printArr(arr, size, "排序前:");
    quickSort(arr, 0, size - 1);
    printArr(arr, size, "排序后:");
    /* code */ 
    return 0;
}
