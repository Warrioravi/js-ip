//two types of converions: one data type to another 

//implicit vs explicit

//implicit-> coversions that occur on its own
//explicit-> conversions that we do explicitly

//alert implicit conversion krta hai sabkuch ko string me 

//String(obj)

//let n=10;
//alert(n); alert is not defined inside node js
let ans=typeof typeof typeof typeof true; //important interview question hai ye
console.log(ans);



//jab object ko string me convert krne ka try kartenge to [obj obj] likha hua aata hai
let obj={key:1};
console.log(String(obj));//iska output obj obj aayega

//Number conversions

let s="10";
console.log(s+2);
console.log(Number(s)-2);
console.log(s-2);
s="abc";
//kisi v non number value pe mathematical operation karne se NaN aata hai
console.log(Number("abc")+2);
console.log(s+2);
console.log(s-2);

//undefined aur nan ka logic
 console.log(Number(undefined)); 
//golden rule :- undefined+any mathematical operation= NaN

//Null ka logic
console.log(Number(null));//zero


//true false ka logic

console.log(Number(true));//vs Number("true")-->returns NaN
console.log(Number(false));
console.log(Number("true"));

///typecasting of untrimmed//whitespaced string : automatically removes spaces
  let a="   123   ";
  console.log(Number(a));






