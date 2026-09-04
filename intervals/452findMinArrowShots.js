let points =  [[10,16],[2,8],[1,6],[7,12]]

const findMinArrowShots = (points) =>{
    points.sort((a,b)=> a[1]-b[1]);
    let pop = points[0][1];
    let arrow = 1;

    for(let [start,end] of points){
        if(start > pop){
            arrow++;
            pop = end;
        }
    }
    return arrow
}

console.log(findMinArrowShots(points))