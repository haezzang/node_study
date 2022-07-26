
//promise 



const condition=true;

const promise=new Promise((resolve,rejects)=>{
    if(condition) resolve('성공');
    else rejects('실패');
});

promise
.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{
    console.log('무조건');
})



//promises 속성 require(변수no fs)
const fs=require('fs').promises;
console.log('시작');
fs.readFile('./Day2/text.txt')
.then((data)=>{

    console.log('1번', data.toString());
    return fs.readFile('./Day2/text.txt');
})
.then((data)=>{

    console.log('2번', data.toString());
    return fs.readFile('./Day2/text.txt');
})
.then((data)=>{

    console.log('3번', data.toString());
    console.log('끝');
})
.catch((err)=>{
    console.error(err);
});