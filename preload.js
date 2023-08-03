const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('API', {
    setName: (args) => {
        ipcRenderer.invoke('set-name', args)
    }
})

