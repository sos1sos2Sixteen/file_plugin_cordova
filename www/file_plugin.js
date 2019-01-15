var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'file_plugin', 'coolMethod', [arg0]);
};

exports.echor = function (str, success) {
    exec(
        success,
        ()=>{console.log("error calling echo!")},
        "Echo",
        "echo"
        [str]
    );
}