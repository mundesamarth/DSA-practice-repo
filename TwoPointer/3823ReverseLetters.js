/**
 * @param {string} s
 * @return {string}
 */
s = ")ebc#da@f(";
var reverseByType = function (s) {
  let letters = [];
  let specialChar = [];
  let firstL = 0;
  let firstSp = 0;
  s = s.split("");
  let temp1;
  let temp2;

  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/.test(s[i])) {
      letters.push(s[i]);
    } else {
      specialChar.push(s[i]);
    }
  }

  let endL = letters.length - 1;

  while (firstL < endL) {
    temp1 = letters[firstL];
    letters[firstL] = letters[endL];
    letters[endL] = temp1;
    firstL++;
    endL--;
  }

    let endSp = specialChar.length - 1;

  while (firstSp < endSp) {
    temp2 = specialChar[firstSp];
    specialChar[firstSp] = specialChar[endSp];
    specialChar[endSp] = temp2;
    firstSp++;
    endSp--;
  }
  let letterIndex = 0;
  let specialIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/.test(s[i])) {
      s[i] = letters[letterIndex];
      letterIndex++;
    } else {
      s[i] = specialChar[specialIndex];
      specialIndex++;
    }
  }
  console.log("s", s.join(""), "letters", letters, "special", specialChar);
};

reverseByType(s);
