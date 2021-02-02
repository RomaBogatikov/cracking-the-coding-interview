// Problem 2.4
// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the 'right partition'; it does not need to appear between the left and right partitions

// EXAMPLE:
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 5 -> 8

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

  getAt(index) {
    let count = 0;
    let current = this.head;
    while(current && count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  deleteMiddleNode(targetNode) {
    let previous = null;
    let current = this.head;

    while(!Object.is(current, targetNode)) {
      previous = current;
      current = current.next;
    };

    previous.next = current.next;
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



  partition(value) {
    let current = this.head;
    let result = new LinkedList();

    while (current) {
      if (current.value < value) {
        result.insertFirst(current.value);
      } else {
        result.insertLast(current.value);
      }
      current = current.next;
    }
    return result;
  }
}

const ll1 = new LinkedList();

ll1.insertLast(3)
ll1.insertLast(25)
ll1.insertLast(15)
ll1.insertLast(9)
ll1.insertLast(2)
ll1.insertLast(3)
ll1.insertLast(5)
ll1.insertLast(11)
ll1.insertLast(4)
ll1.insertLast(12)
ll1.insertLast(8)

let result = ll1.partition(5);
console.log(result)


