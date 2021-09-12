let fs= require("fs");

try{
    fs.readFileSync('this.txt');
} catch(err){
    console.log(err.message);
}
