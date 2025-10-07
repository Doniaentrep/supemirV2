@echo off
echo 🚀 Starting production build optimization...

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist dist rmdir /s /q dist

REM Check if node_modules exists
if not exist node_modules (
    echo 📦 Installing dependencies...
    npm install
)

REM Run linting
echo 🔍 Running linter...
npm run lint

REM Build for production
echo 🏗️  Building for production...
npm run build:prod

REM Check if build was successful
if exist dist (
    echo ✅ Build completed successfully!
    echo 📁 Files ready for deployment in 'dist' folder
    echo.
    echo 🌐 Ready to deploy to Hostinger!
    echo 📖 See DEPLOYMENT.md for deployment instructions
) else (
    echo ❌ Build failed!
    pause
    exit /b 1
)

pause