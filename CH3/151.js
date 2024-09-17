// Create an event emitter instance and register a couple of callbacks.

const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Registering callbacks for the 'greet' event
myEmitter.on('greet', () => {
    console.log('Hello!');
});

myEmitter.on('greet', () => {
    console.log('world!');
});

// Emitting the 'greet' event
myEmitter.emit('greet');
