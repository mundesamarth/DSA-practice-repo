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

const longestZigZag = (root) =>{
    let count = 0;
    
    function dfs (root,left,curr){
        if(root === null){
            return
        }
        count = Math.max(count,curr)
        if(left == true){
            dfs(root.right,false, curr+1)
            dfs(root.left,true,1)
        }
        else{
            dfs(root.left,true, curr+1)
            dfs(root.right,false,1)
        }
    }

    dfs(root.right,false,1)
    dfs(root.left,true,1)
    return count


}

const root = createBinaryTree([1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]);
console.log(longestZigZag(root));
