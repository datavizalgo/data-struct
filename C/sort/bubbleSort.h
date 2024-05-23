
#include "sort.h"

void bubbleSort(int arr[], int n)
{
    int i, j;
    for (i = 0; i < n - 1; i++)
    {

        for (j = 0; j < n - i - 1; j++)
        {
            // 升序
            if (compare_asc(arr[j], arr[j + 1]))
            {

                swap(&arr[j], &arr[j + 1]);
            }
        }
    }
}

void bubbleSort2(int arr[], int n)
{
    int i, j, flag = 1;
    // flag = 1 表示有交换 ,如果没有交换说明已经排好序了
    for (i = 0; i < n - 1 && flag; i++)
    {
        flag = 0;
        for (j = 0; j < n - i - 1; j++)
        {
            // 降序
            if (compare_desc(arr[j], arr[j + 1]))
            {
                swap(&arr[j], &arr[j + 1]);
                flag = 1;
            }
        }
    }
}
