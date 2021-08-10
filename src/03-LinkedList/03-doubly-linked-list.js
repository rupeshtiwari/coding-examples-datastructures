class DoublyLinkedList {
  insert(head, data, pos) {
    const newNode = new LinkListNode(data);
    let current = head;
    if (!head) return newNode;
    let count = 1;
    while (count < pos - 1 && current.next != null) {
      current = current.next;
      count++;
    }

    const next = current.next;
    if (next) next.prev = current;

    newNode.prev = current;
    newNode.next = next;
    current.next = newNode;
  }

  delete(head, data, pos) {
    const newNode = new LinkListNode(data);
    let current = head;
    if (!head) return newNode;

    if (pos == 1) {
      //delete at begining
      let next = head.next;
      next.prev = null;
      head = next;

      return head;
    }

    let previous = null;
    let count = 1;
    while (count < pos - 1 && current.next != null) {
      previous = current;
      current = current.next;
      count++;
    }

    const next = current.next;
    if (next) next.prev = previous;

    previous.next = next;

    current = null;
  }
}

class DoublyLinkListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
