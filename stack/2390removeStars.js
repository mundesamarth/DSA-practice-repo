s = "leet**cod*e";
// s = "erase*****"
const removeStars = (s) => {
  s = s.split("");
  let arr = [];

  for(let i = 0; i < s.length; i++){
    if(s[i] === '*'){
        arr.pop(s[i-1])
    }
    else{
        arr.push(s[i])
    }
  }


  return arr.join("");
};

console.log(removeStars(s));
