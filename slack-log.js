const webhookUrl = "https://hooks.slack.com/services/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";
const request = require('request');

const SlackLog = function () {
  
}

SlackLog.prototype.listen = function (event) {
    event.on('system.doA', function () {
        request.post(webhookUrl, {form: {payload: JSON.stringify({text: "system has done A"})}});
    });
     event.on('system.doB', function () {
        request.post(webhookUrl, {form: {payload: JSON.stringify({text: "system has done B"})}});
    });
};



module.exports = SlackLog;
