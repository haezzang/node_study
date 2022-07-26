//path 모듈
const path=require('path')

const string=__filename;

console.log('파일명 : ', path.__filename);
console.log('분리기호 : ', path.sep);
console.log('환경변수 구분자 : ', path.delimiter);

console.log('폴더명 : ', path.dirname(string));
console.log('확장자명 : ', path.extname(string));
console.log('전체파일명 : ', path.basename(string));

console.log('절대경로 : ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute : ', path.isAbsolute('D:\\basic'));

console.log('상대경로 : ', path.relative("d:\basic","d:\\"));
console.log('상대경로 : ', path.relative("d:\basic","d:\\app19"));

