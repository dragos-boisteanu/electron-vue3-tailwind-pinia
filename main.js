const { app, BrowserWindow } = require('electron')
const path = require('path')

let appPath = ''

if (process.env.mode === 'dev') {
	appPath = 'http://localhost:3000/'
} else {
	appPath = `file://${__dirname}/index.html`
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	})

	win.loadURL(appPath)

	if (process.env.mode === 'dev') {
		win.webContents.openDevTools()
	}
}
