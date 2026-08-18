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

    if (arr[i] !== null && arr[i] !== undefined) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }

    i++;

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }

    i++;
  }

  return root;
}


// LeetCode function
var rightSideView = function(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while(queue.length > 0){
    const levelSize = queue.length;
    console.log("levelSize",levelSize);

    for(let i = 0; i<levelSize; i++){
        const node = queue.shift();
        console.log("node",node.val);

        if(i===levelSize-1){
            result.push(node.val);
            console.log("nodeval",node.val);
        }
        if(node.left !== null){
            queue.push(node.left);
        }
        if(node.right !== null){
            queue.push(node.right);
        }
    }

  }
  return result
};


// Test tree
const root = createBinaryTree([1,2,3,4,null,null,null,5]);

console.log(rightSideView(root));