/**
 * @param {string} s
 * @return {number}
 */
s = "abcacbd";
var firstMatchingIndex = function (s) {
  let counter = 0;
  s = s.split("");

  for (let start = 0; start < s.length; start++) {
    let end = s.length - start - 1;
    if (s[start] === s[end]) {
      console.log(start)
      return
    }

    //   console.log(end)
  }
  console.log(counter);
};

firstMatchingIndex(s);
