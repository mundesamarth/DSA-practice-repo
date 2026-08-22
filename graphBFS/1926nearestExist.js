let maze = [
  ["+", ".", "+", "+", "+", "+", "+"],
  ["+", ".", "+", ".", ".", ".", "+"],
  ["+", ".", "+", ".", "+", ".", "+"],
  ["+", ".", ".", ".", "+", ".", "+"],
  ["+", "+", "+", "+", "+", "+", "."],
];
let entrance = [0, 1];
const nearestExit = (maze, entrance) => {
  let cells = [[entrance[0], entrance[1], 0]];
  maze[entrance[0]][entrance[1]] = "+";
  let row = maze.length;
  let col = maze[0].length;
  let front = 0;

  while (front < cells.length) {
    let [r, c, steps] = cells[front];
    front++;
    let check = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ];
    for (let [i, j] of check) {
      if (i >= 0 && j >= 0 && i < row && j < col && maze[i][j] === ".") {
        maze[i][j] = "+";

        if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
          return steps + 1;
        }
        cells.push([i, j, steps + 1]);
      }
    }
  }
  return -1;
};

console.log(nearestExit(maze, entrance));
