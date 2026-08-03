/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

s = "abciiidef";
k = 3;
var maxVowels = function (s, k) {
  let counter = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      counter++;
    }
  }

  let maxCount = counter;

  for(let i = k ; i < s.length ; i++){
    if(vowels.includes(s[i])){
        counter++;
    }

    if(vowels.includes(s[i-k])){
        counter--
    }

    maxCount = Math.max(counter,maxCount)
}


  return maxCount;
};

console.log(maxVowels(s, k));
