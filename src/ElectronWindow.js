const {BrowserWindow} = require('electron');
const path = require('path')

const defaultConfig = {
	width: 800,
	height: 600,
	webPreferences: {
	  preload: path.join(__dirname, 'preload.js')
	}
}

class ElectronWindow extends BrowserWindow {
	constructor(additionalWindowConfig = {}) {
		super({...defaultConfig, ...additionalWindowConfig});

		// this.loadFile('somefile');
	}
}

module.exports = ElectronWindow