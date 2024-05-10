import 'package:test/test.dart';

import '../../src/tree/binarySearchTree/bst.dart';

void main() {
  test("bst is empty", () {
    var bst = BinarySearchTree();
    expect(bst.isEmpty, true);
  });

  test("bst is not empty", () {
    var bst = BinarySearchTree();
    bst.insert(1);
    expect(bst.isEmpty, false);
  });

  test("bst insert", () {
    var bst = BinarySearchTree();
    bst.insert(67);
    bst.insert(56);
    bst.insert(45);
    bst.insert(78);
    bst.insert(78);

    expect(bst.search(67), true);
    expect(bst.search(56), true);
    expect(bst.search(45), true);
    expect(bst.search(78), true);
    expect(bst.search(90), false);
    expect(bst.toList(), [67, 56,78, 45]);
  });

  test("bst delete", () {
    var bst = BinarySearchTree();
    bst.insert(67);
    bst.insert(56);
    bst.insert(45);
    bst.insert(70);
    bst.insert(78);

    expect(bst.toList(), [67, 56, 70, 45, 78]);

    bst.delete(45);
    expect(bst.toList(), [67, 56, 70, 78]);

    bst.delete(67);
    expect(bst.toList(), [70, 56, 78]);
  });

  test("bst search", () {
    var bst = BinarySearchTree();
    bst.insert(67);
    bst.insert(56);
    bst.insert(45);
    bst.insert(70);
    bst.insert(78);

    expect(bst.search(67), true);
    expect(bst.search(56), true);
    expect(bst.search(45), true);
    expect(bst.search(78), true);
    expect(bst.search(80), false);
  });

  test("bst min", () {
    var bst = BinarySearchTree();
    bst.insert(67);
    bst.insert(56);
    bst.insert(45);
    bst.insert(70);
    bst.insert(78);

    expect(bst.findMin(), 45);
  });

  test("bst max", () {
    var bst = BinarySearchTree();
    bst.insert(67);
    bst.insert(56);
    bst.insert(45);
    bst.insert(70);
    bst.insert(78);
    expect(bst.findMax(), 78);
  });
}
