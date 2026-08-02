/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

word1 = "abcd";
word2 = "pq";
var mergeAlternately = function (word1, word2) {
  var word3 = [];
    
  let i=0;
  while(i < word1.length && i < word2.length){
    console.log("before",i)
    word3 += word1[i];
    word3 += word2[i];
    i++;
  }

  while(i < word1.length){
    console.log("something",i)
    word3 += word1[i];
    i++;
  }
  while(i<word2.length){
    word3 += word2[i];
    i++;
  }
    console.log(word3)
};

mergeAlternately(word1, word2);
