const remote = require('electron').remote;

console.log('win');

(() => {

    let init = () => {
        let win = remote.getCurrentWindow()

        const windowFrame = document.getElementById('frame'),
            controlsBtn = {
                minimize: document.getElementById('winMin'),
                maximize: document.getElementById('winMax'),
                unmaximize: document.getElementById('winUnmax'),
                close: document.getElementById('winClose'),
                reload: document.getElementById('winReload'), // dev buttons
                devTools: document.getElementById('devTools'), // dev buttons

            },
            toggleMaxButton = () => {
                if (win.isMaximized()) {
                    controlsBtn.maximize.style.display = 'none'
                    controlsBtn.unmaximize.style.display = 'flex'
                } else {
                    controlsBtn.unmaximize.style.display = 'none'
                    controlsBtn.maximize.style.display = 'flex'
                }
            }

        toggleMaxButton()

        controlsBtn.minimize.addEventListener('click', () => {
            win.minimize()
        })

        controlsBtn.close.addEventListener('click', () => {
            win.close()
        })

        controlsBtn.maximize.addEventListener('click', () => {
            win.maximize()
            toggleMaxButton()
        })
        controlsBtn.unmaximize.addEventListener('click', () => {
            win.unmaximize()
            toggleMaxButton()
        })

        controlsBtn.reload.addEventListener('click', () => {
            win.reload()
        })

        controlsBtn.devTools.addEventListener('click', () => {
            win.webContents.openDevTools()
        })

        win.on('maximize', () => {
            toggleMaxButton()
        })
        win.on('unmaximize', () => {
            toggleMaxButton()
        })
    }

    document.onreadystatechange = () => {
        if (document.readyState == 'complete') {
            init()
        }
    }

})()