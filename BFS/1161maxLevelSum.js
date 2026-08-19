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
var maxLevelSum = function(root) {
    if(root === null) return []
    let queue = [root]
    let maxSum = -Infinity;
    let answerLevel = 0;
    let currentLevel = 1;
    while(queue.length){
      let qLen = queue.length;
      let levelSum = 0;
      for(let i = 0; i < qLen; i++){
        let node = queue.shift();
        
        levelSum += node.val

        if(node.left !== null){
          queue.push(node.left)
        }
        if(node.right !== null){
          queue.push(node.right)
        }
      }
      if(levelSum>maxSum){
        maxSum = levelSum;
        answerLevel = currentLevel;
      }
      currentLevel++;
    }
    return maxSum
};


// Test tree
const root = createBinaryTree([1,7,0,7,-8,null,null]);

console.log(maxLevelSum(root));