import 'package:test/test.dart';

import '../../src/tree/avlTree/avl.dart';

void main() {
  test("test avl tree", () {
    var tree = new AvlTree();

    expect(tree.isEmpty, true);
  });

  test("avl tree insert left rotate", () {
    var tree = new AvlTree();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);

    expect(
      tree.toList(),
      [20, 10, 30],
    );

    tree.insert(40);
    tree.insert(50);
    expect(
      tree.toList(),
      [20, 10, 40, 30, 50],
    );
  });

  test("avl tree insert right rotate", () {
    var tree = new AvlTree();
    tree.insert(30);
    tree.insert(20);
    tree.insert(10);
    expect(tree.toList(), [20, 10, 30]);

    tree.insert(9);
    tree.insert(8);

    expect(tree.toList(), [20, 9, 30, 8, 10]);
  });

  test("avl tree insert left right rotate", () {
    var tree = new AvlTree();
    tree.insert(30);
    tree.insert(10);
    tree.insert(20);

    expect(tree.toList(), [20, 10, 30]);
  });

  test("avl tree insert right left rotate", () {
    var tree = new AvlTree();
    tree.insert(10);
    tree.insert(30);
    tree.insert(20);
    expect(tree.toList(), [20, 10, 30]);
  });

  test("avl tree delete", () {
    var tree = new AvlTree();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);
    tree.insert(50);
    tree.insert(60);
    expect(tree.toList(), [40, 20, 50, 10, 30, 60]);

    tree.delete(60);
    expect(tree.toList(), [40, 20, 50, 10, 30]);

    tree.delete(50);
    expect(tree.toList(), [20, 10, 40, 30]);
    tree.delete(10);
    expect(tree.toList(), [30, 20, 40]);

    tree.insert(25);
    expect(tree.toList(), [30, 20, 40, 25]);

    tree.delete(40);
    expect(tree.toList(), [25, 20, 30]);

    tree.delete(25);
    expect(tree.toList(), [30, 20]);
  });
}
