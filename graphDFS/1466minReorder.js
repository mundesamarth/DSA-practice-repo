let n = 6;
let connections = [
  [0, 1],
  [1, 3],
  [2, 3],
  [4, 0],
  [4, 5],
];

const minReorder = (n, connections) => {
  let connection = new Set();
  let neighbours = new Map();

  for (let [start, end] of connections) {
    if (!neighbours.has(start)) neighbours.set(start, []);
    if (!neighbours.has(end)) neighbours.set(end, []);

    neighbours.get(start).push(end);
    neighbours.get(end).push(start);

    connection.add(`${start},${end}`);
  }

  let curr = [0];
  let reverse = 0;
  let visited = new Set();
  visited.add(0);

  while (curr.length !== 0) {
    let new_curr = []
    for (let city of curr) {
      for (let n of neighbours.get(city)) {
        if (!visited.has(n)) {
          visited.add(n);
          if (!connection.has(`${n},${city}`)) {
            reverse++;
          }
        new_curr.push(n)
        }
      }
    }
    curr = new_curr
  }

  return neighbours
};

console.log(minReorder(n, connections));
