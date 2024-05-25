// 归并排序

void mergeSort(List<int> list, List<int> temp, int left, int right) {
  if (left < right) {
    int mid = (left + right) ~/ 2;
    mergeSort(list, temp, left, mid);
    mergeSort(list, temp, mid + 1, right);
    merge(list, temp, left, mid, right);
  }
}

void merge(List<int> list, List<int> temp, int left, int mid, int right) {
  int i = left;
  int j = mid + 1;
  int k = left;

  while (i <= mid && j <= right) {
    if (list[i] < list[j]) {
      temp[k++] = list[i++];
    } else {
      temp[k++] = list[j++];
    }
  }

//    将剩余元素复制到临时数组
  while (i <= mid) {
    temp[k++] = list[i++];
  }
  while (j <= right) {
    temp[k++] = list[j++];
  }
//   将临时数组中的元素复制回原数组
  for (i = left; i <= right; i++) {
    list[i] = temp[i];
  }
}
