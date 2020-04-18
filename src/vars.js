/**
 * Variables and Constants
 *
 * @file            src/vars.js
 * @description     This file contains all global or constant variables.
 * @author          callFEELD
 * @version         0.1
 */


/**
 * Threema variables
 */
let THREEMA_WEB_URL = "https://web.threema.ch";


/**
 * Window Settings variables
 */
let TITLE =               "Threema Desktop";
let BROWSER_WIDTH =       600;
let BROWSER_HEIGHT =      600;
let BROWSER_WIDTH_MIN =   400;
let BROWSER_HEIGHT_MIN =  400;
let THREEMA_ICON =        "assets/img/threema_32.png";
let CSS_OVERRIDE_FILE =   "assets/css/override.css";
// main window settings
let WINDOW_SETTINGS = {
    title: TITLE,
    icon: THREEMA_ICON,
    width: BROWSER_WIDTH,
    height: BROWSER_HEIGHT,
    minWidth: BROWSER_WIDTH_MIN,
    minHeight: BROWSER_HEIGHT_MIN,
    autoHideMenuBar: true,
    webPreferences: {
        nodeIntegration: true
    }

};
// browser view bounds settings
let BROWSER_VIEW_BOUNDS = {
    x: 0,
    y: 0,
    width: BROWSER_WIDTH - 16,
    height: BROWSER_HEIGHT - 34
};
// browser view auto resize settings
let BROWSER_VIEW_AUTO_RESIZE = {
    width: true,
    height: true
};


/**
 * Exports
 */
module.exports.THREEMA_WEB_URL = THREEMA_WEB_URL;
module.exports.TITLE = TITLE;
module.exports.BROWSER_WIDTH = BROWSER_WIDTH;
module.exports.BROWSER_HEIGHT = BROWSER_HEIGHT;
module.exports.BROWSER_WIDTH_MIN = BROWSER_WIDTH_MIN;
module.exports.BROWSER_HEIGHT_MIN = BROWSER_HEIGHT_MIN;
module.exports.THREEMA_ICON = THREEMA_ICON;
module.exports.CSS_OVERRIDE_FILE = CSS_OVERRIDE_FILE;

module.exports.WINDOW_SETTINGS = WINDOW_SETTINGS;
module.exports.BROWSER_VIEW_BOUNDS = BROWSER_VIEW_BOUNDS;
module.exports.BROWSER_VIEW_AUTO_RESIZE = BROWSER_VIEW_AUTO_RESIZE;