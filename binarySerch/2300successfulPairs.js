let spells = [5, 1, 3];
let potions = [1, 2, 3, 4, 5];
let success = 7;

var successfulPairs = function (spells, potions, success) {
    let result = [];

    // Binary search needs sorted potions
    potions.sort((a, b) => a - b);

    for (let spell of spells) {

        let left = 0;
        let right = potions.length - 1;

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            let product = spell * potions[mid];

            if (product >= success) {
                // This potion works, but maybe an earlier one works too
                right = mid - 1;
            } else {
                // Potion is too small
                left = mid + 1;
            }
        }

        // left = index of first successful potion
        let count = potions.length - left;

        result.push(count);
    }

    return result;
};

console.log(successfulPairs(spells, potions, success));

/*
so basically 5*potions, 1* potions, 3*potions and the success should we greather then success.
result = [4,0,3]


*/
