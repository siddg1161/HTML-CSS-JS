function myName()
{
    console.log("sid is my name");
}
let firstPromise=new Promise((resolve,reject)=>{
    setTimeout(myName,5000); //async code
});


let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success)
    {
        resolve("promise fulfilled");
    }
    else{
        reject("promise rejkected");
    }
});
promise1.then((message)=>{
    console.log("first message"+message);
    return "promiose fullfilled second message";
}).then((message)=>{
    console.log("second message:"+message);
}).catch((error)=>{
    console.log("errrorr:"+error);
}).finally((message)=>{
    console.log("mein humesha chalunga");
})


//multiple promisess
let Promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
})
let Promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"second");
})
let Promise4=new Promise((resolve,reject)=>{
    setTimeout(reject,7000,"third");
})
Promise.all([Promise2,Promise3,Promise4]).then((values)=>{
    console.log("values");
}).catch((error)=>{
    console.log("error:"+error);
})
