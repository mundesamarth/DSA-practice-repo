// 1. Node constructor
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// 2. Convert array → linked list
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}


// 3. Your LeetCode solution
const deleteMiddle = function (head) {
  let p = null;
  let s = head;
  let f = head;

  if (head.next === null) {
    return null;
  }

  while (f && f.next) {
    p = s;
    f = f.next.next;
    s = s.next;
  }

  p.next = p.next.next;

  return head;
};


// 4. Create actual linked list
const head = createLinkedList([1, 3, 4, 7, 1, 2, 6]);

const result = deleteMiddle(head);
let current = result;

while (current) {
  console.log(current.val);
  current = current.next;
}