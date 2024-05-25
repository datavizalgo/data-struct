package sort;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import com.example.sort.InsertionSort;
import com.example.sort.MergeSort;
import com.example.sort.QuickSort;
import com.example.sort.SelectionSort;
import com.example.sort.SortUtil;

public class SortTest {

    @Test
    public void testSelectionSort() {
        int[] array = SortUtil.randomArray(200, 1, 10000);
        SelectionSort.sort(array);
        assertEquals(true, SortUtil.isAscArray(array));
    }

    @Test
    public void testInsertionSort() {
        int[] array = SortUtil.randomArray(200, 1, 10000);
        InsertionSort.sort(array);
        assertEquals(true, SortUtil.isAscArray(array));
    }

    @Test
    public void testInsertionSortDesc() {
        int[] array = SortUtil.randomArray(200, 1, 10000);
        InsertionSort.sortDesc(array);
        assertEquals(true, SortUtil.isDescArray(array));
    }

    @Test
    public void testQuickSort() {
        int[] array = SortUtil.randomArray(200, 1, 10000);
        QuickSort.quickSort(array, 0, array.length - 1);
        assertEquals(true, SortUtil.isAscArray(array));
    }

    @Test
    public void testQuickSort1() {
        int[] array = SortUtil.randomArray(200, 1, 10000);
        QuickSort.quickSort1(array, 0, array.length - 1);   
        assertEquals(true, SortUtil.isAscArray(array));
    }


    @Test
    public void testMergeSort() {
        int[] array = SortUtil.randomArray(2000, 1, 10000);
        int[] temp = new int[array.length];
        MergeSort.sort(array, temp, 0, array.length - 1);
        assertEquals(true, SortUtil.isAscArray(array));

    }
}
