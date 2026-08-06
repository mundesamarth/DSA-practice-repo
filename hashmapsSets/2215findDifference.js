nums1 = [1, 2, 3];
nums2 = [2, 4, 6];
const findDifference = (nums1, nums2) => {
  let nums1Set = new Set(nums1);
  let nums2Set = new Set(nums2);
  let diff1 = new Set();
  let diff2 = new Set();

  for (let n of nums1Set){
    if(!nums2Set.has(n)){
        diff1.add(n)
    }
  }
  
  for (let n of nums2Set){
    if(!nums1Set.has(n)){
        diff2.add(n)
    }
  }

  return [[...diff1], [...diff2]]
};

console.log(findDifference(nums1, nums2));
