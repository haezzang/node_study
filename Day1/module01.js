// 원의면적
exports.circleArea = function(num){
    return num * num * Math.PI;
}
 
// 절댓값
exports.abs = function(num){
    if(num > 0)
    return num;
    else return -num;
}
 
module.exports = {abs, circleArea};