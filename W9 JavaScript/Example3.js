function f1(){
    setTimeout(() => {
        console.log("f1"); 
    }, 2000);
}
function f2(){
    console.log("f2");
}
f1();
f2();
