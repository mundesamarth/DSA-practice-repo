let a = 2;
let b = 6;
let c = 5;
const minFlips = (a, b, c) => {
  let flips = 0;

  while (a > 0 || b > 0 || c > 0) {
    let bitA = a & 1;
    let bitB = b & 1;
    let bitC = c & 1;

    if (bitC === 1) {
      if (bitA === 0 && bitB === 0) {
        flips++;
      }
    } else {
      flips += bitA + bitB;
    }

    a >>= 1;
    b >>= 1;
    c >>= 1;
    console.log("bita",bitA)
    console.log("bitb",bitB)
    console.log("bitc",bitC)

  }
  return flips;
};

console.log(minFlips(a, b, c));
