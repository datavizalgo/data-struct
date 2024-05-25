import 'package:test/test.dart';

import '../../src/sort/quick.dart';
import '../../src/sort/sortUtil.dart';

void main() {
  test("quick sort", () {
    List<int> list = randomList(20, 2000);
    quickSort(list, 0, list.length - 1);
    expect(isAscArray(list), true);
  });

  test("quick sort2", () {
    List<int> list = randomList(100000, 2000000);
    quickSort(list, 0, list.length - 1);
    expect(isAscArray(list), true);
  });

  test("quick sort3", () {
    int a = 20;
    int b = 40;
    expect((a + b) >> 1, 30);

    expect((4 + 3) >> 1, 3);
  });

  test("quick sort4", () {
    List<int> list = randomList(20, 2000);
    quickSort2(list, 0, list.length - 1);
    expect(isAscArray(list), true);
  });
}
