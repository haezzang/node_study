//모듈 추출
var mysql=require('mysql');
var express = require('express');
var ejs=require('ejs')
var http = require('http')
var bodyParser = require('body-parser');
var fs=require('fs')

// 익스프레스 시작
var app = express();

// 바디파서 미들웨어 시작
app.set('port', process.env.port || 4444)
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.listen(4444,function(){
    console.log('웹서버');

})

//데이터베이스와 연결
var client=mysql.createConnection({
    user : 'root',
    password : 'mirim',
    database : 'company'
});


//Delete
app.get('/delete/:id',function(req,res){
  
        client.query('delete from products where id=?', [req.params.id],
        function(){
            res.redirect('/');
        });
    });


//Select
app.get('/',function(req,res){
   
    //파일 읽기
    fs.readFile('list.html','utf-8',function(err,data){
        
        //데이터 베이스 쿼리 실행
        client.query('select * from products', function(err,result){
            //응답
            res.send(ejs.render(data,{
                data : result
            }));
        });
    });

});

//Insert
app.get('/insert/',function(req,res){
    fs.readFile('insert.html','utf-8',function(err,data){
            res.send(data);
    });
});

//Insert
app.post('/insert/',function(req,res){
        var body=req.body;
        client.query('insert into products (name, modelnumber, series) values(?,?,?);', [body.name, body.modelnumber ,body.series],
        function(){
            res.redirect('/');
        });
    });
  


//Update
app.get('/update/:id',function(req,res){
      fs.readFile('update.html','utf-8',function(err,data){
        client.query('select * from products where id=?', [req.params.id],
        function(err,result){
            res.send(ejs.render(data,{
                data : result[0]
            }));
        });
    });
});


//Update
app.post('/update/:id',function(req,res){
    fs.readFile('update.html','utf-8',function(err,data){
        var body=req.body;
      client.query('update products set name=?, modelnumber=?, series=? where id=?', [body.name, body.modelnumber ,body.series, req.params.id],
      function(){
        res.redirect('/');
      });
  });
});



// var server=http.createServer(app).listen(app.get('port'),function(){
//     console.log("익스프레스 웹서버 실행 : "+app.get('port'));
// });
