const ipc = require("electron").ipcRenderer;

class Notification {
    static permission = 'granted';

    constructor(title, ops) {
        ipc.send("notification-show", {title: title, options: ops});
    }
}

Notification.requestPermission = window.Notification.requestPermission;
Notification.close = window.Notification.close;
window.Notification = Notification;