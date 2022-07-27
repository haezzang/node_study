//모듈 추출
var http=require('http');
var fs=require('fs');
var url=require('url');


//서버 생성하고 실행
http.createServer(function(request, response){
    var pathname=url.parse(request.url).pathname; //url 변수선언
    if(pathname=='/'){ //루트
    fs.readFile('index.html',function(err,data){
        //응답을 합니다
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.end(data);
    });
}
else if(pathname=='/1'){
    fs.readFile('1.html',function(err,data){
        //응답함
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.end(data);
    });
}
else if(pathname=='/2'){
    fs.readFile('2.html',function(err,data){
        //응답함
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.end(data);
    });
}
else if(pathname=='/3'){
    fs.readFile('3.html',function(err,data){
        //응답함
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.end(data);
    });
}


}).listen(4444,function(){
console.log('4444번 포트에서 대기중')
});

