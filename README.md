# nativescript-toasts


This plugin provides a common API for android and iOS to show toast notifications in your NativeScript applications.


### Installation
> tns plugin add nativescript-toasts

### How to use
```
var nstoasts = require("nativescript-toasts");
var options = {
	text: "Hello World",
    duration : nstoasts.DURATION.SHORT,
    position : nstoasts.POSITION.TOP //optional
}
nstoasts.show(options);
```


#### This plugin uses third party libraries for iOS
The plugin uses a pod created by Charles Scalesse to display toasts on iOS
> https://cocoapods.org/pods/Toast

### Typescript users
```
import * as Toast from 'nativescript-toasts';

let toastOptions:Toast.ToastOptions = {text: "Hello World", dutation: Toast.DURATION.SHORT};
Toast.show(toastOptions);
```
