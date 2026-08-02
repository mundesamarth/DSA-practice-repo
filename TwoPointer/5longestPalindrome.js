/**
 * @param {string} s
 * @return {string}
 */
s = "babad";
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let start = 0;
  let end = 1;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currentLength = right - left + 1;

      if (currentLength > end) {
        end = currentLength;
        start = left;
      }

      left--;
      right++;
    }
  }

  for(let i =0; i < s.length; i++){
    expand(i,i);
    expand(i,i+1)
  }

  return s.slice(start, start+end);
};
console.log(longestPalindrome(s));
