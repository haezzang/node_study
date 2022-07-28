//익스프레스 객체 생성
var app=express();

//기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);

//익스프레스 서버 시작
http.createSever(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작 함 : '+app.get('port'));
});

