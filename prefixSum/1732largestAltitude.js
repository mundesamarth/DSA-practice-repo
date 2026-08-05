gain = [-4,-3,-2,-1,4,3,2]


const largestAltitude = (gain) => {
  let maxAlt = 0;
  let netGain = 0;

  for(let i = 0 ; i < gain.length; i++){
    netGain += gain[i]
    maxAlt = Math.max(maxAlt, netGain)

  }
  return maxAlt;
};

console.log(largestAltitude(gain));
