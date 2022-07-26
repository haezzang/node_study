//모듈 추출
var http=require('http');

//서버 생성하고 실행
http.createServer(function(request, response){


    var date=new Date();
    date.setDate(date.getDate()+7);
    //쿠키 입력
response.writeHead(200,{
    'Content-Type' : 'text/html',
    'Set-Cookie' : ['breakfast=toast', 'dinner=chicken']
});
    //쿠키 출력
    response.end('<h1>'+request.headers.cookie + '</h1>');

}).listen(4444,function(){
console.log('4444번 포트에서 대기중')
});

