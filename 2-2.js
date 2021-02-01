// Problem 2.2
// Implement an algorithm to find the kth to last element of a singly linked list

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  insertFirst(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  insertLast(value) {
    const newNode = new Node(value);
    if (this.tail === null) {
      this.insertFirst(value)
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  kthToLast(indToLast) {
    let count = 1;
    let current = this.head;
    while(count !== this.length - indToLast) {
      current = current.next;
      count++;
    }

    return current;
  }

  get length() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

}

const ll = new LinkedList();

ll.insertLast(1)
ll.insertLast(2)
ll.insertLast(3)
ll.insertLast(4)
ll.insertLast(5)
ll.insertLast(6)
ll.insertLast(7)
ll.insertLast(8)

console.log(ll)
console.log('kth to last=', ll.kthToLast(2))
