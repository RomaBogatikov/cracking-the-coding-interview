// Problem 2.1
// Write code to remove duplicates from an unsorted linked list

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor (head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  insertFirst(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertLast(value) {
    let newNode = new Node(value);
    if (this.tail === null) {
      this.insertFirst(value);
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // when buffer is allowed
  removeDuplicates() {
    let valuesArr = [];
    let previous = this.head;
    let current = this.head.next;
    // let next = this.head.next;

    valuesArr.push(previous.value);

    while (current !== null) {
      if (valuesArr.includes(current.value)) {
        previous.next = current.next;
      } else {
        valuesArr.push(current.value);
      }
      previous = current;
      current = current.next;
    }

    this.tail = previous;
  }
}

let ll = new LinkedList();

ll.insertLast(10);
ll.insertLast(9);
ll.insertLast(9);
ll.insertLast(8);
ll.insertLast(8);

ll.removeDuplicates();
console.log(ll)
