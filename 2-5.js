// Problem 2.5
//  You have two numbers represented by a linked list, where each node contains a single digit. the digits are storen in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list

// EXAMPLE
// Input (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
// Output: 2 -> 1 -> 9. That is, 912


// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem

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
    let newNode = new Node(value);
    if (this.head === null) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode
  }

  insertLast(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.insertFirst(value)
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

const number1 = new LinkedList();
number1.insertLast(7)
number1.insertLast(1)
number1.insertLast(6)

const number2 = new LinkedList();
number2.insertLast(5)
number2.insertLast(9)
number2.insertLast(2)

const sumReverseOrder = (number1LinkedList, number2LinkedList) => {
  let result = new LinkedList();

  let tracker1 = number1LinkedList.head;
  let tracker2 = number2LinkedList.head;
  let number1Str = '';
  let number2Str = '';

  while (tracker1) {
    number1Str = tracker1.value + number1Str;
    tracker1 = tracker1.next;
  }
  while (tracker2) {
    number2Str = tracker2.value + number2Str;
    tracker2 = tracker2.next;
  }

  let sumOfNums = String(Number(number1Str) + Number(number2Str));

  sumOfNums.split('').forEach((number) => result.insertFirst(Number(number)));

  return result;

}

const finalNumberReverse = sumReverseOrder(number1, number2);
// console.log(finalNumberReverse);

const sumForwardOrder = (number1LinkedList, number2LinkedList) => {
  let result = new LinkedList();

  let tracker1 = number1LinkedList.head;
  let tracker2 = number2LinkedList.head;
  let number1Str = '';
  let number2Str = '';

  while (tracker1) {
    number1Str += tracker1.value;
    tracker1 = tracker1.next;
  }
  while (tracker2) {
    number2Str += tracker2.value;
    tracker2 = tracker2.next;
  }

  let sumOfNums = String(Number(number1Str) + Number(number2Str));

  sumOfNums.split('').forEach((number) => result.insertLast(Number(number)));

  return result;
}

const finalNumberForward = sumForwardOrder(number1, number2);
console.log(finalNumberForward)
