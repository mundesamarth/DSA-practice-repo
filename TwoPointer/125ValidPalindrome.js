/**
 * @param {string} s
 * @return {boolean}
 */

s = "A man, a plan, a canal: Panama"
// s = "race a car";
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = s.length - 1;
  console.log("slength:", s.length);
  console.log("s", s);
  while (start < end) {
    if (s[start] !== s[end]) {
      return console.log(false);
    }
    start++;
    end--;
  }
  return console.log(true);
};

isPalindrome(s);
