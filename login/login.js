const electron = require('electron')
const BrowserWindow = require('electron').remote.BrowserWindow;
const remote = require('electron').remote;
const path = require('path')
const url = require('url');
const app = require('electron').remote.app;
const nativeImage = electron.nativeImage;

const btnSubmitLogin = document.getElementById('btn-submit-login');
var winCharge = remote.getCurrentWindow();

const btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', function (event) {
    var window = remote.getCurrentWindow();
    app.quit();
})

btnSubmitLogin.addEventListener('click', function (event) {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if(password == "" || login  == "" ){
        alert('Les deux champs doivent être remplis !','Erreur de champs');
        //swal("L'alcool s'est mauvais !", "Les deux champs doivent être remplis, pas ton verre !", "error");
    }else{
        if(login == 'Didier' && password == '1234'){
            //alert('Vous allez être redirigé vers votre session','Bienvenu Didier !');
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
                pathname: path.join(__dirname, '../games/index.html'),
                protocol: 'file:',
                slashes: true
              }))
            
            // Emitted when the window is closed.
            newWin.on('closed', () => {    newWin = null  })
            winCharge.close();
            //swal("Hello world!");
        }else{
            alert('Login / Mot de passe invalides','Login ou mot de passe faux. Veuillez réessayer.');
            //swal("Bien essayé mais Simone veille", "La combinaison secrête entrée n'est pas la bonne !", "warning");
        }
    }
})