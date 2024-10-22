package com.example.sort;

public class QuickSort {

    static public void quickSort(int[] a, int low, int high) {

        if (low < high) {
            int pivot = partition(a, low, high);
            quickSort(a, low, pivot - 1);
            quickSort(a, pivot + 1, high);
        }
    }

    static public int partition(int[] a, int low, int high) {
        int pivot = getMedianOfThree(a, low, high);
        SortUtil.swap(a, low, pivot);
        int left = low;
        int right = high;
        while (left < right) {
            while (left < right && a[right] >= a[low]) {
                right--;
            }
            while (left < right && a[left] <= a[low]) {
                left++;
            }
            if (left < right) {
                SortUtil.swap(a, left, right);
            }
        }
        SortUtil.swap(a, low, right);
        return right;
    }

    // 三数取中值
    static public int getMedianOfThree(int[] a, int low, int high) {
        int first = a[low];
        int mid = (low + high) >> 1;
        int last = a[high];
        int median = a[mid];

        if (first <= median && median <= last || first >= median && median >= last) {
            return mid;
        }
        if (first <= last && last <= median || first >= last && last >= median) {
            return high;
        }
        return low;

    }

    static public void quickSort1(int[] a, int low, int high) {
        if (low < high) {
            int pivot = partition1(a, low, high);
            quickSort1(a, low, pivot - 1);
            quickSort1(a, pivot + 1, high);
        }
    }

    static public int partition1(int[] a, int low, int high) {
        int pivot = getMedianOfThree(a, low, high);
        SortUtil.swap(a, high, pivot);
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (a[j] <= a[high]) {
                i++;
                SortUtil.swap(a, i, j);
            }
        }
        SortUtil.swap(a, i + 1, high);
        return i + 1;
    }
}
