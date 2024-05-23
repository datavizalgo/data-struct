import 'package:test/test.dart';

import '../../src/sort/bubble.dart';
import '../../src/sort/sortUtil.dart';

void main() {
  test("bubble sort", () {
    List<int> list = randomList(20, 100);
    print("before: $list");
    bubbleSort(list);
    print("after: $list");
    expect(isAscArray(list), true);
  });

  test("bubble sort2", () {
    List<int> list = randomList(20, 100);
    print("before: $list");
    bubbleSort2(list);
    print("after: $list");
    expect(isDescArray(list), true);
  });
}
