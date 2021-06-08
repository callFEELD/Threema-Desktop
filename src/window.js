/**
 * Main window
 *
 * @file            src/window.js
 * @description     The main window will add the Browser View to the
 *                  web.threema.ch website.
 * @author          callFEELD
 */

/**
 * Imports
 */
// import variables
const{
    WINDOW_SETTINGS,
    THREEMA_WEB_URL,
    CSS_OVERRIDE_FILE
} = require("./vars.js");

// import of electron modules
const {
    app,
    BrowserWindow,
    shell,
    Notification,
    ipcMain
} = require("electron");

// import Tray
let {createTray} = require("./tray.js");

// path and fs needed for the icon
const fs = require("fs");
const path = require("path");


/**
 * Global variables
 */
// main window object
let window = null;

/**
 * Functions
 */
/**
 * This fucntion adds event listeners
 * @param browserView
 * @return none
 */
function addWindowViewEvents(window) {
    // load the override css file
    let filePath = path.join(CSS_OVERRIDE_FILE);
    let overrideCSS = fs.readFileSync(filePath, {
        encoding: "utf-8"
    });
    // load the dark mode css file
    filePath = path.join(CSS_DARKMODE_FILE);
    let darkModeCSS = fs.readFileSync(filePath, {
        encoding: "utf-8"
    });

    // when the content is loaded, insert the override css
    let contents = window.webContents;
    contents.on("did-finish-load", function () {
        contents.insertCSS(overrideCSS);
        // TODO: temporary:
        contents.insertCSS(darkModeCSS);
    });

    // open links in the default browser
    contents.on("new-window", (event, url, frameName, disposition, options, additionalFeatures) => {
        event.preventDefault();
        shell.openExternal(url);
    });

    // catches notifications and displays them
    ipcMain.on("notification-show",  function (event, arg) {
        let note = new Notification({
            icon: path.join("assets/img/threema_128.png")
        });
        note.title = arg.title;
        note.body = arg.options.body;
        note.show();

        window.flashFrame(true);

        note.on("click", function(){
            window.show();
        });
    });
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

    window.loadURL(THREEMA_WEB_URL);

    addWindowViewEvents(window);

    // create the tray
    createTray(window);

    // prevent the app to close, when the close button is clicked
    // only minimize the application
    window.on("close", function (event) {
        if (!app.isQuiting) {
            event.preventDefault();
            window.hide();
        }
        return false;
    });

    window.on("show", function (event) {
        window.flashFrame(false);
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