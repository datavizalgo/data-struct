/**
 * Singly Linked List in Rust
 *  
 */

#[derive(Debug)]
pub struct Node {
    data: i32,
    next: Option<Box<Node>>,
}

#[derive(Debug)]
pub struct SinglyLinkedList {
    head: Option<Box<Node>>,
    length: i32,
}

impl SinglyLinkedList {
    pub fn new() -> SinglyLinkedList {
        SinglyLinkedList {
            head: None,
            length: 0,
        }
    }
    /**
     * Prepend to the list
     * @param data the data to prepend
     */

    pub fn prepend(&mut self, data: i32) {
        let new_node = Node {
            data,
            next: self.head.take(),
        };
        self.head = Some(Box::new(new_node));
        self.length += 1;
    }
    /**
     * Append to the list
     * @param data the data to append
     *
     */
    pub fn append(&mut self, data: i32) {
        let new_node = Node { data, next: None };
        let mut current = &mut self.head;

        while let Some(node) = current {
            current = &mut node.next;
        }
        *current = Some(Box::new(new_node));
        self.length += 1;
    }
    /**
     * Insert at index
     * @param index the index to insert at
     * @param data the data to insert
     */
    pub fn insert_at(&mut self, index: i32, data: i32) {
        if index > self.length || index < 0 {
            panic!("Index out of bounds");
        }
        let mut new_node = Node { data, next: None };

        if index == 0 {
            new_node.next = self.head.take();
            self.head = Some(Box::new(new_node));
        } else {
            let mut current = &mut self.head;
            let mut count = 0;
            while let Some(node) = current {
                if count == index - 1 {
                    let new_node = Node {
                        data,
                        next: node.next.take(),
                    };
                    node.next = Some(Box::new(new_node));
                    break;
                }
                count += 1;
                current = &mut node.next;
            }
        }
        self.length += 1;
    }
    /**
     * Remove at index from the list
     * @param index the index to remove at
     *
     */
    pub fn remove_at(&mut self, index: i32) {
        if index >= self.length || index < 0 {
            panic!("Index out of bounds");
        }
        if index == 0 {
            self.head = self.head.take().and_then(|node| node.next);
        } else {
            let mut current = &mut self.head;
            let mut count = 0;
            while let Some(node) = current {
                if count == index - 1 {
                    let next = node.next.take().and_then(|node| node.next);
                    node.next = next;
                    break;
                }
                count += 1;
                current = &mut node.next;
            }
        }
        self.length -= 1;
    }
    /**
     * Pop from the list
     */
    pub fn pop(&mut self) -> Option<i32> {
        if self.is_empty() {
            return None;
        }
        self.length -= 1;
        self.head.take().map(|node| {
            self.head = node.next;
            node.data
        })
    }
    /**
     * Get the length
     */
    pub fn length(&self) -> i32 {
        self.length
    }
    /**
     * Check if the list is empty
     */
    pub fn is_empty(&self) -> bool {
        self.length == 0
    }
    pub fn display(&self) {
        let mut current = &self.head;
        while let Some(node) = current {
            println!("{}", node.data);
            current = &node.next;
        }
    }
    /**
     *
     * Convert the list to a vector
     */
    pub fn into_vec(&self) -> Vec<i32> {
        let mut current = &self.head;
        let mut vec = Vec::new();
        while let Some(node) = current {
            vec.push(node.data);
            current = &node.next;
        }
        vec
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_singly_linked_list() {
        let mut list = SinglyLinkedList::new();
        list.prepend(3);
        list.prepend(2);
        list.prepend(1);
        assert_eq!(list.length(), 3);
        assert_eq!(list.is_empty(), false);
        assert_eq!(list.into_vec(), vec![1, 2, 3]);
    }

    #[test]
    fn test_pop() {
        let mut list = SinglyLinkedList::new();
        list.prepend(3);
        list.prepend(2);
        list.prepend(1);
        assert_eq!(list.pop(), Some(1));
        assert_eq!(list.is_empty(), false);
        assert_eq!(list.pop(), Some(2));
        assert_eq!(list.length(), 1);
        assert_eq!(list.pop(), Some(3));
        assert_eq!(list.is_empty(), true);
    }

    #[test]
    fn test_pop_out_of_bounds() {
        let mut list = SinglyLinkedList::new();
        list.prepend(3);
        list.pop();
        assert_eq!(list.pop(), None);
    }

  

    #[test]
    fn test_insert_at() {
        let mut list = SinglyLinkedList::new();
        list.prepend(3);
        list.prepend(2);
        assert_eq!(list.into_vec(), vec![2, 3]);
        list.insert_at(1, 1);
        assert_eq!(list.into_vec(), vec![2, 1, 3]);
        list.insert_at(3, 4);
        assert_eq!(list.into_vec(), vec![2, 1, 3, 4]);
        list.insert_at(0, 0);
        assert_eq!(list.into_vec(), vec![0, 2, 1, 3, 4]);
        assert_eq!(list.length(), 5);
    }

    #[test]
    #[should_panic]
    fn insert_at_out_of_bounds() {
        let mut list = SinglyLinkedList::new();
        list.prepend(3);
        list.insert_at(1, 1);
        assert_eq!(list.into_vec(), vec![1, 3]);
        list.insert_at(3, 2);
    }

    #[test]
    #[should_panic]
    fn test_remove_at_out_of_bounds() {
        let mut list = SinglyLinkedList::new();
        list.prepend(3);
        list.remove_at(1);
    }
    #[test]
    fn test_remove_at() {
        let mut list = SinglyLinkedList::new();
        list.prepend(3);
        list.prepend(2);
        list.prepend(1);
        assert_eq!(list.into_vec(), vec![1, 2, 3]);
        list.remove_at(1);
        assert_eq!(list.into_vec(), vec![1, 3]);
        list.remove_at(0);
        assert_eq!(list.into_vec(), vec![3]);
        list.append(4);
        list.append(5);
        list.append(6);
        assert_eq!(list.into_vec(), vec![3, 4, 5, 6]);
        list.remove_at(3);
        assert_eq!(list.into_vec(), vec![3, 4, 5]);
    }   

    #[test]
    fn test_append() {
        let mut list = SinglyLinkedList::new();
        list.append(3);
        list.append(2);
        list.append(1);
        assert_eq!(list.length(), 3);
        assert_eq!(list.into_vec(), vec![3, 2, 1]);
        list.append(5);
        assert_eq!(list.into_vec(), vec![3, 2, 1, 5]);
    }

    #[test]
    fn test_display() {
        let mut list = SinglyLinkedList::new();
        list.prepend(3);
        list.prepend(2);
        list.prepend(1);
        list.display();
    }
}
