const { app, BrowserWindow, Menu, shell, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 920,
    minWidth: 1180,
    minHeight: 720,
    title: 'QCM Manager EDF SECAB V42',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'app', 'index.html'));

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  const menu = Menu.buildFromTemplate([
    { label: 'Fichier', submenu: [
      { label: 'Quitter', accelerator: 'Alt+F4', click: () => app.quit() }
    ]},
    { label: 'Affichage', submenu: [
      { role: 'reload', label: 'Recharger' },
      { role: 'togglefullscreen', label: 'Plein écran' },
      { role: 'toggleDevTools', label: 'Outils développeur' }
    ]},
    { label: 'Aide', submenu: [
      { label: 'À propos', click: () => dialog.showMessageBox(mainWindow, {
        type: 'info',
        title: 'QCM Manager EDF SECAB V42',
        message: 'QCM Manager EDF SECAB V42',
        detail: 'Version complète corrigée : onglets remplis, sessions QCM, statistiques, exports, agents, paramètres.'
      })}
    ]}
  ]);

  Menu.setApplicationMenu(menu);
}

ipcMain.handle('save-file', async (event, defaultPath, content) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath,
    filters: [
      { name: 'CSV Excel', extensions: ['csv'] },
      { name: 'Word', extensions: ['doc'] },
      { name: 'Tous les fichiers', extensions: ['*'] }
    ]
  });
  if (result.canceled || !result.filePath) return { canceled: true };
  fs.writeFileSync(result.filePath, content, 'utf8');
  return { canceled: false, filePath: result.filePath };
});


ipcMain.handle('save-pdf', async (event, defaultPath, html) => {
  const pdfWindow = new BrowserWindow({ show: false, webPreferences: { contextIsolation: true, nodeIntegration: false } });
  await pdfWindow.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html));
  const pdfData = await pdfWindow.webContents.printToPDF({ printBackground: true, landscape: false, marginsType: 0, pageSize: 'A4' });
  const result = await dialog.showSaveDialog(mainWindow, { defaultPath, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
  if (result.canceled || !result.filePath) { pdfWindow.close(); return { canceled: true }; }
  fs.writeFileSync(result.filePath, pdfData);
  pdfWindow.close();
  return { canceled: false, filePath: result.filePath };
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
