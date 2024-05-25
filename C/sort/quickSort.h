#include "sort.h"

int partition(int arr[], int low, int high);
int getMedianOfThree(int arr[], int low, int high);
void quickSort(int arr[], int low, int high);
// 快速排序
void quickSort2(int arr[], int low, int high);
int partition2(int arr[], int low, int high);
// 快速排序
void quickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        int pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

int partition(int arr[], int low, int high)
{
    int pivot = getMedianOfThree(arr, low, high);
    swap(&arr[low], &arr[pivot]);
    int left = low;
    int right = high;
    while (left < right)
    {
        while (left < right && arr[right] >= arr[low])
            right--;
        while (left < right && arr[left] <= arr[low])
            left++;
        if (left < right)
        {
            swap(&arr[left], &arr[right]);
        }
    }
    swap(&arr[low], &arr[right]);
    return right;
}

//  三数取中间值法获取基准值
int getMedianOfThree(int arr[], int low, int high)
{
    int a = arr[low];
    int middle = (low + high) / 2;
    int b = arr[middle];
    int c = arr[high];
    if (a <= b && b <= c || a >= b && b >= c)
    {
        return middle;
    }
    else if (b <= a && a <= c || b >= a && a >= c)
    {
        return low;
    }
    return high;
}


void quickSort2(int arr[], int low, int high)
{
    if (low < high)
    {
        int pivot = partition2(arr, low, high);
        quickSort2(arr, low, pivot - 1);
        quickSort2(arr, pivot + 1, high);
    }
}

int partition2(int arr[], int low, int high)
{
    int pivot = getMedianOfThree(arr, low, high);
    swap(&arr[high], &arr[pivot]);

    int i = low-1;
    for (int j = low; j < high; j++)
    {
        if (arr[j] <= arr[high])
        {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i+1], &arr[high]);
    return i+1;
}