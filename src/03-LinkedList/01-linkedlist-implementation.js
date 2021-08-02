class LinkedList {
  insert(head, data, position = 0) {
    let newNode = new LinkListNode(data);
    if (head == null) {
      head = newNode;

      return head;
    }

    let currentNode = head;
    let currentPosition = 1;

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

describe('@LinkedList : Insert', () => {
  it('Problem #1', () => {
    var start = performance.now();
    let linkedList = new LinkedList();
    let head = null;

    [1, 2, 4, 5].forEach((e, idx) => {
      head = linkedList.insert(head, e, idx);
    });

    expect(linkedList.read(head)).toEqual([1, 2, 4, 5]);
    var end = performance.now();
    console.log('Problem #1', end - start);
  });

  it('Problem #2', () => {
    var start = performance.now();
    let linkedList = new LinkedList();
    let head = null;

    [1, 2, 4, 5].forEach((e, idx) => {
      head = linkedList.insert(head, e, idx);
    });
    linkedList.insert(head, 3, 2);
    expect(linkedList.read(head)).toEqual([1, 2, 3, 4, 5]);
    var end = performance.now();
    console.log('Problem #2', end - start);
  });
});
