const electron = require('electron')
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const nativeImage = electron.nativeImage

// Création de variable fenêtre
let win,winCharge

// Création de la fenêtre
function createChargeWindow(){
  winCharge = new BrowserWindow({
    width: 400,
    maxWidth:400,
    minWidth:400,
    height: 200,
    maxHeight: 200,
    minHeight: 200,
    movable: false,
    alwaysOnTop:true,
    frame:false,
    icon: path.join(__dirname,'src/img/icon.png'),
    show:false,
    transparent :true
  })
  winCharge.loadURL(url.format({
    pathname: path.join(__dirname, 'charge.html'),
    protocol: 'file:',
    slashes: true
  }))
  winCharge.once('ready-to-show', () =>{
    winCharge.show()
  })
  winCharge.on('closed', () => {    winCharge = null  })
}

// FIN FONCTIONS DE L'APPLI
// DEBUT MAIN -> FONCTIONNEMENT DE L'APPLI
//------------------------------------------------------------------------Lancement des fonstions générales de l'appli
app.on('ready', () => { createChargeWindow() })

//Fermeture de toutes les fenetres
app.on('window-all-closed', () => {  if (process.platform !== 'darwin') { app.quit()  }})

// CREAI une fenetre si aucune n'existe
//app.on('activate', () => { if (win === null) { createWindow() }})
