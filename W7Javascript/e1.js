function add(a,b){
    return a+b;
}
console.log(add(3,5));

var add1=function add(a,b){
    return a+b;
}
console.log(add1(1,3));

var add2=(a,b)=>(a+b);
console.log(add2(1,6));

var add3=(a,b)=>{return (a+b)};
console.log(add3(1,4));