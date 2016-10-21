const fs = require('fs');

const FileLog = function (fileName) {
   this.fileName = fileName;
}

FileLog.prototype.listen = function (event) {
    let fileName = this.fileName;
    event.on('system.doA', function () {
        fs.appendFileSync(fileName, `${new Date().toUTCString()}: System has done A`)
    });

    event.on('system.doB', function () {
       fs.appendFileSync(fileName, `${new Date().toUTCString()}: System has done B`)
    })
};

module.exports = FileLog;
