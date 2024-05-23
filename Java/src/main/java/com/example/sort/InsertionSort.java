package com.example.sort;

// 插入排序
public class InsertionSort {

    // 升序排序
    static public void sort(int[] array) {
        for (int i = 1; i < array.length; i++) {

            int key = array[i];
            int j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = key;
        }

    }

    // 降序排序
    static public void sortDesc(int[] array){

        for (int i = 1; i < array.length; i++) {

            int key = array[i];
            int j = i - 1;
            while (j >= 0 && array[j] < key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = key;
        }
    }

}
