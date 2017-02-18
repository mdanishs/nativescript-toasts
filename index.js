var app = require("application");
var frameModule = require("ui/frame");


/**
 * The time duration for which toast will be displayed on the screen
 * For Android the values will be mapped to Toast.LENGTH_LONG and Toast.LENGTH_SHORT
 * For iOS the values will be mapped to the numeric values of Android enum which are 3.5 for LONG and 2 for SHORT
 */
const DURATION = {
  LONG: "long",
  SHORT: "short"
}
exports.DURATION = DURATION;

const POSITION = {
  TOP: 'top',
  BOTTOM: 'bottom',
  MIDDLE: 'middle'
}
exports.POSITION = POSITION;

/**
 * show - displays the toast for iOS and Android
 *
 * @param  {object} toastObject javascript object with properties text and duration. Duration by default is short for android.
 * @return {void}
 */
exports.show = function (toastObject) {
  var duration;
  if (app.ios) {
    duration = 2.0;
    if (toastObject.duration === DURATION.LONG) {
      duration = 3.5;
    }
    CSToastManager.setDefaultDuration(duration);

    //set position if it is in the object
    let position = "CSToastPositionBottom"; //default position = bottom
    
    if (toastObject.position) {
      switch (toastObject.position) {
        case POSITION.TOP:
          position = "CSToastPositionTOP";
          break;
        case POSITION.MIDDLE:
          position = "CSToastPositionCenter";
          break;
      }
    }

    CSToastManager.setDefaultPosition(position);

    frameModule.topmost().ios.controller.view.makeToast(toastObject.text);

  } else if (app.android) {
    const Toast = android.widget.Toast;
    duration = Toast.LENGTH_SHORT;
    if (toastObject.duration === DURATION.LONG) {
      duration = Toast.LENGTH_LONG;
    }

    Toast.makeText(app.android.context, toastObject.text, duration).show();
  }
}
