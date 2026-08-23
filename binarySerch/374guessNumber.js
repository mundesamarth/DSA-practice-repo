let n = 10;
let pick = 6;
const guess = (num) => {
    if (num === pick) return 0;
    if (num < pick) return 1;
    return -1;
};
const guessNumber = (n, pick) => {
  let left = 1;
  let right = n;

  while(left <= right){
    let mid = Math.floor((left+right)/2);

    let result = guess(mid);
    if(result === 0){
        return mid;
    }

    if(result === 1){
        left = mid+1;
    }
    else{
        right = mid-1
    }
  }
};

console.log(guessNumber(n, pick));
