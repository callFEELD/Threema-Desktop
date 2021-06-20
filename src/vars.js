/**
 * Variables and Constants
 *
 * @file            src/vars.js
 * @description     This file contains all global or constant variables.
 * @author          callFEELD
 */

const path = require("path");

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
let CSS_DARKMODE_FILE =   "assets/css/darkMode.css";
// main window settings
let WINDOW_SETTINGS = {
    title: TITLE,
    icon: THREEMA_ICON,
    width: BROWSER_WIDTH,
    height: BROWSER_HEIGHT,
    minWidth: BROWSER_WIDTH_MIN,
    minHeight: BROWSER_HEIGHT_MIN,
    autoHideMenuBar: true,
    frame: true,
    webPreferences: {
        preload: path.join(__dirname, "renderer.js")
    },
    backgroundColor: "#2A2A2E"
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
module.exports.CSS_DARKMODE_FILE = CSS_DARKMODE_FILE;

module.exports.WINDOW_SETTINGS = WINDOW_SETTINGS;