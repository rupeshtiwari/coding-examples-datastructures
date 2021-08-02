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
});
