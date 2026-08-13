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

var leafSimilar = function (root1, root2) {
  let leaf1 = [];
  let leaf2 = [];
  function getLeaf(root, result) {
    if (root.left === null && root.right === null) {
      result.push(root.val);
      return;
    }

    if (root.left !== null) {
      getLeaf(root.left, result);
    }
    if (root.right !== null) {
      getLeaf(root.right, result);
    }
    return;
  }
  getLeaf(root1, leaf1);
  getLeaf(root2, leaf2);

  if (leaf1.length !== leaf2.length) {
    return false;
  }

  for (let i = 0; i < leaf1.length; i++) {
    if (leaf1[i] !== leaf2[i]) {
      return false;
    }
  }

  return true;
};

const root1 = createBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
const root2 = createBinaryTree([
  3,
  5,
  1,
  6,
  7,
  4,
  2,
  null,
  null,
  null,
  null,
  null,
  null,
  9,
  8,
]);
console.log(leafSimilar(root1, root2));
