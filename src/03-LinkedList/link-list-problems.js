class LinkedList {
  insert(head, data, position = 0) {
    let newNode = new LinkListNode(data);
    if (head == null) {
      head = newNode;

      return head;
    }

    let currentNode = head;
    let currentPosition = 1;

    if (position === 1) {
      // insert at the begining
      newNode.next = head;
      head = newNode;

      return head;
    }

    while (currentNode.next && currentPosition < position) {
      currentNode = currentNode.next;
      currentPosition++;
    }

    if (currentNode.next) {
      let temp = currentNode.next;
      currentNode.next = newNode;
      newNode.next = temp;
    } else {
      currentNode.next = newNode;
    }

    return head;
  }

  delete(head, position = 0) {
    if (head == null) {
      return head;
    }

    let currentNode = head;
    let currentPosition = 1;

    if (position === 1) {
      // Delete at the begining
      let currentHead = head;
      head = head.next;
      currentHead = null;

      return head;
    }

    let previous = null;

    while (currentNode.next && currentPosition < position) {
      previous = currentNode;
      currentNode = currentNode.next;
      currentPosition++;
    }

    if (previous && previous.next) {
      previous.next = currentNode.next;
      currentNode = null;
    } else {
      currentNode.next = newNode;
    }

    return head;
  }

  reverse(head) {
    if (head == null) return head;
    let previous = null;
    let current = head;
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    head = previous;

    return head;
    /*
1,2,3

1->2->3
1->null
3->2->1->null

p   c   n 
0   100 200
100 200 300
200 300  0
300 0    0 
*/
  }

  /**
   * 10-20-30-40-50
   * 20-10-40-30-50
   * @param {node} head
   * @param {number} size
   */
  reverseInGroup(head, size) {
    let current = head;
    let previous = null;
    let k = 0;
    let next;

    while (current && k < size) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      k++;
    }

    if (next != null) {
      head.next = this.reverseInGroup(next, size);
    }

    return previous;
  }

  // Tricky remember this
  /** Medium
   * https://practice.geeksforgeeks.org/problems/rotate-a-linked-list/1
   * @param {node} head
   * @param {number} k
   * @returns head
   */
  rotateByKNodes(head, k) {
    let count = 1;
    let kthNode = head;
    let size = 1;
    let lastNode = head;
    while (lastNode.next) {
      size++;
      lastNode = lastNode.next;
    }

    k = k % size;
    if (k == 0) return head;

    while (kthNode.next && count < k) {
      kthNode = kthNode.next;
      count++;
    }

    let next = kthNode.next;

    // Linked list is already rotated.
    if (!next) return head;

    kthNode.next = null;
    lastNode.next = head;
    head = next;

    return head;
  }

  /**
   * https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1
   * within 1 loop you must find the middle node.
   * @param {ref} head
   * @returns
   */
  middle(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow.data;
  }

  kthNodefromEnd(head, k) {
    let fast = head;
    let slow = head;
    for (let i = 0; i < k; i++) {
      if (!fast) return -1; // if k is more than the size of the list returning -1;
      fast = fast.next;
    }

    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.data;
  }

  /**
   * https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1
   *
   * Floyd Cycle Detection Algorithm
   * @param {reference} head
   */
  removeLoop(head) {
    let slow = head;
    let fast = head;

    if (head.next == null || head.next.next == null) return -1;

    while (slow != null && fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        break;
      }
    }

    if (slow == head) {
      while (fast.next != slow) {
        fast = fast.next;
      }
      fast.next = null;
    } else if (slow == fast) {
      slow = head;
      while (slow.next != fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
      fast.next = null;
    }
  }

  read(head) {
    const result = [];
    if (head == null) return result;
    let current = head;
    result.push(current.data);

    while (current.next) {
      current = current.next;
      result.push(current.data);
    }

    return result;
  }
}

class LinkListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

