let k = 3;
let n = 7;
const combinationSum3 = (k, n) => {

let result = []
    function generate(arr, sum, num){
        if(arr.length === k && sum === n){
            result.push([...arr]);
            return;
        }

        if(arr.length >= k || sum >= n){
            return;
        }

        if(num === 10){
            return;
        }

        arr.push(num);
        generate(arr, sum+num, num+1);
        arr.pop();

        generate(arr, sum, num+1);
    }

    generate([], 0, 1);
    return result;

};

console.log(combinationSum3(k, n));
