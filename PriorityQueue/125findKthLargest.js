let nums = [3, 2, 1, 5, 6, 4];
let k = 2;

var findKthLargest = function (nums, k) {
  let heap = [];

  const pushs = (nums) => {
    heap.push(nums);

    i = heap.length - 1;

    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);

      if (heap[parent] <= heap[i]) break;

      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    }
  };

  const pops = () => {
    heap[0] = heap[heap.length - 1];
    heap.pop();

    let i = 0;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < heap.length && heap[left] < heap[smallest]) {
        smallest = left;
      }

      if (right < heap.length && heap[right] < heap[smallest]) {
        smallest = right;
      }

      if (smallest === i) break;

      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];

      i = smallest;
    }
  };

  for (let num of nums) {
    pushs(num);

    if (heap.length > k) {
      pops();
    }
  }
  return heap[0];
};
console.log(findKthLargest(nums, k));
