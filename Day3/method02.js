
var http=require('http')
var fs=require('fs');


http.createServer(function(request, response){


    //get
    if(request.method='GET'){
        fs.readFile('test.html', function(error,data){
            response.writeHead(200,{'Content-Type' : 'text/html'});
            response.end(data);
        });
        //post
    }else if(request.method=='POST'){
        request.on('data',function (data){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end('<h1>'+data+'</h1>');
        });
    }

}).listen(4444,()=>{
    console.log('4444번 포트 대기중')
});
