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
var goodNode = function (root) {
    let good = 0;
    function helper(root,check){
        if(root.val >=check){
            good+=1;
        }
        if(root.left !== null){
            helper(root.left,check)
        }
        if(root.right !== null){
            helper(root.right,check)
        }
    }
    helper(root,root.val);
    return good;
};

const root = createBinaryTree([3,1,4,3,null,1,5]);

console.log(goodNode(root))
