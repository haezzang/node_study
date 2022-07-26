const fs=require('fs');

setInterval(()=>{
    //unlink 파일삭제
    fs.unlink('./text.txt', (err)=>{
        if(err){
            console.error(err);
        }
    });
},500);

process.on('uncaughtException',(err)=>{
    console.error('예기치 못한 에러',err);
});

setInterval(()=>{
    throw new Error('무한출력!');
},1000);

setTimeout(()=>{
    console.log('실행됩니다');
},2000);