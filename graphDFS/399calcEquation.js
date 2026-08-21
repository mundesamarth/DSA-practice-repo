let equations = [
  ["a", "b"],
  ["b", "c"],
];
let values = [2.0, 3.0];
let queries = [
  ["a", "c"],
  ["b", "a"],
  ["a", "e"],
  ["a", "a"],
  ["x", "x"],
];

const calcEquation = (equations, values, queries) => {
  let graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    let [a, b] = equations[i];
    let value = values[i];

    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a).push([b, value]);
    graph.get(b).push([a, 1 / value]);
  }
  console.log(graph)
  var dfs = function (curr, target, product, visited) {
    if (curr === target) {
      return product;
    }
    visited.add(curr);
    for (let [neighbor, weight] of graph.get(curr)) {
      if (!visited.has(neighbor)) {
        let result = dfs(neighbor, target, product * weight, visited);
        if (result !== -1) {
          return result;
        }
      }
    }
    return -1;
  };
  let answer = [];
  for (let [start, end] of queries) {
    if (!graph.has(start) || !graph.has(end)) {
      answer.push(-1);
      continue;
    }
    let visited = new Set();
    let result = dfs(start, end, 1, visited);

    answer.push(result);
  }
  return answer;
};

console.log(calcEquation(equations, values, queries));
