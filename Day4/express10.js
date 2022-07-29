var express=require('express');
var http=require('http');
var static=require('serve-static'); //경로 static를 위한 미들웨어
var path=require('path');
var bodyParser =require('body-parser');
var cookieParser = require('cookie-parser');


//익스프레스 시작
var app =express();
var router=express.Router(); //라우터 시작할 때 위보다 선언
app.set('port', process.env.port || 4444);
app.use(static(path.join(__dirname,'media')));

//bodayparser 미들웨어 사용
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser());//쿠키설정
app.use('/',router);
router.route('/process/setUserCookie').get(function(req,res){
    console.log('/process/setUserCookie 라우팅 함수호출');
    res.cookie('use',{
        id : 'hong',
        name : '홍길동'
    });

    res.redirect('/process/showCookie');
});

router.route('/process/ShowCookie').get(function(req,res){
    console.log('/process/ShowCookie 라우팅 함수호출');
    res.send(req.cookies);
});
    

//라우터 사용, 라우터를 사용할 때는 use 미들웨어를 사용안함

router.route('/process/login/:name').post(function(req,res){
    console.log('/process/login/:name 라우팅 함수에서 받음');

    var paramName=req.params.name;
    var paramId=req.query.id || req.body.id;
    var paramPw=req.query.password || req.body.password;
    res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>서버에서 로그인');
    res.write('<div>'+paramName+'</div>');
    res.write('<div>'+paramId+'</div>');
    res.write('<div>'+paramPw+'</div>');
    res.end();
});



app.all('*', function(req,res){
    res.status(404).send("<h1>요청하신 페이지가 없습니다");
});
//미들웨어 사용
app.use(function(req,res,next){

    console.log('첫번째 미들웨어\n');

    //데이터를 주고 받을 수 있게 get,post방식 사용
    var userAgent=req.header('User-Agent');
    var paramPw=req.body.password;
    var paramId=req.body.id;
    res.send('<h1>서버에서 응답한 결과</h1>'+userAgent+'<h1>paramId</h1>'+paramId+'<h1>paramPw</h1>'+paramPw);

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


