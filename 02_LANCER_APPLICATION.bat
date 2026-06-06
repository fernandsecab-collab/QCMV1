@echo off
title QCM Manager EDF SECAB V42
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Installe Node.js LTS depuis https://nodejs.org/
  pause
  exit /b
)
call npm install
call npm start
pause
