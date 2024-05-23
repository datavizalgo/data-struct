import 'sortUtil.dart';

void selectionSort(List<int> list) {
  for (int i = 0; i < list.length - 1; i++) {
    int min = i;
    for (int j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    swap(list, i, min);
  }
}
