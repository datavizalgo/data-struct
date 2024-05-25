import 'package:test/test.dart';

import '../../src/sort/merge.dart';
import '../../src/sort/sortUtil.dart';

void main() {
  test("merge sort", () {
    List<int> list = randomList(50, 200);
    List<int> temp = List<int>.filled(list.length, 0);
    mergeSort(list, temp, 0, list.length - 1);
    expect(isAscArray(list), true);
  });
}
