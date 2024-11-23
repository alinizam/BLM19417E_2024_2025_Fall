// Function to increment counter
function add() {
  var counter = 0;
   return function(){
    counter += 1;
    return counter;
  };
}

var f=add();
// Call add() 3 times

console.log(f())
console.log(f())
console.log(f())
