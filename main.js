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
    BrowserView
} = require('electron');

const fs = require('fs');
const path = require('path');


/* Electron variables */
let window;

/* Settings variables */
const BROWSER_WIDTH = 600;
const BROWSER_HEIGHT = 600;
const BROWSER_WIDTH_MIN = 400;
const BROWSER_HEIGHT_MIN = 400;

/* Threema variables */
const THREEMA_WEB_URL = "https://web.threema.ch";


/**
 * This fucntion creates the electron window and the webview
 * to the Threema Web site.
 */
function createWindow() {
    // creating the main window
    window = new BrowserWindow({
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
    let browserView = new BrowserView();
    window.setBrowserView(browserView);
    browserView.setBounds({
        x: 0,
        y: 0,
        width: BROWSER_WIDTH-20,
        height: BROWSER_HEIGHT-38
    });

    // autoresize that the browserview fills the main window
    browserView.setAutoResize({
        width: true,
        height: true
    });
    browserView.webContents.loadURL(THREEMA_WEB_URL);

    filePath = path.join(__dirname, 'assets/css/override.css');
    insertCSS = fs.readFileSync(filePath, {encoding: 'utf-8'});

    let contents = browserView.webContents;
    contents.on('did-finish-load', function () {
        contents.insertCSS(insertCSS);
    });


    // On windows close method
    window.on('closed', function () {
        window = null;
    })
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