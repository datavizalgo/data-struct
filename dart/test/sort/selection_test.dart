import 'package:test/test.dart';

import '../../src/sort/selection.dart';
import '../../src/sort/sortUtil.dart';

void main() {
  test("selection sort", () {
    List<int> list = randomList(20, 200);
    selectionSort(list);
    expect(isAscArray(list), true);
  });
}
