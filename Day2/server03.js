var fs=require('fs');
var http=require('http');

http.createServer(function (request,response){

    fs.readFile('./cake.jpg', function(error, data){
        
        response.writeHead(200,{'Content-Type' : 'image/jpg'});

        
        response.end(data);
    });
}).listen(4444,function(){
    console.log('4444번 포트에서 대기중')
});