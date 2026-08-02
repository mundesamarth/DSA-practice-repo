/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

s = "axc";
t = "ahbgdc";
var isSubsequence = function (s, t) {
  let sPointer = 0;
  let tPointer = 0;
  while (tPointer < t.length) {
    if(s[sPointer] === t[tPointer]){
        sPointer++
    }
    tPointer++
    
  }
  if(sPointer == s.length){
    console.log(true)
  }
  else{
    console.log(false)
  }
};

isSubsequence(s, t);
