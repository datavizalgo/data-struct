import 'package:test/test.dart';

import '../../src/stack/Stack.dart';

void main() {
  test("stack is empty", () {
    var stack = Stack();
    expect(stack.isEmpty(), true);
  });

  test("stack is not empty", () {
    var stack = Stack();
    stack.push(1);
    expect(stack.isEmpty(), false);
    expect(stack.top(), 1);
  });

  test("stack push", () {
    var stack = Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top(), 3);
    expect(stack.size(), 3);
  });

  test("stack pop", () {
    var stack = Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop(), 3);
    expect(stack.pop(), 2);
    expect(stack.pop(), 1);
    expect(stack.isEmpty(), true);
  });

  test("stack top", () {
    var stack = Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top(), 3);
    expect(stack.size(), 3);
    expect(stack.isEmpty(), false);
    expect(stack.pop(), 3);
    expect(stack.top(), 2);
    expect(stack.pop(), 2);
    expect(stack.top(), 1);
    expect(stack.pop(), 1);
    expect(stack.isEmpty(), true);
  });
}
