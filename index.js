'use strict';

const EventEmitter = require('events');

let event = new EventEmitter();

let packageA = {};

packageA.doSomething = (event) => {
     console.log('Do something');
     event.emit('packageA do something');
};


let packageB = {
   response: () => console.log(
        'this is package B, response to do something of packageA'
   )
};



let packageC = {
   response: () => console.log(
       'this is package C, response to do something of packageA'
   )
};


event.on('packageA do something', packageB.response);
event.on('packageA do something', packageC.response);




packageA.doSomething(event);
