constructorFunction = function () {
  this.a = 10;
  console.log(this);
};
constructorFunction.prototype.b = 5;

const obj = new constructorFunction();
obj.c=50;

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);