describe('@LinkedList', () => {
  describe('Can Insert', () => {
    it('Problem #1', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 2);
      head = linkedList.insert(head, 1, 1);

      expect(linkedList.read(head)).toEqual([1, 2]);
      var end = performance.now();
      console.log('Problem #1', end - start);
    });

    it('Problem #2', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 2, 0);
      head = linkedList.insert(head, 1, 1);
      head = linkedList.insert(head, 3, 2);

      expect(linkedList.read(head)).toEqual([1, 2, 3]);
      var end = performance.now();
      console.log('Problem #2', end - start);
    });
  });
  describe('Can Delete', () => {
    it('Problem #1', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 2);
      head = linkedList.insert(head, 1, 1);
      head = linkedList.insert(head, 3, 2);
      head = linkedList.delete(head, 1);

      expect(linkedList.read(head)).toEqual([2, 3]);
      var end = performance.now();
      console.log('Problem #1', end - start);
    });
    it('Problem #2', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 2);
      head = linkedList.insert(head, 1, 1);
      head = linkedList.insert(head, 3, 2);
      // [1,2,3]
      head = linkedList.delete(head, 3); // Delete 3 element

      expect(linkedList.read(head)).toEqual([1, 2]);
      var end = performance.now();
      console.log('Problem #2', end - start);
    });
  });
  describe('Can reverse', () => {
    it('Problem #1', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 2, 0);
      head = linkedList.insert(head, 1, 1);
      head = linkedList.insert(head, 3, 2);
      head = linkedList.reverse(head);
      expect(linkedList.read(head)).toEqual([3, 2, 1]);
      var end = performance.now();
      console.log('Problem #1', end - start);
    });
  });
  describe('Can reverse in group', () => {
    it('Problem #1', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 20, 0);
      head = linkedList.insert(head, 10, 1);
      head = linkedList.insert(head, 30, 2);
      head = linkedList.insert(head, 40, 3);
      head = linkedList.insert(head, 50, 4);
      head = linkedList.reverseInGroup(head, 2);

      expect(linkedList.read(head)).toEqual([20, 10, 40, 30, 50]);
      var end = performance.now();
      console.log('Problem #1', end - start);
    });
  });
  describe('Can rotate by k nodes', () => {
    it('Problem #1', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 20, 0);
      head = linkedList.insert(head, 10, 1);
      head = linkedList.insert(head, 30, 2);
      head = linkedList.insert(head, 40, 3);
      head = linkedList.insert(head, 50, 4);
      head = linkedList.rotateByKNodes(head, 2);

      expect(linkedList.read(head)).toEqual([30, 40, 50, 10, 20]);
      var end = performance.now();
      console.log('Problem #1', end - start);
    });
    it('Problem #2', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 12, 0);
      head = linkedList.insert(head, 20, 1);
      head = linkedList.insert(head, 19, 2);
      head = linkedList.insert(head, 22, 3);
      head = linkedList.rotateByKNodes(head, 2);

      expect(linkedList.read(head)).toEqual([19, 22, 20, 12]);
      var end = performance.now();
      console.log('Problem #2', end - start);
    });
    it('Problem #3', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 12, 0);
      head = linkedList.insert(head, 20, 1);
      head = linkedList.insert(head, 19, 2);
      head = linkedList.insert(head, 22, 3);
      head = linkedList.rotateByKNodes(head, 4);

      expect(linkedList.read(head)).toEqual([20, 12, 19, 22]);
      var end = performance.now();
      console.log('Problem #3', end - start);
    });
  });

  describe('Can find Middle', () => {
    it('Problem #1', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 20, 0);
      head = linkedList.insert(head, 10, 1);
      head = linkedList.insert(head, 30, 2);
      head = linkedList.insert(head, 40, 3);
      head = linkedList.insert(head, 50, 4);
      let middle = linkedList.middle(head);

      expect(middle).toEqual(30);
      var end = performance.now();
      console.log('Problem #1', end - start);
    });
    it('Problem #2', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 12, 0);
      head = linkedList.insert(head, 20, 1);
      head = linkedList.insert(head, 19, 2);
      head = linkedList.insert(head, 22, 3);
      let middle = linkedList.middle(head);

      expect(middle).toEqual(19);
      var end = performance.now();
      console.log('Problem #2', end - start);
    });
  });

  describe('Can Kth node from End', () => {
    it('Problem #1', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 20, 0);
      head = linkedList.insert(head, 10, 1);
      head = linkedList.insert(head, 30, 2);
      head = linkedList.insert(head, 40, 3);
      head = linkedList.insert(head, 50, 4);
      let node = linkedList.kthNodefromEnd(head, 3);

      expect(node).toEqual(30);
      var end = performance.now();
      console.log('Problem #1', end - start);
    });
    it('Problem #2', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 12, 0);
      head = linkedList.insert(head, 20, 1);
      head = linkedList.insert(head, 19, 2);
      head = linkedList.insert(head, 22, 3);
      let node = linkedList.kthNodefromEnd(head, 2);

      expect(node).toEqual(19);
      var end = performance.now();
      console.log('Problem #2', end - start);
    });
    it('Problem #3', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 12, 0);
      head = linkedList.insert(head, 20, 1);
      head = linkedList.insert(head, 19, 2);
      head = linkedList.insert(head, 22, 3);
      let node = linkedList.kthNodefromEnd(head, 4);

      expect(node).toEqual(20);
      var end = performance.now();
      console.log('Problem #3', end - start);
    });
    it('Problem #4', () => {
      var start = performance.now();
      let linkedList = new LinkedList();
      let head = null;
      head = linkedList.insert(head, 12, 0);
      head = linkedList.insert(head, 20, 1);
      head = linkedList.insert(head, 19, 2);
      head = linkedList.insert(head, 22, 3);
      let node = linkedList.kthNodefromEnd(head, 88);

      expect(node).toEqual(-1);
      var end = performance.now();
      console.log('Problem #4', end - start);
    });
  });
});
