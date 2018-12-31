const electron = require( 'electron' ),
	  url = require( 'url' ),
	  path = require( 'path' )

const = { app, BrowserWindow, globalShortcut } = require('electron')

let MainWindow

const boot = () => {
	MainWindow = new BrowserWindow({
		width: 600,
		height: 700,
		show: false,
		frame: false,
		webPreferences: {
			nodeIntegration: true
		},
		icon: './icon.png'
	})

	MainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'app/index.html')
	}))

	MainWindow.once('ready-to-show', () => {
		MainWindow.show()
	})

	MainWindow.on('closed', () => {
		MainWindow = null
	})

	globalShortcut.register('F5', () => {
		MainWindow.reload()
	})
}

app.on('ready', boot)

app.on('window-all-closed', () => {
	if ( process.platform !== 'darwin' ) {
		app.quit()
	}
})

app.on('activate', () => {
	if ( MainWindow === null ) {
		boot()
	}
})