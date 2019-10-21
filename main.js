/**
 * Main.js
 * 
 * @author callFEELD
 * 
 */

// import of electron modules
const {
    app,
    BrowserWindow,
    BrowserView,
    Tray,
    Menu
} = require('electron');

const fs = require('fs');
const path = require('path');


/* Electron variables */
let window;

/* Settings variables */
const TITLE = "Threema Desktop";
const BROWSER_WIDTH = 600;
const BROWSER_HEIGHT = 600;
const BROWSER_WIDTH_MIN = 400;
const BROWSER_HEIGHT_MIN = 400;
const THREEMA_ICON = "Threema.png";

/* Threema variables */
const THREEMA_WEB_URL = "https://web.threema.ch";


/* Global variables */
// windows tray icon/object
let tray = null;
// main window
let window = null;
// Browserviewer for Web.Threema.Ch
let browserView = null;

/**
 * This function will create the Tray at the windows
 * task bar.
 */
function createTray() {
    tray = new Tray(THREEMA_ICON)
    const contextMenu = Menu.buildFromTemplate([{
            label: 'Open Threema',
            click: function () {
                window.show();
            }
        },
        {
            type: 'separator'
        },
        {
            label: 'Exit',
            click: function () {
                app.isQuiting = true;
                app.quit();
            }
        }
    ])
    tray.setToolTip(TITLE);
    tray.setContextMenu(contextMenu);
}

/**
 * This fucntion creates the electron window and the webview
 * to the Threema Web site.
 */
function createWindow() {
    // creating the main window
    window = new BrowserWindow({
        title: TITLE,
        width: BROWSER_WIDTH,
        height: BROWSER_HEIGHT,
        minWidth: BROWSER_WIDTH_MIN,
        minHeight: BROWSER_HEIGHT_MIN,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Creating the web view with the Threema web url
    browserView = new BrowserView();
    window.setBrowserView(browserView);
    browserView.setBounds({
        x: 0,
        y: 0,
        width: BROWSER_WIDTH - 20,
        height: BROWSER_HEIGHT - 38
    });

    // autoresize that the browserview fills the main window
    browserView.setAutoResize({
        width: true,
        height: true
    });
    browserView.webContents.loadURL(THREEMA_WEB_URL);

    filePath = path.join(__dirname, 'assets/css/override.css');
    insertCSS = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });

    let contents = browserView.webContents;
    contents.on('did-finish-load', function () {
        contents.insertCSS(insertCSS);
    });

    window.on('minimize', function (event) {
        event.preventDefault();
        window.hide();
    });

    window.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault();
            window.hide();
        }

        return false;
    });

    createTray();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});