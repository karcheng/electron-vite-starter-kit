const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeAPI({
  loadExternalComponent: () => {
    return ipcRenderer.invoke('load-external-component');
  },
});
