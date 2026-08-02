// Swapping (most common)
let arr = [1, 2, 3, 4, 5];

let left = 0;
let right = arr.length - 1;

while (left < right) {

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr);


// Moving only ONE pointer
// while (left < right) {

//     if (left character is NOT what I want) {
//         left++;
//         continue;
//     }

//     if (right character is NOT what I want) {
//         right--;
//         continue;
//     }

//     // Both pointers are on valid characters
//     // Do the swap

//     left++;
//     right--;
// }