Array.prototype.myFilter=function(myfun){
    let ans=[];
    for (let i = 0; i < this.length; i++) {
      if(myfun(this[i])){
       ans.push(this[i]);
      }
        
    }
    return ans;
}
let a=[1,2,3];

function isEven(x){
    return x%2 === 0;
}

let filteredArray=a.myFilter(isEven);
console.log(filteredArray);