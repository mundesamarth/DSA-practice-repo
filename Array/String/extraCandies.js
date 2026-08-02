/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
candies = [2, 3, 5, 1, 3];
extraCandies = 3;
var kidsWithCandies = function (candies, extraCandies) {
  let highestCandy = Math.max(...candies);

  var extra = [];
  var result = [];
  for (let i = 0; i < candies.length; i++) {
    extra.push(candies[i] + extraCandies);

    if (extra[i] >= highestCandy) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  console.log(result);
};
kidsWithCandies(candies, extraCandies);
