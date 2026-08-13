// Creates one tree node
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function createBinaryTree(arr) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];

  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    // Left child
    if (arr[i] !== null && arr[i] !== undefined) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }

    i++;

    // Right child
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }

    i++;
  }

  return root;
}

// leet code function
var maxDepth = function (root) {
  if(root == null){
    return 0
  }

  return 1+Math.max(maxDepth(root.left),maxDepth(root.right))
};

const root = createBinaryTree([3, 9, 20, null, null, 15, 7]);

console.log(maxDepth(root))
