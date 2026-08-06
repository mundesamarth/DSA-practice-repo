arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
const uniqueOccurences = (arr) => {
  let hashMap = new Map();

  for (let num of arr) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }
  let repeatSet = new Set(hashMap.values());

  return hashMap.size === repeatSet.size;
};

console.log(uniqueOccurences(arr));
