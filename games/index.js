const electron = require('electron')
const BrowserWindow = require('electron').remote.BrowserWindow;
const remote = require('electron').remote;
const path = require('path')
const url = require('url');
const app = require('electron').remote.app;
const nativeImage = electron.nativeImage;

var winCurrent = remote.getCurrentWindow();

const btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', function (event) {
    var window = remote.getCurrentWindow();
    app.quit();
})

const btnNewGame = document.getElementById('newGame');
btnNewGame.addEventListener('click', function (event) {
    let newWin = new BrowserWindow({
        icon: path.join(__dirname,'../src/img/icon.png'),
        titleBarStyle : 'hidden',
        width: 800,
        maxWidth:800,
        minWidth:800,
        height: 600,
        maxHeight: 600,
        minHeight: 600,
        movable: true,
        alwaysOnTop:false,
        frame:true
    })
    
    newWin.loadURL(url.format({
        //pathname: path.join(__dirname, '../games/newGame.html'),
        //pathname: path.join(__dirname, '../games/saveList.html'),
        //pathname: path.join(__dirname, '../games/persoList.html'),
        //pathname: path.join(__dirname, '../games/scenarioList.html'),
        //pathname: path.join(__dirname, '../games/rencontre.html'),
        pathname: path.join(__dirname, '../games/combat.html'),
        protocol: 'file:',
        slashes: true
      }))
    
    // Emitted when the window is closed.
    newWin.on('closed', () => {    newWin = null  })
    winCurrent.close();
    //swal("Hello world!");
})

const btnOldGame = document.getElementById('oldGame');
btnOldGame.addEventListener('click', function (event) {
    let newWin = new BrowserWindow({
        icon: path.join(__dirname,'../src/img/icon.png'),
        titleBarStyle : 'hidden',
        width: 800,
        maxWidth:800,
        minWidth:800,
        height: 600,
        maxHeight: 600,
        minHeight: 600,
        movable: true,
        alwaysOnTop:false,
        frame:true
    })
    
    newWin.loadURL(url.format({
        pathname: path.join(__dirname, '../games/oldGame.html'),
        protocol: 'file:',
        slashes: true
        }))
    
    // Emitted when the window is closed.
    newWin.on('closed', () => {    newWin = null  })
    winCurrent.close();
    //swal("Hello world!");
})