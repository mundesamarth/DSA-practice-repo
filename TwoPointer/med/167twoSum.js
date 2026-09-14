let numbers = [2,7,11,15];
let target = 9;

var twoSum = function (numbers, target) {
  let result = [];
  let left = 0; 
  let right = numbers.length-1;
  
  while(left < right){
    if(numbers[left]+numbers[right] === target){
        result.push(left+1, right+1);
      
    }
      left++;
        right--
  }

  return result;
};

console.log(twoSum(numbers, target));
