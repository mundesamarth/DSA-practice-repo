let temperatures = [73,74,75,71,69,72,76,73];

var dailyTemperatures = function(temperatures) {
    let answer = [];
    let counter = 0;
    for(let i = 0; i < temperatures.length;i++){
        if(temperatures[i] === temperatures[temperatures.length-1]){
            answer.push(0)
        }

        let j = i+1;
        while(temperatures[i] < temperatures[j]){
            counter++;
        }
    }
    return counter
};

console.log(dailyTemperatures(temperatures))