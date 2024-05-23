package com.example.sort;

public class SelectionSort {

    static public void sort(int[] array) {
        for (int i = 0; i < array.length - 1; i++) {
            int min = i;
            for (int j = i + 1; j < array.length; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }
            SortUtil.swap(array, i, min);
        }
    }
}
