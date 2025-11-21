const EventEmitter = require('events');
const myfirstEventEmitter = new EventEmitter();

//register a listener for an event
myfirstEventEmitter.on('greet',(name)=>{
    console.log(`Hello ${name}, welcome to the event emitter example!`);
});

myfirstEventEmitter.emit('greet','Alice');  