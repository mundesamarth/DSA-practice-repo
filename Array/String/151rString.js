/**
 * @param {string} s
 * @return {string}
 */

s = "the sky is blue";

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.trim().split(/\s+/);
    let newWords = ""
    for(let i = words.length-1; i >= 0; i--){
        newWords += words[i];
        console.log("Incrementing", newWords)
        if(i !== 0){
            console.log("insideForLoop",newWords)
            newWords += " "
        }

    }
    console.log(newWords)
};

reverseWords(s)
