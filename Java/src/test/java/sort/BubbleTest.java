package sort;

import java.io.PrintStream;
import java.io.UnsupportedEncodingException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.example.sort.BubbleSort;
import com.example.sort.SortUtil;

public class BubbleTest {

    
    @Test
    public void test1() throws UnsupportedEncodingException {
        System.setOut(new PrintStream(System.out, true, "UTF-8")); // 设置System.out的编码为UTF-8
        int arr[] = SortUtil.randomArray(20, 1, 100);
        System.out.println("排序前：");
        SortUtil.printArray(arr);
        BubbleSort.sort(arr);
        System.out.println("排序后：");
        SortUtil.printArray(arr);
        Assertions.assertTrue(SortUtil.isAscArray(arr));
    }

    @Test
    public void test2() throws UnsupportedEncodingException {
        System.setOut(new PrintStream(System.out, true, "UTF-8"));
        int arr[] = SortUtil.randomArray(20, 1, 100);
        System.out.println("排序前：");
        SortUtil.printArray(arr);
        BubbleSort.sort1(arr);
        System.out.println("排序后：");
        SortUtil.printArray(arr);
        Assertions.assertTrue(SortUtil.isDescArray(arr));
    }
}
