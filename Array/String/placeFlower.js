/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

let flowerbed = [1,0,0,0,1,0,0];
let n = 2;
var canPlaceFlowers = function (flowerbed, n) {
  let counter = 0;
  let flowerBedLen = flowerbed.length;

  if (n == 0) {
    return true;
  }
  for (let i = 0; i < flowerBedLen; i++) {
    if (flowerbed[i] == 0) {
      if (
        (i == 0 || flowerbed[i - 1] == 0) &&
        (i == flowerBedLen-1 || flowerbed[i + 1] == 0)
      ) {
        counter++;
        flowerbed[i] += 1;
        console.log(flowerbed)
        console.log(counter)
         if (counter == n) {
        console.log("true",n,counter)
      }
      }
     
    }
    console.log("false",n,counter)
  }
};


canPlaceFlowers(flowerbed,n)