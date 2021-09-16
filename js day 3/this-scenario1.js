// node non strict


//1 --> global area
// console.log(this);


//2 --> inside a function
//  function f(){
//      console.log(this);
//  }
//  f();

 //3 -direct function inside an object 

//  let obj={
//      fname:"Abhishek",
//      lname:"kumar",
//      fullname:function (){
//          console.log(this.fname+this.lname);// if this is an arrow function it returns empty object
//      }
//  }
//  obj.fullname();

//4: indirect function inside an object
 let obj={
    fname:"Abhishek",
    lname:"kumar",
    fullname:function(){
           function g(){
            console.log(this);
        }
        g();
    }
}
let fn=obj.fullname();

