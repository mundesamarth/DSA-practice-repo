let piles =  [3,6,7,11]
let h = 8;
const minEatingSpeed = (piles, h) => {
  let left = 1;
  let right = Math.max(...piles);
//   console.log("right",right)

  while (left <= right) {
    let hours = 0;
    let mid = Math.floor((left + right) / 2);
    console.log("mid",mid)
    for (let pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      right = mid - 1;
      console.log("right",right)
    } else {
      left = mid + 1;
      console.log("left",left)
    }
  }
  return left;
};

console.log(minEatingSpeed(piles, h));
