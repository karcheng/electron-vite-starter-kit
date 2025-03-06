// const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
// const path = require('path');
// const isDev = require('electron-is-dev'); // Optional, for development mode
import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev'; // Optional, for development mode

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800, // Adjust as needed
    height: 600, // Adjust as needed
    frame: false, // Remove the title bar
    transparent: true,
    alwaysOnTop: true, // Optional: keep the window on top
    webPreferences: {
      nodeIntegration: false, // Important for security
      contextIsolation: true, // Required with `nodeIntegration: false`
      preload: path.join(__dirname, 'preload.js'), // Path to your preload script
      sandbox: false, // required for node integration in react
    },
  });

  mainWindow.loadFile('index.html'); // load index.html file and renderer

  // Optional: Open DevTools in development mode
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();

  // Register global shortcut (Ctrl+Space)
  globalShortcut.register('CommandOrControl+Space', () => {
    if (mainWindow) {
      mainWindow.show(); // Show the window if it's hidden
      mainWindow.focus(); // Focus the window
    } else {
      createWindow(); // Re-create if the window was closed
    }
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll(); // Unregister shortcuts on quit
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
