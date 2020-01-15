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
exports.THREEMA_WEB_URL = "https://web.threema.ch";


/**
 * Window Settings variables 
 */
TITLE =               "Threema Desktop";
BROWSER_WIDTH =       600;
BROWSER_HEIGHT =      600;
BROWSER_WIDTH_MIN =   400;
BROWSER_HEIGHT_MIN =  400;
THREEMA_ICON =        "assets/img/Threema.png";
CSS_OVERRIDE_FILE =   "assets/css/override.css";
// main window settings
exports.WINDOW_SETTINGS = {
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
exports.BROWSER_VIEW_BOUNDS = {
    x: 0,
    y: 0,
    width: BROWSER_WIDTH - 20,
    height: BROWSER_HEIGHT - 34
};
// browser view auto resize settings
exports.BROWSER_VIEW_AUTO_RESIZE = {
    width: true,
    height: true
};


/**
 * Exports
 */
module.exports.TITLE = TITLE;
module.exports.BROWSER_WIDTH = BROWSER_WIDTH;
module.exports.BROWSER_HEIGHT = BROWSER_HEIGHT;
module.exports.BROWSER_WIDTH_MIN = BROWSER_WIDTH_MIN;
module.exports.BROWSER_HEIGHT_MIN = BROWSER_HEIGHT_MIN;
module.exports.THREEMA_ICON = THREEMA_ICON;
module.exports.CSS_OVERRIDE_FILE = CSS_OVERRIDE_FILE;