/**
 * @param {string} s
 * @return {string}
 */
s = "IceCreAm";
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  const chars = s.split("");
  console.log(chars);
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.includes(chars[left])) {
      left++;
    }

    while (left < right && !vowels.includes(chars[right])) {
      right--;
    }

    let temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;

    left++;
    right--;
  }
  return chars.join("");
};

reverseVowels(s);
