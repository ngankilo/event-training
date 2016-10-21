const EventEmitter = require('events');
const System = require('./system');
const FileLog = require('./file-log');
const SlackLog = require('./slack-log');

let event = new EventEmitter();

let system = new System(event);

let fileLog = new FileLog('./system.log');

let slackLog = new SlackLog();

fileLog.listen(event);
slackLog.listen(event);

system.doA();
system.doB();
system.doA();
