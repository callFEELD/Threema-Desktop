/**
 * Tray Icon 
 * 
 * @file            src/tray.js
 * @description     The tray icon is used to minimize the window on exit click,
 *                  instead of closing the window. With the tray it is possible
 *                  to exit the application.
 * @author          callFEELD
 */


/**
 * Imports
 */
 // import variables
const{
    TITLE,
    THREEMA_ICON
} = require("./vars.js");

// import of electron modules
const {
    app,
    Tray,
    Menu
} = require("electron");


/**
 * Global variables
 */
// tray object
let tray = null;


/**
 * Functions
 */

/**
 * This function will create the Tray at the windows
 * task bar. This is also working with linux, however there
 * are limitations (https://electronjs.org/docs/api/tray)
 * @param window The electron js window, that should be minimized
 * or maximaized on click
 * @return none
 */
function createTray(window) {
    // The context menu is containing displayed menu
    // when clicking on the Tray.
    const contextMenuTemplate = [
        {
            label: "Open Threema",
            click: function () {
                window.show();
            }
        },
        {
            type: "separator"
        },
        {
            label: "Exit",
            click: function () {
                app.isQuiting = true;
                app.quit();
            }
        }
    ];

    // create tray and add context menu
    tray = new Tray(THREEMA_ICON);
    tray.setToolTip(TITLE);
    const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);
    tray.setContextMenu(contextMenu);

    // add the onclick event, not available on linux
    // on click -> show or hide the window
    tray.on("click", () => {
        window.isVisible() ? window.hide() : window.show()
    });
}


/**
 * Exports
 */
module.exports.createTray = createTray;