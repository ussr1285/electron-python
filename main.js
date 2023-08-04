'use strict';

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');

  ipcMain.handle("set-name", async function setGoal(_event, value){
    console.log(value);
  })

}

app.whenReady().then(async () => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})

//////////////////////////////////////////////////////////////////////////////////