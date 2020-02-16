const {BrowserWindow} = require('electron');
const ElectronWindow = require('./ElectronWindow');
const path = require('path')

const defaultConfig = {
	width: 800,
	height: 600,
	webPreferences: {
	  preload: path.join(__dirname, 'preload.js')
	}
}

describe('ElectronWindow', () => {
	let loadFileMock;

	beforeEach(() => {
		loadFileMock = jest.fn();
		BrowserWindow.mockImplementation(() => ({loadFile: loadFileMock}));
	})
	afterEach(() => {
		BrowserWindow.mockReset();
		loadFileMock.mockReset();
	})

	it('should create window with default config', () => {
		const window = new ElectronWindow();
		expect(BrowserWindow).toHaveBeenCalledWith(defaultConfig);
		expect(BrowserWindow).toHaveBeenCalledTimes(1);
		// expect(loadFileMock).toHaveBeenCalledWith('somefile');
	})

	it('should create window with additional config', () => {
		const additionalConfig = {width: 300, height: 500};

		const window = new ElectronWindow(additionalConfig);
		expect(BrowserWindow).toHaveBeenCalledWith({...defaultConfig, ...additionalConfig});
		expect(BrowserWindow).toHaveBeenCalledTimes(1);
	})
})