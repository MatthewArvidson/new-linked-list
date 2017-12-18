import Node from './Node';

export default class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  unshift(data) {
    const currentHead = this.head;
    const newNode = new Node(data);
    
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
  }

  shift(data) {
    let oldHead = this.head;
   
    if (this.length) {
      this.head = this.head.next;
      this.length--;
    }
    return oldHead;
  }

  push(data) {
    const newNode = new Node(data);

    if(!this.length) {
      this.head = newNode;
    } else {
    let currentNode = this.head;
      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  this.length++;
  }

  pop(data) {
    if(!this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let prevNode;

      if(this.length === 1){
        this.head = null;
      }
      while(currentNode.next !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    if(prevNode) {
      prevNode.next = null;
    }
    this.length --;
    return currentNode;
    }
  }

  find(data) {
    let foundNode = null;
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        foundNode = currNode;
        break;
      } else {
        currNode = currNode.next;
      }
    }
    return foundNode;
  }

// to delete 'friend' node:
// Check if the data of my currNode matches the argument
// if it doesn't, move on to the next node
// repeat until currNode's data matches argument
// delete currNode; by setting it's value to null 
// then we need to reassign the currNode to currNode.next to keep them connected

  delete(data) {
    if (this.head.data === data) {
      this.length--;
      this.head = this.head.next;
    }

    let currNode = this.head;
    let prevNode = null;

    while (currNode) {
      if (currNode.data === data) {
        prevNode.next = currNode.next;
        currNode = null;
        this.length--;
        break;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }
  // to delete 'darkness' node:
  // find 'darkness' node
  // check to see if the currNode's data matches the argument
  // need to keep track of previous node
  // if it does"
  // - set prevNode's next to currNode's next

  toArray(data) {
    let array = [];
    let currNode = this.head;

    while (currNode) {
      array.push(currNode.data);
      currNode = currNode.next;
    }

    return array;
  }
  // loop through nodes
  // push value of 'data' from each node into the empty list array
  // return array
}