var add=function add(a,b){
    return a+b;
}
var minus=function minus(a,b){
    return a-b;
}
var operation = (a,b,f) => (f(a,b));
console.log(operation(5,3,minus))

