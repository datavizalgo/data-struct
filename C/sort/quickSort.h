#include "sort.h"

int partition(int arr[], int low, int high);
int getMedianOfThree(int arr[], int low, int high);
void quickSort(int arr[], int low, int high);

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
    if (a <= b)
    {
        if (b <= c)
            return middle;
        if (a <= c)
            return high;
        return low;
    }
    else
    {
        if (a <= c)
            return low;
        if (b <= c)
            return high;
        return middle;
    }
}
