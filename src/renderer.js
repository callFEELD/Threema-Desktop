const ipc = require("electron").ipcRenderer;

class Notification {
    static permission = "granted";

    constructor(titleName, ops) {
        ipc.send("notification-show", {
            title: titleName,
            options: ops
        });
    }
}

Notification.requestPermission = window.Notification.requestPermission;
Notification.close = window.Notification.close;
window.Notification = Notification;