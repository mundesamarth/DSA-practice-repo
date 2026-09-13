let s = "abca";
const validPalindrome = (s) => {
  const isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return (isPalindrome(start + 1, end) || isPalindrome(start, end - 1));
    }
    start++;
    end--;
  }

  return true;
};

console.log(validPalindrome(s));
