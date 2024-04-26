import 'package:test/test.dart';
import '../../src/queue/Queue.dart';

void main() {
  test("queue is empty", () {
    var queue = Queue();
    expect(queue.isEmpty(), true);
  });

  test("queue is not empty", () {
    var queue = Queue();
    queue.enqueue(1);
    expect(queue.isEmpty(), false);
  });

  test("queue enqueue", () {
    var queue = Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek(), 1);
    expect(queue.dequeue(), 1);
    expect(queue.peek(), 2);
    expect(queue.dequeue(), 2);
    expect(queue.peek(), 3);
    expect(queue.dequeue(), 3);
    expect(queue.isEmpty(), true);
  });
}
