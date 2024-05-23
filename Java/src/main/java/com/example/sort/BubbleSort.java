package com.example.sort;

public class BubbleSort {

    static public void sort(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    SortUtil.swap(arr, j, j + 1);
                }
            }
        }
    }

    static public void sort1(int arr[]) {
        int n = arr.length;
        boolean flag = true;
        for (int i = 0; i < n - 1 && flag; i++) {
            flag = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    SortUtil.swap(arr, j, j + 1);
                    flag = true;
                }
            }
        }
    }
}
