import 'sortUtil.dart';

void bubbleSort(List<int> list) {
  for (int i = 0; i < list.length; i++) {
    for (int j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
      }
    }
  }
}

void bubbleSort2(List<int> list) {
  for (int i = 0; i < list.length; i++) {
    bool flag = false;
    for (int j = 0; j < list.length - i - 1; j++) {
      if (list[j] < list[j + 1]) {
        swap(list, j, j + 1);
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
}
