let people = [3,5,3,4]
let limit = 3;
var numRescueBoats = function(people,limit){
let count = 0;

people.sort((a,b) => a-b);
let first = 0;
let last = people.length-1;
while(first <= last){
    if(people[first]+people[last] <= limit){
        count++;
        first++;
        last--;
    }else{
        count++;
        last--;
    }
}
    return count;
}
console.log(numRescueBoats(people,limit))