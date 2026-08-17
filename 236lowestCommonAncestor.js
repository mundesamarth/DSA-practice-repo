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

const lowestCommonAncestor = (root, p, q) => {
  if (root === null) {
    return null;
  }

  if (root.val === p || root.val === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root.val;
  }

  return left.val || right.val;
};

const root = createBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p = 5;
const q = 1;
console.log(lowestCommonAncestor(root, p, q));
