cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/com.matd.coolplugin/www/CoolPlugin.js",
        "id": "com.matd.coolplugin.CoolPlugin",
        "pluginId": "com.matd.coolplugin",
        "clobbers": [
            "CoolPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "id": "cordova-plugin-globalization.GlobalizationError",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "id": "cordova-plugin-globalization.globalization",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/com.rahulrav.cordova.amazon.plugin.AmazonInAppPurchasing/www/amazonInApp.js",
        "id": "com.rahulrav.cordova.amazon.plugin.AmazonInAppPurchasing.AmazonInAppPurchasing",
        "clobbers": [
            "AmazonInAppPurchasing"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.appsflyer.phonegap.plugins.appsflyer": "4.0",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-inappbrowser": "1.5.0",
    "com.red_folder.phonegap.plugin.backgroundservice": "2.0.0",
    "com.matd.coolplugin": "0.2.11",
    "cordova-plugin-globalization": "1.0.6",
    "cordova-plugin-splashscreen": "4.0.2",
    "com.rahulrav.cordova.amazon.plugin.AmazonInAppPurchasing": "2.3.1"
}
// BOTTOM OF METADATA
});