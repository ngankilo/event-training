const System = function (event) {
    this.event = event;
};

System.prototype.doA = function () {
    console.log('DoA');
    this.event.emit('system.doA');
};

System.prototype.doB = function () {
     console.log('DoB');
     this.event.emit('system.doB');
};

module.exports = System;
