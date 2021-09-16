document.querySelector("button").addEventListener('click',login);


function checklogin(){
    if (sessionStorage.login) {
        window.location-"./home.html";
    }
}
checklogin();





function login(){
 let user=document.querySelector("[type='text']").value;
 let pwd=document.querySelector("[type='password']").value;

 if(user&&pwd){
     alert("Login successful")
     sessionStorage.login = true;
     window.location="./home.html";
 }
 else{
     alert("try again")
 }

 
 




}