const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;
function quit_app(){
	ipcRenderer.send('quit-app');
}
function min_app(){
	ipcRenderer.send('min-app');
}