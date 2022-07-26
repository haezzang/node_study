console.time('mirim');
var output=0;

for(var i =1; i<=100; i++){
    output+=i;
}

//process.exit();

console.log('Result : ', output);
console.timeEnd('mirim');