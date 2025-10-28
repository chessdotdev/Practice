function makeCounter() {
  let count = 0;               // variable captured by closure
  return function() {          // returned function closes over `count`
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
