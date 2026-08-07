// grid = [
//   [3, 2, 1],
//   [1, 7, 6],
//   [2, 7, 7],
// ];

let grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]

const equalPairs = (grid) => {
  let row = new Map();
  for (let i = 0; i < grid.length; i++) {
    let key = grid[i].join(",");

    if (row.has(key)) {
      row.set(key, row.get(key) + 1);
    } else {
      row.set(key, 1);
    }
  }
  let count = 0;
  for (let j = 0; j < grid.length; j++) {
    let column = [];
    for (let i = 0; i < grid.length; i++) {
      column.push(grid[i][j]);
    }

    const key = column.join(",");

    if (row.has(key)) {
      count += row.get(key);
    }
  }

  return count;
};

console.log(equalPairs(grid));
