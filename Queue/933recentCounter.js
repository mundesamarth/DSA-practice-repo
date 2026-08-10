var RecentCounter = function (){
  this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);
    while(this.queue[0] < t-3000){
        this.queue.shift();
    }
    return this.queue.length;
};


var RecentCounter = function () {
  this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);

  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }

  return this.queue.length;
};

const counter = new RecentCounter();

console.log(counter.ping(1));    // 1
console.log(counter.ping(100));  // 2
console.log(counter.ping(3001)); // 3
console.log(counter.ping(3002)); // 3