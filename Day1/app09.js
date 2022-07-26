//1. 기본 함수
const fs=require('fs'); //파일 읽기
 fs.readFile('./basic/app11.js',function(err,data){
     if(err){
        throw err;
    }
     console.log(data.toString()); //파일내용 읽음
 });


//2. 화살표 함수로 변경
const fs=require('fs'); //파일 읽기
fs.readFile('./basic/app11.js',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data.toString()); //파일내용 읽음
});
