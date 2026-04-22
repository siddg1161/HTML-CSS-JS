/*
async function getData() {
    setTimeout(function() {
           console.log("i am inside set timeout block")
    },3000);
}
getData();
*/



//fetch api
async function getData1() {

    //get request --> async
    let response= await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    //pass json data --> async
    let data=await response.json();  
    console.log(data);
}
getData1();
