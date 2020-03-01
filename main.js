const { app, BrowserWindow,Menu } = require('electron')


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 300,
    height: 250,
    webPreferences: {
      nodeIntegration: true
    },
    icon: 'icon.png'
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)


