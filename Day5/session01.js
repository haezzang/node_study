var express = require('express');
var http = require('http')
var static = require('serve-static') // 경로 static을 위한 미들웨어
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var router = express.Router();

// 세션 추가
var expressSession = require('express-session')

// 익스프레스 시작
var app = express();

// 바디파서 미들웨어 시작
app.set('port', process.env.port || 4444)
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cookieParser())

// static 미들웨어 사용 media추가
app.use('/media', static(path.join(__dirname,'media')));
// 세션 사용하기
app.use(expressSession({
    secret : 'meLLong',
    resave : true,
    saveUninitialized : true 
}));

app.use('/', router);


// app.all('*', function(req,res){
//     res.status(404).send("<h1>요청하신 페이지가 없습니다");
// });


//1.로그인 라우터
router.route('/process/login/').post(function(req,res){
    console.log('/process/login/ 라우팅 함수에서 받음');

    var paramId = req.body.id || req.query.id;
    var paramPw = req.body.password || req.query.password;

    console.log('요청 파라미터'+paramId+": "+paramPw);

    if(req.session.user){
        console.log('이미 로그인한 상태');
        res.redirect('/media/score.html');
    }
    else{
        //세션저장
        req.session.user={
            id:paramId,
            name:'홍길동',
        };

        res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1>서버에서 로그인');
        res.write('<div>'+paramId+'</div>');
        res.write('<div>'+paramPw+'</div>');
        res.write('<a href="/process/score/">성적확인하기 </a>');
        res.end();

    }

});


//2.로그아웃
router.route('/process/logout/').get(function(req,res){
    console.log('/process/loout/ 라우팅 함수에서 받음');


    if(req.session.user){
        console.log('로그아웃합니다');
        req.session.destroy(function(err){
            if(err){
                throw err;
            }
            console.log('세션을 삭제하고 로그아웃 되었습니다');
            res.redirect('/media/login.html');
        })
    }
    else{
        console.log('아직 로그인이 되어 있지 않습니다');
        res.redirect('/media/login.html');
  

    }

});


//3. 성적확인
router.route('/process/score/').get(function(req,res){
    console.log('/process/score/ 라우팅 함수 호출됨');



    if(req.session.user){
            res.redirect('/media/score.html');
    }
    else{
        res.redirect('/media/login.html');
    }

});

var server=http.createServer(app).listen(app.get('port'),function(){
    console.log("익스프레스 웹서버 실행 : "+app.get('port'));
});