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


/* Electron variables */
let window;

/* Settings variables */
const BROWSER_WIDTH = 800;
const BROWSER_HEIGHT = 600;

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
        width: BROWSER_WIDTH,
        height: BROWSER_HEIGHT
    });
    // autoresize that the browserview fills the main window
    browserView.setAutoResize({
        width: true,
        height: true
    });
    browserView.webContents.loadURL(THREEMA_WEB_URL);


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