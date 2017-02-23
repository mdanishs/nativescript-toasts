var nstoasts = require("nativescript-toasts");
var ImageModule = require("ui/image");
var ImageSourceModule = require("image-source");

function onNavigatingTo(args) {


}
exports.onNavigatingTo = onNavigatingTo;

exports.onTopNotifTap = function () {
    var options = {
        text: "Toast on Top",
        duration: nstoasts.DURATION.SHORT,
        position: nstoasts.POSITION.TOP
    }
    nstoasts.show(options);
}

exports.onCenterNotifTap = function () {
    var options = {
        text: "Toast in center",
        duration: nstoasts.DURATION.SHORT,
        position: nstoasts.POSITION.CENTER
    }
    nstoasts.show(options);
}

exports.onBottomNotifTap = function () {
    var options = {
        text: "Toast at bottom",
        duration: nstoasts.DURATION.SHORT,
        position: nstoasts.POSITION.BOTTOM //the default option is center; you can easily omit this
    }
    nstoasts.show(options);
}

exports.onTitleNotifTap = function () {    
    var options = {
        text: "Notification long description",
        duration: nstoasts.DURATION.SHORT,
        position: nstoasts.POSITION.BOTTOM, //the default option is center; you can easily omit this
        title: "Notification Title",
        image: UIImage.imageNamed('notif')
    }
    nstoasts.show(options);
}