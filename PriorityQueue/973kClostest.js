class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);

    let i = this.heap.length - 1;

    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);

      if (this.heap[parent] >= this.heap[i]) {
        break;
      }

      [this.heap[parent], this.heap[i]] = [
        this.heap[i],
        this.heap[parent],
      ];

      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let max = this.heap[0];

    this.heap[0] = this.heap.pop();

    let i = 0;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let largest = i;

      if (
        left < this.heap.length &&
        this.heap[left] > this.heap[largest]
      ) {
        largest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right] > this.heap[largest]
      ) {
        largest = right;
      }

      if (largest === i) {
        break;
      }

      [this.heap[i], this.heap[largest]] = [
        this.heap[largest],
        this.heap[i],
      ];

      i = largest;
    }

    return max;
  }
}
let points = [
  [3, 3],
  [5, -1],
  [-2, 4],
];
let k = 2;
const kClostest = (points, k) => {
    const maxHeap = new MaxHeap({
        priority: (item) => item.distance
    })

    for(let [x,y] of points){
        let distance = x*x + y*y;

        maxHeap.push({
            point:[x,y],
            distance: distance
        });

        if(maxHeap.size() > k){
            maxHeap.pop();
        }
    }

    let result = [];
    console.log(maxHeap)
    // while(!maxHeap !== 0){
    //     result.push(maxHeap.pop())
    // }

    // return result
};



console.log(kClostest(points, k));
