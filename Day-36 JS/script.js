let obj={
   name:"sid",
   age:60,
   "Date of birth": 23,
   weight:"2ft 6inch",
   greet:function()
   {
    console.log("Hi all");
   }
};
console.log(obj);
obj.greet();

let arr1=[20,20,40,50];
/*
arr1.push(60);
console.log(arr1);


arr1.shift();
console.log(arr1);

arr1.splice(1,2,'sid');
console.log(arr1);
*/

let ansArray=arr1.map((number)=>
{
    return number*number;
}
)
console.log(ansArray);

let ansArray1=arr1.reduce((acc,curr)=>
{
    return acc+curr;
} ,0
)
console.log(ansArray1);

let ansArray2=arr1.find((element)=>
{
    element>50;
} 
)
console.log(ansArray2);

let arr2=[30,5,'sid'];
arr2.forEach((value,index)=>
{
    console.log("Number", value,"Index:",index);
})

for (let value of arr2) {
    console.log(value)
}

let arr3=[10,20,30];
function theSum(arr3)
{
    let len=arr2.length;
    let sum=0;
    for(let index=0;index<len;index++)
    {
        sum=sum+arr3[index];
    }
    return sum;
}
let totalSum=theSum(arr3);
console.log(totalSum);


