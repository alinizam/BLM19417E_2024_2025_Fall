let p=new Promise(function(resolve,reject){
    //do something;
    setTimeout(() => { 
        var isSuccess=true;
        if (isSuccess)
            resolve('data');
        else
            reject('error');
    }, 1000); 
})
//p.then((data)=>console.log(data),
//        (error)=>console.error(error));

p.then((data)=>{console.log(data); 
                throw new Error("E m"); return 10})
 .then((data)=>console.log(data)).
  catch((error)=>console.error(error));