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
  CENTER: 'center'
}
exports.POSITION = POSITION;

/**
 * show - displays the toast for iOS and Android
 *
 * @param  {object} toastObject javascript object with properties text and duration. Duration by default is short for android.
 * @return {void}
 */
exports.show = function (toastObject) {

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
      case POSITION.CENTER:
        position = "CSToastPositionCenter";
        break;
    }
  }

  CSToastManager.setDefaultPosition(position);

  if (toastObject.title) {
    let image = null;
    if (toastObject.image) {
      var image = toastObject.image
    }
    frameModule.topmost().ios.controller.view.makeToastDurationPositionTitleImageStyleCompletion(toastObject.text, duration, position, toastObject.title, image, CSToastManager.sharedStyle(), () => { });
  } else {
    frameModule.topmost().ios.controller.view.makeToast(toastObject.text);
  }

}
