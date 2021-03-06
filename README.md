# Threema Desktop

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8444aafd57b24f00aa54200d534ae8a6)](https://www.codacy.com/manual/callfeeld/Threema-Desktop?utm_source=github.com&utm_medium=referral&utm_content=callFEELD/Threema-Desktop&utm_campaign=Badge_Grade)
![Build](https://github.com/callFEELD/Threema-Desktop/workflows/Build/badge.svg)

A desktop application for [Threema Web](https://web.threema.ch/) similar to Whatsapp or Telegram.

## Supported Platforms

![Windows](https://cdn0.iconfinder.com/data/icons/logos-brands-2/48/logo_brand_brands_logos_microsoft_windows-48.png)
![Mac OS](https://cdn0.iconfinder.com/data/icons/logos-brands-2/48/logo_brand_brands_logos_apple_ios-48.png)
![Linux](https://cdn0.iconfinder.com/data/icons/logos-brands-2/48/logo_brand_brands_logos_linux-48.png)

## Features

-   **Notifications** | Messages will be displayed as normal operating system notifications
-   **Taskbar Tray** | Closing the application results into minizing Threema Desktop into a Taskbar Tray icon (Just like other apps i.e. discord, skype, telegram desktop)
-   **Full screen** | The applications is [changing some website styles](https://github.com/callFEELD/Threema-Desktop/blob/master/assets/css/override.css) in order to display only the important parts, no more unnecessary background images.
-   **Save images or files** | Files and images can be locally stored
-   **Links will open in the default webbrowser**

![ThreemaDekstopApplication](https://raw.githubusercontent.com/callFEELD/Threema-Desktop/master/docs/img/Threema-Desktop.jpg)

## Installation

### ![Windows](https://cdn0.iconfinder.com/data/icons/logos-brands-2/48/logo_brand_brands_logos_microsoft_windows-48.png)

-   [Windows Installer](https://github.com/callFEELD/Threema-Desktop/releases)
-   [Portable Edition](https://github.com/callFEELD/Threema-Desktop/releases)

### ![Mac OS](https://cdn0.iconfinder.com/data/icons/logos-brands-2/48/logo_brand_brands_logos_apple_ios-48.png) ![Linux](https://cdn0.iconfinder.com/data/icons/logos-brands-2/48/logo_brand_brands_logos_linux-48.png)

Sorry but you have to build it yourself.

Clone the repository

```bash
git clone https://github.com/callFEELD/Threema-Desktop/
```

Install the dependencies

```bash
yarn install
```

Build it for your platform

```bash
yarn dist
```

Look at the created `dist/` folder for the build application.
