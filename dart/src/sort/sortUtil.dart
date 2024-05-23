import 'dart:math';

/**
 * Generate random list
 * @param length 长度
 * @param max 范围 [1,max]
 */
List<int> randomList(int length, int max) {
  List<int> list = [];
  for (int i = 0; i < length; i++) {
    list.add(Random().nextInt(max) + 1);
  }
  return list;
}

/**
 * 是否是升序数组
 */
bool isAscArray(List list) {
  for (int i = 0; i < list.length - 1; i++) {
    if (list[i] > list[i + 1]) {
      return false;
    }
  }
  return true;
}

/**
 * 是否是降序数组
 */
bool isDescArray(List list) {
  for (int i = 0; i < list.length - 1; i++) {
    if (list[i] < list[i + 1]) {
      return false;
    }
  }
  return true;
}

void swap(List list, int i, int j) {
  int temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}
