const electron = require("electron")
const BrowserWindow = electron.remote.BrowserWindow

const calculateButton = document.getElementById("calculate-button")

calculateButton.addEventListener('click', function(event){
    let win = new BrowserWindow({width:800,height:600})
    win.on('close', function() {win = null})
    win.loadFile("calculation.html")
    win.show()
})