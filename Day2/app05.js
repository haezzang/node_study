//이벤트


const EventEmitter=require('events');
const { listeners } = require('process');
const myEvent=new EventEmitter();
myEvent.on('event1',()=>{
    console.log('이벤트1');
});
myEvent.addListener('event2',()=>{
    console.log('이벤트2');
});


myEvent.on('event2',()=>{
    console.log('이벤트2 추가');
});

myEvent.once('event3',()=>{ //한번만 수행
    console.log('이벤트3 ');
});

myEvent.on('event3',()=>{ //한번만 수행
    console.log('이벤트4');
});
myEvent.removeAllListeners('event4');

const listener=()=>{
    console.log('이벤트5');
};




myEvent.on('event5',listener);
myEvent.removeAllListeners('event5',listener);

myEvent.emit('event5');
myEvent.emit();

myEvent.emit('event1'); //이벤트 호츨
myEvent.emit('event2');
myEvent.emit('event3');//once 사용하여 한번만 호출
myEvent.emit('event4');// 제거했기 때문에 실행 안됨
console.log(myEvent.listenerCount('event1'));
console.log(myEvent.listenerCount('event2')); //2개 연결