var app = require("application");

if(app.android){
    module.exports = require("./index.android.js");
}else if(app.ios){
    module.exports = require("./index.android.js");
}