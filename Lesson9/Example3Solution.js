function f1(f){
    setTimeout(() => {
        console.log("f1");
        f(); 
    }, 2000);
}
function f2(){
    console.log("f2");
}
f1(f2);
