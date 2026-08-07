// ((word1 = "abc"), (word2 = "bca"));
// ((word1 = "a"), (word2 = "aa"));
word1 = "cabbba", word2 = "abbccc"
const closeStrings = (word1, word2) => {
  let diff1 = new Map();
  let diff2 = new Map();
  if (word1.length === word2.length) {
    for (let ch of word1) {
      if (diff1.has(ch)) {
        diff1.set(ch, diff1.get(ch) + 1);
      } else {
        diff1.set(ch, 1);
      }
    }
    for (let ch of word2) {
      if (diff2.has(ch)) {
        diff2.set(ch, diff2.get(ch) + 1);
      } else {
        diff2.set(ch, 1);
      }
    }

    for (let ch of diff1.keys()) {
      if (!diff2.has(ch)) {
        return false;
      }
    }
    const count1 = [...diff1.values()].sort((a,b)=>a-b);
    const count2 =[...diff2.values()].sort((a,b)=>a-b);

    for(let i =0; i< count1.length;i++){
        if(count1[i] !== count2[i]){
            return false
        }
    }
    return true;
  }
  return false;
};

console.log(closeStrings(word1, word2));
