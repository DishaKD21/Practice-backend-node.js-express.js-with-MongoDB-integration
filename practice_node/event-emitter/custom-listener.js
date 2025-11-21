const EventEmitter = require('events');
class CustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';
    }
    greet(name) {
        this.emit('greet', `${this.greeting}, ${name}!`);
    }
}
const mycustomEmitter = new CustomEmitter();

// Register a listener for the 'greet' event
mycustomEmitter.on('greet', (message) => {
    console.log(message);
});

mycustomEmitter.greet('Alice'); // Outputs: Hello, Alice!