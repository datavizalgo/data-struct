import 'package:test/test.dart';

import '../../src/linkedList/DoublyLinkedList/DoublyLinkedList.dart';

void main() {
  test('DoublyLinkedList is empty', () {
    var list = DoublyLinkedList<int>();
    expect(list.isEmpty, true);
  });

  test("DoublyLinkedList is not empty", () {
    var list = DoublyLinkedList<int>();
    list.prepend(1);
    expect(list.isEmpty, false);
  });

  test('DoublyLinkedList prepend', () {
    var list = DoublyLinkedList<int>();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.size, 3);
    expect(list.toList(), [3, 2, 1]);

    list.prepend(4);
    expect(list.size, 4);
    expect(list.toList(), [4, 3, 2, 1]);
    expect(list.reverseToList(), [1, 2, 3, 4]);
  });

  test('DoublyLinkedList append', () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.size, 3);
    expect(list.toList(), [1, 2, 3]);
    expect(list.reverseToList(), [3, 2, 1]);

    list.append(4);
    expect(list.size, 4);
    expect(list.toList(), [1, 2, 3, 4]);
    expect(list.reverseToList(), [4, 3, 2, 1]);
  });

  test('DoublyLinkedList insert start', () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAt(0, 0);
    list.insertAt(6, 0);
    expect(list.size, 5);
    expect(list.toList(), [6, 0, 1, 2, 3]);
    expect(list.reverseToList(), [3, 2, 1, 0, 6]);

    list.insertAt(8, 0);
    expect(list.size, 6);
    expect(list.toList(), [8, 6, 0, 1, 2, 3]);
    expect(list.reverseToList(), [3, 2, 1, 0, 6, 8]);
  });

  test('DoublyLinkedList insert end', () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAt(0, 3);
    list.insertAt(6, 4);
    expect(list.size, 5);
    expect(list.toList(), [1, 2, 3, 0, 6]);
    expect(list.reverseToList(), [6, 0, 3, 2, 1]);

    list.insertAt(8, 5);
    expect(list.size, 6);
    expect(list.toList(), [1, 2, 3, 0, 6, 8]);
    expect(list.reverseToList(), [8, 6, 0, 3, 2, 1]);
  });

  test("DoublyLinkedList insert middle", () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAt(0, 2);
    list.insertAt(6, 3);
    expect(list.size, 5);
    expect(list.toList(), [1, 2, 0, 6, 3]);
    expect(list.reverseToList(), [3, 6, 0, 2, 1]);

    list.insertAt(8, 3);
    expect(list.size, 6);
    expect(list.toList(), [1, 2, 0, 8, 6, 3]);
    expect(list.reverseToList(), [3, 6, 8, 0, 2, 1]);
  });

  test("DoublyLinkedList delete start", () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(list.size, 5);
    expect(list.toList(), [1, 2, 3, 4, 5]);
    expect(list.reverseToList(), [5, 4, 3, 2, 1]);

    list.deleteAt(0);
    expect(list.size, 4);
    expect(list.toList(), [2, 3, 4, 5]);
    expect(list.reverseToList(), [5, 4, 3, 2]);

    list.deleteAt(0);
    expect(list.size, 3);
    expect(list.toList(), [3, 4, 5]);
    expect(list.reverseToList(), [5, 4, 3]);
  });

  test("DoublyLinkedList delete end", () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(list.size, 5);
    expect(list.toList(), [1, 2, 3, 4, 5]);
    expect(list.reverseToList(), [5, 4, 3, 2, 1]);

    list.deleteAt(4);
    expect(list.size, 4);
    expect(list.toList(), [1, 2, 3, 4]);
    expect(list.reverseToList(), [4, 3, 2, 1]);

    list.deleteAt(3);
    expect(list.size, 3);
    expect(list.toList(), [1, 2, 3]);
    expect(list.reverseToList(), [3, 2, 1]);

    list.deleteAt(2);
    expect(list.size, 2);
    expect(list.toList(), [1, 2]);
    expect(list.reverseToList(), [2, 1]);

    list.deleteAt(1);
    expect(list.size, 1);
    expect(list.toList(), [1]);
    expect(list.reverseToList(), [1]);
  });

  test("DoublyLinkedList delete middle", () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(list.size, 6);
    expect(list.toList(), [1, 2, 3, 4, 5, 6]);
    expect(list.reverseToList(), [6, 5, 4, 3, 2, 1]);

    list.deleteAt(3);
    expect(list.size, 5);
    expect(list.toList(), [1, 2, 3, 5, 6]);
    expect(list.reverseToList(), [6, 5, 3, 2, 1]);

    list.deleteAt(2);
    expect(list.size, 4);
    expect(list.toList(), [1, 2, 5, 6]);
    expect(list.reverseToList(), [6, 5, 2, 1]);

    list.deleteAt(1);
    expect(list.size, 3);
    expect(list.toList(), [1, 5, 6]);

    list.deleteAt(1);
    expect(list.size, 2);
    expect(list.toList(), [1, 6]);

    expect(list.reverseToList(), [6, 1]);

    list.deleteAt(0);
    expect(list.size, 1);
    expect(list.toList(), [6]);
    expect(list.reverseToList(), [6]);
  });

  test("DoublyLinkedList get", () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(list.size, 6);
    expect(list.toList(), [1, 2, 3, 4, 5, 6]);
    expect(list.reverseToList(), [6, 5, 4, 3, 2, 1]);

    expect(list.get(0), 1);
    expect(list.get(1), 2);
    expect(list.get(2), 3);
    expect(list.get(3), 4);
    expect(list.get(4), 5);
    expect(list.get(5), 6);
  });

  test("DoublyLinkedList bound check", () {
    var list = DoublyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);

    expect(() => list.get(6), throwsRangeError);
    expect(() => list.get(-1), throwsRangeError);
    expect(() => list.get(100), throwsRangeError);

    expect(() => list.deleteAt(6), throwsRangeError);
    expect(() => list.deleteAt(-1), throwsRangeError);

    expect(() => list.insertAt(6, 7), throwsRangeError);
    expect(() => list.insertAt(7, -1), throwsRangeError);
  });
}
