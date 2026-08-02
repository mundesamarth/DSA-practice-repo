/**
 * @param {character[]} chars
 * @return {number}
 */
chars=["a","a","a","b","b","c","c"]
var compress = function(chars) {
    let write = 0; 
    let i = 0;     

    while (i < chars.length) {
        let currentChar = chars[i];
        let count = 0;

        while (i < chars.length && chars[i] === currentChar) {
            count++;
            i++;
        }
        chars[write] = currentChar;
        console.log("something;",chars[write] = currentChar)
        write++;
        if (count > 1) {
            for (const digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }

    console.log(write);
};

compress(chars)