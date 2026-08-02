/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

haystack = "sadbutsad";
needle = "sad";
var strStr = function (haystack, needle) {
  console.log("Haystack:", haystack, "needle:", needle);
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    j = 0;
    while(j<needle.length && haystack[i+j] === needle[j]){
        j++;
    }
    if(j===needle.length){
        return i
    }
  }
  return -1;
};

strStr(haystack, needle);
