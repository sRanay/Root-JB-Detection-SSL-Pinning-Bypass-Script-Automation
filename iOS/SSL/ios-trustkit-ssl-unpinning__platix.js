
//https://github.com/zengfr/frida-codeshare-scripts QQGroup: 143824179 .
//hash:-1578831295 @platix/ios-trustkit-ssl-unpinning
if (ObjC.available) {
    console.log("SSLUnPinning Enabled");
    for (var className in ObjC.classes) {
        if (ObjC.classes.hasOwnProperty(className)) {
            if (className == "TrustKit") {
                console.log("Found our target class : " + className);
                var hook = ObjC.classes.TrustKit["+ initSharedInstanceWithConfiguration:"];
                Interceptor.replace(hook.implementation, new NativeCallback(function() {
                    console.log("Hooking TrustKit");
                    return;
                }, 'int', []));
            }
        }
    }
} else {
    console.log("Objective-C Runtime is not available!");
}
//https://github.com/zengfr/frida-codeshare-scripts QQGroup: 143824179 .
//hash:-1578831295 @platix/ios-trustkit-ssl-unpinning
