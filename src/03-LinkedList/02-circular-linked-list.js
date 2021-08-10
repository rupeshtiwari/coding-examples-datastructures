class CircularLinkedList {
  insertAtEnd(head, data) {
    let newNode = new LinkListNode(data);
    if (!head) return newNode;

    let current = head;
    while (current.next != head) {
      current = current.next;
    }
    newNode.next = head;
    current.next = newNode;

    return head;
  }

  insertAtBegining(head, data) {
    let newNode = new LinkListNode(data);
    if (!head) return newNode;

    let current = head;
    while (current.next != head) {
      current = current.next;
    }
    newNode.next = head;
    current.next = newNode;
    head = newNode; // repoint your head to newNode.

    return head;
  }

  deleteLastNode(head) {
    let current = head;
    let previous = null;
    while (current.next != head) {
      previous = current;
      current = current.next;
    }
    previous.next = head;
    current = null;

    return head;
  }

  deleteFirstNode(head) {
    let current = head;
    while (current.next != head) {
      current = current.next;
    }
    current.next = head.next;
    head = current.next;

    return head;
  }
}

class CircularLinkListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
