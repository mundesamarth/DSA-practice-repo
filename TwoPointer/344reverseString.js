s = ["h", "e", "l", "l", "o"];
const reverseString = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let temp = s[end];
    s[end] = s[start];
    s[start] = temp;

    start++;
    end--;
  }

  return s
};

console.log(reverseString(s));
