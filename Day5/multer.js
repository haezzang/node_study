var express = require('express');
var http = require('http')
var static = require('serve-static') // 경로 static을 위한 미들웨어
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var multer = require('multer')
var cors = require('cors')
var fs=require('fs')
var router = express.Router();

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


var storage=multer.diskStorage({
    destination :function(req,file,callback){
        callback(null, 'upload')
    },
    filename: function(req,file,callback){
        callback(null, file.originalname+Date.now())
    }
});



var upload=multer({
    storage : storage,
    limits:{
        file:10,
        fileSize:1024*1024*1024
    }
});


router.route('/process/photo').post(upload.array('photo',1),function(req,res){
    console.log('/process/photo 호출됨');
    var files=req.files;
    console.log('=================업로드된 파일 ====================');
    if(files.length>0){
        console.dir(files[0]);
    }
    else {
        console.log('파일이 없습니다');
    }

var originalname='';
var filename='';
var mimetype='';
var size=0;


if(Array.isArray(files)){
    for(var i=0; i<files.length; i++){

        originalname=files[i].originalname;
        filename=files[i].filename;
        mimetype=files[i].mimetype;
        size=files[i].size;
    }
}

res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8' });
res.write('<h1>파일업로드 성공');
res.write('<p> 원본파일 : '+originalname+'</p>');
res.write('<p> 저장파일 : '+filename+'</p>');
res.end();
});



var server=http.createServer(app).listen(app.get('port'),function(){
    console.log("익스프레스 웹서버 실행 : "+app.get('port'));
});
