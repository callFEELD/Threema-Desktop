/**
 * Main application
 *
 * @file            main.js
 * @description     The main application will run the electron window and
 *                  connect the various files and functions.
 * @author          callFEELD
 */


/**
 * Imports
 */
// import of electron modules
const {
    app
} = require("electron");

// import window creation and window object
let {
    window,
    createWindow,
    showWindow
} = require("./src/window.js");

// request only a single instance running at the same time
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    // if the app will be opened twice, close it
    app.quit();
} else {
    app.on("second-instance", (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        showWindow();
    });
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.whenReady().then(createWindow);


    // Quit when all windows are closed.
    app.on("window-all-closed", function () {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== "darwin") {
            app.quit();
        }
    });

    app.on("activate", function () {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (window === null) {
            createWindow();
        }
    });
}