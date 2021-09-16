function parentfn(){
    let counter=10;
    return function childfn(){
        counter++;
        console.log(counter);
    }
}
//yaha parent ka counter varible ek closure me pda hai jo ki   simply ek context/scope hai

let fn=parentfn();// yaha parent function child fn return krne ke baad stack se hat ke desroy ho jaana chahiye tha aur uske saath he uska counter variable bhi but couunter still acceessible hai in returned child  function because of the closure
fn();
fn();
fn();


//Example-2


function name1() {
    let name="Abhishek";
    return function name2() {
        console.log(name);
    }
}

let rv=name1();
rv();
