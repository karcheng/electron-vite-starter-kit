import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeAPI({
  // Example of exposing functionality (replace with your actual needs)
  myApiFunction: () => {
    return ipcRenderer.invoke('some-ipc-event');
  },
});
