function queue(){
    let arr=[];


    return function(op,value){
        if(op ==='insert'){
            arr.push(value);
        }
        else if(op === "out"){
            arr.shift();
        }
        else if(op === 'show'){
           console.log(arr);
        }
    }



}


// fifo nature of the queue


let f =queue();
  f('insert',2);
  f('insert',3);
  f('insert',24);
  f('insert',32);
  f('insert',98);
  f('insert',1);
  f('insert',23);
  f("show");
  f("out");
  f("show");