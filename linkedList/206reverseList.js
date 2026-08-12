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

const helper = function(prev,curr){
  if (curr === null){
    return prev
  }

  next_node = curr.next;
  curr.next = prev;
  let new_head = helper(curr,next_node);

  return new_head

}

// 3. Your LeetCode solution
const reverseList = function (head) {
  return helper(null,head)
};

// 4. Create actual linked list
const head = createLinkedList([1, 2, 3, 4, 5]);

const result = reverseList(head);
let current = result;

while (current) {
  console.log(current.val);
  current = current.next;
}
