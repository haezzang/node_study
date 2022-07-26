
const fs = require('fs');
const http =require('http');
http.createServer(function (req,res){

    try{
    fs.readFile('./media/index.html',function(err,data){
        res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
        res.end(data);
  
    });
}
catch(err){
    console.log(err);
    res.writeHead(200,{'Content-Type' : 'text/plain; charset=utf-8'});
    res.end(err.message);
}


}).listen(4444,()=>{
    console.log('4444번 포트에서 서버 대기중....');
});