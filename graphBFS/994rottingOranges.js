let grid = [[2,1,1],[1,1,0],[0,1,1]]

const rottingOranges = (grid) => {
  let fresh = 0;
  let rows = grid.length;
  let cols = grid[0].length;
  let rotten = [];
  let minutes = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] == 1) {
        fresh++;
      } else if (grid[row][col] == 2) {
        rotten.push([row, col]);
      }
    }
  }
  while (rotten.length > 0 && fresh > 0) {
    minutes++;
    let curr = [];
    for (let [r, c] of rotten) {
      let check = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1],
      ];
      for (let [i, j] of check) {
        if (i >= 0 && j >= 0 && i < rows && j < cols && grid[i][j] == 1) {
          grid[i][j] = 2;
          fresh--;
          curr.push([i, j]);
          if (fresh == 0) {
            return minutes;
          }
        }
      }

      rotten = curr;
    }
  }
  if (fresh == 0) {
    return minutes;
  } else {
    return -1;
  }
};



console.log(orangesRotting(grid));
