//arguments : object of all the  arguments that we get
function add(a,b){
    //console.log(arguments);
}
add(2,3);



//question: function that takes n arguments and adds them alltogether and returns the sum



function nSum(){
    let sum=0;
    for(let x in arguments){
        sum+=arguments[x];
    }
    return sum;
}
//   console.log(nSum(1,2,3,4,5,6,7))
//   console.log(nSum(1,2,3,7))


  //addition multiplication on the basis of m/a as first argument

  function nCal(){
      if(arguments[0]=='m'){
          let product=1;
          for(let index=1;index<arguments.length;index++){
              product*=arguments[index];
              
          }
     return product;

      }
      if(arguments[0]=='a'){
        let sum=0;
        for(let index=1;index<arguments.length;index++){
            sum+=arguments[index];
           
        }
      return sum;
      }
  }


  console.log(nCal('a',1,2,3,4,5));
  console.log(nCal('m',1,2,3,4,5));