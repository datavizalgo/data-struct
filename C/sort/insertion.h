
#include "sort.h"
// insertion sort 插入排序
void insertionSort(int arr[], int length)
{
    int i, key, j;
    for (i = 1; i < length; i++)
    {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}