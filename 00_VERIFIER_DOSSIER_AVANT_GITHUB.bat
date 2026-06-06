@echo off
title Verification QCM Manager EDF SECAB V42
cd /d "%~dp0"
node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('package.json OK')"
node --check main.js
node --check preload.js
node --check app\app.js
echo.
echo TOUT EST OK.
pause
