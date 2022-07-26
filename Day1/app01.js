
console.time("전체시간");
console.log("hello world");

var sum=0;
for(i=0; i<10000; i++){
    sum+=i;
}
console.timeEnd("전체시간")
