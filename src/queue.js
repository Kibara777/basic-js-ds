const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.UnderlyingList;

  }

  enqueue(value) {
    if (!this.UnderlyingList) {
      this.UnderlyingList = new ListNode(value)
    } else {

    let lastNode = this.UnderlyingList;
    
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      lastNode.next = new ListNode(value);
    }
       
  }

  
  dequeue() {
    let elementAtQueue = this.UnderlyingList.value; 
    this.UnderlyingList = this.UnderlyingList.next;
    return elementAtQueue
  }
}

module.exports = {
  Queue
};
