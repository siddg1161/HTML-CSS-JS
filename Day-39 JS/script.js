 class Human{
  age;
  #wt=70;
 constructor(newAge,newWeight)
 {
    this.age=newAge;
    this.#wt=newWeight;
 }
  walking()
  {
    console.log("i walk",this.#wt);
  }
}
let obj=new Human(13,220);
console.log(obj.wt);
obj.walking();



class Human1{
  ag1e=13;
  #wt1=70;

  walking()
  {
    console.log("i walk",this.#wt1);
  }

  get fetchWeight()
  {
    return this.#wt1;
  }
  set modifyWeight(val)
  {
     this.#wt1=val;
  }
}
let obj1=new Human();




function sayName(fname="uday")
{
    console.log("my name is:" ,fname);
}
fname();
