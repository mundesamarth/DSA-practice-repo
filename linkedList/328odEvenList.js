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

const oddEvenList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let odd = head;
  let even = (even_head = head.next);

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = even_head;
  return head;
};

// 4. Create actual linked list
const head = createLinkedList([1, 2, 3, 4, 5]);

const result = oddEvenList(head);
let current = result;

while (current) {
  console.log(current.val);
  current = current.next;
}
