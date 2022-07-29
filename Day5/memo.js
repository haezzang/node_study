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
app.use('/', router);


// app.all('*', function(req,res){
//     res.status(404).send("<h1>요청하신 페이지가 없습니다");
// });


//1.로그인 라우터
router.route('/process/form/').post(function(req,res){
    console.log('메모장 진입');

    var paramWriter = req.body.writer || req.query.writer;
    var paramDate = req.body.date || req.query.date;
    var paramStory = req.body.story || req.query.story;



        res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1>메모가 저장되었습니다!</h1>');
        res.write('<a href="/process/form/">다시작성하기 </a>');
        res.end();



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



router.route('/process/form/').get(function(req,res){
    console.log('/process/form/ 라우팅 함수 호출됨');
    res.write('<h1>메모가 저장되었습니다!</h1>');



});

var server=http.createServer(app).listen(app.get('port'),function(){
    console.log("익스프레스 웹서버 실행 : "+app.get('port'));
});