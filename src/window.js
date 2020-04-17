/**
 * Main window
 *
 * @file            src/window.js
 * @description     The main window will add the Browser View to the
 *                  web.threema.ch website.
 * @author          callFEELD
 * @version         0.2
 */

/**
 * Imports
 */
// import variables
const{
    WINDOW_SETTINGS,
    BROWSER_VIEW_BOUNDS,
    BROWSER_VIEW_AUTO_RESIZE,
    THREEMA_WEB_URL,
    CSS_OVERRIDE_FILE
} = require('./vars.js');

// import of electron modules
const {
    app,
    BrowserWindow,
    BrowserView,
    shell,
    Notification,
    ipcMain
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
 * This fucntion adds event listeners
 * @param browserView
 * @return none
 */
function addBrowserViewEvents(browserView) {
    // load the override css file
    filePath = path.join(CSS_OVERRIDE_FILE);
    overrideCSS = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });

    // when the content is loaded, insert the override css
    let contents = browserView.webContents;
    contents.on('did-finish-load', function () {
        contents.insertCSS(overrideCSS);
    });

    // open links in the default browser
    contents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
        shell.openExternal(url);
    });

    // catches notifications and displays them
    ipcMain.on("notification-show",  function (event, arg) {
        let note = new Notification({icon: path.join("assets/img/threema_128.png")});
        note.title = arg.title;
        note.body = arg.options.body;
        note.show();

        note.on('click', function(){
            window.show();
        });
    });
}

/**
 * This fucntion creates the browser view which displays
 * the Threema Website.
 * @param none
 * @return browserView
 */
function createBrowserView() {
    browserView = new BrowserView({
        webPreferences: {
            preload: path.join(__dirname, "renderer.js")
        }
    });
    browserView.setBounds(BROWSER_VIEW_BOUNDS);
    browserView.setAutoResize(BROWSER_VIEW_AUTO_RESIZE);
    browserView.webContents.loadURL(THREEMA_WEB_URL);

    addBrowserViewEvents(browserView);
    return browserView;
}

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
    broserView = createBrowserView();

    // add the browserview to the window
    window.setBrowserView(browserView);

    // create the tray
    createTray(window);

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
 * This fucntion will show the current window
 * @param none
 * @return none
 */
function showWindow() {
    window.show();
}


/**
 * Exports
 */
module.exports.window = window;
module.exports.createWindow = createWindow;
module.exports.showWindow = showWindow;