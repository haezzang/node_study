//비동기식 방법으로 하되 순서를 유지하려면??

const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');
console.log('시작');

let data='./Day2/text.txt'
fs.readFile(data,(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
    fs.readFile(data,(err,data)=>{
        if(err){
            throw err;
        }
        console.log('2번',data.toString());
        fs.readFile(data,(err,data)=>{
            if(err){
                throw err;
            }
            console.log('2번',data.toString());
            fs.readFile(data,(err,data)=>{
                if(err){
                    throw err;
                }
                console.log('2번',data.toString());
                console.log('끝');
            });
        });
    });
});




