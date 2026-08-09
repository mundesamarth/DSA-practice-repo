asteroids = [5,10,-5]

const asteroidCollision = (asteroids) => {
    let arr = [];
   for(let i = 0; i < asteroids.length; i++){
    console.log(Math.abs(asteroids[i]))
   }
}

console.log(asteroidCollision(asteroids))