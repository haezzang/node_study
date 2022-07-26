//모듈 추출
var http=require('http');

//서버 생성하고 실행
http.createServer(function(request, response){


response.writeHead(302,{'Location' : 'https://e-mirim.hs.kr' });
response.end()
  

}).listen(4444,function(){
console.log('4444번 포트에서 대기중')
});

