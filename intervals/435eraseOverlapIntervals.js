intervals = [[1,2],[1,2],[1,2]]

const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let counter = 0;
  let currentEnd = intervals[0][1];
  for (let i = 0; i < intervals.length - 1; i++) {
    let nextStart = intervals[i][0];
    let nextEnd = intervals[i][1];
    if (nextStart < currentEnd) {
      counter++;
      currentEnd = Math.min(currentEnd, nextEnd);
    } else {
      currentEnd = nextEnd;
    }
}
return counter;
};
console.log(eraseOverlapIntervals(intervals));
