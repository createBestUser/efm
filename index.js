const { app, BrowserWindow } = require('electron')

let mainWin

const createMainWindow = () => {

    mainWin = new BrowserWindow({
        width: 600,
        minWidth: 500,
        height: 700,
        minHeight: 600,
        show: false,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        },
        transparent: true,
    })

    mainWin.loadFile('./app/index.html')

    // mainWin.webContents.openDevTools()

    mainWin.once('ready-to-show', () => {
        mainWin.show()
    })

    mainWin.on('closed', () => {
        mainWin = null
    })
}

app.on('ready', () => {
    setTimeout(createMainWindow, 100)
    // It's a hack for Linux platform /* add a link to issue */
})

app.on('window-all-closed', () => {
	if ( process.platform !== 'darwin' ) {
		app.quit()
	}
})

app.on('activate', () => {
	if ( mainWin === null ) {
		createMainWindow()
	}
})