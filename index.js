const { app, BrowserWindow, globalShortcut } = require('electron')
const url = require('url'),
	  path = require('path')

let mainWindow

let boot = () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		minWidth: 300,
		minHeight: 400,
		frame: false,
		show: false,
		webPreferences: {
			nodeIntegration: true
		}
	})

	mainWindow.loadURL(url.format({
		protocol: 'file',
		pathname: path.join(__dirname, 'app/index.html'),
		slashes: true
	}))

	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})

	mainWindow.on('closed', () => {
		mainWindow = null
	})

	globalShortcut.register('F5', () => {
		mainWindow.reload()
	})

	globalShortcut.register('F12', () => {
		mainWindow.webContents.openDevTools()
	})
}

app.on('ready', boot)

app.on('window-all-closed', () => {
	if ( process.platform !== 'darwin' ) {
		app.quit()
	}
})

app.on('activate', () => {
	if ( mainWindow === null ) {
		boot()
	}
})