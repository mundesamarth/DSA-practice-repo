let rooms = [[1], [2], [3], []];

const canVisitAllRooms = (rooms) => {
  let visited = new Set();
  let stack = [0];

  while (stack.length !== 0) {
    let room = stack.pop();
    visited.add(room);
    for (let key of rooms[room]) {
      if (!visited.has(key)) {
        stack.push(key);
      }
    }
  }
  return visited.size == rooms.length;
};

console.log(canVisitAllRooms(rooms));
