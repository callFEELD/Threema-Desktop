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
exports.TITLE =               "Threema Desktop";
exports.BROWSER_WIDTH =       600;
exports.BROWSER_HEIGHT =      600;
exports.BROWSER_WIDTH_MIN =   400;
exports.BROWSER_HEIGHT_MIN =  400;
exports.THREEMA_ICON =        "assets/img/Threema.png";
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