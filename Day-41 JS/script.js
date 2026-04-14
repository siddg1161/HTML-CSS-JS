//spread
let src={
    agr:15,
    ht:23
};

let dest={...src};
console.log(src);
console.log(dest);


//assign
let src1={
    agr1:15,
    ht1:23
};
let dest1=Object.assign({},src1);
console.log(src1);
console.log(dest1);


//iterate
let src2={
    agr2:15,
    ht2:23
};
let dest2={};
for(let key in src2)
{
    let newKey=key;
    let newValue=src2[key];
    dest2[key]=newValue;
}
console.log(src2);
console.log(dest2);
