const fs=require('fs');

fs.readFile('./Day2/app01.js',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});


//promises 속성 require(변수no fs)
const fs2=require('fs').promises;
fs2.readFile('./Day2/app01.js')
.then((data)=>{
    console.log(data);
    console.log(data.toString());
})
.catch((err)=>{
    console.error(err);
});