import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  myApiFunction: () => {
    return ipcRenderer.invoke('some-ipc-event');
  }
});