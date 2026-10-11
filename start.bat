@echo off
TITLE Aegis Earth Multi-Disaster Command Center
color 0B
echo =====================================================================
echo    AEGIS EARTH - MULTI-DISASTER AI COMMAND CENTER
echo    STARTING FULLSTACK SYSTEM (BACKEND + FRONTEND)
echo =====================================================================
echo.

set "NODE_CMD=node"

REM Check if 'node' is available in system PATH
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Looking for installed Node.js runtime...
    if exist "C:\Users\Pv Harika\AppData\Local\ms-playwright-go\1.57.0\node.exe" (
        set "NODE_CMD=C:\Users\Pv Harika\AppData\Local\ms-playwright-go\1.57.0\node.exe"
        echo [OK] Detected Node.js in Local AppData.
    ) else if exist "C:\Program Files\nodejs\node.exe" (
        set "NODE_CMD=C:\Program Files\nodejs\node.exe"
        echo [OK] Detected Node.js in Program Files.
    ) else (
        echo [ERROR] Could not find Node.js. Please ensure Node is installed.
        pause
        exit /b 1
    )
) else (
    echo [OK] Using system Node.js from PATH.
)

echo.
echo [1/2] Launching Aegis Express Backend on Port 5000...
start "Aegis Backend Server (Port 5000)" cmd /k ""%NODE_CMD%" server/index.js"

echo [2/2] Launching Vite Frontend on Port 3000...
start "Aegis Frontend Dev Server (Port 3000)" cmd /k ""%NODE_CMD%" node_modules/vite/bin/vite.js --port 3000"

echo.
echo =====================================================================
echo    ALL SYSTEMS OPERATIONAL!
echo    Frontend URL: http://localhost:3000
echo    Backend API:  http://localhost:5000/api
echo =====================================================================
echo.
timeout /t 3 >nul
start http://localhost:3000
echo Application launched in browser. You can minimize this window.
