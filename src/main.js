// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const ElectronWindow = require('./ElectronWindow');

function createWindow () {
  const mainWindow = new ElectronWindow();

  mainWindow.loadFile(path.join(__dirname, 'index.html'))
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
