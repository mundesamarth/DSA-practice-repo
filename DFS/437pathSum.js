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
var pathSum = function (root, targetSum) {
  let path = 0;
  let pathSum = new Map();
  pathSum.set(0, 1);
  function helper(root, currSum) {
    if (root === null) {
      return;
    }
    currSum += root.val;
    console.log("currSum",currSum)
    path += pathSum.get(currSum - targetSum)||0;
    pathSum.set(currSum, (pathSum.get(currSum) || 0) + 1);
    console.log(path,pathSum)
    if (root.left !== null) {
      helper(root.left, currSum);
    }
    if (root.right !== null) {
      helper(root.right, currSum);
    }
    pathSum.set(currSum, pathSum.get(currSum) - 1);
  }
  helper(root, 0);
  return path;
};

const root = createBinaryTree([10,5,-3,3,2,null,11,3,-2,null,1]);
let targetSum = 8;
console.log(pathSum(root, targetSum));
