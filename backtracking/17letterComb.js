let digit = "23"
const letterCombination = (digits) =>{
    if(digits.length === 0 )  return [];

    const phone = {
        2: "abc",
        3:"def",
        4:"ghi",
        5:"jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    console.log("n",digits.length)
    let result = [];
    const backtracking = (index,curr)=>{
        if(index === digits.length){
            result.push(curr);
            return;
        }

        let letters = phone[digits[index]];
        console.log(letters)

        for(let letter of letters){
            backtracking(index+1,curr+letter)
        }
    }
    backtracking(0,"");
    return result;

}

console.log(letterCombination(digit))