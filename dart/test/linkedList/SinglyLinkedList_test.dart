import 'package:test/test.dart';
import '../../src/linkedList/SinglyLinkedList/SinglyLinkedList.dart';
void main() {
  test('SinglyLinkedList is empty', () {
    var list = SinglyLinkedList<int>();
    expect(list.isEmpty, true);
  });
  test('SinglyLinkedList is not empty', () {
    var list = SinglyLinkedList<int>();
    list.prepend(1);
    expect(list.isEmpty, false);
  });
  test('SinglyLinkedList prepend', () {
    var list = SinglyLinkedList<int>();
    list.prepend(1);
    expect(list.head!.data, 1);
    list.prepend(2);
    expect(list.head!.data, 2);
    expect(list.toList(), <int>[2, 1]);
    expect(list.length, 2);
  });

  test('SinglyLinkedList append', () {
    var list = SinglyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.head!.data, 1);
    expect(list.length, 3);
    expect(list.toList(), <int>[1, 2, 3]);
  });
  test('SinglyLinkedList insert', () {
    var list = SinglyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.prepend(3);
    list.prepend(4);
    expect(list.length, 4);
    expect(list.toList(), <int>[4, 3, 1, 2]);
    list.insertAt(5, 0);
    expect(list.toList(), <int>[5, 4, 3, 1, 2]);
    list.insertAt(6, 2);
    expect(list.toList(), <int>[5, 4, 6, 3, 1, 2]);
    list.insertAt(7, 6);
    expect(list.toList(), <int>[5, 4, 6, 3, 1, 2, 7]);
    list.insertAt(8, 7);
    expect(list.toList(), <int>[5, 4, 6, 3, 1, 2, 7, 8]);
    expect(list.length, 8);
    expect(() => list.insertAt(9, 10), throwsRangeError);
  });

  test('SinglyLinkedList remove', () {
    var list = SinglyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.length, 3);
    expect(list.toList(), <int>[1, 2, 3]);
    list.removeAt(2);
    expect(list.toList(), <int>[1, 2]);
    expect(list.length, 2);
    expect(() => list.removeAt(2), throwsRangeError);
    expect(() => list.removeAt(-1), throwsRangeError);
    list.prepend(9);
    expect(list.toList(), <int>[9, 1, 2]);
    list.removeAt(0);
    expect(list.toList(), <int>[1, 2]);
    expect(list.length, 2);
    list.append(4);
    list.append(5);
    list.append(6);
    list.removeAt(3);
    expect(list.toList(), <int>[1, 2, 4, 6]);
    list.removeAt(3);
    expect(list.toList(), <int>[1, 2, 4]);
  });

  test('SinglyLinkedList reverse', () {
    var list = SinglyLinkedList<int>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.append(7);
    list.append(8);
    list.append(9);
    list.append(10);
    list.append(11);
    expect(list.toList(), <int>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    list.reverse();
    expect(list.toList(), <int>[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  test("SinglyLinkedList get value", () {
    var list = SinglyLinkedList<int>();
    list.append(1);
    list.prepend(2);
    expect(list.get(0), 2);
    expect(list.get(1), 1);
  });
}
