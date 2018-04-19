const electron = require('electron');
const BrowserWindow = require('electron').remote.BrowserWindow;
const remote = require('electron').remote;
const path = require('path');
const url = require('url');
const nativeImage = electron.nativeImage;

var winCharge = remote.getCurrentWindow();
var changmentPage = function(event){
    let newWin = new BrowserWindow({
        icon: path.join(__dirname,'src/img/icon.png'),
        titleBarStyle : 'hidden',
        width: 800,
        maxWidth:800,
        minWidth:800,
        height: 600,
        maxHeight: 600,
        minHeight: 600,
        movable: true,
        alwaysOnTop:true,
        frame:true
    })
    
    newWin.loadURL(url.format({
        pathname: path.join(__dirname, './login/login.html'),
        protocol: 'file:',
        slashes: true
      }))
    
    // Emitted when the window is closed.
    newWin.on('closed', () => {    newWin = null  })
    winCharge.close();
};

setTimeout(changmentPage, 1000);



