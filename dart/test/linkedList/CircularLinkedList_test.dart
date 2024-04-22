import 'package:test/test.dart';

import '../../src/linkedList/CircularLinkedList/CircularLinkedList.dart';

void main() {
  test('CircularLinkedList is empty', () {
    var list = CircularLinkedList<int>();
    expect(list.isEmpty, true);
  });
  test('CircularLinkedList is not empty', () {
    var list = CircularLinkedList<int>();
    list.prepend(1);
    expect(list.isEmpty, false);
  });
  test('CircularLinkedList prepend', () {
    var list = CircularLinkedList<int>();
    list.prepend(1);
    list.prepend(2);
    expect(list.toList(), <int>[2, 1]);
    expect(list.reverseToList(), <int>[1, 2]);
    expect(list.length, 2);
    expect(list.isCircular(), true);
  });

  test('CircularLinkedList append', () {
    var list = CircularLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.size, 3);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[1, 2, 3]);
    expect(list.reverseToList(), <int>[3, 2, 1]);
  });

  test('CircularLinkedList insert', () {
    var list = CircularLinkedList<int>();
    list.insertAt(1, 0);
    list.insertAt(2, 1);
    list.insertAt(3, 2);
    expect(list.size, 3);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[1, 2, 3]);
    expect(list.reverseToList(), <int>[3, 2, 1]);

    list.insertAt(4, 0);
    expect(list.size, 4);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[4, 1, 2, 3]);
    expect(list.reverseToList(), <int>[3, 2, 1, 4]);

    list.insertAt(5, 3);
    expect(list.size, 5);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[4, 1, 2, 5, 3]);
    expect(list.reverseToList(), <int>[3, 5, 2, 1, 4]);

    list.insertAt(6, 3);
    expect(list.size, 6);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[4, 1, 2, 6, 5, 3]);
    expect(list.reverseToList(), <int>[3, 5, 6, 2, 1, 4]);

    list.insertAt(7, 2);
    expect(list.size, 7);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[4, 1, 7, 2, 6, 5, 3]);
    expect(list.reverseToList(), <int>[3, 5, 6, 2, 7, 1, 4]);
  });

  test('CircularLinkedList delete', () {
    var list = CircularLinkedList<int>();
    list.insertAt(1, 0);
    list.insertAt(2, 1);
    list.append(3);
    list.append(5);
    expect(list.size, 4);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[1, 2, 3, 5]);
    expect(list.reverseToList(), <int>[5, 3, 2, 1]);

    list.deleteAt(0);
    expect(list.size, 3);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[2, 3, 5]);
    expect(list.reverseToList(), <int>[5, 3, 2]);

    list.deleteAt(2);
    expect(list.size, 2);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[2, 3]);
    expect(list.reverseToList(), <int>[3, 2]);

    list.deleteAt(1);
    expect(list.size, 1);
    expect(list.isCircular(), true);
    expect(list.toList(), <int>[2]);
    expect(list.reverseToList(), <int>[2]);

    list.deleteAt(0);
    expect(list.size, 0);
    expect(list.isCircular(), false);
    expect(list.toList(), <int>[]);
  });

  test('CircularLinkedList bound check', () {
    var list = CircularLinkedList<int>();
    list.insertAt(1, 0);
    list.insertAt(2, 1);
    list.append(3);

    expect(() => list.insertAt(4, -1), throwsRangeError);
    expect(() => list.insertAt(4, 4), throwsRangeError);

    expect(() => list.deleteAt(-1), throwsRangeError);
    expect(() => list.deleteAt(3), throwsRangeError);
  });
}
