// 插入排序升序
void insertionSort(List<int> list) {
  for (int i = 1; i < list.length; i++) {
    int key = list[i];
    int j = i - 1;
    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j = j - 1;
    }
    list[j + 1] = key;
  }
}

// 插入排序降序
void insertionSort_Desc(List<int> list) {
  for (int i = 1; i < list.length; i++) {
    int key = list[i];
    int j = i - 1;
    while (j >= 0 && list[j] < key) {
      list[j + 1] = list[j];
      j = j - 1;
    }
    list[j + 1] = key;
  }
}
