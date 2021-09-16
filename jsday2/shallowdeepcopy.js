let obj={
    name:"rahul",
    age:16,
    adddress:{
        city:"delhi",
        pin:201308,
        sector:"17A"
    }
}
//naive way or shallow copy: yha deep copy nahi hui hai just shallow copy hui hai for address because it has just copied the reference.dono ka address same referenec  wala hai
let copyObj = { };
  for(x in obj){
      copyObj[x]=obj[x];
  }

//console.log(copyObj);


//there are two ways for deep copy --->1. recursive way(same as flattening of the object) 2.(sort of hack)JSON stringyfy first and then parse again. This will lead to entirely new object created

let deepCopy=JSON.parse(JSON.stringify(obj));
console.log(deepCopy);


