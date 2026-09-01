let n = 5
const countBits = (n) =>{
    let ans = []
    
    for(let i = 0; i <=n ; i++){
        let binary = i.toString(2)
        console.log("binary",binary)
        let count = 0;

        for(let bit of binary){
            if(bit === "1"){
                count++
            }
        }

        ans.push(count)

    }
    return ans
}

console.log(countBits(n))