/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

str1 = "ABCABCABCABC";
str2 = "ABCABC";
var gcdOfStrings = function(str1, str2) {
    let shorter = str1.length < str2.length ? str1 : str2;

    for (let i = shorter.length; i >= 1; i--) {
        if (str1.length % i === 0 && str2.length % i === 0) {

            let candidate = shorter.slice(0, i);
            console.log("candidate",candidate)
            let buildStr1 = candidate.repeat(str1.length / i);
            console.log("builder1",buildStr1)
            let buildStr2 = candidate.repeat(str2.length / i);
            console.log("builder2",buildStr2)


            if (buildStr1 === str1 && buildStr2 === str2) {
                return candidate;
            }
        }
    }

    return "";
};

gcdOfStrings(str1, str2);
