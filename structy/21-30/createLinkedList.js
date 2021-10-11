const createLinkedList = (values) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  for (let val of values) {
    tail.next = new Node(val);
    tail = tail.next;
  }
  return dummyHead.next;
};
