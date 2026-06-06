const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('qcmDesktop', {
  saveFile: (defaultPath, content) => ipcRenderer.invoke('save-file', defaultPath, content),
  savePdf: (defaultPath, html) => ipcRenderer.invoke('save-pdf', defaultPath, html),
  isDesktop: true
});
