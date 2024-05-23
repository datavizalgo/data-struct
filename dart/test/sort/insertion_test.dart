import 'package:test/test.dart';

import '../../src/sort/insertion.dart';
import '../../src/sort/sortUtil.dart';

void main() {
  test("insertion sort asc", () {
    List<int> list = randomList(20, 200);
    insertionSort(list);
    expect(isAscArray(list), true);
  });

  test("insertion sort desc", () {
    List<int> list = randomList(20, 200);
    insertionSort_Desc(list);
    expect(isDescArray(list), true);
  });
}
