import 'sortUtil.dart';

// 快速排序
void quickSort(List<int> list, int low, int high) {
  if (low < high) {
    int pivot = partition(list, low, high);
    quickSort(list, low, pivot - 1);
    quickSort(list, pivot + 1, high);
  }
}

int partition(List<int> arr, int low, int high) {
  int pivot = getMedianOfThree(arr, low, high);
  swap(arr, pivot, low);
  int left = low;
  int right = high;
  while (left < right) {
    while (left < right && arr[right] >= arr[low]) {
      right--;
    }
    while (left < right && arr[left] <= arr[low]) {
      left++;
    }
    if (left < right) {
      swap(arr, left, right);
    }
  }
  swap(arr, low, right);
  return right;
}

//找到三个数中位法的函数
int getMedianOfThree(List<int> arr, int low, int high) {
  int a = arr[low];
  int middle = (low + high) ~/ 2;
  int b = arr[middle];
  int c = arr[high];

  if (a <= b && b <= c || a >= b && b >= c) {
    return middle;
  } else if (b <= a && a <= c || b >= a && a >= c) {
    return low;
  }
  return high;
}

void quickSort2(List<int> list, int low, int high) {
  if (low < high) {
    int pivot = partition2(list, low, high);
    quickSort2(list, low, pivot - 1);
    quickSort2(list, pivot + 1, high);
  }
}

int partition2(List<int> arr, int low, int high) {
  int pivot = getMedianOfThree(arr, low, high);
  swap(arr, pivot, high);
  int i = low - 1;

  for (var j = low; j < high; j++) {
    if (arr[j] <= arr[high]) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}
