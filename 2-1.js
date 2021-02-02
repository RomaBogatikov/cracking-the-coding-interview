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



///////////////////////////////////////////////
/////// Code to merge 2 sorted linked lists////
///////////////////////////////////////////////


const ll1 = new LinkedList();
const ll2 = new LinkedList();

ll1.insertLast(3)
ll1.insertLast(4)
ll1.insertLast(5)
ll1.insertLast(8)
ll1.insertLast(11)
ll1.insertLast(12)

ll2.insertLast(1)
ll2.insertLast(2)
ll2.insertLast(7)
ll2.insertLast(9)

const merge = (array1, array2) => {
  let result = [];

  while (array1[0] && array2[0]) {
    if (array1[0] < array2[0]) {
      result.push(array1.shift())
    } else {
      result.push(array2.shift())
    }
  }

  if (array1[0]) result.concat(array1);
  if (array2[0]) result.concat(array2)

  return result;
}

let arr1 = [3, 4, 5, 8];
let arr2 = [1, 2, 7, 9];

const mergeSortedLinkedListsInPlace = (linkedList1, linkedList2) => {
  let cur1 = linkedList1.head;
  let cur2 = linkedList2.head;

  let result = new LinkedList();
  if (cur1.value < cur2.value) {
    result.head = cur1;
    cur1 = cur1.next;
  } else {
    result.head = cur2;
    cur2 = cur2.next;
  }

  let tracker = result.head;

  while (cur1 && cur2) {
    if (cur1.value < cur2.value) {
      tracker.next = cur1;
      cur1 = cur1.next;
    } else {
      tracker.next = cur2;
      cur2 = cur2.next;
    }
    tracker = tracker.next;
  }

  if (cur1 !== null) {
    tracker.next = cur1;
    result.tail = linkedList1.tail;
  }
  if (cur2 !== null) {
    tracker.next = cur2;
    result.tail = linkedList2.tail;
  }

  return result;
}

let mergedLL = mergeSortedLinkedListsInPlace(ll1, ll2);
console.log(mergedLL);

