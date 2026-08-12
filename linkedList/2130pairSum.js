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
const pairSum = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  curr = slow;
  prev = null;

  while (curr !== null) {
    tpm = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tpm;
  }
  let head2 = prev;
  max_sum = 0;
  while (head2 !== null) {
    max_sum = Math.max(max_sum, head.val+head2.val);
    head = head.next;
    head2 = head2.next
  }
  return max_sum;
};

// 4. Create actual linked list
const head = createLinkedList([5, 4, 2, 1]);

const result = pairSum(head);
let current = result;

while (current) {
  console.log(current.val);
  current = current.next;
}
