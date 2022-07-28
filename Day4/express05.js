var express=require('express');
var http=require('http');
var static=require('serve-static'); //경로 static를 위한 미들웨어
var path=require('path');



//익스프레스 시작
var app =express();
app.set('port', process.env.port || 4444);


//static 미들웨어 사용
app.use(static(path.join(__dirname,'media')));


//미들웨어 사용
app.use(function(req,res,next){
;
    console.log('첫번째 미들웨어\n');

    //데이터를 주고 받을 수 있게 get,post방식 사용
    var userAgent=req.header('User-Agent');
    var paramName=req.query.name;
    var paramTel=req.query.tel;
    res.send('<h1>서버에서 응답한 결과</h1>'+userAgent+'<h1>paramName</h1>'+paramName+'<h1>paramTel</h1>'+paramTel);

    req.user='park'
    req.next(); //두번째를 가져옴

});
//미들웨어 사용
app.use(function(req,res,next){
    console.log('두번째 미들웨어_send\n');

    //json 형태로 정의
    var student={name : '홍길동',tel : '010-123-4444'};
    var studentStr=JSON.stringify(student);
    res.send(studentStr);
    res.send('<h1>서버에서 응답한 결과'+req.user+'</h1>');

});



var server=http.createServer(app).listen(app.get('port'),function(){
    console.log("익스프레스 웹서버 실행 : "+app.get('port'));
});


