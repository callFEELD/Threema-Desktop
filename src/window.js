/**
 * Main window
 * 
 * @file            src/window.js
 * @description     The main window will add the Browser View to the
 *                  web.threema.ch website.
 * @author          callFEELD
 * @version         0.1
 */

/**
 * Imports
 */
// import variables
const{ 
    WINDOW_SETTINGS,
    BROWSER_VIEW_BOUNDS,
    BROWSER_VIEW_AUTO_RESIZE,
    THREEMA_WEB_URL
} = require('./vars.js');

// import of electron modules
const {
    app,
    BrowserWindow,
    BrowserView
} = require('electron');

// import Tray
let {createTray} = require('./tray.js');

// path and fs needed for the icon
const fs = require('fs');
const path = require('path');


/**
 * Global variables
 */
// main window object
let window = null;
// Browserviewer object for Web.Threema.Ch
let browserView = null;

/**
 * Functions
 */

/**
 * This fucntion creates the electron window and the webview
 * to the Threema Web site.
 * @param none
 * @return none
 */
function createWindow() {
    // creating the main window
    window = new BrowserWindow(WINDOW_SETTINGS);

    // Creating the web view with the Threema web url
    browserView = new BrowserView();
    browserView.setBounds(BROWSER_VIEW_BOUNDS);
    browserView.setAutoResize(BROWSER_VIEW_AUTO_RESIZE);
    browserView.webContents.loadURL(THREEMA_WEB_URL);

    // add the browserview to the window
    window.setBrowserView(browserView);

    // create the tray
    createTray(window);

    // load the override css file
    filePath = path.join(__dirname, '../assets/css/override.css');
    overrideCSS = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });

    // when the content is loaded, insert the override css
    let contents = browserView.webContents;
    contents.on('did-finish-load', function () {
        contents.insertCSS(overrideCSS);
    });

    // prevent the app to close, when the close button is clicked
    // only minimize the application
    window.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault();
            window.hide();
        }
        return false;
    });
}


/**
 * Exports
 */
module.exports.window = window;
module.exports.createWindow = createWindow;