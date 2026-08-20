let isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

const findCircleNum = (isConnected) => {
  let visited = new Set();
  let province = 0;
  let n = isConnected.length;

  var dfs = function (i) {
    visited.add(i);
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] == 1 && !visited.has(j)) {
        dfs(j);
      }
    }
    return;
  };
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      province++;
      dfs(i);
    }
  }
  return province;
};

console.log(findCircleNum(isConnected));
