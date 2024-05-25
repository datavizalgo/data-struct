#include "sort.h"
// 归并排序

void mergeSort(int arr[], int temp[], int left, int right);
void merge(int arr[], int temp[], int left, int mid, int right);

void mergeSort(int arr[], int temp[], int left, int right)
{
    if (left < right)
    {
        int mid = (left + right) / 2;
        mergeSort(arr, temp, left, mid);
        mergeSort(arr, temp, mid + 1, right);
        merge(arr, temp, left, mid, right);
    }
}

void merge(int arr[], int temp[], int left, int mid, int right)
{
    int i = left, j = mid + 1, k = left;
    // 将两个有序序列，合并到temp数组
    while (i <= mid && j <= right)
    {
        if (arr[i] < arr[j])
            temp[k++] = arr[i++];
        else
            temp[k++] = arr[j++];
    }
    // 非空序列的剩余部分直接复制到temp中
    while (i <= mid)
        temp[k++] = arr[i++];
    while (j <= right)
        temp[k++] = arr[j++];

    // 将有序的temp数组，拷贝到arr
    for (i = left; i <= right; i++)
        arr[i] = temp[i];
}